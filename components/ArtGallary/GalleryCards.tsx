'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import GallaryHeading from "./GallaryHeading";
import ParentBody from "./ParentBody";

export enum locationstype {
  ALL = "All of Africa",
  NORTH = "North Africa",
  SOUTH = "South Africa",
  WEST = "West Africa",
  EAST = "East Africa",
  CENTRAL = "Central Africa",
}

const GalleryCards = () => {
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
  const [tab, setTab] = useState<locationstype>(locationstype.ALL);
  return (
    <div ref={targetRef} className={`border-white  bg-PrimaryColor rounded-3xl h-screen scale-100   duration-[1000ms] w-5/6 px-8 py-8 ${isIntersecting ? "opacity-100  " : "opacity-0 scale-75 "}`}>
      <div>
        <h3 className="text-white">
          <Image alt="#" height={200} width={250} src={"/ArtFund.svg"} />
        </h3> 
      </div>
      
      <div>
         <GallaryHeading filterType={setTab} type={tab} />
         <ParentBody type={tab} />
      </div>     
    </div>
  );
};

export default GalleryCards;
