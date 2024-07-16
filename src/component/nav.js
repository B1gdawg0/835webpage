'use client';
import Link from "next/link";
import { Menu } from 'lucide-react';
import { useEffect, useState } from "react";

function Navbar(){
    let [isClicked,setClick]  = useState(false)

    function handleClick(){
        setClick(prevClicked => !prevClicked);
        console.log(isClicked);
    }

    return(
        <>
        <nav className="flex justify-between items-center px-4 md:px-[60px] lg:px-[90px] bg-main-green h-[60px] md:h-[80px] lg:h-[104px] text-white shadow-md sticky top-0 z-20">
            <h1 className="font-bold text-[35px] md:text-[40px]">8E5</h1>
            <div className="flex space-x-10 hidden lg:block">
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/homepage"}>Home</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/aboutus"}>About us</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/service"}>Services</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/members"}>Member</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/howitworks"}>How it works</Link>
            </div>

            <div className="flex space-x-5">
                <div className="items-center text-white lg:hidden" onClick={handleClick}>
                    <Menu className="block md:hidden"/>
                    <Menu className="hidden md:block" size={35}/>
                </div>
                <button className="bg-vanilla text-title-thefigmagod-brown py-2 px-4 text-black shadow rounded hidden lg:block">Contact us</button>
            </div>
        </nav>

        {
            isClicked&&
            <>       
                <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex lg:hidden" onClick={handleClick}></div>
                <div className={`fixed z-20 bg-white shadow-lg flex flex-col space-y-2 p-4 lg:hidden w-full`}>
                        <Link className="text-black px-2 py-1 transition duration-400 ease-in-out rounded hover:bg-slate-600 hover:text-white" href={"/homepage"}>Home</Link>
                        <Link className="text-black px-2 py-1 transition duration-400 ease-in-out rounded hover:bg-slate-600 hover:text-white" href={"/aboutus"}>About us</Link>
                        <Link className="text-black px-2 py-1 transition duration-400 ease-in-out rounded hover:bg-slate-600 hover:text-white" href={"/service"}>Services</Link>
                        <Link className="text-black px-2 py-1 transition duration-400 ease-in-out rounded hover:bg-slate-600 hover:text-white" href={"/members"}>Member</Link>
                        <Link className="text-black px-2 py-1 transition duration-400 ease-in-out rounded hover:bg-slate-600 hover:text-white" href={"/howitworks"}>How it works</Link>
                        <Link className="text-black px-2 py-1 transition duration-400 ease-in-out rounded hover:bg-slate-600 hover:text-white" href={""}>Contact us</Link>
                </div>
            </>
            
        }
        </>
    );
}

export default Navbar;