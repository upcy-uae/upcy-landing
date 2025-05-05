"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import waves from "@/src/assets/images/hero-section/bg-waves.png";

export const HeroAnimated = ({ content }) => {
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

  // JSX rendering

  const smoothGoogleMaps = () => {
    const mapElement = document.getElementById("google-maps");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="bg-orange-50 relative">
        <Image
          src={waves}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="cInnerContent py-8 md:py-16 mx-auto relative">
          <h2 className="mb-4 font-bold tracking-tighter leading-10 md:leading-tight gs_reveal_fromLeft gs_reveal text-center">
            About Us
          </h2>
          {/* <div className="flex justify-center mb-4 md:mb-16 gs_reveal_fromLeft gs_reveal">
            <Image
              src={logoDash}
              width={200}
              height={200}
              alt="Dash & Dry Logo"
            />
          </div> */}
          <>
            {/* Content Here */}
            {/* Desktop */}
            <div className="hidden md:block">
              {content.map((card, index) => (
                <div
                  key={index}
                  className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone"
                >
                  {/* Left Images */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                        <div className="card">
                          <Image
                            src={card.img}
                            width={0}
                            height={0}
                            alt="Image - "
                          />
                        </div>
                      </div>
                      <div className="ipsGrid_span7 ipsType_left gs_reveal">
                        <h4 className="mb-2">{card.title}</h4>
                        <div className="">
                          <p className="mb-4">{card.content[0]}</p>
                          <p>{card.content[1]}</p>
                        </div>
                        {card.cta ? (
                          <button className="mt-4" onClick={smoothGoogleMaps}>
                            {card.cta}
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="ipsGrid_span7 ipsType_right gs_reveal">
                        <h4 className="mb-2">{card.title}</h4>
                        <div className="max-w-1/3">
                          <p className="mb-4">{card.content[0]}</p>
                          <p>{card.content[1]}</p>
                        </div>
                      </div>
                      <div className="ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                        <div className="card">
                          <Image
                            src={card.img}
                            width={0}
                            height={0}
                            alt="Image - "
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile */}
            <div className="md:hidden">
              {content.map((card, index) => (
                <div
                  key={index}
                  className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone pb-8"
                >
                  <div className="ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                    <div className="card">
                      <Image
                        src={card.img}
                        width={0}
                        height={0}
                        alt="Image - "
                      />
                    </div>
                  </div>
                  <div className="ipsGrid_span7 ipsType_left">
                    <h4 className="mb-2">{card.title}</h4>
                    <p className="mb-4">{card.content[0]}</p>
                    <p>{card.content[1]}</p>
                    {card.cta ? (
                      <button className="mt-4" onClick={smoothGoogleMaps}>
                        {card.cta}
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
};
