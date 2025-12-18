export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log("ISOLATION TEST: Contact API Hit");
    return NextResponse.json({ test: "ok", timestamp: new Date().toISOString() });
}
