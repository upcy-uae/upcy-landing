import React from "react";
import {
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export const Pricing = ({
  heading,
  title,
  content,
  reviewsHeading,
  rating,
  reviewsCount,
  googleLinkText,
  scrollMessage,
  washer,
  dryer,
  included,
  heatOptions,
  feats,
  dryerFeats,
  descriptionSmall,
  descriptionMedium,
  descriptionLarge,
  descriptionDryer,
  fdText,
  cashCardText,
}) => {
  const googleReviewsLink =
    "https://www.google.com/search?sca_esv=f490e4515d851bb1&sca_upv=1&rlz=1C5CHFA_enES885ES885&sxsrf=ADLYWIJDO92bDHMIKx4n8DBqb11duKSSkg:1727695030928&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dMRj0cT-7tAXSZR8GQf4yu2nUHNTlgKlX4B41CkWdbRGGfPKz7T2ymF5f3naztwa8mUhN28inEEhlR8JvpKRq3HtRE8mTP4x-nCixahaNIJX_Tj1e&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7oO3Ih--WTuljMNew61AZfB2WfXyQqy5niGp0_GPX34oHQs_zCDb-F94GLFmSXOSO-KpNK4%3D&q=Dash+and+Dry+Reviews&sa=X&ved=2ahUKEwjW2eTExeqIAxWYefEDHbNGOwUQ3PALegQIURAF&biw=1680&bih=938&dpr=2";

  const featsArray = feats.split(",").slice(0, 3);

  const dryerFeatsArray = dryerFeats.split(",").slice(0, 4);

  console.log(fdText);

  return (
    <section className="px-8 md:px-24 py-14 lg:py-32 bg-gray-100">
      <div className="flex flex-wrap md:container md:mx-auto">
        <div className="w-full lg:w-1/3 p-4">
          <p className="tracking-tight text-dd-green-200 font-bold mb-2">
            {heading}
          </p>
          <h1 className="font-heading tracking-tight text-4xl md:text-6xl font-medium mb-6 max-w-xs md:max-w-lg">
            {title}
          </h1>
          <p className="tracking-tight text-gray-700 text-lg max-w-md mb-2 lg:mb-20">
            {content}
          </p>
          <p className="tracking-tight text-lg font-semibold mb-2">
            {reviewsHeading}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center">
              <StarIcon className="w-5 h-5 text-dd-green-200" />
              <StarIcon className="w-5 h-5 text-dd-green-200" />
              <StarIcon className="w-5 h-5 text-dd-green-200" />
              <StarIcon className="w-5 h-5 text-dd-green-200" />
              <StarIcon className="w-5 h-5 text-dd-green-200" />
            </div>
            <p className="tracking-tight font-medium">{rating}</p>
            <p className="tracking-tight text-gray-500 font-medium">
              {reviewsCount}
            </p>
            <a
              href={googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dd-green-200 underline hover:text-dd-green-300 "
            >
              {googleLinkText}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-2/3 md:p-4">
          <div className="flex lg:justify-end">
            <div className="overflow-x-auto">
              <div className="flex gap-6">
                <Card
                  title={`${washer} - 12KG`}
                  description={descriptionSmall}
                  priceCash="6€"
                  priceFidelity="4.5€"
                  features={featsArray}
                  includedText={included}
                  cashCard={cashCardText}
                  fidelityCardPlacer={fdText}
                />
                <Card
                  title={`${washer} - 16KG`}
                  description={descriptionMedium}
                  priceCash="7€"
                  priceFidelity="5.5€"
                  features={featsArray}
                  fidelityCardPlacer={fdText}
                  includedText={included}
                  cashCard={cashCardText}
                />
                <Card
                  title={`${washer} - 20KG`}
                  description={descriptionLarge}
                  priceCash="8.5€"
                  priceFidelity="6.5€"
                  features={featsArray}
                  includedText={included}
                  fidelityCardPlacer={fdText}
                  cashCard={cashCardText}
                />
                <Card
                  title={`${dryer} - 18KG`}
                  description={descriptionDryer}
                  priceCash="5€"
                  priceFidelity="3.5€"
                  features={dryerFeatsArray}
                  includedText={heatOptions}
                  fidelityCardPlacer={fdText}
                  cashCard={cashCardText}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start lg:justify-end mt-4 ">
            <h2 className="text-right mr-3 font-bold">{scrollMessage}</h2>
            <ArrowRightIcon className="w-6 h-6  text-dd-green-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
export const Card = ({
  title,
  description,
  priceCash,
  priceFidelity,
  features,
  includedText,
  cashCard,
  fidelityCardPlacer,
  heatOptions,
}) => {
  return (
    <div className="w-80 flex-shrink-0 ">
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <p className="tracking-tight text-xl md:text-left font-semibold text-center">
          {title}
        </p>
        <p className="tracking-tight text-gray-500 md:text-left text-center mb-7">
          {description}
        </p>
        <h2 className="font-heading tracking-tight mb-1">
          <span className="font-medium text-5xl">{priceCash}</span>{" "}
          <span className="text-lg"> {cashCard}</span>
        </h2>
        <h2 className="font-heading tracking-tight mb-1">
          <span className="font-medium text-5xl">{priceFidelity}</span>{" "}
          <span className="text-lg"> {fidelityCardPlacer}</span>
        </h2>
        <h4 className="tracking-tight text-black my-2 font-medium">
          {title.includes("Washer") ? includedText : heatOptions}
        </h4>
        <ul className="tracking-tight text-black text-md mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0">
                <CheckCircleIcon className="w-5 h-5 text-dd-green-200" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
