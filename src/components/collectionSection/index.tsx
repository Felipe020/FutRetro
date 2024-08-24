import Image from "next/image";
import CardImageCollection from "../cardImageCollection";
import Carousel from "../carousel/carousel";

export default function CollectionSection() {
  return (
    <section className="bg-red-900 flex flex-1 flex-row flex-wrap justify-center items-center m-auto min-h-screen lg:flex-row lg:flex-nowrap h-full w-full">
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
  );
}
