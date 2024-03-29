import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-16"
    >
      <div className="w-full px-20 border-b-2 pb-16 border-zinc-700 ">
        <h1 className="text-5xl font-['Neue Montreal tracking-tight']">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-10 p-16">
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardContainer relative w-1/2 h-[65vh]">
          <h1 className="absolute overflow-hidden flex z-[98] text-8xl leading-none top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter left-full font-bold text-[#CDEA68]">
            {"FYDE".split("").map((item, idx) => (
              <motion.span
                initial={{y:"100%"}}
                animate={cards[0]}
                className="inline-block"
                transition={{ease:[0.22 , 1 , 0.36 , 1],delay:idx*.05}}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h4 className="pb-4 font-bold">⚫️ FYDE</h4>
          <div className="card w-full h-full  rounded-lg overflow-hidden">
            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
          </div>
          <div className="mt-4 flex gap-4">
            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
              (item, idx) => (
                <button className="text-sm rounded-full px-2 py-1 border-[1px] border-zinc-900">
                  {item}
                </button>
              )
            )}
          </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardContainer relative w-1/2 h-[65vh]">
          <h1 className="absolute  flex overflow-hidden z-[98] text-8xl leading-none top-1/2 translate-x-1/2 -translate-y-1/2 tracking-tighter right-full font-bold text-[#CDEA68]">
            {"VISE".split("").map((item, idx) => (
              <motion.span initial={{y:"100%"}}
              animate={cards[1]}
              className="inline-block"
              transition={{ease:[0.22 , 1 , 0.36 , 1],delay:idx*.05}} >{item}</motion.span>
            ))}
          </h1>
          <h4 className="pb-4 font-bold">⚫️ VISE</h4>
          <div className="card w-full h-full rounded-lg overflow-hidden">
            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
          </div>
          <div className="mt-4 flex gap-4">
            {["Agency", "Company Presentation"].map((item, idx) => (
              <button className="text-sm rounded-full px-2 py-1 border-[1px]  border-zinc-900">
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="cards w-full flex gap-10 p-16">
        <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cardContainer relative w-1/2 h-[65vh]">
          <h1 className="absolute flex overflow-hidden z-[98] text-8xl leading-none top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter left-full font-bold text-[#CDEA68]">
            {"TRAWA".split("").map((item, idx) => (
                         <motion.span initial={{y:"100%"}}
                         animate={cards[2]}
                         className="inline-block"
                         transition={{ease:[0.22 , 1 , 0.36 , 1],delay:idx*.05}} >{item}</motion.span>
            ))}
          </h1>
          <h4 className="pb-4 font-bold">⚫️ TRAWA</h4>
          <div className="card w-full h-full  rounded-lg overflow-hidden">
            <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" />
          </div>
          <div className="mt-4 flex gap-4">
            {["Brand Identity", "Design Research", "SALES Investor Deck"].map(
              (item, idx) => (
                <button className="text-sm rounded-full px-2 py-1 border-[1px] border-zinc-900">
                  {item}
                </button>
              )
            )}
          </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)}  className="cardContainer relative w-1/2 h-[65vh]">
          <h1 className="absolute flex overflow-hidden z-[98] text-8xl leading-none top-1/2 translate-x-1/2 -translate-y-1/2 tracking-tighter right-full font-bold text-[#CDEA68]">
            {"PREMIUM".split("").map((item, idx) => (
                         <motion.span initial={{y:"100%"}}
                         animate={cards[3]}
                         className="inline-block"
                         transition={{ease:[0.22 , 1 , 0.36 , 1],delay:idx*.05}} >{item}</motion.span>
            ))}
          </h1>
          <h4 className="pb-4 font-bold">⚫️ PREMIUM BLEND</h4>
          <div className="card w-full h-full rounded-lg overflow-hidden">
            <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" />
          </div>
          <div className="mt-4 flex gap-4">
            {["Branded Template"].map((item, idx) => (
              <button className="text-sm rounded-full px-2 py-1 border-[1px]  border-zinc-900">
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
