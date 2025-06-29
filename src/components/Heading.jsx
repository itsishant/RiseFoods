import { LOGO_URL } from "/src/utils/constants";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import{ Link } from "react-router-dom";


const Heading = () => {

    const [btnNameReact, setbtNameReact] = useState("Login");

    const cartItemss = useSelector((store) => store?.cart?.items)

    return (
        <div className="flex justify-between bg-slate-300 h-36 shadow-lg ">
            <div className="flex space-x-6">
                <img className= "w-36 h-36 rounded-full"  src={LOGO_URL}/>  <h1 className="m-12 font-bold fon text-4xl"><Link to={"/home"}>Rise Foods</Link></h1>
            </div>
            <div className="">
                <ul className="flex p-4 m-10 space-x-8">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li className="font-bold"><Link to="/cart">Cart - ({cartItemss?.length} items)</Link></li>
                    <button className="bg-orange-400 text-lg px-3 py-1 rounded-full" onClick={() => {
                        btnNameReact == "Login" ? setbtNameReact("Logout") : setbtNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Heading;