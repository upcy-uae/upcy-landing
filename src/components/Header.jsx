"use client";
import { useRef, useState } from "react";
import logoDash from "@/src/assets/images/logos/logo-white.svg";
import logoDashBlack from "@/src/assets/images/logos/logo-black.svg";
import Image from "next/image";
import { Link } from "../navigation";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import gbFlag from "@/src/assets/images/bg_flag.png";
import esFlag from "@/src/assets/images/spain_flag.png";
import catFlag from "@/src/assets/images/cat_flag.webp";

const Header = ({
  links,
  selectLanguage,
  contact,
  visitShop,
  signUpPickup,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const options = [
    { country: "Catalan", code: "cat", flag: catFlag },
    { country: "Spanish", code: "es", flag: esFlag },
    { country: "English", code: "en", flag: gbFlag },
  ];

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set Language Option
  const setOption = (option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };

  const linksText = links;

  return (
    <>
      {/* MOBILE MENU */}
      <section className={`overflow-hidden ${isMenuOpen ? "open " : ""}`}>
        <div
          className={`navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div
            className="navbar-backdrop fixed inset-0 bg-black opacity-80"
            onClick={toggleMenu}
          />
          <nav className="relative z-10 px-6 pt-8 bg-white h-full overflow-y-auto top-10">
            <div className="flex flex-wrap justify-between">
              <ul className="flex flex-col gap-8 pb-8 pt-4">
                {links.map((link) => (
                  <li key={link.text}>
                    <Link
                      className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                      href={link.to}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium tracking-tight">
                          {link.text}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Switcher for Mobile Menu */}
              <div className="relative w-full">
                <button
                  className="flex items-center w-full px-4 py-2 bg-white border border-gray-300 text-sm rounded-full hover:bg-dd-green-50 transition duration-200"
                  onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
                  onBlur={() => setIsOptionsExpanded(false)}
                >
                  {selectLanguage}
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-4 w-4 ml-2 transform transition-transform duration-200 ease-in-out ${
                      isOptionsExpanded ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOptionsExpanded && (
                  <ul className="absolute w-full mt-2 bg-white divide-y rounded-lg shadow-lg overflow-hidden z-50">
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setOption(option);
                        }}
                      >
                        <Image
                          src={option.flag}
                          width={"20"}
                          height={"20"}
                          alt="flag"
                        />
                        &nbsp;&nbsp;{option.country}
                        {pathname === `/${option.code}` && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-green-500 ml-auto"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* DESKTOP MENU */}
      <div className="sticky top-0 z-50 bg-dd-green-200 lg:border-b border-dd-green-300">
        <div className="flex items-center justify-between  px-4 lg:px-24 py-2">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-block">
              <Image
                src={logoDash}
                width={140}
                height={140}
                alt="Dash & Dry Logo"
              />
            </Link>
            <ul className="hidden lg:flex items-center gap-2 py-4">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="inline-block py-2 px-3 hover:text-dd-green-300 transition duration-200 text-md font-bold text-white font-figtree"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Switcher for Desktop */}
          <div className="relative hidden lg:block">
            <button
              className="flex items-center px-4 py-2 bg-white border border-gray-300 text-sm rounded-full hover:bg-dd-green-200 transition duration-200 hover:text-white"
              onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
              onBlur={() => setIsOptionsExpanded(false)}
            >
              {selectLanguage}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-4 w-4 ml-2 transform transition-transform duration-200 ease-in-out ${
                  isOptionsExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOptionsExpanded && (
              <ul className="absolute right-0 w-48 mt-2 bg-white divide-y rounded-lg shadow-lg overflow-hidden z-50">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setOption(option);
                    }}
                  >
                    <Image
                      src={option.flag}
                      width={"20"}
                      height={"20"}
                      alt="flag"
                    />
                    &nbsp;&nbsp;{option.country}
                    {pathname === `/${option.code}` && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 text-green-500 ml-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:hidden">
            {isMenuOpen ? (
              <XMarkIcon onClick={toggleMenu} className="w-8 h-10 text-white" />
            ) : (
              <Bars3BottomRightIcon
                onClick={toggleMenu}
                className="w-8 h-10 text-white"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
