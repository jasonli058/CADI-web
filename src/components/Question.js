const Question = () => {
  return (
    <>
      <div className="lg:text-xl lg:flex p-4 items-center lg:justify-start lg:pt-8 pr-8 ">
        <div className="flex justify-center pt-10 lg:pl-10 lg:pb-0 pb-8 lg:border-r-2 pr-8">
          <img
            src={`${process.env.PUBLIC_URL}/img/cadi-logo.jpg`}
            alt="cadi-logo"
            className="lg:w-96 w-2/3"
          />
        </div>
        <div className="flex item-center lg:pt-5 justify-center pb-8">
          <br />
          <p className=" font-body text-2xl lg:max-w-lg md:max-w-xl text-left p-10 mr-2 lg:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Question;