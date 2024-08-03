import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const params = await request.json();
        console.log('Params:', params);
        const { data: checkoutData } = await axios.post('https://api.extensive.live/order', params);
        return NextResponse.json(checkoutData);
    } catch (error) {
        console.error('Checkout API error:', error);
        return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
    }
}