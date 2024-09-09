import { Suspense } from 'react';
import SearchPage from "@/components/search-page";
import { fetchFilteredProducts } from '../../../../actions/search/actions';

export default function Page({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchContent query={query} page={currentPage} />
        </Suspense>
    );
}

async function SearchContent({ query, page }: { query: string, page: number }) {
    const { products, count, totalPages } = await fetchFilteredProducts(query, page);

    return (
        <div className="w-full min-h-screen bg-red-900">
            <SearchPage count={count} products={products} totalPages={totalPages} />
        </div>
    );
}