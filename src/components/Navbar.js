import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 bg-black bg-opacity-75 z-20">
      <div className="container-fluid px-4 py-2 flex justify-between items-center">
        {/* Wrapping the h1 with Link to make it clickable */}
        <Link to="/" className="text-white text-2xl">
          <h1>Finnegan</h1>
        </Link>
        <button
          className="text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i
            className={`fas ${menuOpen ? "fa-times" : "fa-bars"} transition-transform duration-500`}
          ></i>
        </button>
      </div>

      {/* Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white transition-all duration-500">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={toggleMenu}
            aria-label="Close navigation"
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="flex flex-col items-start space-y-6">
            <li className="text-4xl text-orange-500 cursor-pointer hover:underline">
              <Link to="/" className="no-underline">HOME</Link>
            </li>
            <li className="text-4xl text-white cursor-pointer hover:underline">
              <Link to="/about" className="no-underline">ABOUT</Link>
            </li>
            <li className="text-4xl text-white cursor-pointer hover:underline">
              <Link to="/works" className="no-underline">WORKS</Link>
            </li>
            <li className="text-4xl text-white cursor-pointer hover:underline">
              <Link to="/reviews" className="no-underline">REVIEWS</Link>
            </li>
            <li className="text-4xl text-white cursor-pointer hover:underline">
              <Link to="/blogs" className="no-underline">BLOGS</Link>
            </li>
            <li className="text-4xl text-gray-700 cursor-pointer hover:underline">
              <Link to="/contact" className="no-underline">CONTACT</Link>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-10 border-t border-gray-700 pt-4">
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="group flex items-center space-x-2 hover:text-orange-500"
              >
                <span>INSTAGRAM</span>
                <i className="fas fa-arrow-up-right-from-square group-hover:rotate-45 group-hover:text-orange-500 transition-transform duration-300"></i>
              </a>
              <a
                href="#"
                className="group flex items-center space-x-2 hover:text-orange-500"
              >
                <span>TWITTER</span>
                <i className="fas fa-arrow-up-right-from-square group-hover:rotate-45 group-hover:text-orange-500 transition-transform duration-300"></i>
              </a>
              <a
                href="#"
                className="group flex items-center space-x-2 hover:text-orange-500"
              >
                <span>FACEBOOK</span>
                <i className="fas fa-arrow-up-right-from-square group-hover:rotate-45 group-hover:text-orange-500 transition-transform duration-300"></i>
              </a>
              <a
                href="#"
                className="group flex items-center space-x-2 hover:text-orange-500"
              >
                <span>YOUTUBE</span>
                <i className="fas fa-arrow-up-right-from-square group-hover:rotate-45 group-hover:text-orange-500 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
