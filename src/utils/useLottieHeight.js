import { useState, useEffect } from "react";

export const useLottieHeight = (
  defaultHeight = 500,
  smallScreenHeight = 300,
  breakpoint = 450
) => {
  const [lottieHeight, setLottieHeight] = useState(defaultHeight);

  const updateLottieHeight = () => {
    if (window.innerWidth < breakpoint) {
      setLottieHeight(smallScreenHeight);
    } else {
      setLottieHeight(defaultHeight);
    }
  };

  useEffect(() => {
    updateLottieHeight(); // Set initial height
    window.addEventListener("resize", updateLottieHeight);

    return () => {
      window.removeEventListener("resize", updateLottieHeight); // Cleanup listener
    };
  }, []);

  return lottieHeight;
};
