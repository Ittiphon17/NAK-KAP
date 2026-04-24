"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Locale } from "@/src/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [hoveredLocale, setHoveredLocale] = useState<Locale | null>(null);
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale: Locale =
    segments[0] === "th" || segments[0] === "en" ? segments[0] : locale;
  const indicatorLocale = hoveredLocale ?? currentLocale;

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const nextPath =
      segments.length > 0 && (segments[0] === "en" || segments[0] === "th")
        ? `/${newLocale}${segments.length > 1 ? `/${segments.slice(1).join("/")}` : ""}`
        : `/${newLocale}${pathname === "/" ? "" : pathname}`;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    // Use URL navigation to guarantee a full rerender with locale as source of truth.
    window.location.assign(nextPath || `/${newLocale}`);
  };

  return (
    <div
      className="relative inline-grid grid-cols-2 rounded-full border border-gray-200 bg-white p-1 text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      role="group"
      aria-label="Switch language"
    >
      <span
        className={`absolute left-1 top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-primary transition-transform duration-300 ease-out ${
          indicatorLocale === "en"
            ? "translate-x-[calc(100%+0.25rem)]"
            : "translate-x-0"
        }`}
        aria-hidden="true"
      />
      <button
        type="button"
        onMouseEnter={() => setHoveredLocale("th")}
        onMouseLeave={() => setHoveredLocale(null)}
        onClick={() => switchLanguage("th")}
        className={`relative z-10 rounded-full px-3 py-1 transition-colors ${
          indicatorLocale === "th" ? "text-white" : "text-secondary"
        }`}
      >
        TH
      </button>
      <button
        type="button"
        onMouseEnter={() => setHoveredLocale("en")}
        onMouseLeave={() => setHoveredLocale(null)}
        onClick={() => switchLanguage("en")}
        className={`relative z-10 rounded-full px-3 py-1 transition-colors ${
          indicatorLocale === "en" ? "text-white" : "text-secondary"
        }`}
      >
        EN
      </button>
    </div>
  );
}
