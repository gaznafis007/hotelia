import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async ( {params}) =>{
    const {id} = await params;
    try{
        const db = await connectDB();
        const hotelCollection = db.collection('hotels');
        const query = {_id: ObjectId(id)};
        const result = await hotelCollection.findOne(query);
        return NextResponse.json(result);
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}