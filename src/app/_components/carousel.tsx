"use client";

import React from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface CarouselProps {
    images: string[];

}

function Carousel({ images }: CarouselProps) {
    const zoomInPropeties = {
        scale: 1,
        transitionDuration: 400,
        infinity: true,
        prevArrow: (
            <div className="">
                <ArrowLeftCircleIcon className="h-8 w-8 text-gray-200 cursor-pointer drop-shadow-md pl-1.5"/>
            </div>
        ),
        nextArrow: (
            <div className="">
                <ArrowRightCircleIcon className="h-8 w-8 text-gray-200 cursor-pointer drop-shadow-md pr-1.5"/>
            </div>
        )
    };

    return (
        <div className="w-4/5 h-4/5 place-self-center pt-5 pb-12">
            <Zoom {...zoomInPropeties}>
                {images.map((each, index) => (
                    <div key={index} className="flex justify-center md:items-center items-start relative">
                        {/* TODO: swap to Image object*/}
                        <img className="rounded-lg" src={each}/>
                    </div>
                ))}
            </Zoom>
        </div>
    );
}

export default Carousel;