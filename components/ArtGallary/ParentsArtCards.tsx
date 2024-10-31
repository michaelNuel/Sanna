import React, { useEffect, useState } from 'react'
import { locationstype } from './GalleryCards'
import ArtCards from './ArtCards';


interface Props {
    type: locationstype ;
}

const ParentsArtCards = ({type}: Props) => {
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
        {type === locationstype.NORTH &&   <ArtCards type={type} />}
        {type === locationstype.SOUTH &&   <ArtCards type={type} />}
        {type === locationstype.ALL &&     <ArtCards type={type} />}
        {type === locationstype.WEST &&    <ArtCards type={type} />}
        {type === locationstype.EAST &&    <ArtCards type={type} />}
        {type === locationstype.CENTRAL && <ArtCards type={type} />}
      </>
    )}
  </div>
  )
}

export default ParentsArtCards
