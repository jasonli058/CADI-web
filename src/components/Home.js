import React from "react";
import OurWorks from "./OurWorks";
import Welcome from "./Welcome";
import Question from "./Question";
import Form from "./Form";
const Home = () => {
  return (
    <>
      <div className="grid m-0 p-30 text-center gap-8 grid-cols-12 auto-rows-[minmax(100px,auto)]">
        {/* content wrapper begins */}
        
        {/* welcome section */}
        <div className=" border-t-0 col-start-1 col-end-13 lg:row-span-7 row-span-6 relative bg-welcome flex items-center justify-center">
          <Welcome />
        </div>
        {/* <h2 className="font-body text-4xl font-semibold text-primary absolute bottom-24 lg:left-20 left-10 mb-3 b border-[10px] border-r-[20px] border-l-[20px] border-gray-50 bg-gray-50 rounded-full">
          Welcome!
        </h2> */}
        
        {/* end of welcome section */}

        {/* start of goal section */}
        <div className="border-b-2 col-start-1 col-end-13 row-span-6">
          <h2 className="font-body text-4xl font-semibold text-primary mt-24">
            <span className="border-b-2 border-primary">About Us!</span>
          </h2>
          <div className="lg:text-xl lg:flex p-4 items-center lg:justify-center lg:pt-2 pr-8">
            <div className="flex item-center lg:pt-5 justify-center pb-8">
              <br />
              <p className=" font-body text-2xl lg:max-w-2xl md:max-w-3xl text-left p-10 mr-2 mt-14 lg:border-r-2">
                CADI is a student-led service club dedicated to using art as a force for good. We design and donate hand-decorated care bags filled with school supplies and necessities to underfunded schools, create collaborative art projects to support local hospitals, and take custom art commissions to raise funds for future donations. Each month, we align our projects with national health awareness themes to educate, inspire, and support our community. Our mission is simple: turn creativity into action, and action into impact.
              </p>
            </div>
            <div className="flex justify-center pt-10 lg:pl-16 lg:pb-0 pb-24">
              <img
                src={`${process.env.PUBLIC_URL}/img/cadi-logo.jpg`}
                alt="cadi-logo"
                className="lg:w-96 w-2/3"
              />
            </div>
          </div>
        </div>
        {/* end of goal section */}

        {/* start of works section */}
        <div id="work" className=" border-t-2 col-start-1 col-end-13 row-span-8">
          <h2 className="font-body text-4xl font-semibold text-primary mt-20">
            <span className="border-b-2 border-primary">Our Works!</span>
          </h2>
          <div className="mt-20 lg:grid lg:grid-cols-3 gap-10 m-14  ">
            <OurWorks />
          </div>
          <div className="flex items-center justify-center mt-16">
            <div className="
            hover:-translate-y-2 transition-transform duration-200 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-700 text-2xl bottom-4 lg:left-14 left-7 font-body font-semibold text-black border-[10px] border-r-[20px] border-l-[20px] border-gray-100 bg-gray-100 rounded-full mb-20">
                <a href="/artists"> Learn more </a>
              </div>
          </div>
        </div>
        {/* end of works section */}

        {/* start of questions header */}
        <div className="border-2 border-primary col-start-1 col-end-13 lg:row-span-2 row-span-3 bg-questions relative flex items-center justify-center">
          <div className="text-center isolate">
            <span className="lg:text-6xl text-5xl font-body font-bold text-white textsd border-b-4 border-white">
              Questions?
            </span>
          </div>
        </div>
        {/* end of questions header */}

        {/* start of questions section */}
        <div className="col-start-1 col-end-13 row-span-5 flex gap-8 itemsstart">
          
          <Question />

          <div className="mt-20">
            <Form />
          </div>


        </div>
        {/* end of questions section */}

        {/* start of footer section */}
        <div className="border-2 col-start-1 col-end-13 row-span-1">footer</div>
        {/* end of footer section */}

        {/* content wrapper ends */}
      </div>
    </>
  );
};

export default Home;