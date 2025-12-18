
import { Resend } from 'resend';
import PortfolioAccessEmail from '@/components/emails/PortfolioAccessEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_imm7t67k_88x3hcJ8BvQZDmtYRhpE78jo');

export async function POST(request: Request) {
    const { name, email } = await request.json();
    const results = {
        email: 'skipped',
        adminEmail: 'skipped',
        telegram: 'skipped',
        errors: [] as any[]
    };

    // 1. Send Access Email to User
    try {
        await resend.emails.send({
            from: 'Narratv Space <access@updates.narratv.space>',
            to: [email],
            subject: 'Access Granted: Narratv Space Portfolio',
            react: PortfolioAccessEmail({ name }),
        });
        results.email = 'sent';
    } catch (error) {
        console.error('User email failed:', error);
        results.email = 'failed';
        results.errors.push({ type: 'user_email', error });
    }

    // 2. Notify Admin via Email
    try {
        await resend.emails.send({
            from: 'Narratv Space Website <access@updates.narratv.space>',
            to: ['labeeb@narratv.space'],
            subject: `Portfolio Access Requested: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nThey have been sent the access link.`,
        });
        results.adminEmail = 'sent';
    } catch (error) {
        console.error('Admin email failed:', error);
        results.adminEmail = 'failed';
        // We don't fail the request if just admin email fails
    }

    // 3. Notify Admin via Telegram
    try {
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
        const telegramChatId = process.env.TELEGRAM_CHAT_ID || '-695246838';

        if (telegramToken && telegramChatId) {
            const telegramMessage = `
🔐 *Portfolio Access Requested*
*Name:* ${name}
*Email:* ${email}
            `;

            const tgResponse = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: telegramMessage,
                    parse_mode: 'Markdown',
                }),
            });
            if (tgResponse.ok) {
                results.telegram = 'sent';
            } else {
                results.telegram = 'failed';
            }
        }
    } catch (error) {
        console.error('Telegram failed:', error);
        results.telegram = 'failed';
    }

    // Critical failure only if user email failed (since getting access is the point)
    // But for the sake of "submitting form", if telegram works, we can call it a partial success.
    // However, the frontend probably expects 200 OK.

    if (results.email === 'failed') {
        // If the user didn't get the email, it's a problem for them.
        return NextResponse.json(results, { status: 500 });
    }

    return NextResponse.json(results);
}
