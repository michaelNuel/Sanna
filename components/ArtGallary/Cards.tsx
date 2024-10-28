import React from 'react'

const Cards = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* Left card (single column on large screens) */}
      <div className="bg-blue-500 p-6 rounded-lg text-white lg:col-span-2">
        <h2 className="text-xl text-white font-bold">Left Card</h2>
        <p>Content for the left card.</p>
      </div>

      {/* Right cards (4 columns on large screens) */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:col-span-3">
        <div className="bg-green-500 p-6 rounded-lg text-white">
          <h2 className="text-xl text-white font-bold">Card 1</h2>
          <p>Content for card 1.</p>
        </div>
        <div className="bg-green-500 p-6 rounded-lg text-white">
          <h2 className="text-xl  text-white font-bold">Card 2</h2>
          <p>Content for card 2.</p>
        </div>
        <div className="bg-green-500 p-6 rounded-lg text-white">
          <h2 className="text-xl text-white font-bold">Card 3</h2>
          <p>Content for card 3.</p>
        </div>
        <div className="bg-green-500 p-6 rounded-lg text-white">
          <h2 className="text-xl text-white font-bold">Card 4</h2>
          <p>Content for card 4.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards
