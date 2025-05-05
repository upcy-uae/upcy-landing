import { DM_Sans, Figtree, Plus_Jakarta_Sans } from "next/font/google";
import "@/src/assets/styles/globals.css";
import Header from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import "animate.css";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { GoogleTagManager } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { initPixel } from "@/src/utils/pixel";
import Script from "next/script";

// Initialize Meta Pixel on the client
if (typeof window !== "undefined") {
  initPixel();
}

// FONTS
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-figtree",
});

// Metada
export const metadata = {
  title: "Upcy",
  description: "The best way to recycle your old clothes",
};

export default function LocaleLayout({ children, params: { locale } }) {
  const tHeader = useTranslations("header");
  const tFooter = useTranslations("footer");
  const headerContent = {
    logoAlt: tHeader("logoAlt"),
    links: [
      { to: "/", text: tHeader("home") },
      // { to: "/customers", text: tHeader("customers") },
      // { to: "/property-managers", text: tHeader("properties") },
      // { to: "/restaurant-laundry-solutions", text: tHeader("restaurant") },
      // { to: "/pickup-laundry", text: tHeader("signUpPickup") },
      // { to: "/our-location", text: tHeader("shop") },
      // { to: "/about-us", text: tHeader("aboutUs") },
    ],
    selectLanguage: tHeader("selectLanguage"),
    contact: tHeader("contact"),
    visitShop: tHeader("visitShop"),
    signUpPickup: tHeader("signUpPickup"),
  };
  const footerContent = {
    heading: tFooter("heading"),
    subHeading: tFooter("subHeading"),
    links: [
      { to: "/", text: tHeader("home") },
      { to: "/customers", text: tHeader("customers") },
      { to: "/property-managers", text: tHeader("properties") },
      { to: "/restaurant-laundry-solutions", text: tHeader("restaurant") },
      { to: "/pickup-laundry", text: tHeader("signUpPickup") },
      { to: "/about-us", text: tHeader("aboutUs") },
      { to: "/our-location", text: tHeader("shop") },
    ],
  };

  return (
    <html
      lang={locale}
      className={`${plus_jakarta_sans.variable} ${dm_sans.variable} ${figtree.variable}`}
    >
      <body>
        {/* Add Google Tag Manager */}
        {/* <GoogleTagManager gtmId="G-FP2BQV8C52" /> */}

        <ScrollToTop />
        <Header {...headerContent} />
        <main>{children}</main>
        <Footer {...footerContent} />
      </body>
    </html>
  );
}
