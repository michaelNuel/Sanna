'use client'
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ItemsHeroPage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    // Set up the IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the element is intersecting
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin from the viewport
        threshold: 0.1, // Trigger when 10% of the target is visible
      }
    );

    // Start observing the target element
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <div className=" overflow-hidden ">
      <Navbar />
      <div ref={targetRef} className={`mt-14 flex justify-center gap-24 transition-opacity duration-[1500ms] ${isIntersecting ? "opacity-100": "opacity-0"}`}>
        <div>
          <Image alt="art" src={"/ArtImage.svg"} height={540} width={580} />
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <div>
              <Image
                alt="#"
                src={"/Save Nok Igbo-Ukwu Art.svg"}
                height={300}
                width={400}
              />
            </div>

            <div className="flex justify-between rounded-3xl mt-7 bg-[#96FFD9] px-2 py-1">
              <div className="flex gap-1">
                <div>
                  <h3 className="text-sm  font-bold">Michael Emmanuel</h3>
                </div>
                <div>
                  <h3 className="text-sm text-purple-600 font-medium">
                    Just Donated
                  </h3>
                </div>
              </div>

              <div>
                <div>
                  <h3 className="text-sm font-bold">$93.97</h3>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <div>
                <Image alt={"sol"} height={20} width={20} src={"/solana.svg"} />
              </div>
              <div>
                <p className="text-purple-600 font-medium text-md ">
                  20000(0.3Arb)
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-gray-900 w-full h-1 rounded-2xl"></div>

              <div className="flex justify-between mt-2">
                <div>
                  <h2 className="text-purple-600 font-thin text-xxs">
                    OverAll Progress
                  </h2>
                </div>

                <div>
                  <h2 className="text-purple-600 font-thin text-xxs">0%</h2>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3 className=" text-xs text-gray-600 ">West Africa</h3>
            </div>

            <div className="bg-[#D4B4FF] rounded-2xl px-1 py-1 flex justify-center gap-1 w-32">
              <div>
                <h3 className="text-xs font-bold">3.5k</h3>
              </div>
              <div>
                <h3 className="text-xs font-bold">Donations</h3>
              </div>
            </div>

            <div className="grid place-content-center mt-2">
              <button className="bg-[#9747FF] text-xs   px-44 py-1 rounded-3xl text-white">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsHeroPage;
