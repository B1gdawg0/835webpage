'use client';
import Image from "next/image";
import me from "@/app/assets/best.jpeg";
import { ChevronLeft,ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";

function SideSlideCard(props) {
    const [isHover, setHover] = useState(false);

    const onHover = () => setHover(true);
    const onLeave = () => setHover(false);

    

    return (
        <div 
            className={`w-[${props.width}px] h-[${props.height}px] bg-gray-500/[0.3] duration-300 hover:w-[${props.width + 300}px] rounded-[35px] overflow-x-scroll cursor-pointer`}
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


function SideSlideCardList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const newsItems = [
        { title: 'News 1', width: 330, height: 430 },
        { title: 'News 2', width: 330, height: 430 },
        { title: 'News 3', width: 330, height: 430 },
        { title: 'News 4', width: 330, height: 430 },
        { title: 'News 5', width: 330, height: 430 },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (currentIndex < newsItems.length - itemsPerPage) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="flex items-center justify-evenly p-4">
            <div className="rounded-full bg-white shadow cursor-pointer" onClick={handleLeftClick}>
                <ChevronLeft size={40} />
            </div>
            <div className="flex space-x-4">
                {newsItems.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                    <SideSlideCard key={index} {...item} />
                ))}
            </div>
            <div className="rounded-full bg-white shadow cursor-pointer" onClick={handleRightClick}>
                <ChevronRight size={40} />
            </div>
        </div>
    );
}

export default SideSlideCardList;