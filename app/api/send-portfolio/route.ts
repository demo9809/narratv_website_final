
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Pure Telegram Implementation
    const { name, email, company, phone } = await request.json();

    if (!name || !email) {
        return NextResponse.json({ errors: [{ error: 'Name and Email are required' }] }, { status: 400 });
    }

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
            throw new Error(`Telegram API Error: ${await tgResponse.text()}`);
        }

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error('Telegram failed:', error);
        return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
    }
}
