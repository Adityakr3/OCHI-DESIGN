import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full  p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
        <h1 className='font-["Neue Montreal"] text-[3.4vw] leading-[4vw] pr-80'>
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="flex justify-between bg-[#CDEA68] px-20 p-16 text-black w-full border-t-[2px]  border-[#a8b772] text-s font-light">
        <p>What you can expect:</p>
        <div className="contain w-[41vw]">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people. We believe the mix of
            strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
        </div>
        <div className="">
          S:
          <br /> Instagram <br /> Behance <br /> Facebook <br />
          Linkedin
        </div>
      </div>
      <div className="bg-[#CDEA68] flex justify-between  pt-10 px-16 text-black w-full border-t-[2px]  border-[#a8b772]">
        <div className="w-1/2">
          <h1 className="font-light text-6xl">Our approach:</h1>
          <button className="uppercase flex gap-8 items-center mt-5 px-10 py-4 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[59vh] rounded-xl bg-[#7385316b]"></div>
      </div>
    </>
  );
};
export default About;
