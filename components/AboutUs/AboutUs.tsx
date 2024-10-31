'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const AboutUs = () => {
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
    <div ref={targetRef} className={`h-screen w-full bg-[#d4b4ff] transition-opacity duration-[1500ms] ${isIntersecting ? "opacity-100": "opacity-0"} `}>
      <div className='mx-32 flex justify-center gap-10'>
         <div className="h-[457px] w-[606px] bg-gray-400 my-20 rounded-2xl"></div>

         <div className='my-20 flex flex-col gap-6 w-[507]'>
            <div>
                <Image
                  alt='#'
                  src={'/WW.svg'}
                  height={200}
                  width={200}
                />
            </div>

            <div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum vero sed saepe magni voluptatem suscipit. Voluptas nostrum voluptatibus asperiores porro voluptatem nemo veniam! Deserunt, expedita. Cum magnam tenetur officiis quod, quisquam quos tempora nemo voluptate laboriosam, aperiam expedita maxime. Quibusdam sequi unde atque dolores reiciendis. Assumenda consectetur sunt natus, exercitationem molestias quis unde nemo laudantium similique amet. Quis, id. Quasi dolor maxime tempore, blanditiis expedita, ducimus dignissimos consectetur nobis voluptates sed quae impedit rerum adipisci magnam esse eius exercitationem dolores inventore porro aut mollitia, voluptatum dolorum animi? Accusamus sed magni mollitia ex qui odit in eligendi maxime nisi beatae!</h3>
            </div>
         </div>
      </div>
      
      
    </div>
  )
}

export default AboutUs
