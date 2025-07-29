import React from 'react'

const catalogue = () => {
  return (
    <div className='bg-white h-full px-4 pb-10 space-y-10 overflow-x-hidden'>
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752243489/Cross_Leg_vvsvdb.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-semibold underline-offset-1">
            Catalogue
          </h1>
        </div>
      </div>
        
      {/* Heading */}
      <div className="text-center mt-5 py-5 lg:py-10">
        <div className="flex justify-center items-center mb-5">
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
          <p className="text-lg text-gray-700 m-0">Our Catalogue</p>
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
        </div>
      </div>

        {/* Catalogue Content 1 */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start py-1 lg:py-5 gap-5'>
            {/* Gambar Katalog */}
            <div className='relative bg-red-600/70 w-full lg:max-w-[40%] py-56 lg:py-96 lg:w-1/2'>
              <div className='absolute lg:z-20 w-[80%] max-w-[500px] lg:-mt-80 -mt-44 left-10 lg:left-auto lg:mx-36'>
                <img src="/Rectangle 70.png" alt="" className='w-full' />
              </div>
              <p className='text-left text-white text-2xl sm:text-3xl md:text-4xl font-semibold absolute z-40 left-10 lg:left-auto lg:mx-36 lg:mt-56 mt-36'>Table, Fire Pit & <br /> Wall Panel Catalogue</p>
            </div>

            {/* Yappingnya */}
            <div className=' text-justify w-full lg:w-1/2 px-4 lg:ml-32'>
                <h1 className='text-black text-lg sm:text-xl md:text-2xl lg:text-3xl lg:px-12 max-w-full opacity-85 mt-5 lg:mt-[400px]'>Discover our exclusive collection of handcrafted tables and fire pits, expertly crafted from durable GRC materials. Explore the variety of designs and finishes in our catalogue!</h1>
            </div>
        </div>

        {/* Catalogue Content 2 */}
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start py-1 lg:py-5 gap-5'>
             {/* Yappingnya */}
            <div className='text-justify w-full lg:w-1/2 px-4 lg:pl-2'>
                <h1 className='text-black text-lg sm:text-xl md:text-2xl lg:text-3xl lg:px-12 max-w-full opacity-85 mt-5 lg:mt-32'>Explore our premium collection of pots and planters, expertly crafted from high-quality GRC material. Browse through our catalog to find the perfect pieces for your garden or space!</h1>
            </div>

            {/* Gambar Katalog */}
            <div className='relative bg-red-800/50 w-full lg:max-w-[40%] lg:py-96 py-56 lg:w-1/2'>
              <div className='absolute w-[80%] max-w-[500px] lg:-mt-80 -mt-44 right-1/2 translate-x-1/2 lg:right-36 lg:translate-x-0'>
                <img src="/Rectangle 73.png" alt="" className='w-full' />
              </div>
              <p className='text-left text-white text-2xl sm:text-3xl md:text-5xl font-semibold absolute z-40 left-10 lg:left-auto lg:mx-20 lg:mt-40 mt-32  '>Pot & Planter <br /> Catalogue</p>
            </div>
        </div>
    </div>
  )
}

export default catalogue
