import Link from "next/link";
import { Menu } from 'lucide-react';

function Navbar(){
    return(
        <nav className="flex justify-between items-center px-4 md:px-[60px] lg:px-[90px] bg-main-green h-[60px] md:h-[80px] lg:h-[104px] text-white shadow-md sticky top-0">
            <h1 className="font-bold text-[35px] md:text-[40px]">8E5</h1>
            <div className="flex space-x-10 hidden lg:block">
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/homepage"}>Home</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/aboutus"}>About us</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/service"}>Services</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/members"}>Member</Link>
                <Link className="pb-1 font-bold text-[20px] transition duration-400 ease-in-out border-b-4 border-transparent hover:border-white" href={"/howitworks"}>How it works</Link>
            </div>

            <div className="flex space-x-5">
                <div className="flex items-center text-white lg:hidden">
                    <Menu className="inline-block md:hidden"/>
                    <Menu className="hidden md:inline-block" size={35}/>
                </div>
                <button className="bg-vanilla text-title-thefigmagod-brown py-2 px-4 text-black shadow rounded hidden lg:block">Contact us</button>
            </div>
        </nav>
    );
}

export default Navbar;