"use client";

import React from "react";
import Lottie from "lottie-react";
import restaurants from "@/src/assets/animations/restaurants.json";
import { useLottieHeight } from "@/src/utils/useLottieHeight";

export const RestaurantCTA = ({
  heading,
  title,
  content1,
  content2,
  ctaButton,
}) => {
  const lottieHeight = useLottieHeight();

  return (
    <section className="pt-4 pb-8 px-8 md:px-24 lg:py-24 bg-gray-100">
      <div className="flex flex-wrap md:container md:mx-auto">
        {/* Animation Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="w-full mx-auto">
            <Lottie
              animationData={restaurants}
              style={{ height: lottieHeight }}
              setspeed={0.5}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-4">
          <p className="tracking-tight text-dd-green-200 font-bold mb-2">
            {heading}
          </p>
          <h1 className="font-heading tracking-tight text-black text-4xl md:text-6xl font-medium max-w-lg md:max-w-3xl mb-6">
            {title}
          </h1>
          <p className="tracking-tight text-gray-700 text-lg mb-2">
            {content1}
          </p>
          <p className="tracking-tight text-gray-700 text-lg mb-10 font-bold">
            {content2}
          </p>
          <a
            href="#"
            className="rounded-md bg-dd-green px-4 py-2 h-12 hover:bg-opacity-80 inline-flex items-center justify-center gap-2 transition duration-200 w-full  md:w-1/2"
          >
            <span className="text-white text-sm font-semibold tracking-tight uppercase">
              {ctaButton}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
