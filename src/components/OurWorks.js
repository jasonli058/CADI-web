import React from "react";
import { Link } from "react-router-dom";

const OurWorks = () => {
  return (
    <>

      <div className="card border border-gray-200 hover:shadow-xl lg:max-h-[670px] rounded-xl mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <img
              src="img/artworks/jenny/jenny1.png"
              alt="oil-painting"
              className="max-w-full max-h-full rounded-xl object-contain"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg mt-5 semibold"> Photography </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <img
              src="img/artworks/carol/carol4.png"
              alt="oil-painting"
              className="max-w-full max-h-full rounded-xl object-contain"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg mt-5 semibold"> Digital Art </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <img
              src="img/artworks/eliz/eliz2.png"
              alt="oil-painting"
              className="max-w-full max-h-full rounded-xl object-contain"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg semibold mt-5"> Handicraft </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <img
              src="img/artworks/emma/emma2.png"
              alt="oil-painting"
              className="max-w-full max-h-full rounded-xl object-contain"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg semibold mt-5"> Traditional Art </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-10 flex items-center justify-center">
            <span>coming soon!</span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-10 flex items-center justify-center">
            <span>coming soon!</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default OurWorks;