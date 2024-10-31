"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ItemsAbout = () => {
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
    <div ref={targetRef} className={` mt-24 mx-12 flex justify-center gap-5 transition-opacity duration-[1500ms] ${isIntersecting ? "opacity-100": "opacity-0"} `}>
      <div className="flex flex-col gap-1  ">
        <div className="mb-4">
          <Image alt="#" src={"/AboutArt.svg"} width={500} height={700} />
        </div>
        <div className="mr-6">
          <h3 className="text-white text-sm font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
            porro illo distinctio sit asperiores velit, beatae saepe similique
            doloremque veniam voluptatum recusandae a facere ut molestias
            tempora nostrum excepturi, laudantium incidunt? Voluptate iste vero
            quos maxime magni eaque alias animi. Doloremque enim vero inventore
            sint, ipsam adipisci ullam quod libero officiis aliquid cupiditate
            architecto similique velit repellendus quaerat, optio dolores quidem
            corrupti quos eaque harum asperiores rem iste? Velit, itaque
            molestiae! Laborum culpa vel veniam tenetur labore corrupti, libero
            deserunt quos eligendi voluptatibus, voluptatum, ab quibusdam
            expedita corporis eius et earum. Facilis explicabo ut rem inventore
            quidem perspiciatis quae!
          </h3>

          <h3 className="text-white text-sm font-thin mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis architecto quo quod iusto fugiat ut optio unde. Vitae, voluptas amet quisquam est corporis eaque corrupti enim alias animi, nostrum ullam debitis quam? Quidem repudiandae aperiam quae, nostrum maiores doloremque alias veritatis accusantium tempora vero repellendus saepe quaerat blanditiis debitis reprehenderit, optio dolorem nam culpa unde ea ipsam iure eligendi explicabo animi! Ab nemo libero suscipit aspernatur officiis exercitationem! Magni consequatur molestiae eaque ad error dolorem animi id nam. Odit veniam, iusto mollitia inventore error odio at, qui repellendus sapiente debitis iste itaque et eos quo, velit ad modi cumque?
          </h3>
        </div>
      </div>

      <div>
        <Image alt="#" src={"/Nok.svg"} height={2600} width={3400} />
      </div>
    </div>
  );
};

export default ItemsAbout;
