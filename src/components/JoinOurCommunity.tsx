import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const JoinOurCommunity = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lists = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: containerRef.current,
        y: 70,
        duration: 1,
        stagger: 0.1,
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="w-11/12 border border-solid mx-auto rounded-3xl p-10 [background:linear-gradient(90.42deg,_#1b1d2f_17%,_#161625_83%)] flex flex-col md:flex-row items-center justify-between  gap-5 max-w-full text-center  text-white"
    >
      <div className="flex flex-col w-11/12 mx-auto py-5 gap-y-5">
        <div className="w-full md:w-1/2  flex flex-col items-center md:items-start justify-start gap-5 max-w-full border-transparent border-b-[0.8px] md:border-b-0  md:border-r-[0.8px] border-solid border-r-gray-1000">
          <h1 className="whitespace-nowrap font-bold relative leading-10 md:text-3xl md:leading-10 sm:leading-8">
            Join Our Community
          </h1>
          <div className="relative text-base text-center leading-6 text-gray-100 ">
            Stay connected by following and subscribing to our channels.
          </div>
        </div>
        <div className="grow flex flex-row items-start justify-center pr-2 p gap-[16px] max-w-full flex-wrap">
          <div className="size-16 rounded-full overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer border border-transparent hover:border-aquamarine transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <img
                className="w-[65.8px] h-[65.8px] relative overflow-hidden shrink-0 object-contain"
                loading="eager"
                alt=""
                src="/twittersvg.png"
              />
            </div>
          </div>
          <div className="size-16 rounded-full overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer border border-transparent hover:border-aquamarine transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <img
                className="w-[65.8px] h-[65.8px] relative overflow-hidden shrink-0 object-contain"
                loading="eager"
                alt=""
                src="/telegramsvg.png"
              />
            </div>
          </div>
          <div className="size-16 rounded-full overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer border border-transparent hover:border-aquamarine transition-all duration-300 ease-in-out">
            <img
              className="h-[65.8px] w-[65.8px] relative overflow-hidden shrink-0 object-contain"
              loading="eager"
              alt=""
              src="/discordsvg.png"
            />
          </div>
          <div className="size-16 rounded-full overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer border border-transparent hover:border-aquamarine transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <img
                className="w-[65.8px] h-[65.8px] relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/mediumsvg.svg"
              />
            </div>
          </div>
          <div className="size-16 rounded-full overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer border border-transparent hover:border-aquamarine transition-all duration-300 ease-in-out">
            <img
              className="h-[65.8px] w-[65.8px] relative overflow-hidden shrink-0 object-contain"
              loading="eager"
              alt=""
              src="/githubsvg.png"
            />
          </div>
          <div className="size-16 rounded-full overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer border border-transparent hover:border-aquamarine transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <img
                className="w-[65.8px] h-[65.8px] relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/docssvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
