"use client";

import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation"; // This helps to redirect user fater login to the Home page
import {axios} from "axios";

export default function LoginPage(){
    const [user, setUser] = React.useState({
        email:"",
        password:"",
    })

    // The below function will do something to the db on signup which we haven't figured out yet
    const onLogin = async () =>{

    }


    return (
        <div className="flex flex-col items-center justiy-center min-h-screen py-2 text-white">
        <h1 className="text-2xl">Login Up</h1> <hr/>

        {/* labels for email, password */}
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
        id = "email"
        type = "text"
        value = {user.email}
        onChange = {(e) => setUser({...user, email: e.target.value})}
        placeholder = "email"
        />

        {/* password */}
        <label htmlFor="password">password</label>
        <input
        id = "password"
        type = "password"
        value = {user.password}
        onChange = {(e) => setUser({...user, password: e.target.value})}
        placeholder = "password"
        />

        {/* Button for signup */}
        <hr/><hr/><hr/><hr/>
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={onLogin}>Login</button>
        <Link href="signup">Visit signup page</Link>
        </div>
    )
}