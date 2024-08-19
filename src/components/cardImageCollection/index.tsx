import Image from 'next/image';

interface CardImageCollectionProps{
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: string;
}

export default function CardImageCollection(
    {imageAlt, imageSrc, title, price }: CardImageCollectionProps
) {
  return (
    <div className="flex flex-col">
      <div className="flex w-[346px] h-[522px] xl:w-[446px] xl:h-[622px] bg-[#911F27] rounded-t-3xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover "
          quality={100}
          layout="responsive"
          width={200}
          height={450}
        />
      </div>
      <div className="flex flex-col bg-[#F2EBD5] rounded-b-3xl justify-center items-center p-2 w-[346px] xl:w-[446px]">
        <p className="text-3xl text-[#911F27] font-bold">{title}</p>
        <p className="text-3xl text-[#911F27] font-bold">{price}</p>
      </div>
    </div>
  );
}