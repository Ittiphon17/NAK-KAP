import Image from "next/image";
import { Car } from "../../types";
import { Button } from "../ui/Button";
import { Locale, withLocale } from "@/src/lib/i18n";
import { Dictionary } from "@/src/types/i18n";

interface CarCardProps {
  car: Car;
  dict: Dictionary;
  locale: Locale;
}

export function CarCard({ car, dict, locale }: CarCardProps) {
  return (
    <div className="luxury-card overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={car.images[0]} 
          alt={car.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
          {car.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-primary mb-1">{car.name}</h3>
            <p className="text-secondary text-sm">{car.brand} {car.model}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-accent">${car.pricePerDay}</span>
            <span className="text-secondary text-xs block">{dict.common.perDay}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-gray-50">
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-secondary block mb-1">{dict.common.transmission}</span>
            <span className="text-xs font-semibold text-primary">{car.transmission === 'Automatic' ? 'AT' : 'MT'}</span>
          </div>
          <div className="text-center border-x border-gray-100">
            <span className="text-[10px] uppercase font-bold text-secondary block mb-1">{dict.common.seats}</span>
            <span className="text-xs font-semibold text-primary">{car.seats}</span>
          </div>
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-secondary block mb-1">{dict.common.fuel}</span>
            <span className="text-xs font-semibold text-primary">{car.fuel}</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1" href={withLocale(locale, `/car-detail/${car.slug}`)}>
            {dict.common.viewDetails}
          </Button>
          <Button variant="primary" size="sm" className="flex-1">
            {dict.common.rentNow}
          </Button>
        </div>

      </div>
    </div>
  );
}
