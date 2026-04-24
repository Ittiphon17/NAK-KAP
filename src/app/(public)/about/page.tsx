import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { getDictionary, getCurrentLocale } from "@/src/lib/i18n";
import Image from "next/image";

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />

      {/* Header */}
      <section className="pt-40 pb-32 bg-primary text-white">
        <div className="container-custom px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">{dict.aboutPage.title}</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Redefining the standard of <strong>luxury car rental</strong> since 2024. <strong>NAK KAP</strong> is built on a foundation of <strong>excellence</strong>, <strong>transparency</strong>, and <strong>style</strong>.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Car Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">{dict.aboutPage.visionTitle}</h2>
              <div className="space-y-6 text-secondary text-lg leading-relaxed">
                <p>
                  At <strong>NAK KAP</strong>, we believe that the journey is just as important as the destination. Founded with the mission to provide an <strong>unparalleled driving experience</strong>, we&apos;ve curated a fleet that represents the pinnacle of automotive engineering and design.
                </p>
                <p>
                  Whether you&apos;re seeking the <strong>silent innovation</strong> of an electric flagship or the <strong>raw power</strong> of a performance icon, our collection is meticulously maintained to ensure every mile is a memory.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <span className="block text-4xl font-bold text-accent mb-2">50+</span>
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">{dict.aboutPage.premiumCars}</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-gold mb-2">10k+</span>
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">{dict.aboutPage.happyClients}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-surface">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Curated Fleet", desc: "Every vehicle in our collection is hand-picked for its performance, style, and luxury features." },
              { title: "Transparent Service", desc: "No hidden fees, no surprises. What you see is what you pay, with premium insurance included." },
              { title: "City-to-Coast", desc: "Our flexibility allows you to explore everything from bustling city streets to scenic coastal roads." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-12 rounded-[32px] shadow-sm border border-gray-50">
                <h3 className="text-2xl font-bold text-primary mb-6">{value.title}</h3>
                <p className="text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
