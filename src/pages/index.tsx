"use client";

import { Inter } from "next/font/google";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JoinOurCommunity from "../components/JoinOurCommunity";
import Clients from "../components/Clients";
import GetStarted from "../components/GetStarted";
import TwoTokens from "../components/TwoTokens";
import ExploreOurProducts from "../components/ExporeOurProduct";
import Hero from "../components/Hero";
import Opportunity from "../components/Opportunity";

const inter = Inter({ subsets: ["latin"] });

const LandingPage = () => {
  return (
    <main
      className={`flex min-h-screen overflow-x-clip flex-col items-center justify-between max-w-screen ${inter.className}`}
    >
      <Navbar />
      <Hero />
      {/* <header className="w-[653.7px] h-[468.9px] relative overflow-hidden shrink-0 hidden max-w-[1512.800048828125px] mq1800:max-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[54.5px] max-h-full w-[544.8px] overflow-hidden"
          alt=""
          src="/glowsvg.svg"
        />
      </header> */}
      {/* <div className="self-stretch h-[3881.6px] relative bg-gray-600 hidden" /> */}
      <Opportunity />
      <ExploreOurProducts />
      <section className="self-stretch flex flex-col items-center justify-start pt-[76px] px-0 pb-[25px] box-border gap-[52px] max-w-full shrink-0 z-[2] text-center text-[32.7px] text-white font-inter md:gap-[52px] md:pt-8 md:box-border sm:pt-[21px] sm:box-border mq1350:pt-[49px] mq1350:pb-5 mq1350:box-border">
        <TwoTokens />
        <GetStarted />
        <Clients />
        <JoinOurCommunity />
        <Footer />
      </section>
    </main>
  );
};

export default LandingPage;
