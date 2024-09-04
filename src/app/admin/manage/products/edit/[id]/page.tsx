import CreateProduct from "@/components/crud/products/create";
import EditProduct from "@/components/crud/products/edit";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default function Page(){
    return(
        <div className="w-full min-h-screen bg-red-900 p-10">
            <DashboardTitle title="Editar produto" description="Edite um produto por aqui" />
            <EditProduct />
        </div>
    )
}