import Image from "next/image";
import CardImageCollection from "../cardImageCollection";
import Carousel from "../carousel/carousel";
import Title from "../title";

export default function CollectionSection() {
  return (
    <div className="w-full bg-red-900 h-full m-auto md:py-[20px]">
      <Title title="Alguns das nossas melhores camisas" subtitle="Produtos" />
      <section className=" flex flex-1 flex-row flex-wrap justify-center items-center m-auto lg:flex-row lg:flex-nowrap ">
      <Carousel>
        <CardImageCollection
          imageSrc="/camisas/flu.png"
          imageAlt="fluminense"
          title="Fluminense"
          price="$200"
        />
        <CardImageCollection
          imageSrc="/camisas/milan.png"
          imageAlt="milan"
          title="Milan"
          price="$200"
        />
        <CardImageCollection
          imageSrc="/camisas/br2.webp"
          imageAlt="brasil"
          title="Brasil"
          price="$200"
        />
        <CardImageCollection
          imageSrc="/camisas/flu.png"
          imageAlt="fluminense"
          title="Fluminense"
          price="$200"
        />
        <CardImageCollection
          imageSrc="/camisas/flu.png"
          imageAlt="fluminense"
          title="Fluminense"
          price="$200"
        />
      </Carousel>
    </section>
    </div>
    
  );
}
