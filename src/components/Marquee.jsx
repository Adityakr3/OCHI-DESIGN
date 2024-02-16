import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="rounded-tl-3xl text-white rounded-tr-3xl w-full py-10 bg-[#1e4e43]">
      <div className="flex whitespace-nowrap gap-40 overflow-hidden text  border-t-2 border-b-2 border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity , duration: 5 }}
          className='text-[18vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10  -mb-12'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity  , duration: 5}}
          className='text-[18vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 -mb-12'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};
export default Marquee;
