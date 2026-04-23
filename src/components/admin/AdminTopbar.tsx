"use client";

import { Bell, Search, User } from "lucide-react";

export function AdminTopbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-40">
      <div className="flex items-center gap-4 bg-surface rounded-xl px-4 py-2 w-96 border border-gray-50">
        <Search size={18} className="text-secondary" />
        <input 
          type="text" 
          placeholder="Search for car, booking, or customer..." 
          className="bg-transparent border-none text-sm focus:ring-0 w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-secondary hover:text-primary transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            3
          </span>
        </button>
        
        <div className="h-8 w-px bg-gray-100" />
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-primary">Admin User</p>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Fleet Manager</p>
          </div>
          <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-primary font-bold border border-gray-100">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
