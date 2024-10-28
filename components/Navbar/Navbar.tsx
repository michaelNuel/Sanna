'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
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
    <div className="flex justify-center align-middle "> 
      <div ref={targetRef} className={`flex justify-between gap-40 my-7 align-middle transition-opacity duration-[1500ms] ${isIntersecting ? "opacity-100" : "opacity-0"}`}>
        <div>
          <h2 className="text-white font-bold text-sm">
            <Link href={"#"}> NASSA</Link>
          </h2>
        </div>
        <div className="flex justify-center align-middle gap-12">
          <div>
            <h2 className="text-white font-normal text-sm">
              <Link href={"#"}>Home</Link>
            </h2>
          </div>
          <div>
            <h2 className="text-white font-normal text-sm">
              <Link href={"#"}>Create Funding</Link>
            </h2>
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
