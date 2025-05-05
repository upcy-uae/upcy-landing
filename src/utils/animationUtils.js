// src/utils/animationUtils.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Function to animate an element into view from a specific direction
export const animateFrom = (elem, direction = 1) => {
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
export const hide = (elem) => {
  gsap.set(elem, { autoAlpha: 0 });
};

// Function to set up scroll-triggered animations
export const setupScrollAnimations = () => {
  gsap.utils.toArray(".gs_reveal").forEach((elem) => {
    hide(elem); // Hide element initially

    // Setting up ScrollTrigger to trigger animations on scroll
    ScrollTrigger.create({
      trigger: elem,
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
};
