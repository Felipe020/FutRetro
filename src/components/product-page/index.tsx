import { Product } from "../../../types/data";
import Pagination from "../pagination";
import ProductCard from "../product-card";

export default function PostPage({
  products,
  totalPages,
}: {
  products: Product[];
  totalPages: number;
}) {
  return (
    <div className="w-full lg:w-10/12 m-auto gap-12 flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}
