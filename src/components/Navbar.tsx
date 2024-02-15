"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="px-5 md:px-20 h-20 text-white self-stretch [backdrop-filter:blur(9px)] flex flex-row items-center justify-between gap-[20px] top-[0] z-[99] sticky  text-sm border-b-[0.8px] border-solid border-gray-1000 ">
        <div className="flex  items-center gap-x-5 md:pr-10 self-stretch  md:border-r-[0.8px] border-solid border-gray-1000">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden flex-row items-start justify-start gap-4 cursor-pointer"
          >
            {isMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
          <Link href="/" className=" ">
            <div className="w-[131px] overflow-hidden shrink-0 flex flex-row items-start justify-start cursor-pointer">
              <div className="flex-1 overflow-hidden flex flex-col items-center justify-center ">
                <img
                  className="self-stretch h-[35.5px] relative max-w-full overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/dpex20logo201svg@2x.png"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-row items-start justify-start py-5 px-0 box-border gap-8">
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://medium.com/@dpex"
            target="_blank"
          >
            Blog
          </a>
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://dpex.io/"
            target="_blank"
          >
            Voting
          </a>
          <a
            className="relative text-sm leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://docs.dpex.io/"
            target="_blank"
          >
            Docs
          </a>
        </div>
        <button className=" pl-10 self-stretch  md:border-l-[0.8px] border-solid border-gray-1000">
          <div className="flex flex-row items-center justify-start gap-4  cursor-pointer">
            <div className="flex flex-col items-start justify-start">
              <a
                className="relative  text-white text-left  whitespace-nowrap"
                href="https://dpex.io/"
                target="_blank"
              >
                Open App
              </a>
            </div>
            <div className="flex flex-col items-start justify-start shrink-0">
              <img
                className="w-[6.4px] h-[22.9px] relative overflow-hidden shrink-0"
                alt=""
                src="/svg-6.svg"
              />
            </div>
          </div>
        </button>
      </nav>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center justify-start gap-5 p-5 fixed z-[100] mt-20 text-2xl  text-white bg-[#061a22]/90 backdrop-blur-[1px] w-full h-screen py-20`}
      >
        <Link href="/">Blog</Link>
        <Link href="/voting">Voting</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/faq">App</Link>
        <Link href="/whitelist"
          className="text-aquamarine/80  hover:text-aquamarine transition-all ease-in-out duration-500"
        
        >Whitelist</Link>
      </div>
    </>
  );
};

export default Navbar;
