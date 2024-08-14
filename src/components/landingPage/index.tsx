import { Send, Plane } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Carousel from "../carousel/carousel"

const slides = [
    "/camisas/milan.png",
    "/camisas/flu.png",
    "/camisas/br2.webp",
    "/camisas/br2.webp",
    "/camisas/br2.webp",
    "/camisas/br2.webp"
]

export default function LandingPage(){
    return(
        <div className="w-full h-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6 bg-gradient-to-r from-[#911F27] to[#F2EBD5]">
            <div className="flex flex-col justify-center gap-12 lg:col-span-3 p-4 h-full overflow-hidden items-center ">
                <div className="flex flex-col gap-6 leading-relaxed">
                    <h1 className="text-[#F2EBD5] text-xl md:text-2xl   lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl     font-semibold uppercase text-center">Além de camisas vendemos   histórias.</h1>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-center">Se    você é um amante ou colecionador, clique para conhecer     nossos produtos.</p>
                </div>  

                <button className="bg-[#224F27] w-full md:w-10/12 text-[#F2EBD5] px-6 py-2 rounded-xl md:text-lg lg:w-10/12 lg:text-2xl xl:text-2xl duration-200 font-semibold hover:bg-green-800 flex items-center justify-center gap-2">
                    <Send className="w-7 h-7 text-[#F2EBD5]"/>
                    Quero conhecer
                </button>

                <div className="flex flex-col lg:flex-row gap-6 mb-10">
                    <div className="bg-[#224F27]  text-[#F2EBD5] px-6 py-2 rounded-xl md:text-lg lg:text-xl xl:text-2xl font-semibold gap-2">
                        <h1 className="text-[#F2EBD5] text-center text-xl font-bold">MISSÃO</h1>
                        <p className="text-[#F2EBD5] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sagittis turpis, vitae egestas mauris. Proin quis ullamcorper libero, in dapibus purus. Fusce commodo leo ullamcorper, condimentum lacus et, semper mi. </p>
                    </div>
                    <div className="bg-[#224F27] text-[#F2EBD5] px-6 py-2 rounded-xl md:text-lg lg:text-xl xl:text-2xl font-semibold gap-2">
                        <h1 className="text-[#F2EBD5] text-center font-bold text-xl">VISÃO</h1>
                        <p className="text-[#F2EBD5] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sagittis turpis, vitae egestas mauris. Proin quis ullamcorper libero, in dapibus purus. Fusce commodo leo ullamcorper, condimentum lacus et, semper mi.</p>
                    </div>
                    <div className="bg-[#224F27] text-[#F2EBD5] px-6 py-2 rounded-xl md:text-lg lg:text-xl xl:text-2xl font-semibold gap-2">
                        <h1 className="text-[#F2EBD5] text-center text-xl font-bold">VALORES</h1>
                        <p className="text-[#F2EBD5] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sagittis turpis, vitae egestas mauris. Proin quis ullamcorper libero, in dapibus purus. Fusce commodo leo ullamcorper, condimentum lacus et, semper mi.</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 relative overflow-hidden">
                <div>
                    <Carousel>
                        {slides.map((s, index) => (
                            <Image key={index} src={s} alt={`image-${index}`}   width={1920} height={1080}/>
                        ))}
                    </Carousel>
                </div>   
            </div>
        </div>
    )
}