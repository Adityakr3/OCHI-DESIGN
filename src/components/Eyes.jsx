import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate , setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
       let mousex = e.clientX;
       let mousey = e.clientY;

       let deltx = mousex - window.innerWidth/2;
       let deltY = mousey  - window.innerHeight/2;

       var angle = Math.atan2(deltY , deltx,) * (180/Math.PI)
       setRotate(angle - 180)

    })
  })
  return (
    <div className="eyes relative w-full h-screen overflow-hidden">
      <div className='w-full h-full bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 flex gap-8">
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-7 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-8 h-8 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-7 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-8 h-8 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
