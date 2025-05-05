"use client";
import Image from "next/image";
import waves from "@/src/assets/images/hero-section/bg-waves.png";
import logoAlone from "@/src/assets/images/hero-section/dash-logo-alone.svg";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import arrow from "@/src/assets/animations/arrow.json";
export const HeroHome = () => {
  const smoother = () => {
    const mapElement = document.getElementById("attentionBlock");
    if (mapElement) {
      const yPos = mapElement.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: yPos, behavior: "smooth" });
    }
  };
  const style = {
    clock: { height: 100 },
    money: { height: 100 },
  };
  return (
    <>
      <section class="relative bg-white">
        <div class="relative">
          <div class="container mx-auto px-4 relative">
            <div class="max-w-lg xl:max-w-4xl mx-auto text-center">
              <div className="flex justify-center">
                <Image
                  src={logoAlone}
                  width={100}
                  height={100}
                  alt="Logo Of Dash & Dry"
                  className="logo-animation"
                />
              </div>

              <h1 className="animate fade-in-two mb-40">
                Take a break from{" "}
                <span className="font-medium inline tracking-tighter">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Washing", "Drying", "Folding", "Adulting"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <Lottie
                className="cursor-pointer animate fade-in-three"
                onClick={smoother}
                style={style.money}
                animationData={arrow}
                setspeed={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
