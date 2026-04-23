import { Button } from "@/src/components/ui/Button";
import { cars } from "@/src/data/cars";
import { Plus, Search, Edit2, Trash2, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function AdminCarsPage() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Cars Management</h1>
          <p className="text-secondary">Manage your luxury fleet and pricing details.</p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus size={18} /> Add New Car
        </Button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4 bg-surface rounded-xl px-4 py-2 w-96">
          <Search size={18} className="text-secondary" />
          <input 
            type="text" 
            placeholder="Search by car name, brand, or model..." 
            className="bg-transparent border-none text-sm focus:ring-0 w-full"
          />
        </div>
        <div className="flex gap-3">
          <select className="bg-surface border-none rounded-xl px-4 py-2 text-sm font-medium text-primary focus:ring-2 focus:ring-accent appearance-none cursor-pointer">
            <option>All Types</option>
            <option>Luxury</option>
            <option>Electric</option>
          </select>
          <select className="bg-surface border-none rounded-xl px-4 py-2 text-sm font-medium text-primary focus:ring-2 focus:ring-accent appearance-none cursor-pointer">
            <option>All Statuses</option>
            <option>Available</option>
            <option>Rented</option>
            <option>Maintenance</option>
          </select>
        </div>
      </div>

      {/* Cars Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface">
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Car Model</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Type / Brand</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Price / Day</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-secondary uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {cars.map((car) => (
                <tr key={car.id} className="hover:bg-surface/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-10 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <Image src={car.images[0]} alt={car.name} fill className="object-cover" />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-primary">{car.name}</span>
                        <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">{car.model}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="block text-sm font-medium text-primary">{car.brand}</span>
                    <span className="text-xs text-secondary">{car.type}</span>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-primary">${car.pricePerDay}</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      car.status === 'Available' ? 'bg-green-50 text-green-600 border-green-100' :
                      car.status === 'Rented' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                      'bg-yellow-50 text-yellow-600 border-yellow-100'
                    }`}>
                      {car.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-100">
                        <Edit2 size={16} />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface text-secondary hover:bg-accent hover:text-white transition-all shadow-sm border border-gray-100">
                        <ExternalLink size={16} />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm border border-gray-100">
                        <Trash2 size={16} />
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
