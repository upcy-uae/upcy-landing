"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import gbFlag from "@/src/assets/images/bg_flag.png";
import esFlag from "@/src/assets/images/spain_flag.png";
import catFlag from "@/src/assets/images/cat_flag.webp";
import Image from "next/image";

export const LangSwitcherTwo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const options = [
    { country: "Spanish", code: "es", flag: esFlag },
    { country: "English", code: "en", flag: gbFlag },
    { country: "Catalan", code: "cat", flag: catFlag },
    // Add more language options here
  ];

  const setOption = (option) => {
    router.push(`/${option.code}`);
  };

  return (
    <div className="flex justify-center bg-white">
      {options.map((option, index) => (
        <button
          key={index}
          className="flex items-center justify-center  text-black  focus:ring-4  font-medium text-sm px-5 py-2.5  cursor-pointer"
          onClick={() => setOption(option)}
        >
          <Image
            key={index}
            src={option.flag}
            width={20}
            height={20}
            alt="logo"
          />
          {/* <span className="ml-2">{option.country}</span> */}
          {/* {pathname === `/${option.code}` && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7 text-green-500 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )} */}
        </button>
      ))}
    </div>
  );
};

{
  /* <Image
  key={index}
  src={option.flag}
  width={20}
  height={20}
  alt="logo"
  onClick={() => setOption(option)}
/>; */
}
