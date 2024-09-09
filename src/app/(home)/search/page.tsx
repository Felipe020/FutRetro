import SearchPage from "@/components/search-page";
import { fetchFilteredProducts } from "../../../../actions/search/actions";

export default async function Page({
    searchParams,
}: {
    searchParams: {
        query: string | null;
        page: string | null;
    }
}){

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const {products, count, totalPages} = await fetchFilteredProducts(query, currentPage)
    

    return(
        <div className="w-full min-h-screen bg-red-900">
            <SearchPage count={count} products={products} totalPages={totalPages}/>
        </div>
    )
}