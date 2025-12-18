
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import PortfolioAccessEmail from '@/components/emails/PortfolioAccessEmail';

export async function POST(request: Request) {
    // 1. Initialize Resend inside handler (Safe now that 'output: export' is gone)
    const resend = new Resend(process.env.RESEND_API_KEY || 're_imm7t67k_88x3hcJ8BvQZDmtYRhpE78jo');

    const { name, email, company, phone } = await request.json();

    if (!name || !email) {
        return NextResponse.json({ errors: [{ error: 'Name and Email are required' }] }, { status: 400 });
    }

    const results = {
        telegram: 'skipped',
        email: 'skipped',
        errors: [] as any[]
    };

    // 2. Send Telegram (Priority)
    try {
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
        const telegramChatId = process.env.TELEGRAM_CHAT_ID || '-695246838';

        if (!telegramToken || !telegramChatId) throw new Error('Missing Telegram credentials');

        // Clean phone for link
        const cleanPhone = phone?.replace(/[^\d+]/g, '') || '';

        const telegramMessage = `
🔐 *Portfolio Access Requested*
*Name:* ${name}
*Company:* ${company || 'N/A'}
*Email:* ${email}
*Phone:* ${phone || 'N/A'}

[📞 Click to Call](${'tel:' + cleanPhone})
        `;

        const payload: any = {
            chat_id: telegramChatId,
            text: telegramMessage,
            parse_mode: 'Markdown',
        };

        if (cleanPhone) {
            payload.reply_markup = {
                inline_keyboard: [[
                    { text: `💬 WhatsApp ${name}`, url: `https://wa.me/${cleanPhone.replace(/\D/g, '')}` }
                ]]
            };
        }

        const tgResponse = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!tgResponse.ok) {
            console.error(`Telegram API Error: ${await tgResponse.text()}`);
            // We log but don't crash, so Email can still try
        } else {
            results.telegram = 'sent';
        }

    } catch (error: any) {
        console.error('Telegram failed:', error);
        results.errors.push({ type: 'telegram', error: error.message });
    }

    // 3. Send Email (Secondary - Re-enabled)
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Use default testing domain to ensure delivery if custom domain unverified
            to: [email],
            subject: 'Access Granted: Narratv Space Portfolio',
            react: PortfolioAccessEmail({ name }),
        });
        results.email = 'sent';
    } catch (error: any) {
        console.error('Email failed:', error);
        results.errors.push({ type: 'email', error: error.message });
    }

    // Return success if at least one worked (or generic success to not block user)
    // Client side relies on 200 OK to redirect.
    return NextResponse.json({ success: true, results });
}
