import Image from "next/image";
import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { SearchForm } from "@/src/components/public/SearchForm";
import { CarCard } from "@/src/components/public/CarCard";
import { Button } from "@/src/components/ui/Button";
import { getDictionary, getCurrentLocale, withLocale } from "@/src/lib/i18n";
import { cars } from "@/src/data/cars";

export default async function HomePage() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);
  const featuredCars = cars.filter(car => car.status === "Available").slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Car"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 px-6">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 leading-[1.1]">
              {dict.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-10 max-w-lg leading-relaxed">
              {dict.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="primary" href={withLocale(locale, "/cars")}>
                {dict.hero.cta}
              </Button>
              <Button size="lg" variant="outline" href={withLocale(locale, "/about")}>
                {dict.nav.about}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="relative z-20 px-6">
        <SearchForm dict={dict} />
      </div>

      {/* Featured Cars Section */}
      <section className="py-32 bg-white">
        <div className="container-custom px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{dict.home.featuredTitle}</h2>
              <p className="text-secondary max-w-md">{dict.home.featuredSubtitle}</p>
            </div>
            <Button variant="ghost" className="text-accent font-bold" href={withLocale(locale, "/cars")}>
              {dict.home.viewAllCars} →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} dict={dict} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-surface">
        <div className="container-custom px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{dict.home.whyTitle}</h2>
            <p className="text-secondary max-w-2xl mx-auto">{dict.home.whySubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Affordable Price", desc: "Premium experience without the hidden costs." },
              { title: "Premium Vehicles", desc: "Only the latest models from top luxury brands." },
              { title: "Easy Booking", desc: "Seamless digital experience from start to finish." },
              { title: "24/7 Support", desc: "Expert assistance whenever and wherever you need it." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-gray-50 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent font-bold text-2xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Clients Speak</h2>
              <p className="text-secondary mb-10 leading-relaxed">Trusted by thousands of satisfied customers around the globe.</p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => <span key={i} className="text-gold text-2xl">★</span>)}
              </div>
              <p className="mt-2 font-bold text-primary">5.0 Average Rating</p>
            </div>
            
            <div className="w-full md:w-2/3 flex gap-8">
              {[
                { name: "John Smith", role: "CEO at TechFlow", text: "Best car rental experience I've had. The Model S was pristine and the service was impeccable." },
                { name: "Sarah Chen", role: "Designer", text: "The booking process was so smooth. Highly recommend <strong>NAK KAP</strong> for anyone looking for quality." }
              ].map((test, i) => (
                <div key={i} className="flex-1 bg-surface p-10 rounded-[28px] border border-gray-100">
                  <p className="text-primary italic mb-8 leading-relaxed">&ldquo;{test.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-primary">{test.name}</p>
                    <p className="text-secondary text-xs">{test.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container-custom px-6">
          <div className="bg-primary rounded-[40px] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Book Your <strong>Dream Car</strong> Today
              </h2>
              <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
                Join the waitlist or book your next <strong>premium vehicle</strong> now. Experience the future of driving with <strong>NAK KAP</strong>.
              </p>
              <Button size="lg" variant="gold" className="px-12 py-5 text-xl">
                {dict.nav.bookNow}
              </Button>
            </div>
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
