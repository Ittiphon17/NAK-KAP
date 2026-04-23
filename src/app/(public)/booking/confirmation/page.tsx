import { Navbar } from "@/src/components/public/Navbar";
import { Footer } from "@/src/components/public/Footer";
import { Button } from "@/src/components/ui/Button";
import { getDictionary, getCurrentLocale } from "@/src/lib/i18n";
import Link from "next/link";

export default async function ConfirmationPage() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      
      <section className="pt-40 pb-32">
        <div className="container-custom px-6 max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 text-4xl">
            ✓
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Booking request submitted successfully.</h1>
          <p className="text-secondary text-lg mb-12 leading-relaxed">
            Thank you for choosing <strong>NAK KAP</strong>. Our <strong>concierge team</strong> is reviewing your request and will contact you shortly to confirm the <strong>availability</strong> and final details.
          </p>


          <div className="bg-surface rounded-3xl p-10 text-left border border-gray-100 mb-12">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Booking Details</h3>
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <span className="block text-[10px] font-bold text-secondary uppercase">Order ID</span>
                <span className="font-bold text-primary">ND-82193</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-secondary uppercase">Status</span>
                <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-[10px] font-bold">PENDING APPROVAL</span>
              </div>
              <div className="col-span-2 border-t border-gray-50 pt-6">
                <span className="block text-[10px] font-bold text-secondary uppercase">Estimated Total</span>
                <span className="text-3xl font-bold text-accent">$750.00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-10" href="/cars">Back to Cars</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10" href="/">Return Home</Button>
          </div>

        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}
