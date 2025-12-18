
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

    const results = {
        telegram: 'skipped',
        email: 'skipped',
        adminEmail: 'skipped',
        errors: [] as any[]
    };

    // 1. PRIORITY: Send Telegram Notification
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
        results.telegram = 'sent';
    } catch (error) {
        console.error('Telegram failed:', error);
        results.telegram = 'failed';
        results.errors.push({ type: 'telegram', error: sanitizeError(error) });
    }

    // 2. SECONDARY: Send Emails (Fire & Forget with timeout)
    try {
        const userEmailPromise = resend.emails.send({
            from: 'Narratv Space <access@updates.narratv.space>',
            to: [email],
            subject: 'Access Granted: Narratv Space Portfolio',
            react: PortfolioAccessEmail({ name }),
        });

        const adminEmailPromise = resend.emails.send({
            from: 'Narratv Space Website <access@updates.narratv.space>',
            to: ['labeeb@narratv.space'],
            subject: `Portfolio Access Requested: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nThey have been sent the access link.`,
        });

        // Race against a 3s timeout
        await Promise.race([
            Promise.all([userEmailPromise, adminEmailPromise]),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Email Timeout')), 3000))
        ]);

        results.email = 'sent';
        results.adminEmail = 'sent';
    } catch (error) {
        console.error('Email sending failed (or timed out):', error);
        results.email = 'failed';
        // Only report email errors if Telegram ALSO failed
        if (results.telegram !== 'sent') {
            results.errors.push({ type: 'email', error: sanitizeError(error) });
        }
    }

    // DECISION:
    if (results.telegram === 'failed' && results.email === 'failed') {
        const msg = results.errors.map(e => e.error).join(', ');
        return NextResponse.json({ error: `All notifications failed: ${msg}` }, { status: 500 });
    }

    return NextResponse.json(results);
}
