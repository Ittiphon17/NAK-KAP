import { Button } from "@/src/components/ui/Button";
import { Check, X, FileText, User } from "lucide-react";
import Image from "next/image";
import { cars } from "@/src/data/cars";

export default function AdminBookingsPage() {
  const bookings = [
    { id: "BK-8291", customer: { name: "John Smith", email: "john@ex.com" }, car: cars[0], dates: "Apr 23 - Apr 25", price: "$500", status: "Pending" },
    { id: "BK-8292", customer: { name: "Sarah Chen", email: "sarah@ex.com" }, car: cars[1], dates: "Apr 24 - Apr 28", price: "$1,400", status: "Approved" },
    { id: "BK-8293", customer: { name: "James Bond", email: "007@mi6.com" }, car: cars[2], dates: "May 01 - May 05", price: "$1,500", status: "Cancelled" },
    { id: "BK-8294", customer: { name: "Lara Croft", email: "lara@ex.com" }, car: cars[5], dates: "Apr 20 - Apr 22", price: "$800", status: "Completed" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-2">Booking Management</h1>
        <p className="text-secondary">Approve or manage customer car rental requests.</p>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface">
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Order ID</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Customer</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Car Model</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Rental Period</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-surface/50 transition-colors group">
                  <td className="px-8 py-6 text-sm font-bold text-primary">{booking.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-surface rounded-full flex items-center justify-center text-secondary border border-gray-100">
                        <User size={16} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-primary">{booking.customer.name}</span>
                        <span className="text-[10px] text-secondary font-medium tracking-wider">{booking.customer.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                        <Image src={booking.car.images[0]} alt={booking.car.name} fill className="object-cover" />
                      </div>
                      <span className="text-sm font-medium text-primary">{booking.car.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="block text-sm font-bold text-primary">{booking.dates}</span>
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-widest">{booking.price} Total</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      booking.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' :
                      booking.status === 'Pending' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' :
                      booking.status === 'Cancelled' ? 'bg-red-50 text-red-600 border-red-100' :
                      'bg-blue-50 text-blue-600 border-blue-100'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                       {booking.status === 'Pending' && (
                         <>
                           <button title="Approve" className="w-9 h-9 flex items-center justify-center rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm border border-green-100">
                             <Check size={16} />
                           </button>
                           <button title="Cancel" className="w-9 h-9 flex items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm border border-red-100">
                             <X size={16} />
                           </button>
                         </>
                       )}
                       <button title="View Details" className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface text-secondary hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-100">
                         <FileText size={16} />
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
