import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer(){
    return(
        <div className="flex flex-wrap mx-auto bg-[#911F27] text-center w-full mt-24 py-8 min-h[250px] items-start justify-between">
            <div className="px-8 flex flex-col text-[#F2EBD5] items-start">
                <p className="text-2xl underline">Sobre nós</p>
                <div className="flex flex-col items-start ">
                    <Link href="/" target="_blank" > Visão </Link>
                    <Link href="/" target="_blank"> Missão </Link>   
                    <Link href="/" target="_blank"> Valores </Link> 
                </div>   
            </div>
            <div className="flex items-center justify-center px-8">
                <Image 
                    src='/logo/logo.png'
                    alt="Logo FutRetro"
                    width={1920}
                    height={1080}
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />
            </div>
            <div className="flex flex-col px-8 justify-start">
                <p className="text-[#F2EBD5] text-2xl underline flex items-end">Redes Sociais</p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/"><Instagram className="text-[#F2EBD5]"/></Link>
                    <Link href='/'><Linkedin className="text-[#F2EBD5]"/></Link>
                    <Link href='/'><Facebook className="text-[#F2EBD5]"/></Link>  
                </div>
                
            </div>
            
        </div>       
    )
}