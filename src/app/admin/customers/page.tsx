"use client";

import { User, Phone, Mail, MoreHorizontal } from "lucide-react";

export default function AdminCustomersPage() {
  const customers = [
    { name: "John Smith", phone: "+66 81 234 5678", email: "john@example.com", bookings: 5, status: "Active" },
    { name: "Sarah Chen", phone: "+66 82 345 6789", email: "sarah@example.com", bookings: 12, status: "Active" },
    { name: "James Bond", phone: "+44 77 007 007", email: "007@mi6.com", bookings: 2, status: "Inactive" },
    { name: "Lara Croft", phone: "+66 83 456 7890", email: "lara@example.com", bookings: 8, status: "Active" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-2">Customers</h1>
        <p className="text-secondary">View and manage your loyal clientele.</p>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface">
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Customer Name</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Contact Info</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Total Bookings</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.map((customer, i) => (
                <tr key={i} className="hover:bg-surface/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary font-bold border border-gray-100">
                        <User size={20} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-primary">{customer.name}</span>
                        <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">Member since 2024</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-secondary">
                      <Phone size={12} /> {customer.phone}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-secondary">
                      <Mail size={12} /> {customer.email}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-primary">{customer.bookings}</span>
                    <span className="text-xs text-secondary ml-1">Rentals</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      customer.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end">
                      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface text-secondary hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-100">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
