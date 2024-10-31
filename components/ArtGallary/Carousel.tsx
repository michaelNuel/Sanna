import React from "react";
import { CarouselItem } from "./ArtCards";

interface CarouselProps {
  items: { id: number; text: string }[];
}

const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="flex gap-[-2px]">
      {items.map((item) => (
        <CarouselItem
          key={item.id}
          alt={item.text}
          title={item.text}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus id veniam iure voluptatum hic quasi quis explicabo facere nostrum! Fugiat vero officia eveniet. Perferendis repellendus ips."
        />
      ))}
    </div>
  );
};

export default Carousel;
