import React from "react";
import StatsSection from "./StatsSection"; // Ensure this path is correct
import Brands from "./Brands";
import Album from "./Album";
import Wait from "./Wait";
import Insightfull from "./Insightfull";
import Clients from "./Clients";
import FAQFrenzy from "./FAQFrenzy";
import Footer from "./Footer";

function About() {
  return (
    <>
      {/* Stats Section */}
      <div className="w-full">
        <StatsSection />
      </div>

      {/* About Section */}
      <div className="min-h-screen flex flex-col justify-between bg-black">
        <div style={{ padding: "250px" }}></div>
        <main className="flex flex-col flex-grow p-8 container">
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-orange-500 flex-1 md:mr-8">
              I am...
            </h1>

            {/* About Content */}
            <div className="flex flex-col items-start md:items-end flex-1 mt-10 md:mt-0">
              <p className="text-white text-lg md:text-2xl max-w-2xl">
                a passionate photographer dedicated to capturing life's most
                precious moments. With a keen eye for detail and a{" "}
                <span className="text-orange-500">love for storytelling</span>,
                I strive to create images that are not just beautiful, but that
                also evoke emotion and tell a compelling story.
              </p>
              <button className="mt-8 px-4 py-3 border border-white text-white text-lg flex items-center">
                MORE ABOUT ME <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </main>

        <Brands />
        <Album />
        <Wait/>
        <br/><br/>
        <Clients/>
        <Insightfull/>
        <FAQFrenzy/>
      </div>
    </>
  );
}

export default About;
