"use client";

import { Button } from "../ui/Button";

interface BookingFormProps {
  dict: any;
  carName: string;
  price: number;
}

export function BookingForm({ dict, carName, price }: BookingFormProps) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl sticky top-32">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Total Price</h3>
          <p className="text-3xl font-bold text-primary">${price}<span className="text-sm font-medium text-secondary"> / day</span></p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase">Pickup Location</label>
            <input type="text" placeholder="Select location" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase">Pickup Date</label>
              <input type="date" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase">Return Date</label>
              <input type="date" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-50 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase">Your Name</label>
            <input type="text" placeholder="Full name" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase">Phone Number</label>
            <input type="tel" placeholder="+66 00 000 0000" className="w-full bg-surface border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full font-bold pt-4">
          Book {carName} Now
        </Button>
        
        <p className="text-[10px] text-center text-secondary leading-relaxed">
          By clicking the button, you agree to our Terms & Conditions and Privacy Policy. Confirmation will be sent to your phone.
        </p>
      </form>
    </div>
  );
}
