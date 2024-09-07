import PostPage from "@/components/product-page";
import { fetchProducts } from "../../../../actions/products/actions";

export default async function Page({
    searchParams
}: {
    searchParams: {
        page?: string;
    }
}){

    const currentPage = Number(searchParams?.page) || 1
    const {products, totalPages} = await fetchProducts(currentPage)

    return(
        <div className="w-full min-h-screen bg-red-900">
            <PostPage products={products} totalPages={totalPages}/>
        </div>
    )
}