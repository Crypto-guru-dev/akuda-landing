import { FunctionComponent, useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TwoTokens: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lists = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".header-title", {
        scrollTrigger: lists.current,
        y: 50,
        duration: 1,
      });
      gsap.from(".lists div", {
        scrollTrigger: lists.current,
        opacity: 0,
        y: 50,
        duration: 1,
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="w-11/12 mx-auto flex flex-col gap-y-10 my-5"
    >
      <h1 className="header-title w-full relative xl:leading-10  px-5 leading-7 md:text-4xl md:leading-10 font-bold  text-xl my-4">
        Two tokens create our ecosystem
      </h1>
      <div
        ref={lists}
        className="lists w-full grid grid-cols-1 md:grid-cols-2  items-center justify-center  gap-5 max-w-full text-left text-xl text-white "
      >
        <div className="w-full  rounded-3xl bg-gray-300 flex flex-col items-start justify-start p-6 box-border gap-6 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 flex-wrap">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="overflow-hidden flex flex-col items-start justify-start max-w-[137.85000610351562px]">
                  <div className="overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-[57.3px] h-[57.3px] relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/logodpsvg.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[36.24px] inline-block max-h-[36.2400016784668px] sm:text-xl sm:leading-[29px]">
                    DPEX
                  </b>
                </div>
              </div>
              <button className="text-sm cursor-pointer [border:none] pt-1.5 pb-1 pr-[25px] pl-6 bg-gray-600 rounded-md flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start ">
                  <div className="relative text-xs-9 leading-[25.36px] font-inter text-darkgray text-left inline-block ">
                    APR: 11.25%
                  </div>
                </div>
              </button>
            </div>
            <div className="relative  leading-8 font-inter text-gray-100 text-base">
              <p className="break-words">
                DPEX is the token powering utility and governance
              </p>
              <p className="m-0">
                within its platform, not to mention granting you access
              </p>
              <p className="m-0">
                to 25% of all fees earned by the system when staked.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0  pl-0 gap-6 text-sm  md:flex-wrap ">
            <button className="cursor-pointer py-3 px-5 bg-darkslategray  hover:bg-aquamarine/50 transition-all duration-300 ease-in-out  rounded-md box-border flex flex-row items-center justify-center  border border-solid border-aquamarine ">
              <div className="flex flex-col items-start justify-start ">
                <a
                  className="relative text-sm leading-4 font-inter text-white text-left"
                  href="https://dpex.io/"
                  target="_blank"
                >
                  Buy on Polygon
                </a>
              </div>
            </button>
            <div className="flex flex-col items-start justify-start  cursor-pointer ">
              <div className="flex flex-col items-start justify-start">
                <a
                  className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-500"
                  href="https://dpex.io/"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  rounded-3xl bg-gray-300 flex flex-col items-start justify-start p-6 box-border gap-6 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full shrink-0">
            <div className="self-stretch text-sm flex flex-col items-start md:items-center md:flex-row  justify-between gap-[20px] max-w-full md:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[16.95px]">
                <div className="overflow-hidden flex flex-col items-start justify-start max-w-[137.55999755859375px]">
                  <div className="overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-[57.3px] h-[57.3px] relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/logolpsvg.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[36.24px] inline-block max-h-[36.2400016784668px] sm:text-xl sm:leading-[29px]">
                    DPLP
                  </b>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-start gap-y-1 max-w-full text-xs-9 text-darkgray ">
                <button className="cursor-pointer [border:none] pt-[6.417600154876709px] pb-[4.889599800109863px] pr-[22px] pl-[25.51759910583496px] bg-gray-600 rounded-[4.28px] flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-smi-1 leading-[25.36px] font-inter text-darkgray text-left inline-block max-h-[25.360000610351562px]">
                      APR: 4.81%
                    </div>
                  </div>
                </button>
                <div className="rounded-[4.28px] bg-gray-600 flex flex-row items-center justify-start pt-[6.417600154876709px] pb-[4.889599800109863px] pr-[26px] pl-[25.51759910583496px] gap-[9.63px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                    <div className="relative leading-[25.36px] inline-block max-h-[25.360000610351562px]">
                      DPLP Performance: 21.7%
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[2.469999313354492px]">
                    <img
                      className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/svg-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-base leading-7 font-inter text-gray-100 inline-block  md:max-w-full">
              <p className="m-0">
                DPLP stands out amongst the rest when it comes to
              </p>
              <p className="m-0">
                liquidity provider tokens, as they receive an impressive 70%
              </p>
              <p className="m-0">of all platform generated fees.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start  gap-[25.13px] text-sm font-inter md:flex-wrap md:pr-[184px] md:box-border sm:pr-5 sm:box-border">
            <button className="cursor-pointer py-3 px-5 bg-darkslategray  hover:bg-aquamarine/50 transition-all duration-300 ease-in-out  rounded-md box-border flex flex-row items-center justify-center  border border-solid border-aquamarine ">
              <div className="flex flex-col items-start justify-start">
                <a
                  className="relative text-mini-6 leading-4 font-inter text-white text-left inline-block [text-decoration:none] "
                  href="https://dpex.io/"
                  target="_blank"
                >
                  Buy on Polygon
                </a>
              </div>
            </button>
            <div className="flex flex-col items-start justify-start max-w-[629.0599975585938px] cursor-pointer md:max-w-full">
              <div className="flex flex-col items-start justify-start">
                <a
                  className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-500"
                  href="https://dpex.io/"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoTokens;
