"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

export function LanguageSwitcher({ locale }: { locale: "en" | "th" }) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "th" : "en";
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-semibold uppercase tracking-wider"
    >
      {locale === "en" ? "TH" : "EN"}
    </Button>
  );
}
