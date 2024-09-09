import Link from "next/link";
import SecondarySearch from "./secondary-search";
import PostCard from "../product-card";
import { Product } from "../../../types/data";
import Pagination from "../pagination";
import { Suspense } from "react";

export default function SearchPage({
  products,
  count,
  totalPages,
}: {
  products: Product[];
  count: number;
  totalPages: number;
}) {
  return (
    <div className="w-full">
      <SecondarySearch count={count} />
      {count === 0 ? (
        <div className="flex flex-col w-full md:w-10/12 gap-2  mx-auto">
          <span className="text-2xl font-extrabold text-[#F2EBD5]">
            Nenhuma publicação encontrada.
          </span>
          <span className="text-xl text-[#F2EBD5]/70">
            Tente procurar por outra coisa, ou explore{" "}
            <Link href={"/posts"}>publicações</Link>
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-12">
          {products.map((product, index) => (
            <Suspense key={index}>
              <PostCard product={product} />
            </Suspense>
          ))}
          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </div>
      )}
    </div>
  );
}
