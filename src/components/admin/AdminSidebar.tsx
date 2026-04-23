"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Car, 
  CalendarCheck, 
  Users, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Car, label: "Cars Management", href: "/admin/cars" },
  { icon: CalendarCheck, label: "Bookings", href: "/admin/bookings" },
  { icon: Users, label: "Customers", href: "/admin/customers" },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-primary h-screen sticky top-0 flex flex-col pt-10 pb-6 px-6">
      <Link href="/admin" className="flex items-center gap-2 mb-12 px-4">
        <span className="text-2xl font-bold tracking-tight text-white">
          NAK <span className="text-accent">KAP</span>
        </span>
      </Link>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                isActive 
                ? "bg-white/10 text-white font-bold" 
                : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-4 px-4 py-4 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all mt-auto border-t border-white/5">
        <LogOut size={20} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </aside>
  );
}
