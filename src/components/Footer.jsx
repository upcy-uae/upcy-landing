import background from "@/src/assets/images/footer/gradient3.svg";
import Image from "next/image";
import logoDash from "@/src/assets/images/logos/logo-white.svg";
import { Link } from "../navigation";
export const Footer = ({ heading, subHeading, links }) => {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };
  return (
    <>
      <section className="py-12 bg-dd-green-200 overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="">
            <div className="w-full">
              <h2 className="text-center font-heading text-white text-2xl tracking-tight mb-3">
                {heading}
              </h2>
              <div className="w-full flex justify-center ">
                {" "}
                <Image
                  src={logoDash}
                  width={150}
                  height={150}
                  alt="Dash & Dry Logo"
                  className=""
                />
              </div>
              <h2 className="text-center font-heading text-white text-2xl tracking-tight pt-2">
                {subHeading}
              </h2>
              {"  "}
            </div>
            {/* <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap -m-8 mb-10">
                <div className="w-full sm:w-1/3 p-8">
                  <ul>
                    {links.map((link) => (
                      <li className="mb-3.5" key={link.to}>
                        <Link className="nav-links" href={link.to}>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className="bg-gray-100 w-full text-center p-4">
        <p className="text-sm font-light tracking-tighter leading-10 md:leading-tight">
          Copyright © {getCurrentYear()} Dash & Dry. All Rights Reserved
        </p>
      </div>
    </>
  );
};
