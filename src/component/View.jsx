import React from "react";

function View() {
  return (
    <div className="bg-black p-4 sm:p-8">
      <div className="text-center ml-2  sm:text-left text-white mb-8">
        <h6 className="text-xl sm:text-2xl ml-16 text-red-500 font-bold">
          How We Work
        </h6>
        <h1 className="text-2xl sm:text-4xl ml-16 font-bold mt-2">
          Custom Design Solutions
        </h1>
      </div>
      <div className="text-center sm:text-left text-white ml-16 mb-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        <p className="text-base sm:text-lg leading-relaxed w-full sm:w-1/2 mb-4 sm:mb-0 sm:ml-4">
          We approach every design as tailor-made and unique to our customer's
          taste and lifestyle. Collaborating this understanding with our
          expertise in custom quality craftsmanship forms the foundation for
          success.
        </p>
        <button className="relative text-white border border-white w-80 py-2 px-4 rounded-lg mt-4 sm:mt-0 sm:ml-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
          <span className="absolute inset-0 w-full h-full border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
          <span className="relative">View Process</span>
        </button>
      </div>

      <div className="relative w-full h-full sm:h-auto">
        <img
          src="../../src/assets/pexels-heyho-6538903.jpg"
          alt="Embassy Row Renovation"
          className="w-full h-full object-cover shadow-md"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white sm:mb-4 ml-4 sm:ml-24">
            Embassy Row Renovation
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl ml-4 sm:mb-96 text-white sm:ml-24">
            An exquisite total look solution in Northwest Washington, DC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;
