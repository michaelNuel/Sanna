"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [isFundingOpen, setIsFundingOpen] = useState<boolean>(false); // Track the button state
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

  const handleFundingClick = () => {
    setIsFundingOpen((prev) => !prev); // Toggle the button state
  };

  return (
    <div className="flex justify-center">
      <div
        ref={targetRef}
        className={`flex justify-between gap-64 mt-7 align-middle transition-opacity duration-[1500ms] ${
          isIntersecting ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <h2 className="text-white mt-2 font-bold text-sm">
            <Link href={"#"}> NASSA</Link>
          </h2>
        </div>

        <div className="flex justify-center mt-2 gap-12">
          <div>
            <h2 className="text-white font-normal text-sm">
              <Link href={"#"}>Home</Link>
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={handleFundingClick}
              className="text-white font-normal text-sm flex gap-1 align-middle"
            >
              <div>
                <h3>Create Funding</h3>
              </div>
              <div
                className={`mt-1 transition-transform duration-300 ${
                  isFundingOpen ? "rotate-180" : ""
                }`}
              >
                <Image alt="arrow" height={10} width={10} src={"/arro.svg"} />
              </div>
            </button>

            {/* Conditional rendering for modal */}
            {isFundingOpen && (
              <div className="absolute top-full mt-2  bg-[#06030a] p-4 w-32 rounded-2xl shadow-md">
                <ul className="flex flex-col gap-3 text-gray-700">
                  <li>
                    <Link  className="text-white text-sm hover:bg-purple-500 px-2 py-2 rounded-xl" href={"/application-form"} onClick={() => setIsFundingOpen(false)}>
                      Archaeologist
                    </Link>
                  </li>
                  <li>
                    <Link  className="text-white text-sm hover:bg-purple-500 px-2 py-2 rounded-xl" href={"/link2"} onClick={() => setIsFundingOpen(false)}>
                      Museums
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-white font-normal text-sm">
              <Link href={"#"}>Meet the Team </Link>
            </h2>
          </div>
          <div>
            <h2 className="text-white font-normal text-sm">
              <Link href={"#"}>About Us</Link>
            </h2>
          </div>
          <div>
            <h2 className="text-white font-normal text-sm">
              <Link href={"#"}>Doc</Link>
            </h2>
          </div>
        </div>

        <div>
          <button className="text-white font-normal text-sm bg-purple-500 py-2 p-4 rounded-2xl">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
