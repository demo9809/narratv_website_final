import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/ContactFormEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, formType } = body;

    // Validate required fields to prevent early failures
    if (!name || !email) {
        return NextResponse.json({ errors: [{ error: 'Name and Email are required' }] }, { status: 400 });
    }

    // Helper to sanitize error objects for JSON response
    const sanitizeError = (err: any) => {
        if (err instanceof Error) return err.message;
        if (typeof err === 'object') return JSON.stringify(err, Object.getOwnPropertyNames(err));
        return String(err);
    };

    // Prepare Tasks
    const sendEmail = async () => {
        try {
            await resend.emails.send({
                from: 'Narratv Space Website <access@updates.narratv.space>',
                to: ['labeeb@narratv.space'],
                replyTo: email,
                subject: `New Inquiry: ${name} (${formType === 'project' ? 'Project' : 'General'})`,
                react: ContactFormEmail(body),
            });
            return { status: 'fulfilled', type: 'email' };
        } catch (error) {
            console.error('Email sending failed:', error);
            throw { type: 'email', error: sanitizeError(error) };
        }
    };

    const sendTelegram = async () => {
        try {
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
            return { status: 'fulfilled', type: 'telegram' };
        } catch (error) {
            console.error('Telegram sending failed:', error);
            throw { type: 'telegram', error: sanitizeError(error) };
        }
    };

    // Execute in Parallel
    const results = await Promise.allSettled([sendEmail(), sendTelegram()]);

    // Process Results
    const responseData = {
        email: 'skipped',
        telegram: 'skipped',
        errors: [] as any[]
    };

    results.forEach((result, index) => {
        const type = index === 0 ? 'email' : 'telegram';
        if (result.status === 'fulfilled') {
            // @ts-ignore
            responseData[type] = 'sent';
        } else {
            // @ts-ignore
            responseData[type] = 'failed';
            responseData.errors.push(result.reason);
        }
    });

    // Return success if at least one succeeded
    if (responseData.email === 'failed' && responseData.telegram === 'failed') {
        return NextResponse.json(responseData, { status: 500 });
    }

    return NextResponse.json(responseData);
}
