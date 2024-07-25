'use client';
import Image from "next/image";
import me from "@/app/assets/best.jpeg";
import { ChevronLeft,ChevronRight } from 'lucide-react';
import { useState } from "react";

function NewsCard(props) {
    const [isHover, setHover] = useState(false);

    const onHover = () => setHover(true);
    const onLeave = () => setHover(false);

    return (
        <div 
            className={`w-[${props.width}px] h-[${props.height}px] bg-blue-300 transition-all duration-300 hover:w-[${props.width + 300}px] rounded-[35px]`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className={`relative w-[${props.width}px] h-[${props.height}px] flex items-center justify-center`}>
                <Image
                    className="absolute rounded-[35px] z-0"
                    src={me}
                    layout="fill"
                    objectFit="cover"
                    alt={props.title}
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[35px] z-5 transition-opacity duration-300 ${isHover ? 'opacity-0' : 'opacity-80'}`}
                    style={{ pointerEvents: 'none' }}
                ></div>
                <h1 
                    className={`absolute z-10 text-center text-white text-[64px] font-bold transition-opacity duration-300 ${isHover ? 'opacity-0' : 'opacity-100'}`}
                >
                    {props.title}
                </h1>
            </div>
        </div>
    );
}


function NewsList(){
    return(
        <div className="flex items-center justify-evenly containe p-4">
            <div className="rounded-full bg-white shadow"><ChevronLeft size={40}></ChevronLeft></div>
            <NewsCard title="News Name" width={330} height={430}></NewsCard>
            <NewsCard title="News Name" width={330} height={430}></NewsCard>
            <NewsCard title="News Name" width={330} height={430}></NewsCard>
            <div className="rounded-full bg-white shadow"><ChevronRight size={40}></ChevronRight></div>
        </div>
    );
}


export default NewsList;