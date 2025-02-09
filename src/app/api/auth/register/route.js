import { connectDB } from "@/libs/connectDB";
import { NextResponse } from "next/server";

export const POST = async(req) =>{
    const user = await req.json();
    if(user?.email || user?.password){
        return NextResponse.json({error: 'Please provide both email and password'}, {status: 500})
    }
    try{
        const db = await connectDB();
    const userCollection = db.collection('users');
    const result = await userCollection.insertOne(user);
    return NextResponse.json(result)
    }catch(err){
        console.log(err);
        return NextResponse.json({error: err}, {status: 500})
    }
}