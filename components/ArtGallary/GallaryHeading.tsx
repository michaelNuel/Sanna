import React from "react";
import { locationstype } from "./GalleryCards";
import Image from "next/image";

interface HeadingProps {
  type?: locationstype;
  filterType: React.Dispatch<React.SetStateAction<locationstype>>;
}

const GallaryHeading = ({ type, filterType }: HeadingProps) => {
  // Array of location types to control navigation order
  const typesArray = [
    locationstype.ALL,
    locationstype.NORTH,
    locationstype.SOUTH,
    locationstype.WEST,
    locationstype.EAST,
    locationstype.CENTRAL,
  ];

  // Current index of the active type
  const currentIndex = typesArray.indexOf(type || locationstype.ALL);

  // Handlers for arrow button clicks
  const goToPrevious = () => {
    if (currentIndex > 0) {
      filterType(typesArray[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < typesArray.length - 1) {
      filterType(typesArray[currentIndex + 1]);
    }
  };

  return (
    <div className="flex align-middle justify-between">
      {/* Heading */}
      <div className="flex bg-bluredColors px-4 py-2 mt-5 rounded-3xl gap-3">
        {typesArray.map((location) => (
          <div
            key={location}
            className={`cursor-pointer ${
              type === location ? "opacity-100 text-purple-900" : "opacity-40 text-gray-400"
            }`}
            onClick={() => filterType(location)}
          >
            <h3 className={`text-sm ${type === location ? "font-bold" : "font-normal"}`}>
              {location.replace(/_/g, " ")} {/* Replace underscores with spaces */}
            </h3>
          </div>
        ))}
      </div>

      {/* Arrow Navigation */}
      <div className="flex align-middle mt-5 gap-4">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0} // Disable if on the first item
          className={`${
            currentIndex === 0 ? "opacity-40" : "opacity-100"
          } cursor-pointer transform rotate-180`} // Flip arrow direction
        >
          <Image alt="Previous" height={40} width={40} src="/Arrow.svg" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={currentIndex === typesArray.length - 1} // Disable if on the last item
          className={`${
            currentIndex === typesArray.length - 1 ? "opacity-40" : "opacity-100"
          } cursor-pointer`}
        >
          <Image alt="Next" height={40} width={40} src="/Arrow.svg" />
        </button>
      </div>
    </div>
  );
};

export default GallaryHeading;
