import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/data";

export default function ProductCard({product}: {product: Product}){
    return(
        <Link
        href={`/product/${product?.id}`}
        className="flex flex-col lg:flex-row group gap-20 justify-center py-10 items-center"
        >
            <div className="flex flex-col text-[#F2EBD5] shadow-lg rounded-xl group-hover:shadow-xl duration-300 overflow-hidden bg-[#911F27]">
                <Image 
                src={'/camisas/flu.png'}
                alt="placeholder"
                width={1920}
                height={1080}
                className="max-w-[400px] lg:max-w-[450px] 2xl:max-w-[550px]"
                />
                <div className="flex flex-col justify-between gap-4 p-6 items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="line-clamp-1 text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-[#F2EBD5]">
                            {product?.title}
                        </h1>
                        <p className="line-clamp-3 text-base 2xl:text-xl 3xl:text-2xl">{product?.description}</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1 text-lime-600">
                                <CircleDollarSign className="h-5 w-5"/>
                                <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">{product?.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}