import { connectDB } from "@/libs/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) =>{
    try{
        const {id} = await params;
        console.log(id)
        const db = await connectDB();
        const hotelCollection = await db.collection('hotels');
        const query = {_id: new ObjectId(id)};
        const result = await hotelCollection.findOne(query);
        return NextResponse.json(result);
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}