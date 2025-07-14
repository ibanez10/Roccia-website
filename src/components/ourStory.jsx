import React from 'react';

function OurStory() {
  return (
    <div className="bg-white h-full px-4 pb-10 space-y-10 overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752243489/Cross_Leg_vvsvdb.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-semibold underline underline-offset-1">
            Our Story
          </h1>
        </div>
      </div>

      {/* Our Story Image Grid Section */}
      <section className="relative w-full min-h-screen md:min-h-[90vh]">

        {/* Wrapper grid + gradient */}
        <div className="relative">
          {/* Grid gambar */}
          <div className="grid grid-cols-1 md:grid-cols-3 pt-12 md:ml-14">
            <div className="flex mx-5 mb-8 md:mb-0">
              <img
                src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752243379/Artani_Balcony_Set_-_Copy_prjmvo.png"
                alt="Artani"
                className="w-full md:w-96 rounded-xl"
              />
            </div>
            <div className="flex mx-5 mb-8 md:mb-0">
              <img
                src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752243594/image_11_zigfm3.png"
                alt="Image 11"
                className="w-full md:w-96 rounded-xl"
              />
            </div>
            <div className="flex mx-5">
              <img
                src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752243603/image_19_yrm0hn.png"
                alt="Image 19"
                className="w-full md:w-96 rounded-xl"
              />
            </div>
          </div>

          {/* Gradient tetap di bawah grid */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        {/* Kata-kata di bawah grid */}
        <div className="w-full flex flex-col items-center z-20 px-4 pt-40 pb-4 lg:pb-24 font-serif">
          <h1 className="text-4xl lg:text-5xl leading-tight font-normal text-gray-800 mb-5 px-5 text-center">
            <span className="text-red-700 underline decoration-red-700 decoration-2 underline-offset-2">
              Craftture
            </span>{" "}
            Indo <span className='block mt-0 lg:mt-4'>Design - Roccia</span>
          </h1>
        </div>

        <div className="container px-8 mx-0 lg:mx-56 lg:pb-40">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
            <div className='w-full self-center px-4 lg:w-[40%] lg:px-20 py-10 lg:py-0'>
              <h1 className='text-black text-justify text-md lg:text-xl'>
                Welcome to the world of beautiful high quality GRC. We are Craftture Indo Designs, a Jogjakarta, Indonesian based manufacturing company of quality outdoor and indoor GRC products. We manufacture both for our own brand and exclusively for customer designed products. Our products are meticulously crafted to combine durability with a sophisticated aesthetic, ensuring they enhance any space with their timeless elegance. Enclosed in this website you will find many of our products and designs, which we have brought together under our Roccia brand.
              </h1>
            </div>
            <div className='w-full self-center px-14 lg:w-[60%] lg:px-20'>
              <div className='w-48 lg:w-72'>
                <img src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752245302/video_ookzno.png" alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default OurStory;