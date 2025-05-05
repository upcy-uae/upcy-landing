"use client";
import { useState, useEffect } from "react";
import { setupScrollAnimations } from "@/src/utils/animationUtils";
import ddbg from "@/src/assets/images/dd-min-bg-dark-twoo.png";

export const IntroBlock = ({ title, ctaButton, subtitle }) => {
  useEffect(() => {
    setupScrollAnimations();
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <>
      <section className="py-6 px-6 md:px-0 md:container md:mx-auto">
        <div
          className="rounded-2xl px-4 md:px-14 pb-16 bg-center bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(${ddbg.src})`,
          }}
        >
          {/* Header and Navigation Removed */}

          <div className="pt-40 lg:pt-80">
            <h1 className="font-heading tracking-tight text-5xl md:text-7xl text-white max-w-md md:max-w-4xl mb-6">
              {title}
            </h1>
            <p className="tracking-tight text-white text-lg mb-8 max-w-lg md:max-w-4xl">
              {subtitle}
            </p>
            <a
              href="#services-home"
              className="rounded-md bg-dd-green px-4 py-2 h-12 hover:bg-opacity-80  inline-flex items-center justify-center gap-2 transition duration-200   w-full lg:w-1/2"
            >
              <span className="text-white text-sm font-semibold tracking-tight">
                {ctaButton}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
