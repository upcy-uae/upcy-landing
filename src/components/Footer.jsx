import Image from "next/image";
import logoUpcy from "@/src/assets/images/hero-upcy/logo-black.svg";

export const Footer = () => {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };
  return (
    <>
      <footer className="py-12 bg-white overflow-hidden">
        <div className="container px-4 mx-auto flex flex-col items-center justify-center">
          <Image
            src={logoUpcy}
            width={64}
            height={64}
            alt="UPCY Logo"
            className="mb-4 h-16 w-auto"
          />
          <h2 className="text-center font-heading text-black text-xl tracking-tight mb-2">
            UPCY, Reimagining Fashion, Together
          </h2>
          <p className="text-center text-gray-500 text-sm  max-w-md">
            Join the movement to buy, sell, and inspire with every spark.
            Sustainable, social, and style-forward.
          </p>
        </div>
      </footer>
      <div className="bg-gray-100 w-full text-center p-4">
        <p className="text-sm font-light tracking-tighter leading-10 md:leading-tight text-gray-500">
          Copyright © {getCurrentYear()} WASITH. All Rights Reserved
        </p>
      </div>
    </>
  );
};
