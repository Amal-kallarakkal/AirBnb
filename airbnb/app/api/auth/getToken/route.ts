import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("session_access_token")?.value || null;

    return NextResponse.json({ accessToken });
}