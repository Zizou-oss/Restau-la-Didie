import type { Metadata } from "next";
import { Geist, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LA DIDIE — Une saveur tropicale au goût magique | Pissy",
  description:
    "Restaurant LA DIDIE à Pissy : fast-food, desserts, jus locaux et boissons. Une saveur tropicale au goût magique ! Commandez au +226 05 89 05 95.",
  openGraph: {
    title: "LA DIDIE — Une saveur tropicale au goût magique",
    description:
      "Restaurant à Pissy : sandwichs, burgers maison, jus de bissap et de gingembre, desserts. Commandez maintenant !",
    images: ["/logo.jpg"],
    locale: "fr_BF",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
