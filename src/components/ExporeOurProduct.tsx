"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FunctionComponent, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExploreOurProducts: FunctionComponent = () => {
  const products = [
    {
      id: 1,
      image: "/svg-1@2x.png",
      bgImage: "/images/product-bg-1.png",
      title: (
        <p>
          Bringing decentralized <br /> trading to polygon
        </p>
      ),
      subtitle: (
        <p>
          DPEX is proud to bring decentralized trading to the Polygon network
          ...
        </p>
      ),
    },
    {
      id: 2,
      image: "/svg-2@2x.png",
      bgImage: "/images/product-bg-2.png",
      title: <p>Referral Program</p>,
      subtitle: (
        <p>The DPEX referral program provides a great opportunity ...</p>
      ),
    },
    {
      id: 3,
      image: "/svg-3@2x.png",
      bgImage: "/images/product-bg-3.png",
      title: <p>Fully Decentralized</p>,
      subtitle: (
        <p>
          The DPEX Foundation is a cutting-edge, <br /> founderless ...
        </p>
      ),
    },
    {
      id: 4,
      image: "/svg-4@2x.png",
      bgImage: "/images/product-bg-4.png",

      title: <p>Up To X50 Leverage</p>,
      subtitle: (
        <p>
          Trading with up to x50 leverage can substantially increase returns ...{" "}
        </p>
      ),
    },
  ];

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
        stagger: 0.05,
        duration: 0.5,
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-white flex flex-col items-center  py-14  max-w-full z-[2] text-left text-3xl text-gray-500"
    >
      <div className="w-11/12 mx-auto flex flex-col items-center  gap-10">
        <h1 className="header-title relative leading-10 text-2xl text-center md:text-3xl md:leading-10 sm:text-xl sm:leading-8 font-bold">
          Explore Our Full Product Suite Here
        </h1>
        <div className="flex w-full overflow-x-auto">
          <div className="w-full flex flex-col items-start justify-start gap-4 max-w-full text-5xl-5 text-white">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
              <div
                ref={lists}
                className="lists product-container w-full grid grid-cols- md:grid-cols-2 gap-4"
              >
                {products.map((product, index) => {
                  return (
                    <div
                      key={product.id}
                      className="h-52 py-10 w-full px-10 group rounded-3xl overflow-hidden  flex flex-col items-start justify-start pt-10 pb-20 md:pr-64 pl-13 relative gap-4"
                    >
                      <div className="w-full h-full my-0 mx-[!important] absolute top-[-0.17%] right-[0%] bottom-[0.17%] left-[0%] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border max-w-full">
                        <img
                          className="h-full w-full flex-1 relative max-w-full overflow-hidden max-h-full object-cover group-hover:scale-125  duration-1000 ease-in-out"
                          loading="eager"
                          alt=""
                          src={product.image}
                        />
                      </div>
                      <div className="flex flex-col items-start gap-y-3 ">
                        <div className="flex flex-col items-start justify-start z-[1] ">
                          <div className="flex flex-col items-start justify-start ">
                            <h2 className="relative capitalize  text-xl font-bold">
                              {product.title}
                            </h2>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start z-[1] text-sm text-gray-800">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="relative leading-[22.23px] inline-block max-w-[354.3399963378906px]">
                              {product.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurProducts;
