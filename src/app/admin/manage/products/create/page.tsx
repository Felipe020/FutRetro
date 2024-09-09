import CreateProduct from "@/components/crud/products/create";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-red-900 p-10">
      <DashboardTitle
        title="Adicionar produto"
        description="Adicione um produto por aqui"
      />
      <CreateProduct />
    </div>
  );
}
