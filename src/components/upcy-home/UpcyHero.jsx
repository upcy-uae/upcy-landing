"use client";
import { useState } from "react";
import Image from "next/image";
import bg from "@/src/assets/images/hero-upcy/bg.png";
import appStore from "@/src/assets/images/hero-upcy/app-store.png";
import playStore from "@/src/assets/images/hero-upcy/play-store.png";
import iphone2 from "@/src/assets/images/hero-upcy/iphone3.png";
import logoBlack from "@/src/assets/images/hero-upcy/logo-black.svg";
import { WaitlistModal } from "@/src/components/upcy-home/WaitlistModal";

export const UpcyHero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="pt-6 pb-28 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-4">
          <Image
            src={logoBlack}
            alt="UPCY Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </div>
        <h2 className="text-4xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-tight mx-auto mb-4 md:max-w-xl">
          Sell your look. Spark a movement.
        </h2>
        <p className="text-lg text-gray-600 text-center font-medium leading-normal mx-auto mb-4">
          Join a community of creators reimagining fashion buy, sell, and
          inspire with every spark
        </p>
        <p className="text-sm text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto mb-8">
          Powered by <span className="font-bold text-black">Wasith</span>, the
          creator infrastructure behind UPCY
        </p>

        <div className="flex justify-center mb-8">
          <button
            className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-900 transition"
            onClick={() => setShowModal(true)}
          >
            Join Our WaitList
          </button>
        </div>
        <p className="mb-2 text-sm text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
          Coming soon to the App Store and Google Play
        </p>
      </div>
      <div className="relative py-9">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image src={bg} alt="Background" fill className="object-cover" />
        </div>
        <div className="relative w-full max-w-sm min-h-64 mx-auto">
          <Image
            src={iphone2}
            alt="iPhone App Preview"
            width={400}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="container px-4 mx-auto">
        {/* <p className="mb-4 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
          Coming soon to the App Store and Google Play
        </p>
        <div className="flex justify-center mb-9">
          <button
            className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-900 transition"
            onClick={() => setShowModal(true)}
          >
            Join Our WaitList
          </button>
        </div> */}
        {/* <div className="flex flex-wrap justify-center -m-2.5">
          <div className="w-auto p-2.5">
            <a href="#">
              <Image
                src={appStore}
                alt="App Store"
                width={135}
                height={40}
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="w-auto p-2.5">
            <a href="#">
              <Image
                src={playStore}
                alt="Play Store"
                width={135}
                height={40}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div> */}
      </div>
      <WaitlistModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};
