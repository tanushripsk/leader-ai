import React from "react";
import About from "./About";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="/camera-shoot-focus-black-and-white.jpg"
          alt="Close-up of a man wearing a cap, looking thoughtful"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 opacity-50`}
        ></div>
        <div className="absolute top-1/4 right-8 text-white text-right">
          <p>
            HI, FINNEGAN MONROE HERE. I'M A FREELANCE <br /> PHOTOGRAPHER IN NY
            AND THE SHUTTERBUG <br /> CAPTURING LIFE'S MAGICAL MOMENTS ONE{" "}
            <br />
            CLICK AT A TIME.
          </p>
          <div className="text-white">
            <button className="border border-white px-4 py-2 text-white flex items-center">
              GET TEMPLATE <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="absolute bottom-2 right-2 text-white col-lg-2">
          <center>
            <p>WORK WITH ME</p>
          </center>
        </div>
        <div className="absolute bottom-4 right-4 text-white col-lg-6">
          <p>Made in Framer</p>
        </div>
      </div>
      {/* About Section */}
      <div className="w-full">
        <About />
      </div>
    </div>
  );
}

export default Home;
