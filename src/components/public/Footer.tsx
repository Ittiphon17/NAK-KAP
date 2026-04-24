import Link from "next/link";
import { Locale, withLocale } from "@/src/lib/i18n";
import { Dictionary } from "@/src/types/i18n";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href={withLocale(locale, "/")} className="inline-block mb-6">
            <span className="text-2xl font-bold tracking-tight text-primary">
              NAK <span className="text-accent">KAP</span>
            </span>
          </Link>
          <p className="text-secondary text-sm leading-relaxed mb-8">
            {dict.footer.description}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">{dict.nav.home}</h4>
          <ul className="space-y-4">
            <li><Link href={withLocale(locale, "/cars")} className="text-secondary text-sm hover:text-accent transition-colors">{dict.nav.cars}</Link></li>
            <li><Link href={withLocale(locale, "/about")} className="text-secondary text-sm hover:text-accent transition-colors">{dict.nav.about}</Link></li>
            <li><Link href={withLocale(locale, "/contact")} className="text-secondary text-sm hover:text-accent transition-colors">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">{dict.footer.support}</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-secondary text-sm hover:text-accent transition-colors">{dict.footer.helpCenter}</Link></li>
            <li><Link href="#" className="text-secondary text-sm hover:text-accent transition-colors">{dict.footer.termsOfService}</Link></li>
            <li><Link href="#" className="text-secondary text-sm hover:text-accent transition-colors">{dict.footer.privacyPolicy}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">{dict.footer.contact}</h4>
          <ul className="space-y-4">
            <li className="text-secondary text-sm">support@nakdrive.com</li>
            <li className="text-secondary text-sm">+66 2 123 4567</li>
            <li className="text-secondary text-sm">{dict.footer.location}</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-secondary text-xs">
          © {new Date().getFullYear()} <strong>NAK KAP</strong>. {dict.footer.allRightsReserved}
        </p>
        <div className="flex items-center gap-6">
          {/* Social Icons would go here */}
          <span className="text-secondary text-xs cursor-pointer hover:text-accent transition-colors">Instagram</span>
          <span className="text-secondary text-xs cursor-pointer hover:text-accent transition-colors">Twitter</span>
          <span className="text-secondary text-xs cursor-pointer hover:text-accent transition-colors">Facebook</span>
        </div>
      </div>
    </footer>
  );
}
