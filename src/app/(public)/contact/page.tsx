import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { Button } from "@/src/components/ui/Button";
import { getDictionary, getCurrentLocale } from "@/src/lib/i18n";

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      
      <section className="pt-40 pb-20">
        <div className="container-custom px-6 text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">{dict.contactPage.title}</h1>
          <p className="text-secondary text-xl max-w-2xl mx-auto">
            {dict.contactPage.subtitle}
          </p>
        </div>

        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { title: dict.contactPage.cards.emailTitle, detail: "concierge@nakdrive.com", action: dict.contactPage.cards.emailAction },
                { title: dict.contactPage.cards.callTitle, detail: "+66 2 123 4567", action: dict.contactPage.cards.callAction },
                { title: dict.contactPage.cards.visitTitle, detail: "123 Wireless Road, Lumpini, Bangkok", action: dict.contactPage.cards.visitAction }
              ].map((item, i) => (
                <div key={i} className="luxury-card p-10">
                  <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-xl font-bold text-primary mb-6">{item.detail}</p>
                  <Button variant="ghost" className="p-0 text-accent font-bold hover:bg-transparent">{item.action} →</Button>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-[40px] p-10 md:p-16 border border-gray-100">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase">{dict.contactPage.form.fullName}</label>
                      <input type="text" placeholder={dict.contactPage.form.fullNamePlaceholder} className="w-full bg-white border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase">{dict.contactPage.form.email}</label>
                      <input type="email" placeholder={dict.contactPage.form.emailPlaceholder} className="w-full bg-white border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase">{dict.contactPage.form.subject}</label>
                    <select className="w-full bg-white border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-accent appearance-none">
                       {dict.contactPage.form.subjectOptions.map((option) => (
                         <option key={option}>{option}</option>
                       ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase">{dict.contactPage.form.message}</label>
                    <textarea rows={6} placeholder={dict.contactPage.form.messagePlaceholder} className="w-full bg-white border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-accent resize-none"></textarea>
                  </div>
                  <Button variant="primary" size="lg" className="w-full md:w-auto px-12">
                     {dict.contactPage.form.sendMessage}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
