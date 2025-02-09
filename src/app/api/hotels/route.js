import { connectDB } from "@/libs/connectDB"
import { NextResponse } from "next/server";

export const GET = async () =>{
    const db = await connectDB();
    const hotelCollection = db.collection('hotels');
    const query = {};
    const result = await hotelCollection.find(query).toArray();
    return NextResponse.json(result)
}

export const POST = async (req) =>{
    try{
        const hotel = await req.json();
        const db = await connectDB();
        const hotelCollection = db.collection('hotels');
        const result = await hotelCollection.insertOne(hotel);
        return NextResponse.json(result)
    }catch(err){
        return NextResponse.json({error: err.message}, {status: 500})
    }
}