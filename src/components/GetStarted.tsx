import { useCallback, useRef } from "react";
import ConnectWalletButton from "./Linkmargin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {
  const onClick = useCallback(() => {}, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const lists = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".header-title div", {
        scrollTrigger: lists.current,
        y: 50,
        duration: 1,
        stagger: 0.05,
      });
      gsap.from(".lists div", {
        scrollTrigger: lists.current,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef} className="w-full flex flex-row items-start px-5">
      <div className="w-full  flex flex-col items-center justify-start gap-14  py-10">
        <div className="header-title w-full flex flex-col items-center justify-start gap-5">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
            <h1 className="relative leading-10 md:text-4xl font-bold sm:leading-8 md:leading-10 ">
              Get startet in 1 step
            </h1>
          </div>
          <div className="relative text-base leading-6 text-gray-100 ">
          AKUDA supports a variety of the most popular Wallets.
          </div>
        </div>
        <div className="lists w-full md:w-3/4 lg:w-2/3 mx-auto   self-stretch flex flex-col items-center justify-start  0 px-0 pb-5 box-border max-w-full text-left text-base">
          <div className="w-full rounded-3xl bg-gray-900 flex flex-col md:flex-row items-center justify-start p-8 md:p-16">
            <div className="h-96 md:h-36 min-w-[60%] grow pr-10 pb-5 md:pb-0">
              <div className="relative self-stretch size-full ">
                <div className="w-full absolute left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 md:top-1/2 md:-translate-y-1/2   flex flex-col items-center md:items-start justify-center gap-6">
                  <div className="overflow-hidden flex flex-col items-start justify-start ">
                    <div className="overflow-hidden flex flex-col items-center justify-center py-0 pr-[7.105427357601002e-15px] pl-0">
                      <img
                        className="w-[84.9px] h-[84.9px] relative overflow-hidden shrink-0"
                        loading="eager"
                        alt=""
                        src="/walletsvg.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-4 text-base">
                      Connect your wallet
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 md:rotate-0 w-[150px] flex flex-col items-start justify-start pt-0 z-[1]">
                  <div className="w-full overflow-hidden flex flex-col items-start justify-start ">
                    <div className="self-stretch h-[3px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[0.6306910514831543px] px-0 ">
                      <img
                        className="self-stretch h-[1.8px] relative max-w-full overflow-hidden shrink-0"
                        alt=""
                        src="/line20animation20dotsvg.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full absolute right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 bottom-0 md:top-1/2 md:-translate-y-1/2  flex flex-col items-center md:items-end justify-start md:justify-center  text-base z-10">
                  <div className="flex flex-col items-center justify-start gap-[25.51px]">
                    <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[9px] pl-2 ">
                      <div className="overflow-hidden flex flex-col items-center justify-center py-0 pr-[7.105427357601002e-15px] pl-0">
                        <img
                          className="w-[84.9px] h-[84.9px] relative overflow-hidden shrink-0"
                          loading="eager"
                          alt=""
                          src="/start20trading201svg.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-5 text-base">
                        Start trading
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  md:flex-[1.3] text-base flex flex-col items-center md:items-start justify-start md:pl-16 pt-10 gap-6 max-w-full  text-gray-100 border-t-[0.8px] border-l-0 md:border-t-0 md:border-l-[0.8px] border-solid border-gray-1000">
              <div className="flex flex-row items-start justify-start ">
                <div className="relative leading-7">
                  <p className="text-base text-center md:text-start">
                    Click on button and connect
                  </p>
                  <p className=" text-center md:text-start">your wallet.</p>
                </div>
              </div>
              <ConnectWalletButton onClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
