import React from 'react'

const LandingPage = () => {
  return (
    <div>
       <div className='w-full h-screen bg-zinc-900 pt-1'>
         <div className="testStructue mt-56 px-20">
            {[" WE CREATE" , "EYE-OPENING" ,"PRESENTATIONS"].map((item , idx)=>(
                           <div className='masker'>
                           <h1 className='tracking-tighter leading-[6vw] uppercase text-[7.5vw] font-["Founders Grotesk"] font-medium'>
                               {item}
                           </h1>
                       </div>
            ))}
         </div>
         <div className="border-t-[1px] border-zinc-800 mt-32"></div>
       </div>
    </div>
  )
}

export default LandingPage

