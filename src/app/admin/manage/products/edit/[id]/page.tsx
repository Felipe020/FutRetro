import EditProduct from "@/components/crud/products/edit";
import DashboardTitle from "@/components/dashboard/dashboard-title";
import { fetchProductById } from "../../../../../../../actions/admin/products/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const product = await fetchProductById(id);
  return (
    <div className="w-full min-h-screen bg-red-900 p-10">
      <DashboardTitle
        title="Editar produto"
        description="Edite um produto por aqui"
      />
      <EditProduct product={product} />
    </div>
  );
}
