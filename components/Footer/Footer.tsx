import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black flex justify-center h-screen mt-10 ">
      <div className="flex flex-col gap-8 p-10  w-3/5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center align-middle">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-900 font-bold">
              Subscribe to Our Mailing
            </h3>
          </div>
          <div className="mt-1 grid place-items-center">
            <h3 className="text-white text-sm font-thin">
              Stay in the loop-subscribe for voting updates and more!
            </h3>
          </div>
        </div>

        <div className="flex gap-3 ">
            <input className="bg-[#1E1E1E] w-full py-1 rounded-3xl px-3 placeholder: text-sm " placeholder="Enter Email" />

            <button className="grid place-content-center place-items-center text-sm py-3 px-3 bg-[#9747FF] text-white rounded-3xl">
                Subscribe
            </button>
        </div>


        <div className="flex gap-10 justify-center mt-36 align-middle">
            <div>
                <Image alt="#" src={'/X.svg'} height={40} width={40} />
            </div>
            <div>
                <Image alt="#" src={'/discord.svg'} height={40} width={40} />
            </div>
            <div>
                <Image alt="#" src={'/Github.svg'} height={40} width={40} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
