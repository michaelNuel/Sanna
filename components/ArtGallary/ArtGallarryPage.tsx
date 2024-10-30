import React from 'react'
import GalleryCards from './GalleryCards'

const ArtGallarryPage = () => {
  return (
    <div className='bg-PrimaryColor h-screen w-full relative'>
      <div className='  absolute rounded-2xl h-full -top-1/5  left-2/5'>
        <GalleryCards />
      </div>
    </div>
  ) 
}

export default ArtGallarryPage
