import React from 'react'

function ourStory() {
  return (
    <div className='bg-white h-full px-4 pb-10 space-y-10'>
        {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/Cross Leg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-semibold underline underline-offset-1">Our Story</h1>
        </div>
      </div>



    </div>
  )
}

export default ourStory