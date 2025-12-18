const https = require('https');

const BOT_TOKEN = '5222581316:AAH9PgAi0ydK1VJd0EbbvzY2T4UK6nZyECw';
const CHAT_ID = '-695246838'; // The hardcoded ID we are using

function sendTest() {
    console.log('Testing Telegram Bot...');
    console.log(`Token: ${BOT_TOKEN.slice(0, 5)}...`);
    console.log(`Chat ID: ${CHAT_ID}`);

    const data = JSON.stringify({
        chat_id: CHAT_ID,
        text: "🔔 Test Message from Local Terminal via Node.js",
        parse_mode: 'Markdown'
    });

    const options = {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${BOT_TOKEN}/sendMessage`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        console.log(`Status Code: ${res.statusCode}`);

        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Response Body:', body);
            try {
                const json = JSON.parse(body);
                if (json.ok) {
                    console.log('✅ SUCCESS: Message sent to Telegram!');
                } else {
                    console.error('❌ FAILURE: Telegram API returned error.');
                }
            } catch (e) {
                console.error('❌ FAILURE: Could not parse response.');
            }
        });
    });

    req.on('error', (error) => {
        console.error('❌ NETWORK ERROR:', error);
    });

    req.write(data);
    req.end();
}

sendTest();
