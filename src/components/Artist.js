import React from 'react'
import { Link } from "react-router-dom";

const Artists = () => {
  return (
    <>
    <div className="overflow-x-auto mt-10">
      <div className="text-center">
        <h2 className="inline-block mt-40 font-bold border-[10px] border-r-[30px] border-l-[30px] border-secondary bg-secondary rounded-full text-primary text-4xl font-body">
          Meet our Artists!
        </h2>
        <span className='block mt-5 text-primary font-body font-semibold text-xl'> Click on the Artist's Card to learn more about their works! </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-10 m-14">

      <Link to={"/artists/carol"}>
        <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
          <div>
            <div className="h-[500px] mt-5 flex items-center justify-center">
              <img
                src="./img/artworks/carol/carol_pfp.jpg"
                alt="oil-painting"
                className="max-w-full max-h-full rounded-xl object-contain"
              />
            </div>
            <div className="pb-5">
              <span className="block text-lg mt-5 font-bold text-center font-body"> Carol Wang </span>
              <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digital Art </span>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/artists/jenny"}>
        <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
          <div>
            <div className="h-[500px] mt-5 flex items-center justify-center">
              <img
                src="./img/artworks/carol/carol4.png"
                alt="oil-painting"
                className="max-w-full max-h-full rounded-xl object-contain"
              />
            </div>
            <div className="pb-5">
              <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Jenny Chen </span>
              <span className='block text-lg mt-3 text-center font-body text-primary'> Photography and Editing </span>
            </div>
          </div>
        </div>
      </Link>


        <Link to={"/artists/celine"}>
          <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
            <div>
              <div className="h-[500px] mt-5 flex items-center justify-center">
                <img
                  src="./img/artworks/carol/carol4.png"
                  alt="oil-painting"
                  className="max-w-full max-h-full rounded-xl object-contain"
                />
              </div>
              <div className="pb-5">
                <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Celine </span>
                <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digital Art </span>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/artists/elizabeth"}>
          <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
            <div>
              <div className="h-[500px] mt-5 flex items-center justify-center">
                <img
                  src="./img/artworks/carol/carol4.png"
                  alt="oil-painting"
                  className="max-w-full max-h-full rounded-xl object-contain"
                />
              </div>
              <div className="pb-5">
                <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Elizabeth Trinh </span>
                <span className='block text-lg mt-3 text-center font-body text-primary'> Handicraft (Origami) </span>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/artists/emma"}>
          <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
            <div>
              <div className="h-[500px] mt-5 flex items-center justify-center">
                <img
                  src="./img/artworks/carol/carol4.png"
                  alt="oil-painting"
                  className="max-w-full max-h-full rounded-xl object-contain"
                />
              </div>
              <div className="pb-5">
                <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Emma Xi </span>
                <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional Art </span>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/artists/katherine"}>
          <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
            <div>
              <div className="h-[500px] mt-5 flex items-center justify-center">
                <img
                  src="./img/artworks/carol/carol4.png"
                  alt="oil-painting"
                  className="max-w-full max-h-full rounded-xl object-contain"
                />
              </div>
              <div className="pb-5">
                <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Katherine Su </span>
                <span className='block text-lg mt-3 text-center font-body text-primary'> Digital Art </span>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/artists/srishti"}>
          <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
            <div>
              <div className="h-[500px] mt-5 flex items-center justify-center">
                <img
                  src="./img/artworks/carol/carol4.png"
                  alt="oil-painting"
                  className="max-w-full max-h-full rounded-xl object-contain"
                />
              </div>
              <div className="pb-5">
                <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Srishti </span>
                <span className='block text-lg mt-3 text-center font-body text-primary'> Handicraft </span>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/artists/luyao"}>
          <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
            <div>
              <div className="h-[500px] mt-5 flex items-center justify-center">
                <img
                  src="./img/artworks/carol/carol4.png"
                  alt="oil-painting"
                  className="max-w-full max-h-full rounded-xl object-contain"
                />
              </div>
              <div className="pb-5">
                <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Luyao Ren </span>
                <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digial Art </span>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
      
    </>
  )
}

export default Artists;