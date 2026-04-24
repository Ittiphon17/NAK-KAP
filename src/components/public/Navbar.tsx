import Link from "next/link";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Locale, withLocale } from "@/src/lib/i18n";
import { Dictionary } from "@/src/types/i18n";

interface NavbarProps {
  dict: Dictionary;
  locale: Locale;
}

export function Navbar({ dict, locale }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={withLocale(locale, "/")} className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-primary">
            NAK <span className="text-accent">KAP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href={withLocale(locale, "/")} className="text-sm font-medium text-secondary hover:text-primary transition-colors whitespace-nowrap">
            {dict.nav.home}
          </Link>
          <Link href={withLocale(locale, "/cars")} className="text-sm font-medium text-secondary hover:text-primary transition-colors whitespace-nowrap">
            {dict.nav.cars}
          </Link>
          <Link href={withLocale(locale, "/about")} className="text-sm font-medium text-secondary hover:text-primary transition-colors whitespace-nowrap">
            {dict.nav.about}
          </Link>
          <Link href={withLocale(locale, "/contact")} className="text-sm font-medium text-secondary hover:text-primary transition-colors whitespace-nowrap">
            {dict.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <LanguageSwitcher locale={locale} />
          <Link href="/admin" className="hidden sm:block text-sm font-medium text-secondary hover:text-primary transition-colors mr-2">
            {dict.nav.admin}
          </Link>
          <Button size="sm" variant="primary" href={withLocale(locale, "/booking")} className="whitespace-nowrap">
            {dict.nav.bookNow}
          </Button>
        </div>

      </div>
    </nav>
  );
}
