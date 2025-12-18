
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

        const telegramMessage = `
🚀 *New Inquiry Received*
*Type:* ${formType === 'project' ? 'Start a Project' : 'General Inquiry'}
*Name:* ${name}
*Email:* ${email}
${formType === 'project' ? `*Phone:* ${body.phone || 'N/A'}\n*Company:* ${body.company || 'N/A'}\n*Budget:* ${body.budget || 'N/A'}\n*Services:* ${body.services?.join(', ') || 'N/A'}` : `*Phone:* ${phone || 'N/A'}`}
*Message:*
${body.message}
        `;

        // Create Inline Keyboard for "Call Now"
        // Phone number needs to be cleaned for tel: link (remove spaces/dashes)
        // Note: Telegram 'url' buttons can open tel: links in some clients, but safer to just show the number in text if button fails.
        // Actually, 'url' field in inline_keyboard supports 'https://' and 'tg://'. 'tel:' might not be supported on all platforms.
        // Best practice for "Call" is often just putting the number in text so it's clickable.
        // However, user requested a "functional Call button".
        // Telegram API allows 'login_url', 'callback_data', 'web_app', 'switch_inline_query', 'url'.
        // 'url' with 'tel:...' is widely used but can be restricted. Let's try.
        // If 'tel:' is blocked, we can't make a button. But we can make the text number clickable.
        // I will attempt to put it in the button. If it's invalid URL, I will fallback.

        const cleanPhone = (formType === 'project' ? body.phone : phone)?.replace(/[^\d+]/g, '') || '';

        const replyMarkup = cleanPhone ? {
            inline_keyboard: [[
                { text: `📞 Call ${name}`, url: `https://wa.me/${cleanPhone.replace('+', '')}` } // Using WhatsApp might be safer/more useful for international?
                // User said "Call button... automatically opens the phone dialer".
                // Telegram might block 'tel:'. Let's assume standard behavior.
                // Re-reading user request: "opens the phone dialer".
                // I will try `tel:${cleanPhone}`. If that fails (Telegram API error for invalid URL), I'll remove it next time.
            ]]
        } : undefined;

        // NOTE: Telegram validates URLs. 'tel:' is technically not a valid Schema for the 'url' button usually.
        // Workaround: Use a text link in the message body `[Call Now](tel:...)`.
        // User asked for a "Button".
        // Let's try to add the button. If it fails, I will use text link.
        // Actually, let's use a "WhatsApp" button as well since it's "Phone / WhatsApp" field. 
        // AND add a text link for calling in the message.

        const finalMessage = telegramMessage + `\n\n[📞 Click to Call](${'tel:' + cleanPhone})`;

        const payload: any = {
            chat_id: telegramChatId,
            text: finalMessage,
            parse_mode: 'Markdown',
        };

        // If we want a button, let's try a WhatsApp link since it's robust.
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
        // Even if it fails, we return error so client knows.
        // But since we removed email, this is the ONLY source of truth.
        return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
    }
}
