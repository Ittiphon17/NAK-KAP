import { AdminSidebar } from "@/src/components/admin/AdminSidebar";
import { AdminTopbar } from "@/src/components/admin/AdminTopbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#FBFBFC] min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar />
        <main className="flex-1 p-10 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
