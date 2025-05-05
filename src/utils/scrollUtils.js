// src/utils/scrollUtils.js
export const handleScroll = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Adjust this value based on your fixed header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.error(`Element with id ${id} not found.`);
  }
};
