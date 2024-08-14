import { Send, Plane } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function LandingPage(){
    return(
        <div className="w-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6 bg-black">
            <div className="flex flex-col justify-center gap-12 lg:col-span-3 p-4 h-auto  overflow-hidden bg-[#911F27]">
                <div className="flex flex-col gap-6 leading-relaxed">
                    <h1 className="text-[#F2EBD5] text-xl md:text-2xl   lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl     font-semibold uppercase">Além de camisas vendemos   histórias.</h1>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl    xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold">Se    você é um amante ou colecionador, clique para conhecer     nossos produtos.</p>
                </div>  

                <button className="bg-[#224F27] w-full md:w-10/12 text-[#F2EBD5] px-6 py-2 rounded-xl md:text-lg lg:w-10/12 lg:text-xl xl:text-2xl duration-200 font-semibold hover:bg-green-800 flex items-center justify-center gap-2">
                    <Send className="w-7 h-7 text-[#F2EBD5]"/>
                    Quero conhecer
                </button>

                <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
                    <div className="bg-[#224F27] px-6 py-2 rounded-2xl">
                        <h1 className="text-[#F2EBD5] text-center text-xl font-bold">MISSÃO</h1>
                        <p className="text-[#F2EBD5] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sagittis turpis, vitae egestas mauris. Proin quis ullamcorper libero, in dapibus purus. Fusce commodo leo ullamcorper, condimentum lacus et, semper mi. </p>
                    </div>
                    <div className="bg-[#224F27] px-6 py-2 rounded-2xl">
                        <h1 className="text-[#F2EBD5] text-center font-bold text-xl">VISÃO</h1>
                        <p className="text-[#F2EBD5] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sagittis turpis, vitae egestas mauris. Proin quis ullamcorper libero, in dapibus purus. Fusce commodo leo ullamcorper, condimentum lacus et, semper mi.</p>
                    </div>
                    <div className="bg-[#224F27] px-6 py-2 rounded-2xl">
                        <h1 className="text-[#F2EBD5] text-center text-xl font-bold">VALORES</h1>
                        <p className="text-[#F2EBD5] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et sagittis turpis, vitae egestas mauris. Proin quis ullamcorper libero, in dapibus purus. Fusce commodo leo ullamcorper, condimentum lacus et, semper mi.</p>
                    </div>
                </div>
                <Link href='/' className="lg:col-span-3 relative group">
                    <div>
                        <Image 
                            
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}