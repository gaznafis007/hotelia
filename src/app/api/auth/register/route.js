import { connectDB } from "@/libs/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const user = await req.json();
    if(!user){
        return NextResponse.json({error: 'Provide email and password'}, {status: 500})
    }
    try{
        const db = await connectDB()
        const userCollection = db.collection('users');
        const registeredUser = await userCollection.findOne({email: user?.email});
        if(registeredUser){
            console.log(registeredUser, 'this is result')
            return NextResponse.json({message: 'user already exists', user:{...registeredUser}})
        }else{
            const result = await userCollection.insertOne(user);
            // console.log(result, 'this is result')
            return NextResponse.json(result)
        }
    }catch(error){
        console.log(error, "this is error")
        return NextResponse.json({message: 'Error occurred', status: 404, error})
    }
}