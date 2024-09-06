import CardImageCollection from "../cardImageCollection";
import Carousel from "../carousel/carousel";
import Title from "../title";
import { Product } from "../../../types/data";

type BestProductsProps = {
  products: Product[]
}

export default function CollectionSection({products}: BestProductsProps) {
  return (
    <div className="w-full lg:w-10/12 bg-red-900 h-full m-auto md:py-[20px]">
      <Title title="Algumas das nossas melhores camisas" subtitle="Produtos" />
      <section className=" flex flex-1 flex-row flex-wrap justify-center items-center m-auto lg:flex-row lg:flex-nowrap ">
      <Carousel>
        {products.map((product, index) => (
          <CardImageCollection
          key={index}
          product={product}
          imageSrc="/camisas/flu.png"
          imageAlt="fluminense"
        />
        ))}
      </Carousel>
    </section>
    </div>
    
  );
}
