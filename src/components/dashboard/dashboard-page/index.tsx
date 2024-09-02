import DashboardCard from "../dashboard-card";

export default function DashboardPage() {
    return(
        <div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full mt-10">
                <DashboardCard title="Produtos" description="Gerenciar" href="/admin/manage/products"/>
                <DashboardCard title="Posts" description="Gerenciar" href="/admin/manage/posts"/>
            </div>
        </div>
    )
}