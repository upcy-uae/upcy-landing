"use client";

import React from "react";
import Lottie from "lottie-react";
import delivery from "@/src/assets/animations/delivery.json";
import { useLottieHeight } from "@/src/utils/useLottieHeight";

export const LaundryCTA = ({ heading, title, content, ctaButton }) => {
  const lottieHeight = useLottieHeight();

  return (
    <section className="pt-4 pb-8 px-8 md:px-24 lg:pt-16 lg:pb-8 bg-dd-green-200 relative">
      <div className="flex flex-wrap-reverse md:flex-wrap md:container md:mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-4 md:px-4 md:py-16">
          <p className="tracking-tight text-white font-bold mb-2">{heading}</p>
          <h1 className="font-heading tracking-tight text-white text-4xl md:text-6xl font-medium max-w-lg md:max-w-3xl mb-6">
            {title}
          </h1>
          <p className="tracking-tight text-white text-lg mb-10">{content}</p>
          {/* CTA to Sign Up for Pickup Service */}
          <a
            href="#"
            className="rounded-md bg-white border py-2 h-12 inline-flex items-center justify-center gap-2 transition duration-200 w-full hover:bg-opacity-80 text-dd-green-200  md:w-1/2"
          >
            <span className="text-sm font-medium tracking-tight uppercase">
              {ctaButton}
            </span>
          </a>
        </div>
        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2 md:p-4">
          <div className="w-full">
            <Lottie
              animationData={delivery}
              style={{ height: lottieHeight }}
              setspeed={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
