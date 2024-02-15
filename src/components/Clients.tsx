import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "../helpers/utils";

type Props = {};

const Clients = (props: Props) => {
  const clients = [
    {
      id: 1,
      image: "/cointelegraphsvg@2x.png",
      href: "https://cointelegraph.com/",
    },
    {
      id: 2,
      image: "/image2047svg@2x.png",
      href: "https://www.entrepreneur.com/",
    },
    {
      id: 3,
      image: "/entrepreneurwordmarksvg.svg",
      href: "https://www.entrepreneur.com/",
    },
    {
      id: 4,
      image: "/investingcom-svg.svg",
      href: "https://www.investing.com/",
    },
    {
      id: 5,
      image: "/groupsvg.svg",
      href: "https://www.investing.com/",
    },
    {
      id: 6,
      image: "/tradingviewlogovectorsvg.svg",
      href: "https://www.tradingview.com/",
    },
    {
      id: 7,
      image: "/hackernoonsvg@2x.png",
      href: "https://www.tradingview.com/",
    },
    {
      id: 8,
      image: "/hackernoonsvg@2x.png",
      href: "https://www.tradingview.com/",
    },
    {
      id: 9,
      image: "/tradingviewlogovectorsvg.svg",
      href: "https://www.tradingview.com/",
    },
    {
      id: 8,
      image: "/hackernoonsvg@2x.png",
      href: "https://www.tradingview.com/",
    },
  ];

  return (
    <div className="py-5">
      <div className="my-10">
        <b className="relative text-2xl md:text-4xl md:leading-10">
          As seen on:
        </b>
      </div>
      <div
        style={{
          //   outline: "1px solid red",
          maxWidth: "99vw",
          overflowX: "hidden",
        }}
        className="self-stretch flex flex-row items-start justify-start gap-[5px] max-w-screen overflow-hidden py-5 h-40"
      >
        <Marquee
          gradient={false}
          speed={70}
          autoFill
          //   pauseOnHover={true}
          className=" shrink-0 flex flex-row !gap-x-10 items-center justify-start  max-w-screen overflow-x-hidden"
        >
          {clients.map((client, index) => {
            return (
              <button
                key={client.id}
                className={cn(
                  "mx-5 cursor-pointer py-10 px-5  rounded-2xl overflow-hidden shrink-0 flex flex-row items-center justify-center transition-all duration-300 ease-in-out",
                  "bg-gray-200 hover:bg-darkslategray hover:border border-solid border-transparent hover:border-aquamarine"
                )}
              >
                <div className="w-[140px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 pr-[13px] pl-3">
                  <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 pr-[0.0031311034690588713px] pl-[0.0031250000465661287px]">
                    <img
                      className="self-stretch h-7 relative max-w-full overflow-hidden shrink-0 object-contain"
                      alt=""
                      src={client.image}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
