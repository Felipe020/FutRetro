import ProductCard from "../product-card";

export default function PostPage(){
    return(
        <div className="w-full lg:w-10/12 flex flex-col lg:flex-row  m-auto gap-12">
            <ProductCard />
        </div>
    )
}