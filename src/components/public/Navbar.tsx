import Link from "next/link";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  dict: any;
  locale: "en" | "th";
}

export function Navbar({ dict, locale }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-primary">
            NAK <span className="text-accent">KAP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            {dict.nav.home}
          </Link>
          <Link href="/cars" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            {dict.nav.cars}
          </Link>
          <Link href="/about" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            {dict.nav.about}
          </Link>
          <Link href="/contact" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            {dict.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <Link href="/admin" className="hidden sm:block text-sm font-medium text-secondary hover:text-primary transition-colors mr-2">
            {dict.nav.admin}
          </Link>
          <Button size="sm" variant="primary" href="/booking">
            {dict.nav.bookNow}
          </Button>
        </div>

      </div>
    </nav>
  );
}
