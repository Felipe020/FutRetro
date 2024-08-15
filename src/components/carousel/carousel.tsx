"use client"
import {ArrowRight, ArrowLeft} from "lucide-react"
import { useState } from "react";
import React, { ReactNode } from 'react';

interface CarouselProps {
    children: ReactNode[]; 
}

export default function Carousel({children: slides}: CarouselProps){
    const [curr, setCurr] = useState(0)

    {/*PEGA IMAGEM ANTERIOR*/}
    const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
    {/*PEGA PROX IMAGEM*/}
    const next = () => setCurr(curr => slides.length - 1 ? 0 : curr + 1)

    return(
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{transform : `translateX(-${curr * 100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-8 hover:bg-white"><ArrowLeft size={40}/></button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-8 hover:bg-white"><ArrowRight size={40}/></button>
            </div>
            <div>

            </div>
        </div>
    )
}