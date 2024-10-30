import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardProps {
    id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  isPlaceholder?: boolean; // New prop to control the placeholder
}

const Cards = ({
    id,
  image,
  title,
  price,
  location,
  isPlaceholder = false,
}: CardProps) => {
  return (
    <Link href={`/item/${id} `} id={`${id}`}>
      <div className="p-4 bg-cardColors h-full rounded-lg shadow-lg">
        {isPlaceholder ? (
          <div className="bg-gray-300 w-full h-20 rounded-lg"></div> // Placeholder styling
        ) : (
          <div className="perspective-container group">
            <Image
              src={image}
              alt={title}
              height={300}
              width={300}
              // className="w-full h-full animate-spin3d"
            />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="mt-4 text-sm text-white font-semibold">{title}</h3>
          </div>

          <div>
            <h3 className=" text-xs text-gray-600 ">{location}</h3>
          </div>

          <div className="flex gap-2">
            <div>
              <Image alt={"sol"} height={20} width={20} src={"/solana.svg"} />
            </div>
            <div>
              <p className="text-purple-600 font-medium text-sm ">{price}</p>
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
        </div>
      </div>
    </Link>
  );
};

export default Cards;
