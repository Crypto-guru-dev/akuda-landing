"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MobileOpportunitySlider from "./MobileOpportunitySlider";

type Props = {};
const cryptoLinks = [
  {
    id: "1",
    link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSD%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
  },
  {
    id: "2",
    link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3AETHUSD%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
  },
  {
    id: "3",
    link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3AMATICUSD%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
  },
  {
    id: "4",
    link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABNBUSDT%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
  },
];

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Opportunity = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lists = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".lists div", {
        scrollTrigger: lists.current,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="w-full px-5 opportunity-widget   bg-white flex flex-col gap-y-10 items-center  z-[2] text-left text-4xl text-gray-500 py-14"
    >
      <div className="">
        <h1 className="relative leading-6 inline-block  max-w-full text-2xl text-center  md:text-3xl font-bold md:leading-10 sm:leading-8">
          Catch Your Next Trading Opportunity
        </h1>
      </div>
      <div
        ref={lists}
        className="lists hidden md:grid grid-cols-4 gap-x-6 w-11/12 mx-auto "
      >
        {cryptoLinks.map((item, index) => {
          return (
            <div key={item.id} className="rounded-2xl overflow-hidden">
              <div
                className="tradingview-widget-container "
                style={{
                  height: "220px",
                }}
              >
                <iframe
                  allowTransparency={true}
                  src={item.link}
                  title="mini symbol-overview TradingView widget"
                  lang="en"
                  className="size-full block pointer-events-none"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:hidden w-full ">
        <MobileOpportunitySlider />
      </div>
    </section>
  );
};

export default Opportunity;
