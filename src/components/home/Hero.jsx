"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import background from "@/src/assets/images/homepage/background.jpg";
import { setupScrollAnimations } from "@/src/utils/animationUtils";
import { handleScroll } from "@/src/utils/scrollUtils";
import Link from "next/link";
export const Hero = ({ title, words, subtitle, ctaButton }) => {
  useEffect(() => {
    setupScrollAnimations();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const scrollToSection = (event) => handleScroll(event, "solutions");

  return (
    <div className="container mx-auto mt-10 md:mt-24 mb-32 ">
      <div className="flex flex-wrap lg:-mx-4 items-center justify-center h-full">
        {/* Left Side - Info Text */}
        <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 gs_reveal">
          <div className="max-w-lg lg:max-w-none mx-auto">
            <h1 className="font-heading text-5xl xs:text-6xl sm:text-7xl xl:text-6xl tracking-tight mb-8">
              {title}
              <span className="font-medium tracking-tighter">
                {" "}
                <Typewriter
                  options={{
                    strings: words,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-10">{subtitle}</p>

            <Link
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white bg-dd-green-300 hover:bg-dd-green-100 hover:text-black rounded-full transition duration-200 w-full"
              href="#solutions"
              onClick={scrollToSection}
            >
              {ctaButton}
            </Link>
          </div>
        </div>
        {/* Right Side - Image Side */}
        <div className="w-full lg:w-1/2 gs_reveal gs_reveal_fromRight">
          <div className="relative max-w-xl md:max-w-3xl mx-auto lg:mr-0">
            <Image
              className="block w-full relative rounded-2xl"
              src={background}
              alt="Men Right"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
