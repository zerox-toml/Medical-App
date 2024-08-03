import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const { data: filters } = await axios.get('https://api.extensive.live/product/filters');
    return NextResponse.json(filters);
}
