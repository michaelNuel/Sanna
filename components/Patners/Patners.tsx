import Image from "next/image";
import React from "react";

const Patners = () => {
  return (
    <div>
      <div className="flex mt-15 mx-32 flex-col">
        <div className="grid place-content-center mt-10" >
          <Image alt="#" src={"/Eco.svg"} height={200} width={300} />
        </div>

        <div className="flex justify-between align-middle">
          <div>
            <Image alt="#" src={"/blockchain.svg"} height={200} width={300} />
          </div>
          <div className="mt-14">
            <Image alt="#" src={"/lisk.svg"} height={200} width={300} />
          </div>
          <div className="mt-14">
            <Image alt="#" src={"/wjs.svg"} height={200} width={300} />
          </div>
          <div className="mt-14">
            <Image alt="#" src={"/sol.svg"} height={100} width={200} />
          </div>
          <div className="mt-20">
            <Image alt="#" src={"/stellar.svg"} height={200} width={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patners;
