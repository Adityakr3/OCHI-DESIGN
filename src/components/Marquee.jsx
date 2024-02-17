import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="rounded-tl-3xl text-white rounded-tr-3xl w-full py-10 bg-[#1e4e43]">
      <div className="flex whitespace-nowrap overflow-hidden text  border-t-2 border-b-2 border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity , duration: 15 }}
          className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10  -mb-12 pr-36'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity  , duration: 15}}
          className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 -mb-12 pr-36'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};
export default Marquee;
