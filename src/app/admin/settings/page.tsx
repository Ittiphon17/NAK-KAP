"use client";

import { Button } from "@/src/components/ui/Button";
import { Save, Bell, Globe, Shield, CreditCard } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-2">Settings</h1>
        <p className="text-secondary">Configure your business details and application preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <h3 className="text-lg font-bold text-primary mb-2">Business Profile</h3>
          <p className="text-sm text-secondary leading-relaxed">Update your public business information used across the platform and invoices.</p>
        </div>
        <div className="col-span-2 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Business Name</label>
              <input type="text" defaultValue="NAK KAP" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Default Currency</label>
              <select className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent appearance-none">
                <option>USD ($)</option>
                <option>THB (฿)</option>
                <option>EUR (€)</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Support Email</label>
            <input type="email" defaultValue="support@nakdrive.com" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Support Phone</label>
            <input type="tel" defaultValue="+66 2 123 4567" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <h3 className="text-lg font-bold text-primary mb-2">App Preferences</h3>
          <p className="text-sm text-secondary leading-relaxed">Manage how the booking system behaves and notification settings.</p>
        </div>
        <div className="col-span-2 space-y-4">
           {[
             { title: "Booking Approval Mode", desc: "Automatically approve all booking requests.", icon: Shield, active: false },
             { title: "Email Notifications", desc: "Receive emails for every new booking request.", icon: Bell, active: true },
             { title: "Bilingual Mode", desc: "Enable Thai language support on public website.", icon: Globe, active: true },
             { title: "Bank Transfer Payment", desc: "Allow customers to pay via bank transfer.", icon: CreditCard, active: true },
           ].map((pref, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-primary border border-gray-50">
                    <pref.icon size={18} />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-primary">{pref.title}</h4>
                   <p className="text-xs text-secondary">{pref.desc}</p>
                 </div>
               </div>
               <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${pref.active ? 'bg-accent' : 'bg-gray-200'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${pref.active ? 'translate-x-6' : 'translate-x-0'}`} />
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t border-gray-100">
        <Button variant="primary" className="flex items-center gap-2 px-10">
          <Save size={18} /> Save Settings
        </Button>
      </div>
    </div>
  );
}
