'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { locationstype } from './GalleryCards';
import GallaryHeading from './GallaryHeading';
import ParentsArtCards from './ParentsArtCards';

const ArtSection = () => {
    const [tab, setTab] = useState<locationstype>(locationstype.ALL);
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
    <div ref={targetRef} className={`mx-32 mt-20 mb-20 transition-opacity duration-[1500ms] ${ isIntersecting ? "opacity-100": "opacity-0"}  ` }>
      <div>
        <Image
         alt='#'
         src={'/Art Reserch.svg'}
         height={200}
         width={200}
        />
      </div>

      <div>
      <GallaryHeading filterType={setTab} type={tab} />
      <ParentsArtCards type={tab} />
      </div>
    </div>
  )
}

export default ArtSection
