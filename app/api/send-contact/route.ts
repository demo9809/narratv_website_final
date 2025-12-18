import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/ContactFormEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, formType } = body;

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
        errors: [] as any[]
    };

    // 1. PRIORITY: Send Telegram Notification
    try {
        // Fallback credentials are meant for debug/test if env vars missing
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
        const telegramChatId = process.env.TELEGRAM_CHAT_ID || '-695246838';

        if (!telegramToken || !telegramChatId) throw new Error('Missing Telegram credentials');

        const telegramMessage = `
🚀 *New Inquiry Received*
*Type:* ${formType === 'project' ? 'Start a Project' : 'General Inquiry'}
*Name:* ${name}
*Email:* ${email}
${formType === 'project' ? `*Phone:* ${body.phone || 'N/A'}\n*Company:* ${body.company || 'N/A'}\n*Budget:* ${body.budget || 'N/A'}\n*Services:* ${body.services?.join(', ') || 'N/A'}` : ''}
*Message:*
${body.message}
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
            const text = await tgResponse.text();
            throw new Error(`Telegram API Error: ${text}`);
        }
        results.telegram = 'sent';
    } catch (error) {
        console.error('Telegram sending failed:', error);
        results.telegram = 'failed';
        results.errors.push({ type: 'telegram', error: sanitizeError(error) });
    }

    // 2. SECONDARY: Send Email (Fire & Forget style with timeout)
    // Only attempt email if we haven't crashed yet.
    try {
        const sendEmailPromise = resend.emails.send({
            from: 'Narratv Space Website <access@updates.narratv.space>',
            to: ['labeeb@narratv.space'],
            replyTo: email,
            subject: `New Inquiry: ${name} (${formType === 'project' ? 'Project' : 'General'})`,
            react: ContactFormEmail(body),
        });

        // Race against a 3s timeout so we don't block the user response
        await Promise.race([
            sendEmailPromise,
            new Promise((_, reject) => setTimeout(() => reject(new Error('Email Timeout')), 3000))
        ]);

        results.email = 'sent';
    } catch (error) {
        console.error('Email sending failed (or timed out):', error);
        results.email = 'failed';
        // We do NOT add this to results.errors if Telegram succeeded, to avoid scaring the user.
        if (results.telegram !== 'sent') {
            results.errors.push({ type: 'email', error: sanitizeError(error) });
        }
    }

    // DECISION: If Telegram worked, we return 200 OK. 
    // We only fail if BOTH fail.
    if (results.telegram === 'failed' && results.email === 'failed') {
        const msg = results.errors.map(e => e.error).join(', ');
        return NextResponse.json({ error: `All notifications failed: ${msg}` }, { status: 500 });
    }

    return NextResponse.json(results);
}
