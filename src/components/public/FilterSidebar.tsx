"use client";

import { Button } from "../ui/Button";

interface FilterSidebarProps {
  dict: any;
}

export function FilterSidebar({ dict }: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-72 space-y-10">
      <div>
        <h3 className="text-lg font-bold text-primary mb-6">Price Range</h3>
        <div className="space-y-4">
          <input type="range" className="w-full accent-accent" min="0" max="1000" />
          <div className="flex justify-between text-xs font-bold text-secondary">
            <span>$0</span>
            <span>$1,000+</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-6">Car Type</h3>
        <div className="space-y-3">
          {["All Types", "Sedan", "SUV", "Luxury", "Sports", "Electric"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-200 text-accent focus:ring-accent cursor-pointer" />
              <span className="text-sm text-secondary group-hover:text-primary transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-6">Transmission</h3>
        <div className="flex gap-2">
          {["Automatic", "Manual"].map((t) => (
            <button key={t} className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-medium text-secondary hover:border-accent hover:text-primary transition-all">
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-6">Seats</h3>
        <div className="grid grid-cols-2 gap-2">
          {["2 Seats", "4 Seats", "5 Seats", "7+ Seats"].map((s) => (
            <button key={s} className="py-3 border border-gray-200 rounded-xl text-sm font-medium text-secondary hover:border-accent hover:text-primary transition-all">
              {s}
            </button>
          ))}
        </div>
      </div>

      <Button variant="primary" className="w-full">
        Apply Filters
      </Button>
    </aside>
  );
}
