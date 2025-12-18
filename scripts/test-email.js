const { Resend } = require('resend');

// Need to install resend if not present, but it should be in node_modules
// running with ts-node might be better if available, but let's try raw node with require
// If 'resend' is using ES modules, might need dynamic import or different approach.
// Let's try standard https for Resend to avoid dependency issues in this script.

const https = require('https');
const API_KEY = process.env.RESEND_API_KEY || 're_imm7t67k_88x3hcJ8BvQZDmtYRhpE78jo';

function sendEmailTest() {
    console.log('Testing Resend Email...');
    console.log(`API Key: ${API_KEY.slice(0, 5)}...`);

    const data = JSON.stringify({
        from: 'Narratv Space Website <access@updates.narratv.space>',
        to: ['labeeb@narratv.space'],
        subject: 'Test Email from Local Terminal',
        html: '<p>This is a test email sent from the local debug script.</p>'
    });

    const options = {
        hostname: 'api.resend.com',
        port: 443,
        path: '/emails',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
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
            if (res.statusCode === 200 || res.statusCode === 201) {
                console.log('✅ SUCCESS: Email sent via Resend!');
            } else {
                console.error('❌ FAILURE: Resend API returned error.');
            }
        });
    });

    req.on('error', (error) => {
        console.error('❌ NETWORK ERROR:', error);
    });

    req.write(data);
    req.end();
}

sendEmailTest();
