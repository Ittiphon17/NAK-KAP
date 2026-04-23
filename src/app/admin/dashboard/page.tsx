import { StatCard } from "@/src/components/admin/StatCard";
import { 
  Car, 
  CalendarCheck, 
  Users, 
  DollarSign,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cars } from "@/src/data/cars";

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Overview</h1>
          <p className="text-secondary">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 text-sm font-medium text-primary flex items-center gap-2">
            <span>Last 30 Days</span>
            <span className="text-secondary">▾</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Cars" 
          value="45" 
          change="+2" 
          trend="up" 
          icon={Car} 
        />
        <StatCard 
          label="Active Bookings" 
          value="12" 
          change="+5%" 
          trend="up" 
          icon={CalendarCheck} 
        />
        <StatCard 
          label="Total Customers" 
          value="1,284" 
          change="+18" 
          trend="up" 
          icon={Users} 
        />
        <StatCard 
          label="Monthly Revenue" 
          value="$24,500" 
          change="-2%" 
          trend="down" 
          icon={DollarSign} 
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-bold text-primary">Recent Bookings</h3>
            <Link href="/admin/bookings" className="text-accent text-sm font-bold flex items-center gap-2 hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface">
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Car</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Customer</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Date</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { car: cars[0], customer: "Alex Mercer", date: "Apr 23 - Apr 25", status: "Approved", price: "$500" },
                  { car: cars[1], customer: "Sarah Connor", date: "Apr 24 - Apr 28", status: "Pending", price: "$1,400" },
                  { car: cars[2], customer: "James Bond", date: "Apr 22 - Apr 23", status: "Completed", price: "$300" },
                  { car: cars[5], customer: "Natasha Romanoff", date: "Apr 25 - Apr 30", status: "Approved", price: "$2,000" },
                ].map((booking, i) => (
                  <tr key={i} className="hover:bg-surface/50 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-gray-100">
                          <Image src={booking.car.images[0]} alt={booking.car.name} fill className="object-cover" />
                        </div>
                        <span className="text-sm font-bold text-primary">{booking.car.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm text-primary font-medium">{booking.customer}</td>
                    <td className="px-8 py-5 text-sm text-secondary">{booking.date}</td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        booking.status === 'Approved' ? 'bg-green-50 text-green-600' :
                        booking.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-primary">{booking.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet Breakdown */}
        <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-8">Fleet Status</h3>
          <div className="space-y-8">
             <div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="font-medium text-secondary">Available</span>
                 <span className="font-bold text-primary">32</span>
               </div>
               <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-[70%]" />
               </div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="font-medium text-secondary">Rented</span>
                 <span className="font-bold text-primary">12</span>
               </div>
               <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                 <div className="h-full bg-accent w-[25%]" />
               </div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="font-medium text-secondary">Maintenance</span>
                 <span className="font-bold text-primary">1</span>
               </div>
               <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-500 w-[5%]" />
               </div>
             </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <p className="text-secondary text-sm mb-6">Popular this week</p>
            <div className="flex justify-center -space-x-3">
              {cars.slice(0, 4).map((car, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative">
                   <Image src={car.images[0]} alt={car.name} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
