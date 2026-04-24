"use client";

import { Button } from "../ui/Button";
import { Dictionary } from "@/src/types/i18n";

interface SearchFormProps {
  dict: Dictionary;
}

export function SearchForm({ dict }: SearchFormProps) {
  return (
    <div className="w-full max-w-5xl mx-auto glass-card rounded-huge p-6 md:p-8 translate-y-[-50%] shadow-2xl">
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-wider">{dict.search.pickupLocation}</label>
          <input 
            type="text" 
            placeholder={dict.search.pickupPlaceholder}
            className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-wider">{dict.search.pickupDate}</label>
          <input 
            type="date" 
            className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-wider">{dict.search.returnDate}</label>
          <input 
            type="date" 
            className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-wider">{dict.search.carType}</label>
          <select className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all appearance-none cursor-pointer">
            {dict.search.carTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <Button size="md" variant="primary" className="w-full font-bold">
          {dict.search.search}
        </Button>
      </form>
    </div>
  );
}
