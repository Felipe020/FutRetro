import IndividualProduct from "@/components/individual-product";
import { fetchProductById } from "../../../../../actions/individualProduct/actions";

export default async function Page({params}: {params: {id: string}}){
    const id = parseInt(params.id, 10);

    const product = await fetchProductById(id);

    return(
        <div className="w-full  bg-red-900 p-10 md:p-0">
            <IndividualProduct product={product}/>
        </div>
    )
}