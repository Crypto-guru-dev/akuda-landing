import {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import ConnectWalletButton from "./Linkmargin";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";

const TradingWidgetSlider = dynamic(() => import("./TradingWidgetSlider"), {
  ssr: false,
});

const Hero: FunctionComponent = () => {
  const onClick = useCallback(() => {}, []);
  const heroTitleRef = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        delay: 1,
      });
      tl.set(container.current, { autoAlpha: 1 });
      tl.from([".hero-title p", ".hero-description", ".connect-wallet-btn"], {
        y: 50,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
      });
      tl.from(".trade-btn", {
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });
    },
    { scope: container }
  );

  return (
    <header className="-mt-20 w-full min-h-svh flex flex-col items-start justify-start max-w-full shrink-0 text-left text-base text-white ">
      <div className="border-b-[0.8px] border-solid border-gray-1000 overflow-hidden min-h-svh self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-screen w-4/5 absolute my-0 mx-[!important] inset-0 ml-auto right-0 max-w-full overflow-hidden object-cover z-[2]"
          loading="eager"
          alt=""
          src="/images/hero-bg.png"
        />
        <div className="z-[3] absolute inset-0   bg-gradient-to-r from-[#08222D] via-20% via-[#08222D]  to-transparent "></div>
        <div
          ref={container}
          className="opacity-0 relative mt-20 md:mt-0 h-full min-h-[calc(100svh_-_100px)] px-5 md:px-20  flex-1 box-border flex flex-row items-center justify-start  gap-[78px] max-w-full z-[3] "
        >
          <div className="flex flex-col justify-center items-start  max-w-full mt-36">
            <div className="flex flex-col items-start justify-start gap-[28px]">
              {/* <div className="trade-btn flex flex-col items-start justify-start">
                <div className="rounded-2 bg-gray-400 flex flex-row items-center justify-start pt-5 pb-6 pr-[21px] pl-6 gap-4">
                  <img
                    loading="eager"
                    src="/Union.svg"
                    className="m-0 h-[13px] w-[25.5px] overflow-hidden shrink-0 max-w-[275.510009765625px]"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16.96px] font-medium inline-block max-h-[16.959999084472656px]">
                      <span>{`Trade `}</span>
                      <span className="text-slategray">BTC, ETH, MATIC</span>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                ref={heroTitleRef}
                className="hero-title relative text-3xl md:text-5xl lg:leading-[55.97px] font-medium  md:leading-[45px] sm:text-3xl sm:leading-[34px]"
              >
                <p className="m-0">Decentralized</p>
                <p className="m-0">Perpetual Exchange</p>
              </div>
              <div className="h-[102px] relative text-sm md:text-base leading-6 flex items-center ">
                <div>
                  <p className="m-0 hero-description">
                    Trade Bitcoin, Ethereum, and other digital currencies{" "}
                    <br className="hidden md:flex" />
                    with up to 50X leverage from the comfort of your web3{" "}
                    <br className="hidden md:flex" />
                    wallet, such as Metamask or Coinbase Wallet - no need{" "}
                    <br className="hidden md:flex" />
                    for a middleman!
                  </p>
                </div>
              </div>
              <ConnectWalletButton onClick={onClick} />
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-5 md:top-32 text-mini-2 leading-[22.23px]  flex flex-col gap-y-5  mx-auto">
            <h1 className="font-semibold">Trade Today</h1>
            <div className="h-[100px] flex-1 relative bg-gray-600 overflow-hidden ">
              <TradingWidgetSlider />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-h-56 w-11/12 md:w-3/4 py-10 self-stretch flex px-10 flex-col md:flex-row md:items-center items-start justify-between   mx-auto  gap-5 z-[3] text-base text-gray-700">
        <div className="flex flex-row items-start justify-start gap-[23px] sm:flex-wrap">
          <div className="overflow-hidden flex flex-row items-center justify-center max-w-[318.70001220703125px]">
            <img
              className="size-20 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/total20trading20volumesvg.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px]">
            <div className="relative leading-[25.44px] inline-block max-h-[25.440000534057617px]">
              Total Trading Volume
            </div>
            <div className="relative  leading-[38.2px] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#24273f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap sm:text-2xl md:leading-[31px] text-xl md:text-4xl sm:leading-[23px]">
              $38,033,333
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-0 gap-[23px] text-base">
          <div className="overflow-hidden flex flex-row items-center justify-center max-w-[219.83999633789062px]">
            <img
              className="size-20 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/open20invest20iconsvg.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px]">
            <div className="relative leading-[25.44px] inline-block max-h-[25.440000534057617px]">
              Open Interest
            </div>

            <div className="relative  leading-[38.2px] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#24273f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap sm:text-2xl md:leading-[31px] text-xl md:text-4xl sm:leading-[23px]">
              $1,980
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[23px]">
          <div className="overflow-hidden flex flex-row items-center justify-center max-w-[255.0800018310547px]">
            <img
              className="size-20 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/total20users20iconsvg.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px]">
            <div className="relative leading-[25.44px] inline-block max-h-[25.440000534057617px]">
              Total Value Locked
            </div>
            <div className="relative  leading-[38.2px] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#24273f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap sm:text-2xl md:leading-[31px] text-xl md:text-4xl sm:leading-[23px]">
              $16,309
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Hero;
