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
      {/* Add the Meta Pixel script */}
      <Script
        id="facebook-pixel-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
        }}
      />
      <body>
        {/* Add Google Tag Manager */}
        <GoogleTagManager gtmId="G-FP2BQV8C52" />

        <ScrollToTop />
        <Header {...headerContent} />
        <main>{children}</main>
        <Footer {...footerContent} />

        {/* Add noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
