import React from "react";

function Expertise() {
  return (
    <div>
      <div className="relative h-screen">
        <img
          src="Expertise.jpg"
          alt="Scenic view of a pool overlooking the ocean with mountains in the background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-8xl text-orange-500 font-light">
              My Expertise
            </h1>
            <div className="bg-orange-500 p-8 mt-4 text-left">
              <h2 className="text-2xl font-light">Real Estate Photography</h2>
              <p className="mt-4 text-lg font-light">
                Highlight the best features of your property with our real
                estate photography services. We'll use professional lighting and
                composition techniques to create images that make your property
                stand out and attract potential buyers.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-white text-black px-4 py-2 rounded-full shadow-lg">
            Made in Framer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
