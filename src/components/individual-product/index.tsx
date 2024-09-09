import { CircleDollarSign, ShoppingCart } from "lucide-react";
import Image from "next/image";
import type { IndividualProduct } from "../../../types/data";

export default function IndividualProduct({
  product,
}: {
  product: IndividualProduct;
}) {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-center p-10">
      <div className="lg:col-span-4 lg:w-[30%] flex ">
        <Image
          src={"/camisas/flu.png"}
          alt="camisa brasil"
          width={1920}
          height={1080}
          className="w-full lg:h-[500px] lg:w-[500px]  rounded-xl bg-[#911F27]"
        />
      </div>
      <div className="lg:col-span-4 lg:max-h-[500px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lg:gap-4">
        <div className="flex flex-col gap-4 justify-between font-semibold text-[#F2EBD5]">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2 text-center">
            {product?.title}
          </h1>
          <h2 className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl line-clamp-2">
            {product?.description}
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1 text-lime-600">
              <CircleDollarSign className="h-5 w-5" />
              <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">
                {product?.price}
              </span>
            </div>
          </div>
          <button className="bg-[#F2EBD5] px-6 py-4 rounded-xl text-[#911F27] font-bold text-xl hover:bg-[#F2EBD5]/70 items-center flex flex-row gap-2 ">
            <ShoppingCart />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
