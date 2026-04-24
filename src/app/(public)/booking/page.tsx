import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { getDictionary, getCurrentLocale } from "@/src/lib/i18n";
import { BookingForm } from "@/src/components/public/BookingForm";
import { cars } from "@/src/data/cars";

export default async function BookingPage() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);
  // Default to first car for demonstration if no selection
  const defaultCar = cars[0];

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      
      <section className="pt-40 pb-32 bg-surface">
        <div className="container-custom px-6 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">{dict.bookingPage.title}</h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {dict.bookingPage.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom px-6">
          <div className="max-w-4xl mx-auto">
            <BookingForm dict={dict} carName={defaultCar.name} price={defaultCar.pricePerDay} />
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
