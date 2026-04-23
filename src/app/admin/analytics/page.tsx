"use client";

import { BarChart3, TrendingUp, DollarSign, Calendar } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-2">Analytics</h1>
        <p className="text-secondary">Track your performance and growth trends.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Revenue", value: "$124,500.00", icon: DollarSign, color: "text-accent" },
          { label: "Avg. Booking Value", value: "$850.00", icon: TrendingUp, color: "text-green-500" },
          { label: "Completion Rate", value: "98.5%", icon: BarChart3, color: "text-gold" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-surface ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{stat.label}</p>
            <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-xl font-bold text-primary">Monthly Revenue</h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              <span className="text-[10px] font-bold text-secondary uppercase">2024 Revenue</span>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-4">
            {/* Visual Bar Chart using CSS */}
            {[40, 60, 45, 90, 65, 80, 55, 75, 40, 85, 70, 95].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group">
                <div 
                  className="w-full bg-surface group-hover:bg-accent transition-all rounded-t-lg relative" 
                  style={{ height: `${val}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${val}k
                  </div>
                </div>
                <span className="mt-4 text-[10px] font-bold text-secondary">M{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm h-[500px] flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-12">Most Rented Cars</h3>
          <div className="flex-1 space-y-8">
            {[
              { name: "Tesla Model S", rentals: 45, percentage: 85 },
              { name: "Porsche 911", rentals: 38, percentage: 70 },
              { name: "Mercedes S-Class", rentals: 32, percentage: 60 },
              { name: "Range Rover", rentals: 28, percentage: 50 },
              { name: "BMW M4", rentals: 22, percentage: 40 },
            ].map((car, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-primary">{car.name}</span>
                  <span className="text-xs font-bold text-secondary">{car.rentals} Bookings</span>
                </div>
                <div className="h-2 bg-surface rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-accent rounded-full transition-all duration-1000" 
                     style={{ width: `${car.percentage}%` }}
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
