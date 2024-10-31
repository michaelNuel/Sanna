'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const AboutMusuem = () => {
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
    <div ref={targetRef} className={`mt-24 mx-12 flex justify-center gap-16 transition-opacity duration-[1500ms] ${isIntersecting ? "opacity-100" : "opacity-0"}`}>
      <div className='  '>
        <Image alt='#' src={'/Musuem.svg'} height={6000} width={6000} />
      </div>

      <div className='flex flex-col gap-3'>
       <div>
         <Image alt='#' src={'/AboutMusuem.svg'} height={400} width={400} />
       </div>

       <div className='mt-4'>
        <h3 className='text-white text-sm font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, alias? Earum vel tempora quo amet aliquid voluptatibus, illo officiis. Dolores, odio nesciunt ut commodi accusamus assumenda debitis enim. Ratione dolor veritatis qui iure nam deleniti soluta laborum. Officiis, architecto debitis explicabo aliquam voluptatibus quasi maxime distinctio consequuntur blanditiis et, neque ex est sapiente labore. Molestiae sequi vitae at laudantium aut? Dicta voluptate maxime reiciendis ex iusto suscipit dolor rerum quia saepe libero odit delectus veniam earum iste, voluptatem repellendus dolorem, nulla aperiam eveniet tempora repudiandae eaque eos. Quo dignissimos ullam consectetur nobis, dolores quia consequuntur neque, delectus officiis ad dolore. Ducimus, minus. Quae recusandae error hic illum quam! Dignissimos minima perspiciatis enim id sed pariatur odit voluptatum aut nisi rerum dolore ut, eos ipsum reiciendis aliquid veniam nostrum tempore dolor voluptatibus iste quisquam unde? Doloribus voluptatibus voluptatum, incidunt ad labore porro est quo assumenda alias consectetur repudiandae perspiciatis. Distinctio ipsam totam assumenda possimus iure aliquam, laboriosam blanditiis quia deserunt laborum, repudiandae maiores unde dicta delectus. Minus a obcaecati tenetur, quae harum optio similique distinctio dolores quam accusamus. Fugit amet vitae architecto, nulla assumenda explicabo temporibus dolore nisi perferendis? Voluptate in blanditiis quisquam omnis hic nemo aperiam rem tempore soluta ad..
        </h3>
       </div>
      </div>
    </div>
  )
}

export default AboutMusuem
