"use client";
import { useState } from "react";
import Image from "next/image";
import iphone from "@/src/assets/images/hero-upcy/iphone4.png";
import { WaitlistModal } from "@/src/components/upcy-home/WaitlistModal";
// import gradient from "@/src/assets/images/hero-upcy/gradient.svg";

const steps = [
  {
    number: 1,
    title: "Snap & Share",
    desc: "Upload your outfits, preloved pieces, or inspiration in just a few taps — and let your style speak for itself.",
    circleClass: "left-0",
  },
  {
    number: 2,
    title: "Spark Conversations",
    desc: "Engage with a fashion-loving community through likes, comments, and shares. Every post has the power to connect.",
    circleClass: "left-0",
  },
  {
    number: 3,
    title: "Sell Seamlessly",
    desc: "List items straight from your closet, set your price, and manage orders with ease — all from your phone.",
    circleClass: "left-0",
  },
  {
    number: 4,
    title: "Discover & Buy",
    desc: "Browse curated styles from real people, not brands. Buy what inspires you and support sustainable fashion.",
    circleClass: "left-0",
  },
];

export const AboutUpcy = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <Image
              src={iphone}
              alt="How it works - iPhone preview"
              className="w-full max-w-lg mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000 rounded-2xl"
              width={400}
              height={800}
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg mb-4">
              How UPCY helps you sell smarter and spark your style story.
            </h2>
            <p className="text-sm text-gray-600 font-medium leading-normal mb-16">
              Powered by <span className="font-bold text-black">Wasith</span>.
            </p>
            <div className="flex flex-wrap -m-1.5">
              {steps.map((step, idx) => (
                <div className="w-full p-1.5" key={step.number}>
                  <div className="flex flex-wrap -m-6">
                    <div className="w-auto p-6">
                      <div
                        className={`relative ${
                          step.circleClass || ""
                        } mb-3 w-10 h-10 text-lg text-white font-bold bg-black rounded-full overflow-hidden flex items-center justify-center`}
                      >
                        <span className="z-10">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="md:max-w-xs">
                        <h3 className="mb-3 text-2xl font-semibold leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex  justfiy-start mt-12">
              <button
                className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-900 transition"
                onClick={() => setShowModal(true)}
              >
                Join Our WaitList
              </button>
            </div>
          </div>
        </div>
      </div>
      <WaitlistModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};
