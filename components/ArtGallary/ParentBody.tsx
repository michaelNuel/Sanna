import React, { useEffect, useState } from "react";
import { locationstype } from "./GalleryCards";
import ItemGrid from "./ItemGrid";

interface ParentBodyProps {
  type?: locationstype;
}

const ParentBody = ({ type }: ParentBodyProps) => {

    const items = [
        {
         id: 1, 
         image: '/Igbo.svg',
         title: 'SAVE NOK IGBO-UKWU ART',
         location: 'West Africa',
         price: '$2000.00(0.3sol)',
        },
        {
         id: 2, 
         image: '/Igbo.svg',
         title: 'SAVE NOK IGBO-UKWU ART',
         location: 'West Africa',
         price: '$2000.00(0.3sol)',
        },
        {
         id: 3, 
         image: '/Igbo.svg',
         title: 'SAVE NOK IGBO-UKWU ART',
         location: 'West Africa',
         price: '$2000.00(0.3sol)',
        },
        {
         id: 4, 
         image: '/Igbo.svg',
         title: 'SAVE NOK IGBO-UKWU ART',
         location: 'West Africa',
         price: '$2000.00(0.3sol)',
        },
        {
         id: 5, 
         image: '/Igbo.svg',
         title: 'SAVE NOK IGBO-UKWU ART',
         location: 'West Africa',
         price: '$2000.00(0.3sol)',
        }
    ]
  const [loading, setLoading] = useState(false);

  // This effect runs every time `type` changes
  useEffect(() => {
    // Set loading to true when type changes
    setLoading(true);
    
    // Simulate a short delay for loading
    const timeout = setTimeout(() => {
      setLoading(false); // Turn off loader after delay
    }, 500); // Adjust delay time as needed

    // Clean up the timeout if component unmounts or `type` changes again
    return () => clearTimeout(timeout);
  }, [type]);

  return (
    <div className="relative">
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="loader w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {type === locationstype.ALL && <ItemGrid itemList = {items} />}
          {type === locationstype.NORTH && <ItemGrid  itemList = {items}/>}
          {type === locationstype.SOUTH && <ItemGrid itemList = {items} />}
          {type === locationstype.WEST && <ItemGrid  itemList = {items}/>}
          {type === locationstype.EAST && <ItemGrid itemList = {items} />}
          {type === locationstype.CENTRAL && <ItemGrid  itemList = {items}/>}
        </>
      )}
    </div>
  );
};

export default ParentBody;
