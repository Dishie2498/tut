import {connect} from "../../../dbConfig/dbConfig"; // to connect to the database
import User from "../../../../models/userModel"; // We need the database model
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs"; => gave error so solved using stackoverflow
const bcryptjs = require('bcryptjs')
connect();
console.log("This has happened");

// A POST function ie. to add a new user to database after signup
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json(); //1) ie. what all does the user enter on the signup page is stored in reqBody
        const {username, email, password} = reqBody;

        console.log(reqBody); // do not console.log() normally

        //2) check if user already exists [You can create many such checks]
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: "User already exists"});
        }

        // 3) Has the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // 4) saving new user details to the db
        const newUser = new User({username, email, password: hashedPassword});
        const savedUser = await newUser.save();

        // 5) show a response if user is saved to User
        return NextResponse.json({message:"User saved successfully", success:true, savedUser});
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
} 