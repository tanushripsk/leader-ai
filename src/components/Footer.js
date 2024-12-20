import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <footer className="bg-orange-500 flex items-center justify-center min-h-screen container relative">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black"></div>
              <div className="relative flex items-center justify-center w-32 h-32 mx-auto my-8 border-2 border-black rounded-full group">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-24 h-24 bg-black clip-hexagon"></div>
                </div>
                <span className="absolute text-white">Let's Talk</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-black">finnegan@email.com</p>
            <div className="flex justify-center mt-4 space-x-4 text-black">
              <a href="#" className="flex items-center space-x-1">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>
        <nav className="flex justify-center items-center py-4 border-b border-orange-600">
          <ul className="flex space-x-8 text-white text-sm">
            <li className="text-orange-600">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Works</Link>
            </li>
            <li>
              <Link to="#">Reviews</Link>
            </li>
            <li>
              <Link to="#">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="#">More Templates</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center h-screen">
          <div className="running-text">
            <h3 className="text-[5rem] font-bold text-white running-text-content">
              Finnegan Monroe Finnegan Monroe
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
