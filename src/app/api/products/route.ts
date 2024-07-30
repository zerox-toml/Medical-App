import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const filterParams = Object.fromEntries(searchParams.entries());
    const { data: products } = await axios.get('https://api.extensive.live/product', {
        params: filterParams,
    });
    return NextResponse.json(products);
}
