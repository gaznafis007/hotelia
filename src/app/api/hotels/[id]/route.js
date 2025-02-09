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
        return NextResponse.json({error: err.message}, {status: 500})
    }
}
export const DELETE = async (req, {params}) =>{
    try{
        const {id} = await params;
        const query = {_id: new ObjectId(id)};
        const db = await connectDB();
        const hotelCollection = await db.collection('hotels');
        const result = await hotelCollection.deleteOne(query);
        return NextResponse.json(result)
    }catch(err){
        return NextResponse.json({error: err.message}, {status: 500})
    }
}
export const PUT = async (req,{params}) =>{
    try{
        const {id} = await params;
        const hotel = await req.json();
        const db = await connectDB();
        const hotelCollection = db.collection('hotels');
        const query = {_id: new ObjectId(id)};
        const updatedDoc = {
            $set:{
                ...hotel
            }
        }
        const result = await hotelCollection.updateOne(query, updatedDoc);
        return NextResponse.json(result)
    }catch(err){
        return NextResponse.json({error: err.message}, {status: 500})
    }
}