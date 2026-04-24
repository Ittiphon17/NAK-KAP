import Image from "next/image";
import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { BookingForm } from "@/src/components/public/BookingForm";
import { getDictionary, getCurrentLocale } from "@/src/lib/i18n";
import { cars } from "@/src/data/cars";
import { notFound } from "next/navigation";

export default async function CarDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      
      <section className="pt-32 pb-20">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content: Car Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Gallery */}
              <div className="space-y-6">
                <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                  <Image 
                    src={car.images[0]} 
                    alt={car.name} 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur px-6 py-2 rounded-full text-sm font-bold text-primary shadow-lg uppercase tracking-widest">
                      {car.brand}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 h-64">
                   <div className="relative rounded-[32px] overflow-hidden shadow-xl">
                      <Image src={car.images[1] || car.images[0]} alt={car.name} fill className="object-cover" />
                   </div>
                   <div className="relative rounded-[32px] overflow-hidden shadow-xl group cursor-pointer">
                      <Image src={car.images[0]} alt={car.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold tracking-widest text-sm">{dict.carDetailPage.viewAllPhotos}</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Specs */}
              <div>
                <h1 className="text-5xl font-bold text-primary mb-2">{car.name}</h1>
                <p className="text-xl text-secondary mb-10">{car.brand} {car.model} — {car.year}</p>
                
                <p className="text-secondary leading-relaxed text-lg mb-12 max-w-3xl">
                  {car.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100">
                  {[
                    { label: dict.common.transmission, value: car.transmission },
                    { label: dict.common.fuel, value: car.fuel },
                    { label: dict.common.seats, value: `${car.seats}` },
                    { label: dict.carDetailPage.mileage, value: car.mileage },
                  ].map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[10px] items-center font-bold text-secondary uppercase tracking-widest mb-2">{spec.label}</span>
                      <span className="text-lg font-bold text-primary">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-primary mb-8">{dict.carDetailPage.premiumFeatures}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-gray-50">
                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">✓</div>
                        <span className="text-primary font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Sidebar Booking */}
            <div className="lg:col-span-1">
              <BookingForm dict={dict} carName={car.name} price={car.pricePerDay} />
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
