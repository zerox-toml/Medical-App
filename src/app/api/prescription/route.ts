import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const { data: prescription } = await axios.get('https://api.extensive.live/prescription');
    return NextResponse.json(prescription);
}
