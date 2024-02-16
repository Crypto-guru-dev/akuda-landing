const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto flex flex-col items-start justify-start  gap-14  text-left text-sm text-white  md:gap-14">
      <div className=" w-full flex flex-col md:flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full md:flex-wrap">
        <div className="w-1/3 flex flex-col items-start justify-center cursor-pointer">
          <div className="w-full overflow-hidden flex flex-row items-start justify-start max-w-[200.5500030517578px]">
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-center">
              <img
                className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0 object-contain"
                loading="eager"
                alt=""
                src="/akuda_logo.png"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[33px] max-w-full sm:flex-wrap sm:gap-[33px]">
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://medium.com/@dpex"
            target="_blank"
          >
            Blog
          </a>
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://snapshot.org/#/dpex.eth"
            target="_blank"
          >
            Voting
          </a>
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://docs.dpex.io/bug-bounty"
            target="_blank"
          >
            Bug Bounty
          </a>
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://dpex.io/"
            target="_blank"
          >
            App
          </a>
          <a
            className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
            href="https://dpex.io/FAQ"
            target="_blank"
          >
            FAQ
          </a>
        </div> */}
      </div>
      <div className="self-stretch flex flex-col md:flex-row items-center md:items-start justify-between gap-[20px] text-mini-7 text-gray-1100 md:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[8px] max-w-[1377.1300048828125px] cursor-pointer mq1800:max-w-full">
          <a
            className="relative leading-4 font-medium "
            href="https://polygon.technology/"
            target="_blank"
          >
            Powered by
          </a>
          <div className="h-[21.2px] w-[24.4px] relative overflow-hidden shrink-0 max-w-[182.36000061035156px]">
            <img
              className="absolute top-[0.2px] left-[0px] w-[24.4px] h-[20.4px] overflow-hidden"
              alt=""
              src="/footervectorsvg.svg"
            />
          </div>
          <a
            className="relative text-mini-6 leading-4 font-medium text-transparent !bg-clip-text [background:linear-gradient(81.22deg,_#3a7a69,_#478d7b_15%,_#3decbe_24%,_#04fcba_36%,_#01946d_44%,_#6cc0aa_56%,_#2fe4b3_66%,_#306f5e_78%,_#00ffba_88%,_#5fcfb2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-decoration:none] max-h-[14.819999694824219px]"
            href="https://polygon.technology/"
            target="_blank"
          >
            Polygon
          </a>
        </div>
        <div className="h-[21px] w-80 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-mini-3">
          <div className="self-stretch h-[29px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-center justify-start gap-[26px]">
              <a
                className="relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
                href="https://AKUDA.io/terms"
                target="_blank"
              >
                Terms and Conditions
              </a>
              <div className="flex-1 flex flex-row items-center justify-start gap-1 text-sm">
                <div className=" flex-1 relative leading-4 font-medium hover:text-aquamarine peer-hover/first:text-aquamarine peer-hover/second:text-aquamarine  transition-all ease-in-out duration-300">
                  Audits:{" "}
                </div>
                <a
                  className="peer/first relative leading-4 hover:text-aquamarine transition-all ease-in-out duration-300"
                  href="https://www.certik.com/projects/AKUDA"
                  target="_blank"
                >
                  Certik
                </a>
                <a
                  className="relative leading-4 peer/second  hover:text-aquamarine transition-all ease-in-out duration-300"
                  href="https://github.com/zokyo-sec/audit-reports/blob/main/AKUDA/AKUDA_Zokyo%20audit%20report.pdf"
                  target="_blank"
                >
                  Zokyo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
