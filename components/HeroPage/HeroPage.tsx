'use client'
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

const HeroPage = () => {
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
    <div className="bg-custom-image bg-cover bg-center h-screen w-full">
      <div className="mx-44">
        <Navbar />

        <div
          ref={targetRef} // Attach ref to observe this div
          className={`mt-56 transition-opacity duration-[1500ms] ${
            isIntersecting ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="text-white text-sm font-normal">
              Funding for Art Expeditions
            </h2>
          </div>
          <div className="mt-2">
            <Image alt={"text"} src={"/HeroText.svg"} height={600} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
