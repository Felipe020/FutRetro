import Image from "next/image";
import Link from "next/link";

interface CardImageCollectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
}

export default function CardImageCollection({
  imageAlt,
  imageSrc,
  title,
  price,
}: CardImageCollectionProps) {
  return (
    <div className="flex flex-col">
      <div className="flex w-full max-w-[346px] h-auto xl:max-w-[446px] xl:h-auto bg-[#911F27] rounded-t-3xl m-auto justify-center">
        <Link href={"/product"}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-auto"
            quality={100}
            layout="responsive"
            width={200}
            height={450}
          />
        </Link>
      </div>
      <div className="flex flex-col bg-[#F2EBD5] rounded-b-3xl justify-center items-center p-2 w-[346px] xl:w-[446px] m-auto">
        <p className="text-3xl text-[#911F27] font-bold">{title}</p>
        <p className="text-3xl text-[#911F27] font-bold">{price}</p>
      </div>
    </div>
  );
}
