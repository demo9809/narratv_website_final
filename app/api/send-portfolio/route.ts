
import { Resend } from 'resend';
import PortfolioAccessEmail from '@/components/emails/PortfolioAccessEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_imm7t67k_88x3hcJ8BvQZDmtYRhpE78jo');

export async function POST(request: Request) {
    const { name, email } = await request.json();

    if (!name || !email) {
        return NextResponse.json({ errors: [{ error: 'Name and Email are required' }] }, { status: 400 });
    }

    const sanitizeError = (err: any) => {
        if (err instanceof Error) return err.message;
        if (typeof err === 'object') return JSON.stringify(err, Object.getOwnPropertyNames(err));
        return String(err);
    };

    const sendUserEmail = async () => {
        try {
            await resend.emails.send({
                from: 'Narratv Space <access@updates.narratv.space>',
                to: [email],
                subject: 'Access Granted: Narratv Space Portfolio',
                react: PortfolioAccessEmail({ name }),
            });
            return { status: 'fulfilled', type: 'user_email' };
        } catch (error) {
            console.error('User email failed:', error);
            throw { type: 'user_email', error: sanitizeError(error) };
        }
    };

    const sendAdminEmail = async () => {
        try {
            await resend.emails.send({
                from: 'Narratv Space Website <access@updates.narratv.space>',
                to: ['labeeb@narratv.space'],
                subject: `Portfolio Access Requested: ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n\nThey have been sent the access link.`,
            });
            return { status: 'fulfilled', type: 'admin_email' };
        } catch (error) {
            console.error('Admin email failed:', error);
            throw { type: 'admin_email', error: sanitizeError(error) };
        }
    };

    const sendTelegram = async () => {
        try {
            const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
            const telegramChatId = process.env.TELEGRAM_CHAT_ID || '-695246838';

            if (!telegramToken || !telegramChatId) throw new Error('Missing Telegram credentials');

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
            if (!tgResponse.ok) {
                throw new Error(`Telegram API Error: ${await tgResponse.text()}`);
            }
            return { status: 'fulfilled', type: 'telegram' };
        } catch (error) {
            console.error('Telegram failed:', error);
            throw { type: 'telegram', error: sanitizeError(error) };
        }
    };

    // Execute Parallel
    const results = await Promise.allSettled([sendUserEmail(), sendAdminEmail(), sendTelegram()]);

    const responseData = {
        email: 'skipped',
        adminEmail: 'skipped',
        telegram: 'skipped',
        errors: [] as any[]
    };

    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            // @ts-ignore
            if (result.value.type === 'user_email') responseData.email = 'sent';
            // @ts-ignore
            if (result.value.type === 'admin_email') responseData.adminEmail = 'sent';
            // @ts-ignore
            if (result.value.type === 'telegram') responseData.telegram = 'sent';
        } else {
            // @ts-ignore
            if (result.reason.type === 'user_email') responseData.email = 'failed';
            // @ts-ignore
            if (result.reason.type === 'admin_email') responseData.adminEmail = 'failed';
            // @ts-ignore
            if (result.reason.type === 'telegram') responseData.telegram = 'failed';

            responseData.errors.push(result.reason);
        }
    });

    // If user didn't get email, that's a user-facing error
    if (responseData.email === 'failed') {
        return NextResponse.json(responseData, { status: 500 });
    }

    return NextResponse.json(responseData);
}
