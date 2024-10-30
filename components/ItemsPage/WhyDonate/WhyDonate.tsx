"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const WhyDonate = () => {
  const [isTextInView, setIsTextInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTextInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-24 mx-12 grid place-content-center place-items-center">
      <div
        ref={textRef}
        className={`grid place-content-center place-items-center transition-opacity duration-[1500ms] ${
          isTextInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image alt="#" src={"/Why.svg"} height={400} width={400} />
      </div>
      <div
        className={`grid place-content-center place-items-center mt-3 transition-opacity duration-[1500ms] ${
          isTextInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-sm text-white font-thin align-middle text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt facere eos repellat, id excepturi eaque aspernatur ea! Deserunt ex, blanditiis quis eaque optio veritatis iure officia sequi laborum ipsum, officiis hic maxime totam ratione? Dolorem ea similique, libero, temporibus explicabo, labore optio ipsa obcaecati molestias et quo unde corporis at itaque cupiditate nobis quos! Incidunt maiores enim, dolor cupiditate perspiciatis blanditiis voluptatum esse autem, vel saepe ut. Nobis quod deserunt voluptas dolor nulla dolores? Voluptate placeat quae dolorum aut? Ad, quod omnis blanditiis atque temporibus veniam dolore deserunt error beatae, expedita cum ut, dolor similique quia. Illo quia hic dolorem repudiandae ullam possimus voluptatum deserunt distinctio minus nesciunt, sed exercitationem molestias ipsa animi consequatur corporis autem pariatur illum magnam ut doloremque velit? Atque repudiandae consequuntur facere ipsam facilis nam quis, velit nemo pariatur nulla magnam qui sint numquam sed sunt, incidunt ipsum tempora cum autem non corporis ipsa voluptates error minima. Accusamus rem alias placeat ipsa enim. Assumenda illo eius maiores officia temporibus reprehenderit architecto debitis aliquam minima non asperiores, magnam officiis dolorum exercitationem voluptas nam sequi! Facere neque ducimus aliquid natus. Quam doloribus vel eveniet repudiandae est itaque non suscipit dolores dolorem porro eos quae beatae quod tenetur, magnam amet sint delectus facilis obcaecati voluptates veniam ad possimus odio minima? Officiis commodi excepturi quis corporis. Ratione neque illum quibusdam ut totam minus provident natus delectus mollitia fuga! Est blanditiis veritatis quidem quod. Earum, aliquam! Modi distinctio voluptates voluptatibus? Itaque, illo doloribus ea obcaecati ab reprehenderit enim, a assumenda, magnam repellat sapiente. Similique perferendis numquam aut cumque libero incidunt perspiciatis nostrum eligendi nemo aperiam! Nihil possimus tempora saepe necessitatibus eaque quod inventore perspiciatis modi non blanditiis! Excepturi cum illum similique cupiditate? Culpa alias vel et perferendis reprehenderit, mollitia non esse distinctio id, eum nobis quisquam totam commodi temporibus animi.
        </h3>
      </div>

      {/* Image Row with Staggered Animation and Centered Lines */}
      <div className="mt-4 flex gap-2 justify-center align-middle">
        {["/ConnectWallet.svg", "/Line.svg", "/Donate.svg", "/Line.svg", "/Click.svg", "/Line.svg", "/GetNFT.svg"].map(
          (src, index) => (
            <div
              key={index}
              className={`transition-opacity transform ${
                isTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } flex ${src.includes("Line") ? "items-center" : ""}`}
              style={{
                transitionDuration: "1000ms",
                transitionDelay: `${index * 300}ms`, // Stagger effect
              }}
            >
              <Image
                alt="#"
                src={src}
                height={src.includes("Line") ? 60 : 150} // Reduced Line height for alignment
                width={src.includes("Line") ? 60 : 150}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WhyDonate;
