// utils/gsapAnimations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateFrom(elem, direction = 1) {
  let x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -50;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromTop")) {
    x = 0;
    y = -150;
  } else if (elem.classList.contains("gs_reveal_fromBottom")) {
    x = 0;
    y = 100;
  }
  elem.style.transform = `translate(${x}px, ${y}px)`;
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x, y, autoAlpha: 0 },
    {
      duration: 2,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    }
  );
}

export function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

// export function animateBox(selector) {
//   gsap.utils.toArray(selector).forEach(element => {
//     const tl = gsap.timeline({ paused: true });

//     tl.to(element, {
//       duration: 0.5
//       //top: "40px",
//       //height: "630px"
//     });

//     element.animation = tl;

//     element.addEventListener("mouseenter", () => {
//       element.animation.play();
//     });

//     element.addEventListener("mouseleave", () => {
//       element.animation.reverse();
//     });
//   });
// }
// // Call the function with the desired selector
// animateBox(".box-test");

export function setupAnimations() {
  // Target specific classes and IDs for animations
  gsap.utils
    .toArray(
      ".animate-h1,  .animate-h3, .animate-h4, .animate-h5, .animate-p"
    )
    .forEach(elem => {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem) // assure that the element is hidden when scrolled out of view
      });
    });

  gsap.utils.toArray(".animate-h2").forEach(elem => {
    gsap.fromTo(
      elem,
      { x: -window.innerWidth, autoAlpha: 0 },
      {
        duration: 1.25,
        x: -40,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 100%",
          end: "bottom 10%",
          markers: false,
          onEnter: () => animateFrom(elem, -1),
          onEnterBack: () => animateFrom(elem, 1)
        }
      }
    );
  });

  gsap.utils.toArray(".animate-img").forEach(elem => {
    gsap.fromTo(
      elem,
      { scale: 0.5, autoAlpha: 0 },
      {
        duration: 0.2,
        scale: 1,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          end: "bottom 20%",
          markers: false,
          onEnter: () =>
            gsap.fromTo(
              elem,
              { scale: 0.8, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, duration: 1.25 }
            ),
          onEnterBack: () =>
            gsap.fromTo(
              elem,
              { scale: 0.8, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, duration: 1.25 }
            )
        }
      }
    );
  });

  gsap.utils.toArray(".animate-img-two").forEach(elem => {
    gsap.fromTo(
      elem,
      { autoAlpha: 0 }, // Initial state with opacity 0
      {
        duration: 1.25,
        autoAlpha: 1, // Final state with opacity 1
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%", // Start animation when the top of the element is 80% down the viewport
          end: "bottom 20%", // End animation when the bottom of the element is 20% from the top of the viewport
          markers: false,
          onEnter: () =>
            gsap.fromTo(
              elem,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 1.25 }
            ),
          onEnterBack: () =>
            gsap.fromTo(
              elem,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 1.25 }
            )
        }
      }
    );
  });

  gsap.utils
    .toArray(".testing-animation-og")
    .forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5
          }
        }
      );
    });
  gsap.utils
    .toArray(".about-page-headings-animation-one")
    .forEach(section => {
      const w = section.querySelector(".wrappers");

      // Define starting and ending positions
      const [x, xEnd] = ["260%", "0%"]; // Element starts off-screen to the left, animates to fully visible

      gsap.fromTo(
        w,
        { x }, // Initial position off-screen to the left
        {
          delay: 0.5,
          x: xEnd, // Final position fully visible
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // Trigger when the top of the section hits the bottom of the viewport
            end: "top top", // End the animation when the top of the section hits the top of the viewport
            scrub: 0.2 // Smooth scrubbing
            // markers: true // Enable markers for debugging (remove this in production)
          }
        }
      );
    });

  gsap.utils
    .toArray(".about-page-headings-animation-two")
    .forEach((section, index) => {
      const w = section.querySelector(".wrappers");

      // Define starting and ending positions
      const [x, xEnd] = ["-260%", "0%"]; // Element starts off-screen to the right, animates to fully visible

      gsap.fromTo(
        w,
        { x }, // Initial position off-screen to the right
        {
          delay: 0.5,
          x: xEnd, // Final position fully visible
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // Trigger when the top of the section hits the bottom of the viewport
            end: "top top", // End the animation when the top of the section hits the top of the viewport
            scrub: 0.2 // Smooth scrubbing
            // markers: true // Enable markers for debugging (remove this in production)
          }
        }
      );
    });

  // Select all elements with the class ".scale-animation"
  gsap.utils.toArray(".scale-animation").forEach((section, index) => {
    // Get the image element within the section
    const img = section.querySelector("img");

    // Define starting and ending scales
    const [startScale, endScale] = [0.4, 1]; // Scale from 10% to 100%

    gsap.fromTo(
      img,
      { scale: startScale }, // Initial scale
      {
        delay: 0.5,
        scale: endScale, // Final scale
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // Trigger when the top of the section hits the bottom of the viewport
          end: "top top", // End the animation when the top of the section hits the top of the viewport
          scrub: 1 // Smooth scrubbing
          // markers: true // Enable markers for debugging (remove this in production)
        }
      }
    );
  });

  gsap.utils.toArray(".bottom-animation").forEach(element => {
    gsap.fromTo(
      element,
      { y: 100, opacity: 0 }, // Start position and opacity
      {
        y: 0,
        opacity: 1, // End position and opacity
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // Trigger when the top of the element hits the bottom of the viewport
          end: "top 80%", // End when the top of the element hits 80% of the viewport height
          scrub: 1 // Smooth scrubbing
          // markers: true // Enable markers for debugging (remove this in production)
        }
      }
    );
  });

  // gsap.utils.toArray(".animate-h11").forEach(element => {
  //   gsap.fromTo(
  //     element,
  //     {
  //       marginBottom: "32px",
  //       scale: 1.2, // Start scale
  //       y: () =>
  //         window.innerHeight / 2 -
  //         element.getBoundingClientRect().top, // Center vertically
  //       opacity: 0 // Start with opacity 0
  //     },
  //     {
  //       scale: 1, // End scale
  //       y: 0, // End at original position
  //       opacity: 1, // Fade in
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top center", // Start the animation when the top of the element is at the center of the viewport
  //         end: "top top", // End when the top of the element is at the top of the viewport
  //         scrub: 1 // Smooth scrubbing
  //         // markers: true // Enable markers for debugging (remove this in production)
  //       }
  //     }
  //   );
  // });

  // gsap.utils.toArray(".animate-p").forEach(element => {
  //   gsap.fromTo(
  //     element,
  //     {
  //       scale: 1.2, // Start scale
  //       y: () =>
  //         window.innerHeight / 2 -
  //         element.getBoundingClientRect().top, // Center vertically
  //       opacity: 0, // Start with opacity 0,
  //       marginBottom: "50px"
  //     },
  //     {
  //       scale: 1, // End scale
  //       y: 0, // End at original position
  //       opacity: 1, // Fade in
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top center", // Start the animation when the top of the element is at the center of the viewport
  //         end: "top top", // End when the top of the element is at the top of the viewport
  //         scrub: 1 // Smooth scrubbing
  //         // markers: true // Enable markers for debugging (remove this in production)
  //       }
  //     }
  //   );
  // });
}

// // New function to setup carousel animation using GSAP
// export function setupCarouselAnimation(carouselSelector) {
//   const items = gsap.utils.toArray(`${carouselSelector} .owl-item`);
//   const duration = 2;
//   const delay = 1;
//   const tl = gsap.timeline({ repeat: -1 });

//   items.forEach((item, index) => {
//     tl.to(
//       item,
//       {
//         scale: 1,
//         opacity: 1,
//         duration: duration,
//         delay: delay,
//         ease: "power1.inOut",
//         onStart: () => {
//           item.classList.add("active");
//           if (index === Math.floor(items.length / 2)) {
//             item.classList.add("center");
//           }
//         },
//         onComplete: () => {
//           item.classList.remove("active", "center");
//           item.style.opacity = "0.5";
//         }
//       },
//       index * delay
//     );
//   });
// }

// // Call the function with the desired carousel selector
// setupCarouselAnimation(".owl-carousel");
