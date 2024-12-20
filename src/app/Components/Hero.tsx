import React from "react";
import Image from "next/image";
const Hero = ()=>{
    return (
     <div >
     <div className="w-full h-[88px] bg-[#D9D9D9] "></div>

         <div className=" flex justify-center items-center w-full h-[600px]  ">
          <div className=" w-[600px] pt-5 mr-2">
               <h1 className=" font-inter text-4xl mb-2 font-[700] ">Welcome To Our Website</h1>
          <p className="w-[500px] h-[200px] p-1 font-sans text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque 
           saepe alias accusamus excepturi sequi consequuntur ea sunt temporibus nobis perferendis obcaecati tenetur iure quia non repellendus eos molestias quod!</p>
           <button className="w-[200px] h-[66px] bg-[#121212] text-white text-xl font-[400]">Contact US</button>
           </div>
           <div>
           <Image
            src="/image/hero.png"
            alt="image"
            width={300}
            height={300}
            className="mx-auto w-[450px] h-[400px] "
          />
           </div>
         </div>
         </div>
    );
  }
  export default Hero;