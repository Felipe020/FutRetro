import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/data";

interface CardImageCollectionProps {
  imageSrc: string;
  imageAlt: string;
  product: Product;
}

export default function CardImageCollection({
  imageAlt,
  imageSrc,
  product,
}: CardImageCollectionProps) {
  return (
    <div className="flex flex-col ">
      <div className="flex w-full max-w-[346px] h-auto xl:max-w-[446px] xl:h-auto bg-[#911F27] rounded-t-3xl m-auto justify-center">
        <Link href={`/product/${product?.id}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-auto"
            quality={100}
            layout="responsive"
            width={200}
            height={450}
          />
          <div className="flex flex-col bg-[#F2EBD5] rounded-b-3xl justify-center items-center p-2 w-[346px] xl:w-[446px] m-auto">
            <p className="text-3xl text-[#911F27] font-bold">{product?.title}</p>
            <p className="text-3xl text-[#911F27] font-bold">{product?.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
