"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import washingAnimation from "@/src/assets/animations/washing-machine.json";
import buildingAnimation from "@/src/assets/animations/buildings.json";
import restaurantAnimation from "@/src/assets/animations/restaurants.json";
import deliveryAnimation from "@/src/assets/animations/delivery.json";
export const Services = ({
  heading,
  intro,
  shopCustomers,
  diego,
  properties,
  restaurants,
  pickupDelivery,
}) => {
  // State to track which card is open
  const [openCard, setOpenCard] = useState(null);

  // Function to toggle card state on click
  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  // Function to handle hover state
  const handleHover = (index) => {
    setOpenCard(index);
  };

  const handleMouseLeave = () => {
    setOpenCard(null); // Reset on mouse leave
  };

  const cardData = [
    {
      id: 1,
      title: properties.title,
      content: properties.content,
      animation: buildingAnimation,
    },
    // {
    //   id: 2,
    //   title: restaurants.title,
    //   content: restaurants.content,
    //   animation: restaurantAnimation,
    // },
    {
      id: 3,
      title: pickupDelivery.title,
      content: pickupDelivery.content,
      animation: deliveryAnimation,
    },
    {
      id: 4,
      title: shopCustomers.title,
      content: shopCustomers.content,
      animation: washingAnimation,
    },
  ];

  //lg:py-24 py-8 px-4 lg:px-40
  return (
    <section className="bg-gray-100" id="services-home">
      <div className="p-8 md:p-24 md:container md:mx-auto">
        <p className="tracking-tight text-dd-green-200 font-bold mb-2 lg:px-8">
          {intro}
        </p>
        <h1 className="text-left font-heading tracking-tight text-4xl md:text-6xl font-medium mb-6 lg:mb-8 lg:px-8">
          {heading}
        </h1>
        <div className="flex flex-wrap md:px-4">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="w-full lg:w-1/4 pb-6 lg:p-4"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`rounded-2xl ${
                  openCard === index ? "bg-dd-green-200" : "bg-white"
                } p-8 relative transition-colors duration-300 h-[450px] lg:h-[350px]`}
              >
                <p
                  className={`tracking-tight text-xl lg:text-2xl font-medium ${
                    openCard === index ? "text-white" : "text-black"
                  }`}
                >
                  {card.title}
                </p>

                {/* Opened state */}
                {openCard === index && (
                  <>
                    <p className="text-white tracking-tight mt-4 max-w-xl text-lg pb-4">
                      {card.content}
                    </p>
                    <div className="hidden md:flex justify-start">
                      <div className={`${card.id === 2 ? "w-2/3" : "w-10/12"}`}>
                        <Lottie
                          animationData={card.animation} // Render the specific animation for the card
                          setspeed={0.5}
                        />
                      </div>
                    </div>
                    <div className="flex md:hidden justify-start">
                      <div className={`${card.id === 4 ? "w-3/4" : "w-2/5"}`}>
                        <Lottie
                          animationData={card.animation} // Render the specific animation for the card
                          setspeed={0.5}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* "Learn More" button for small viewports */}
                <div className="absolute bottom-6 w-10/12">
                  <a
                    className={`rounded-md bg-dd-green-200 px-4 py-2 h-12 lg:hover:bg-opacity-80 inline-flex items-center justify-center gap-2 transition duration-200  w-full lg:hidden ${
                      openCard === index
                        ? "bg-white text-black"
                        : "bg-dd-green-200 text-white"
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    <span className="text-sm font-semibold tracking-tight">
                      {openCard === index ? "Close" : "Learn More"}
                    </span>
                  </a>
                </div>

                {/* Toggle Card button for larger viewports */}
                <div className="absolute bottom-6 right-6">
                  <a
                    className={`hidden rounded-full bg-dd-green-200 w-11 h-11 lg:flex items-center justify-center hover:bg-opacity-80 focus:bg-opacity-80 focus:ring-4 focus:ring-gray-300 transition duration-200 hover:cursor-pointer ${
                      openCard === index ? "bg-white" : "bg-dd-green-200"
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    {openCard === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M10.2859 10.286L19.714 19.714M19.714 10.286L10.2859 19.714"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 3.33325V16.6666M16.6667 9.99992L3.33337 9.99992"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
