import AdminSidebar from "@/components/admin-sidebar";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return(
        <section>
            <AdminSidebar />
            <section className="py-4 px-4 sm:px-20 sm:ml-72">
                {children}
            </section>
            
        </section>
    )
}