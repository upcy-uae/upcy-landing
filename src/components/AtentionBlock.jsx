"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CurrencyEuroIcon, ClockIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import logoDash from "@/src/assets/images/logos/logo-black.svg";
import Image from "next/image";
import Lottie from "lottie-react";
import clock from "@/src/assets/animations/clock.json";
import money from "@/src/assets/animations/moneyThree.json";

export const AtentionBlock = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  cards,
}) => {
  // Function to animate an element into view from a specific direction
  const animateFrom = (elem, direction) => {
    direction = direction || 1;
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "0";

    // Using GSAP to animate the element
    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  // Function to hide an element
  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  // Effect hook to run once the component mounts
  useEffect(() => {
    // Registering ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Finding all elements with class "gs_reveal" and applying animations
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      hide(elem); // Hide element initially

      // Setting up ScrollTrigger to trigger animations on scroll
      ScrollTrigger.create({
        trigger: elem,
        //markers: false, // for debugging, you can remove this in production
        onEnter: () => {
          animateFrom(elem); // Animate element into view
        },
        onEnterBack: () => {
          animateFrom(elem, -1); // Animate element into view from opposite direction when scrolling back
        },
        onLeave: () => {
          hide(elem); // Hide element when scrolled out of view
        },
      });
    });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const style = {
    clock: { height: 80 },
    money: { height: 80 },
  };

  return (
    <>
      <section id="attentionBlock" className="py-8 md:py-16 bg-dd-green">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full p-8 gs_reveal gs_reveal_fromLeft">
              <div className="text-center">
                <h2 className="mb-4">{textOne}</h2>
                <h3 className="mb-2 ">{textTwo}</h3>
              </div>
            </div>
            <div className="w-full px-2 md:p-8">
              {/* <Lottie style={style} animationData={clock} setspeed={1} /> */}
              <div className="flex flex-wrap justify-center -m-4">
                {cards.map((card, index) => (
                  <div key={index} className="w-full xl:w-auto p-4">
                    <div className="xl:max-w-xl h-full">
                      <div className="p-4 md:p-8 h-full bg-white rounded-3xl  shadow-7xl gs_reveal gs_reveal_fromRight">
                        <div className="flex flex-col justify-between h-full">
                          <div>
                            {index === 0 ? (
                              <div className="flex flex-start mb-2">
                                <Lottie
                                  style={style.money}
                                  animationData={money}
                                  setspeed={0.5}
                                />
                              </div>
                            ) : (
                              // <ClockIcon className="h-16 w-16 mb-8 text-dd-green-100" />
                              <div className="flex flex-start mb-2">
                                <Lottie
                                  style={style.clock}
                                  animationData={clock}
                                  setspeed={0.2}
                                />
                              </div>
                            )}

                            <h3 className="mb-5 text-black font-bold">
                              {card.title}
                            </h3>
                            <p className="mb-8 font-figtree font-light">
                              {card.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
