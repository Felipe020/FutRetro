import DashboardTitle from "@/components/dashboard/dashboard-title";
import ManageProductsTable from "@/components/table/manage-products";

export default function Page(){
    return(
        <div className="w-full min-h-screen bg-red-900 p-10">
            <DashboardTitle title="Gerenciar Produtos" description="Faça as ações administrativas por aqui" />
            <ManageProductsTable />
        </div>
    )
}