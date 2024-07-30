import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const filterParams = Object.fromEntries(searchParams.entries());
    const { data: pharmacies } = await axios.get('https://api.extensive.live/pharmacy', {
        params: filterParams,
    });
    return NextResponse.json(pharmacies);
}
