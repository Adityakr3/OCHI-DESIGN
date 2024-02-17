import React from "react";

const Card3 = () => {
  return (
    <div className="w-full flex px-12 items-center h-screen gap-4 bg-[#f1f1f1]">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card flex relative items-center justify-center rounded-xl bg-[#1e4e43] w-full h-full">
          <img
            className="h-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            srcset=""
          />
          <button className="text-sm absolute left-3 bottom-5 text-[#cdea68] rounded-full px-2 py-1 border-[1px]  border-[#cdea68]">
            <span class="btn__text">©2019–2022</span>
          </button>
        </div>
      </div>
      <div className="cardContainer flex gap-4 h-[50vh] w-1/2">
        <div className="card rounded-xl flex relative items-center justify-center bg-[#212121] w-1/2 h-full">
        <img
            className="h-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            srcset=""
          />
          <button className="text-sm absolute left-3 bottom-5 text-[#ffffff] rounded-full px-2 py-1 border-[1px]  border-[#ffffff]">
            <span class="btn__text">Rating 5.0 on Clutch</span>
          </button>
        </div>
        <div className="card flex relative items-center justify-center  rounded-xl bg-[#212121] w-1/2 h-full">
        <img
            className="h-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            srcset=""
          />
          <button className="text-sm absolute left-3 bottom-5 text-[#ffffff] rounded-full px-2 py-1 border-[1px]  border-[#ffffff]">
            <span class="btn__text">Business Bootcamp Alumni</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
