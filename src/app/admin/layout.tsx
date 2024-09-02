import AdminSidebar from "@/components/admin-sidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AdminSidebar />
            <section className="sm:ml-72">
                {children}
            </section>
        </section>
    )
}