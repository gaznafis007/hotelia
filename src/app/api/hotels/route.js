import { connectDB } from "@/libs/connectDB"
import { NextResponse } from "next/server";

export const GET = async () =>{
    const db = await connectDB();
    const hotelCollection = db.collection('hotels');
    const query = {};
    const result = await hotelCollection.find(query).toArray();
    return NextResponse.json(result)
}