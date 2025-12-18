
import { Resend } from 'resend';
import PortfolioAccessEmail from '@/components/emails/PortfolioAccessEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_imm7t67k_88x3hcJ8BvQZDmtYRhpE78jo');

export async function POST(request: Request) {
    try {
        const { name, email } = await request.json();

        const data = await resend.emails.send({
            from: 'Narratv Space <access@updates.narratv.space>',
            to: [email],
            subject: 'Access Granted: Narratv Space Portfolio',
            react: PortfolioAccessEmail({ name }),
        });

        // Notify Admin via Email (Optional, but good for records)
        await resend.emails.send({
            from: 'Narratv Space Website <access@updates.narratv.space>',
            to: ['labeeb@narratv.space'],
            subject: `Portfolio Access Requested: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nThey have been sent the access link.`,
        });

        // Notify Admin via Telegram
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
        const telegramChatId = process.env.TELEGRAM_CHAT_ID;

        if (telegramToken && telegramChatId) {
            const telegramMessage = `
🔐 *Portfolio Access Requested*
*Name:* ${name}
*Email:* ${email}
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

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
