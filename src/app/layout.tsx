import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Outfit, Bai_Jamjuree } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  variable: "--font-bai-jamjuree",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NAK KAP | Premium Car Rental",
  description: "Luxury, Comfort, and Convenience. Rent your perfect car with NAK KAP.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return (
    <html lang={locale}>
      <body className={`${outfit.variable} ${baiJamjuree.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}