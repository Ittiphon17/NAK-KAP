import { cookies } from "next/headers";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  th: () => import("./dictionaries/th.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "th") => {
  return dictionaries[locale]();
};

export const getCurrentLocale = async () => {
  const cookieStore = await cookies();
  return (cookieStore.get("NEXT_LOCALE")?.value as "en" | "th") || "en";
};
