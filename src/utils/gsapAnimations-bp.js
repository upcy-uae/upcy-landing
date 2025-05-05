// // utils/gsapAnimations.js
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function animateFrom(elem, direction = 1) {
//   let x = direction * 100,
//     y = 0;
//   if (elem.classList.contains("gs_reveal_fromLeft")) {
//     x = -100;
//     y = 0;
//   } else if (elem.classList.contains("gs_reveal_fromRight")) {
//     x = 100;
//     y = 0;
//   }
//   elem.style.transform = `translate(${x}px, ${y}px)`;
//   elem.style.opacity = "0";
//   gsap.fromTo(
//     elem,
//     { x, y, autoAlpha: 0 },
//     {
//       duration: 1.25,
//       x: 0,
//       y: 0,
//       autoAlpha: 1,
//       ease: "expo",
//       overwrite: "auto"
//     }
//   );
// }

// export function hide(elem) {
//   gsap.set(elem, { autoAlpha: 0 });
// }

// export function setupAnimations() {
//   gsap.utils.toArray("h1, h3, h4, h5, p").forEach(elem => {
//     hide(elem); // assure that the element is hidden when scrolled into view

//     ScrollTrigger.create({
//       trigger: elem,
//       onEnter: () => animateFrom(elem),
//       onEnterBack: () => animateFrom(elem, -1),
//       onLeave: () => hide(elem) // assure that the element is hidden when scrolled out of view
//     });
//   });

//   gsap.utils.toArray("h2").forEach(elem => {
//     gsap.fromTo(
//       elem,
//       { x: -window.innerWidth, autoAlpha: 0 },
//       {
//         duration: 1.25,
//         x: 0,
//         autoAlpha: 1,
//         ease: "expo",
//         overwrite: "auto",
//         scrollTrigger: {
//           trigger: elem,
//           start: "top 80%",
//           end: "bottom 20%",
//           markers: false,
//           onEnter: () => animateFrom(elem, -1),
//           onEnterBack: () => animateFrom(elem, 1)
//         }
//       }
//     );
//   });

//   gsap.utils.toArray("img").forEach(elem => {
//     gsap.fromTo(
//       elem,
//       { scale: 0.8, autoAlpha: 0 },
//       {
//         duration: 1.25,
//         scale: 1,
//         autoAlpha: 1,
//         ease: "expo",
//         overwrite: "auto",
//         scrollTrigger: {
//           trigger: elem,
//           start: "top 80%",
//           end: "bottom 20%",
//           markers: false,
//           onEnter: () =>
//             gsap.fromTo(
//               elem,
//               { scale: 0.8, autoAlpha: 0 },
//               { scale: 1, autoAlpha: 1, duration: 1.25 }
//             ),
//           onEnterBack: () =>
//             gsap.fromTo(
//               elem,
//               { scale: 0.8, autoAlpha: 0 },
//               { scale: 1, autoAlpha: 1, duration: 1.25 }
//             )
//         }
//       }
//     );
//   });
// }
