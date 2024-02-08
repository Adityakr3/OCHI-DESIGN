import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div>
      <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="testStructue mt-56 px-20">
          {[" WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, idx) => (
            <div className="masker">
              <div className="w-fit flex items-center">
                {idx ==1 && (<div className="rounded-md mr-2 relative -top-[1.7vw] w-[9vw] h-[6vw] bg-green-500"></div>)}
              <h1 className='leading-[7.2vw] uppercase text-[9.5vw] font-["Founders_Grotesk_X-Condensed"] font-semibold'>
                {item}
              </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, idx) => (
            <p className="text-md tracking-tight leading-none font-light">
              {item}
            </p>
          ))}
          <div className="start flex justify-center items-center">
            <div className="capitalize text-sm px-5 py-2 border-[2px] border-x-zinc-600 rounded-full">
              {" "}
              START THE PROJECT
            </div>
            <div className="text-white mx-2 w-3 h-3 rounded-full border-[2px] border-x-zinc-600 p-5 flex items-center justify-center">
              <span className="rotate-[245deg]">
                <FaArrowDownLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
