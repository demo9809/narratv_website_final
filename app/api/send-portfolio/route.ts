
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

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
