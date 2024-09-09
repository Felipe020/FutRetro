import IndividualProduct from "@/components/individual-product";
import { fetchProductById } from "../../../../../actions/individualProduct/actions";
import { Suspense } from "react";

export default async function Page({params}: {params: {id: string}}){
    const id = parseInt(params.id, 10);

    const product = await fetchProductById(id);

    return(
        <div className="w-full  bg-red-900 p-10 md:p-0">
            <Suspense>
                <IndividualProduct product={product}/>
            </Suspense>
        </div>
    )
}