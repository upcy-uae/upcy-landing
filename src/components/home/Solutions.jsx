"use client";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import logoAlone from "@/src/assets/images/hero-section/dash-logo-alone.svg";
import { setupScrollAnimations } from "@/src/utils/animationUtils";
import { handleScroll } from "@/src/utils/scrollUtils";
import Link from "next/link";
import Image from "next/image";

export const Solutions = ({
  title,
  subtitle,
  priceInTitle,
  priceCcTitle,
  priceFidelityTitle,
  priceCashTitle,
  saveFidelity,
  saveCash,
  washer,
  dryer,
  perWash,
  perDry,
  includedInPrice,
  features,
  dryerFeatures,
  ourLocation,
}) => {
  const [toggle, setToggle] = useState("cash/cc");
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  // const handleToggle = (e, type, setToggle, setAnimation) => {
  //   e.preventDefault();
  //   setToggle(type);
  //   setAnimation("animate__animated animate__fadeIn");
  //   setTimeout(() => setAnimation(""), 1000);
  // };

  const [animation, setAnimation] = useState("");

  const scrollToSection = (event) => handleScroll(event, "our-location");

  const washingPlans = [
    {
      type: "washer",
      title: `12kg ${washer}`,
      prices: {
        "cash/cc": "6€",
        fidelity: "4.5€",
      },
      description:
        "Great for 20 T-shirts, 4 pairs of jeans, and 4 bath towels.",
      bgColor: "",
      textColor: "",
      buttonTextColor: "text-black hover:text-white",
      buttonBorderColor: "border-teal-900 hover:bg-teal-900",
      buttonBgColor: "",
      features: features,
      temperature: [90, 80, 70],
      icon: (
        <Image
          src={logoAlone}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="w-1/6 "
        />
      ),
    },
    {
      type: "washer",
      title: `16Kg ${washer}`,
      prices: {
        "cash/cc": "7€",
        fidelity: "5.5€",
      },
      description:
        "Great for 30 T-shirts, 6 pairs of jeans, and 6 bath towels.",
      bgColor: "",
      textColor: "",
      buttonTextColor: "text-black hover:text-white",
      buttonBorderColor: "border-teal-900 hover:bg-teal-900",
      buttonBgColor: "",
      features: features,
      temperature: [90, 80, 70],
      icon: (
        <Image
          src={logoAlone}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="w-1/6 "
        />
      ),
    },
    {
      type: "washer",
      title: `20Kg ${washer}`,
      prices: {
        "cash/cc": "8.5€",
        fidelity: "6.5€",
      },
      description:
        "Great for 35 T-shirts, 8 pairs of jeans, and 8 bath towels.",
      bgColor: "",
      textColor: "",
      buttonTextColor: "text-black hover:text-white",
      buttonBorderColor: "border-teal-900 hover:bg-teal-900",
      buttonBgColor: "",
      features: features,
      temperature: [90, 80, 70],
      icon: (
        <Image
          src={logoAlone}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="w-1/6 "
        />
      ),
    },
    {
      type: "dryer",
      title: `18Kg ${dryer}`,
      prices: {
        "cash/cc": "5€",
        fidelity: "3.5€",
      },
      description:
        "For businesses with significant drying needs and consumption",
      bgColor: "border-dd-green-100",
      textColor: "text-black",
      buttonTextColor: "text-black",
      buttonBorderColor: "border-lime-500 hover:border-white",
      buttonBgColor: "bg-lime-500 hover:bg-white",
      features: dryerFeatures,
      icon: (
        <>
          <Image
            src={logoAlone}
            width={0}
            height={0}
            alt="Logo Of Dash & Dry"
            className="w-1/6 "
          />
        </>
      ),
    },
  ];

  return (
    <section id="solutions" className="mb-16 ">
      <div className="container mx-auto px-4  h-full flex items-center flex-col">
        <div className="max-w-4xl mx-auto text-center mb-4 md:mb-6 mt-4">
          <h1 className="font-heading text-5xl xs:text-6xl sm:text-7xl xl:text-6xl tracking-tight gs_reveal mb-4">
            {title}
          </h1>
          <p className="text-lg text-black gs_reveal">{subtitle}</p>
        </div>
        <div className="flex md:flex-row flex-col mb-6 items-start md:items-center justify-end gs_reveal">
          <div className="w-full flex flex-col">
            <div className="flex justify-center items-center flex-col">
              <div className="relative flex h-5 px-0.5 items-center justify-between transition duration-200 ease-linear rounded-full bg-dd-green shadow ">
                <a
                  className={`inline-block w-4 h-4 ${
                    toggle === "cash/cc" ? "bg-white" : "bg-transparent"
                  } rounded-full`}
                  href="#"
                ></a>

                <a
                  className={`inline-block w-4 h-4 ${
                    toggle === "fidelity" ? "bg-white" : "bg-transparent"
                  } rounded-full`}
                  href="#"
                ></a>
              </div>
              <span className="text-center my-2">{priceInTitle}</span>
              <div className="block mb-2">
                <span
                  className={`ml-4 font-medium text-xl ${
                    toggle === "cash/cc" ? "" : "hidden"
                  }`}
                >
                  {priceCashTitle}/{priceCcTitle}
                </span>

                <span
                  className={`ml-4 font-medium text-xl ${
                    toggle === "fidelity" ? "" : "hidden"
                  }`}
                >
                  {priceFidelityTitle}
                </span>
              </div>
              <span className="block mt-5 md:mt-0 px-2 text-md leading-6 text-teal-800 font-medium bg-lime-50 rounded-full ml-2">
                {toggle === "cash/cc"
                  ? ""
                  : toggle === "fidelity"
                  ? saveFidelity
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className=" mx-auto lg:max-w-none gs_reveal">
          <div className="flex flex-wrap -mx-4">
            {washingPlans.map((plan, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/4  px-4  lg:mb-0 "
              >
                <div
                  className={`mb-10 p-8 shadow-md rounded-2xl ${plan.bgColor} h-full `}
                >
                  <div>
                    <div className="w-1/2">{plan.icon}</div>
                    <span
                      className={`block text-2xl font-medium  my-4 ${plan.textColor} `}
                    >
                      {plan.title}
                    </span>
                    <div className="flex items-center mb-4">
                      <span className={`text-5xl ${animation}`}>
                        {plan.prices[toggle]}
                      </span>
                      <span
                        className={`ml-4 text-xl font-medium text-gray-700`}
                      >
                        {plan.type === "washer" ? perWash : perDry}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="block text-md font-medium mb-2">
                      {includedInPrice}
                    </span>
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex mb-2 items-center">
                          <span className="flex-shrink-0">
                            <CheckCircleIcon className="w-5 h-5 text-dd-green-200" />
                          </span>
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center pt-8 px-4">
        <Link
          className="py-4 px-6  text-lg text-center font-medium text-white  bg-dd-green-300 hover:bg-dd-green-100 hover:text-black rounded-full transition duration-200 w-full md:w-1/2"
          href="#solutions"
          onClick={scrollToSection}
        >
          {ourLocation}
        </Link>
      </div>
    </section>
  );
};
