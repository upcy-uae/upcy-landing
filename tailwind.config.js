/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        figtree: ["var(--font-figtree)"],
        plusJakarta: ["var(--font-plus-jakarta)"],
      },
      colors: {
        "dd-green": "#83af93",
        "dd-green-50": "#CCD3C2",
        "dd-green-100": "#B2CEBC",
        "dd-green-200": "#557561",
        "dd-green-300": "#3f5748",
      },
      height: {
        400: "400px",
        600: "600px",
      },
    },
  },
  plugins: [],
};
