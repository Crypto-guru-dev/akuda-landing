import { FunctionComponent } from "react";

export type ButtonpropsType = {
  onClick?: () => void;
};

const ConnectWalletButton: FunctionComponent<ButtonpropsType> = ({
  onClick,
}) => {
  return (
    <div className="connect-wallet-btn flex flex-col items-start justify-start pt-6">
      <button
        className="cursor-pointer py-5 px-12 bg-darkslategray rounded-lg flex flex-row items-center justify-center border border-solid border-aquamarine hover:bg-aquamarine/50 duration-300 ease-in-out transition-all "
        onClick={onClick}
      >
        <div className="flex flex-col items-start justify-start">
          <a
            className="relative text-base-3 leading-[16.96px] font-bold font-inter text-white "
            href="https://AKUDA.io/"
            target="_blank"
          >
            Trade Now
          </a>
        </div>
      </button>
    </div>
  );
};

export default ConnectWalletButton;
