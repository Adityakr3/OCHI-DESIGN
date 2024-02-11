import React from "react";

const Eyes = () => {
  return (
    <div className="eyes relative w-full h-screen overflow-hidden">
      <div className='w-full h-full bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 flex gap-8">
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900"></div>
          </div>
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900"></div>
          </div>        </div>
      </div>
    </div>
  );
};

export default Eyes;
