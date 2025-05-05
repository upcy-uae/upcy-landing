import { useTranslations } from "next-intl";
import { HeroHome } from "@/src/components/HeroHome";
import { MapThree } from "@/src/components/MapThree";
import { HeroAnimated } from "@/src/components/HeroAnimated";
import { AtentionBlock } from "@/src/components/AtentionBlock";
import { Maps } from "@/src/components/home/Maps";
import { UpcyHero } from "@/src/components/upcy-home/UpcyHero";
import logoDash from "@/src/assets/images/logos/logo-white.svg";
import location from "@/src/assets/images/about-section/location.jpeg";
import machines from "@/src/assets/images/about-section/machines.jpg";
import temperature from "@/src/assets/images/about-section/temperature.jpg";
import community from "@/src/assets/images/about-section/community.jpg";

import { Hero } from "@/src/components/home/Hero";
import { Solutions } from "@/src/components/home/Solutions";
import { Footer } from "@/src/components/Footer";

// New Work
import { IntroBlock } from "@/src/components/home/IntroBlock";
import { Services } from "@/src/components/home/Services";
import { Pricing } from "@/src/components/home/Pricing";
import { LaundryCTA } from "@/src/components/home/LaundryCta";
import { PropertiesCTA } from "@/src/components/home/PropertiesCta";
import { RestaurantCTA } from "@/src/components/home/RestaurantCta";

export default function Home() {
  const t = useTranslations("homePage");
  const tServices = useTranslations("services");
  const tPropertiesBlock = useTranslations("homePage.propertiesCTA");
  const tRestaurantBlock = useTranslations("homePage.restaurantCTA");
  const tLaundryBlock = useTranslations("homePage.laundryCTA");
  const tPricingBlock = useTranslations("homePage.pricing");

  const introBlock = {
    title: t("introBlock.title"),
    subtitle: t("introBlock.subtitle"),
    ctaButton: t("introBlock.ctaButton"),
  };
  const services = {
    heading: tServices("heading"),
    intro: tServices("intro"),
    shopCustomers: {
      title: tServices("shopCustomers.title"),
      content: tServices("shopCustomers.content"),
    },
    restaurants: {
      title: tServices("restaurants.title"),
      content: tServices("restaurants.content"),
    },
    pickupDelivery: {
      title: tServices("pickupDelivery.title"),
      content: tServices("pickupDelivery.content"),
    },
    properties: {
      title: tServices("properties.title"),
      content: tServices("properties.content"),
    },
  };

  const propertiesCTAContent = {
    heading: tPropertiesBlock("heading"),
    title: tPropertiesBlock("title"),
    content: tPropertiesBlock("content"),
    ctaButton: tPropertiesBlock("ctaButton"),
  };

  const restaurantCTAContent = {
    heading: tRestaurantBlock("heading"),
    title: tRestaurantBlock("title"),
    content1: tRestaurantBlock("content1"),
    content2: tRestaurantBlock("content2"),
    ctaButton: tRestaurantBlock("ctaButton"),
  };

  const laundryCTAContent = {
    heading: tLaundryBlock("heading"),
    title: tLaundryBlock("title"),
    content: tLaundryBlock("content"),
    ctaButton: tLaundryBlock("ctaButton"),
  };

  const pricingContent = {
    heading: tPricingBlock("heading"),
    title: tPricingBlock("title"),
    content: tPricingBlock("content"),
    reviewsHeading: tPricingBlock("reviewsHeading"),
    rating: tPricingBlock("rating"),
    reviewsCount: tPricingBlock("reviewsCount"),
    googleLinkText: tPricingBlock("googleLinkText"),
    scrollMessage: tPricingBlock("scrollMessage"),
    washer: tPricingBlock("washer"),
    dryer: tPricingBlock("dryer"),
    fdText: tPricingBlock("fidelityCardText"),
    cashCardText: tPricingBlock("cashCardText"),
    included: tPricingBlock("included"),
    heatOptions: tPricingBlock("heatOptions"),
    feats: tPricingBlock("feats"),
    dryerFeats: tPricingBlock("dryerFeats"),
    descriptionSmall: tPricingBlock("descriptionSM"),
    descriptionMedium: tPricingBlock("descriptionMD"),
    descriptionLarge: tPricingBlock("descriptionLG"),
    descriptionDryer: tPricingBlock("descriptionDryer"),
  };

  console.log(pricingContent);

  return (
    <>
      <UpcyHero />
      <IntroBlock {...introBlock} />
      <Services {...services} />
      <PropertiesCTA {...propertiesCTAContent} />
      <RestaurantCTA {...restaurantCTAContent} />
      <LaundryCTA {...laundryCTAContent} />
      <Pricing {...pricingContent} />
    </>
  );
}
