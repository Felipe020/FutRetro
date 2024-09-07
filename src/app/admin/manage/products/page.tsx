import DashboardTitle from "@/components/dashboard/dashboard-title";
import ManageProductsTable from "@/components/table/manage-products";
import { fetchProductsAdmin } from "../../../../../actions/admin/products/actions";

export default async function Page(){
    const {products, count} = await fetchProductsAdmin()

    return(
        <div className="w-full min-h-screen bg-red-900 p-10">
            <DashboardTitle title="Gerenciar Produtos" description="Faça as ações administrativas por aqui" />
            <ManageProductsTable products={products} count={count}/>
        </div>
    )
}