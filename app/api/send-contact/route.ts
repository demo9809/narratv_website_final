import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/ContactFormEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, formType } = body;
    const results = {
        email: 'skipped',
        telegram: 'skipped',
        errors: [] as any[]
    };

    // 1. Send Email Notification
    try {
        await resend.emails.send({
            from: 'Narratv Space Website <access@updates.narratv.space>',
            to: ['labeeb@narratv.space'],
            replyTo: email,
            subject: `New Inquiry: ${name} (${formType === 'project' ? 'Project' : 'General'})`,
            react: ContactFormEmail(body),
        });
        results.email = 'sent';
    } catch (error) {
        console.error('Email sending failed:', error);
        results.email = 'failed';
        results.errors.push({ type: 'email', error });
    }

    // 2. Send Telegram Notification
    try {
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
        const telegramChatId = process.env.TELEGRAM_CHAT_ID || '-695246838';

        if (telegramToken && telegramChatId) {
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

            if (tgResponse.ok) {
                results.telegram = 'sent';
            } else {
                const tgError = await tgResponse.text();
                console.error('Telegram API error:', tgError);
                results.telegram = 'failed';
                results.errors.push({ type: 'telegram', error: tgError });
            }
        }
    } catch (error) {
        console.error('Telegram sending failed:', error);
        results.telegram = 'failed';
        results.errors.push({ type: 'telegram', error });
    }

    // Return success if at least one succeeded, otherwise 500
    if (results.email === 'failed' && results.telegram === 'failed') {
        return NextResponse.json(results, { status: 500 });
    }

    return NextResponse.json(results);
}
