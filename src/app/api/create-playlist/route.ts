import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log(process.env.MONGODB_URL)
    
    return NextResponse.json({"message":"created-playlist"})
}