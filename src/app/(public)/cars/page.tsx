import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { CarCard } from "@/src/components/public/CarCard";
import { FilterSidebar } from "@/src/components/public/FilterSidebar";
import { getDictionary, getCurrentLocale } from "@/src/lib/i18n";
import { cars } from "@/src/data/cars";

export default async function CarsPage() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-surface">
        <div className="container-custom px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Explore Our Fleet</h1>
          <p className="text-secondary text-lg max-w-2xl">
            Choose from our curated collection of premium vehicles, from quiet electric flagships to roaring performance icons.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <FilterSidebar dict={dict} />
            </div>

            {/* Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-10">
                <p className="text-secondary text-sm">Showing <span className="text-primary font-bold">{cars.length}</span> luxury cars</p>
                <div className="flex items-center gap-4">
                  <span className="text-secondary text-sm">Sort by:</span>
                  <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cars.map(car => (
                  <CarCard key={car.id} car={car} dict={dict} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}
