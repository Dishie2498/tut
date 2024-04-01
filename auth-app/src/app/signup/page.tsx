"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation"; // This helps to redirect user fater login to the Home page
import axios from "axios";
import toast from "react-hot-toast";
import UserProfile from "../profile/[id]/page";

export default function SignupPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    // Simply timepass using React useEffect ////////////////////////////////
    // 1. Button
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() => {
        if(user.email.length >0 && user.password.length >0 && user.username.length>0)
        {
            setButtonDisabled(false);
        }
        else
        {
            setButtonDisabled(true);
        }
    }, [user]);

    // 2. A processing tag
    const [loading, setLoading] = React.useState(false)
    /////////////////////////////////////////////////////////////////////////


    // The below function will do something to the db on signup which we haven't figured out yet
    // const onSignup = async () =>{
    //     try {
    //         setLoading(true); // since the signup button has been clicked once
    //         const response = await axios.post("../api/users/signup", user); // sends the info to the correct route.ts
    //         console.log("Sign up successful", response.data);
    //         router.push('/login');
    //     } catch (error:any) {
    //         console.log("signup failed")
    //         toast.error(error.message);
    //     } finally{
    //         setLoading(false);
    //     }
    // }
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col items-center justiy-center min-h-screen py-2 text-white">
        <h1 className="text-2xl">{loading ? "Processing" : "Sign Up"}</h1> <hr/>
        {/* labels for username, email, password */}
        {/* ------- username -------- */}
        <label htmlFor="username">Username</label>
        <input className="text-black"
        id = "username" 
        type="text" 
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder = "username"
        />

        {/* email */}
        <label htmlFor="email">Email</label>
        <input className="text-black"
        id = "email"
        type = "text"
        value = {user.email}
        onChange = {(e) => setUser({...user, email: e.target.value})}
        placeholder = "email"
        />

        {/* password */}
        <label htmlFor="password">password</label>
        <input className="text-black"
        id = "password"
        type = "password"
        value = {user.password}
        onChange = {(e) => setUser({...user, password: e.target.value})}
        placeholder = "password"
        />

        {/* Button for signup */}
        <hr/><hr/><hr/><hr/>
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={onSignup}>{buttonDisabled ? "Sign up not allowed" : "Sign Up"}</button>
        <Link href="/login">Visit login page</Link>
        </div>
    )
}