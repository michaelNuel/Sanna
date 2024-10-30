import React from "react";
import Cards from "./Cards";

interface ItemGridProps {
  itemList: {
    id: number;
    image: string;
    title: string;
    location: string;
    price: string;
  }[];
}
const ItemGrid = ({ itemList }: ItemGridProps) => {
  const leftCard = itemList[0]; // First item for the left card
  const rightCards = itemList.slice(1); // Remaining items for the right side

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
        {/* Left card (single column on large screens) */}
        {leftCard && (
          <div className="p-6 rounded-lg lg:col-span-2">
            <Cards
              id={leftCard.id}
              key={leftCard.id}
              image={leftCard.image}
              title={leftCard.title}
              price={leftCard.price}
              location={leftCard.location}
            />
          </div>
        )}

        {/* Right cards (2x2 grid layout) */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-3">
          {rightCards.slice(0, 4).map((item) => (
            <Cards
              id={leftCard.id}
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              location={item.location}
              isPlaceholder={true} // Set to true for grey placeholder
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemGrid;
