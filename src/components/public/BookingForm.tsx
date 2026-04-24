"use client";

import { Button } from "../ui/Button";
import { Dictionary } from "@/src/types/i18n";

interface BookingFormProps {
  dict: Dictionary;
  carName: string;
  price: number;
}

export function BookingForm({ dict, carName, price }: BookingFormProps) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl sticky top-32">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">{dict.bookingForm.totalPrice}</h3>
          <p className="text-3xl font-bold text-primary">${price}<span className="text-sm font-medium text-secondary"> {dict.common.perDay}</span></p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase">{dict.bookingForm.pickupLocation}</label>
            <input type="text" placeholder={dict.bookingForm.pickupLocationPlaceholder} className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase">{dict.bookingForm.pickupDate}</label>
              <input type="date" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase">{dict.bookingForm.returnDate}</label>
              <input type="date" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-50 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase">{dict.bookingForm.yourName}</label>
            <input type="text" placeholder={dict.bookingForm.yourNamePlaceholder} className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase">{dict.bookingForm.phoneNumber}</label>
            <input type="tel" placeholder="+66 00 000 0000" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full font-bold pt-4">
          {dict.bookingForm.bookNow.replace("{{carName}}", carName)}
        </Button>
        
        <p className="text-[10px] text-center text-secondary leading-relaxed">
          {dict.bookingForm.terms}
        </p>
      </form>
    </div>
  );
}
