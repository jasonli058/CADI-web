import React from 'react'
import ArtCard from '../components/ArtCard'
import Masonry from 'react-masonry-css';
import BackButton from '../components/BackButton'; 

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};


const Katherine = () => {
  return (
    <>
      <div className="grid m-0 p-30 text-center gap-8 grid-cols-12 auto-rows-[minmax(100px,auto)]">
        {/* content wrapper begins */}

        {/* Mobile back button - only visible on small screens */}
          <div className="lg:hidden flex justify-left mb-6">
            <BackButton />
          </div>

        {/* start of artist section */}
        <div id="work" className=" border-t-2 col-start-1 col-end-13 row-span-6">

          <div className="mt-[120px] med:mt-[130px] lg:grid lg:grid-cols-3 gap-10 m-14">
            
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 ">
          <div>
            <div className="h-[500px] mt-5 flex items-center justify-center">
              <img
                src="/img/artworks/carol/carol4.png"
                alt="oil-painting"
                className="max-w-full max-h-full rounded-xl object-contain"
              />
            </div>
            <div className="pb-5">
              <span className="block text-lg mt-5 font-bold text-center font-body"> Katherine Su </span>
              <span className='block text-lg mt-3 text-center font-body text-primary'> Digital Art </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center col-span-2 m-10">
              {/* Desktop back button - only visible on large screens */}
              <div className="hidden lg:block absolute top-40 right-20">
                <BackButton />
              </div>
              <p className='text-primary text-xl font-body font-semibold'>
                Carol is a passionate artist specializing in both traditional and digital art forms. Her work often explores themes of nature, emotion, and human connection, blending vibrant colors with intricate details to create captivating pieces. With a background in fine arts, Carol has exhibited her work in various galleries and art shows, earning recognition for her unique style and creative vision. She is dedicated to using her art to inspire and evoke thought, making her a valuable member of the CADI community.
              </p>
            </div>

          </div>
        </div>
        {/* end of artist section */}
        <div className="border-t-2 col-start-1 col-end-13 row-span-6">

        <div className="overflow-x-auto">
          <div className="text-center">
            <h2 className="inline-block mt-10 font-bold border-[10px] border-r-[30px] border-l-[30px] border-secondary bg-secondary rounded-full text-primary text-4xl font-body">
              Works
            </h2>
          </div>
        </div>

        {/* start of artworks section */}
        <div className='m-14'>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto"
            columnClassName="masonry-column"
          >
            <ArtCard
              src="/img/artworks/kath/kath1.png"
              alt="Artwork1"
            />
            <ArtCard
              src="/img/artworks/kath/kath2.png"
              alt="Artwork2"
            />
            
            <ArtCard
              src="/img/artworks/kath/kath3.png"
              alt="Artwork3"
            />

            <ArtCard
              src="/img/artworks/kath/kath4.png"
              alt="Artwork4"
            />

            <ArtCard
              src="/img/artworks/celine/celine5.png"
              alt="Artwork1"
            />
          </Masonry>
        </div>
        {/* end of artworks section */}

        </div>
      </div>
      {/* end of content wrapper */}
    </>
  )
}

export default Katherine