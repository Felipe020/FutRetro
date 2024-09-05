import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard(){
    return(
        <Link
        href={'/'}
        className="w-full lg:10/12 flex flex-col lg:flex-row group gap-20 justify-center m-auto"
        >
            <div className="flex flex-col text-[#F2EBD5] shadow-lg rounded-xl group-hover:shadow-2xl duration-300 overflow-hidden">
                <Image 
                src={'/camisas/flu.png'}
                alt="placeholder"
                width={1920}
                height={1080}
                className="max-w-full lg:max-w-[450px] 2xl:max-w-[550px]"
                />
                <div className="flex flex-col justify-between gap-4 p-6 items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="line-clamp-1 text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-[#F2EBD5]">
                            Camisa Retro Fluminense 02/03
                        </h1>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1 text-lime-600">
                                <CircleDollarSign className="h-5 w-5"/>
                                <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">200</span>
                            </div>
                        </div>
                    </div>
                    <p className="line-clamp-3 text-base 2xl:text-xl 3xl:text-2xl">Camisa retro bem conservada</p>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[#F2EBD5] text-sm 2xl:text-lg 3xl:text-2xl font-semibold uppercase break-words">
                            #Categoria 1
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}