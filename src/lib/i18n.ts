import { cookies, headers } from "next/headers";
import { Dictionary } from "@/src/types/i18n";

export const locales = ["en", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  th: () => import("./dictionaries/th.json").then((module) => module.default),
};

export const hasLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]() as Promise<Dictionary>;
};

export const getCurrentLocale = async () => {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-locale");
  if (headerLocale && hasLocale(headerLocale)) {
    return headerLocale;
  }

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && hasLocale(cookieLocale)) {
    return cookieLocale;
  }

  return defaultLocale;
};

export const withLocale = (locale: Locale, path: string) => {
  if (!path.startsWith("/")) return `/${locale}/${path}`;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
};
