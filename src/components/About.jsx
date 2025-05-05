"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
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

  // Array of objects containing information for each section
  const sections = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "About dash & dry",
      text: "We are just not just a place to wash clothes; we're a hub for the community. By the people, for the people of Barcelona. We've partnered with local businesses to add a dash of excitement to your laundry routine. While your clothes spin in our machines, you can explore the vibrant neighborhood, sip on a free coffee from a nearby café, get fit at a local gym, or indulge in delicious discounts at neighborhood eateries. It's all about making the most of your time.",
      revealClass: "gs_reveal_fromLeft",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1505464069456-1145548d5c83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Come in with Your Clothes",
      text: "It all starts when you step into our welcoming space. Bring your laundry load, big or small, and leave the hard work to us. Our state-of-the-art machines and attentive staff will ensure your clothes are cleaned to perfection while you relax.",
      revealClass: "gs_reveal_fromRight",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1664443944828-2cdb401f0e18?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Put Them to Wash",
      text: "Once you're here, simply load your clothes into our efficient washing machines. We've taken care of the rest, from high-quality detergent to precise water temperature. Your clothes are in good hands.",
      revealClass: "gs_reveal_fromLeft",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1599898330165-6c3b93296d60?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Select from a List of Partnerships and Enjoy Your Free Time",
      text: "Now comes the fun part. While your laundry is being handled, take a look at our list of neighborhood partnerships. You'll find a variety of enticing options, including:",
      revealClass: "gs_reveal_fromRight",
    },
  ];

  // JSX rendering
  return (
    <>
      <div className="cInnerContent py-20">
        <div className="features">
          {/* Mapping over sections array to generate dynamic JSX */}
          {sections.map((section, index) => (
            <div
              key={index}
              className={`feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone`}
            >
              <div className={`ipsGrid_span5 gs_reveal ${section.revealClass}`}>
                <div className="card">
                  <img width="479" src={section.imageSrc} alt="" />
                </div>
              </div>

              <div
                className={`ipsGrid_span7 ${
                  index % 2 === 0 ? "ipsType_left" : "ipsType_right"
                }`}
              >
                <h2 className="heading_large gs_reveal">{section.heading}</h2>
                <p className="gs_reveal">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
