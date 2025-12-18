import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/ContactFormEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, formType } = body;

        // Send notification to the ADMIN (Site Owner)
        // You should ideally use an environment variable for the admin email
        // For now I'll send it to the verified sender email or a hardcoded admin email if you provide one.
        // Assuming access@updates.narratv.space is the sender, we can send TO that email or another verified one.
        // Since I don't know the admin's personal email, I'll send it to 'narratvthoughts@gmail.com' (from screen) or back to the sender just to verify.
        // Actually, it's safer to send TO the verified domain email or the gmail if verified. 
        // Let's send to 'narratvthoughts@gmail.com' but only if verified. 
        // Safest bet: Send to 'access@updates.narratv.space' (which is verified) and maybe BCC the gmail?
        // Let's stick to the verified domain for TO field for now to ensure delivery.

        // 1. Send Email Notification to Admin & User
        const emailData = await resend.emails.send({
            from: 'Narratv Space Website <access@updates.narratv.space>',
            to: ['labeeb@narratv.space'], // Admin Email
            replyTo: email, // Reply to the user
            subject: `New Inquiry: ${name} (${formType === 'project' ? 'Project' : 'General'})`,
            react: ContactFormEmail(body),
        });

        // 2. Send Telegram Notification
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

            await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: telegramMessage,
                    parse_mode: 'Markdown',
                }),
            });
        }

        return NextResponse.json(emailData);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
