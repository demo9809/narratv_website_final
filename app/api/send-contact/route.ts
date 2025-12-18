export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Pure Telegram Implementation - No Email/Resend Dependencies
    const body = await request.json();
    const { name, email, formType, phone } = body;

    if (!name || !email) {
        return NextResponse.json({ errors: [{ error: 'Name and Email are required' }] }, { status: 400 });
    }

    try {
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
        const telegramChatId = process.env.TELEGRAM_CHAT_ID || '-695246838';

        if (!telegramToken || !telegramChatId) throw new Error('Missing Telegram credentials');

        // Clean phone for link
        const cleanPhone = (formType === 'project' ? body.phone : phone)?.replace(/[^\d+]/g, '') || '';

        const telegramMessage = `
🚀 *New Inquiry Received*
*Type:* ${formType === 'project' ? 'Start a Project' : 'General Inquiry'}
*Name:* ${name}
*Email:* ${email}
${formType === 'project' ? `*Phone:* ${body.phone || 'N/A'}\n*Company:* ${body.company || 'N/A'}\n*Budget:* ${body.budget || 'N/A'}\n*Services:* ${body.services?.join(', ') || 'N/A'}` : `*Phone:* ${phone || 'N/A'}`}
*Message:*
${body.message}

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
            const text = await tgResponse.text();
            throw new Error(`Telegram API Error: ${text}`);
        }

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error('Telegram sending failed:', error);
        return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
    }
}
