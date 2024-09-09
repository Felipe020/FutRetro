import DashboardPage from "@/components/dashboard/dashboard-page";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-red-900 p-10">
      <DashboardTitle
        title="Pagina de Dashboard"
        description="Faça as ações administrativas por aqui"
      />
      <DashboardPage />
    </div>
  );
}
