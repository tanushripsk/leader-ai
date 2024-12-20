import React from 'react'

function Insightfull() {
  return (
    <div>
      <div className="p-8 bg-black">
        <main>
          <p className="text-4xl mb-4 text-white">Stay inspired with my</p>
          <h1 className="text-6xl text-orange-500 mb-8 flex justify-end">Insightful Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 relative group overflow-hidden">
              <img 
                src="/Insightful1.jpg" 
                alt="A person walking in a dimly lit tunnel" 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl mb-2 text-white">Elevate your photos with my signature color grading presets</h3>
                <div className="flex space-x-2 mb-2">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">RESOURCES</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">MARCH 6, 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 relative group overflow-hidden">
              <img 
                src="/Insightful2.png" 
                alt="A colorful street scene with people walking" 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl mb-2 text-white">The art of candid photography: capturing moments naturally</h3>
                <div className="flex space-x-2 mb-2">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">TIPS</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">APRIL 19, 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 relative group overflow-hidden">
              <img 
                src="/Insightful3.jpg" 
                alt="A beautiful golden hour landscape" 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl mb-2 text-white">Capturing the magic of golden hour: a photographer's guide</h3>
                <div className="flex space-x-2 mb-2">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">TIPS</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">MAY 6, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="border border-white px-4 py-2 text-white flex items-center space-x-2">
              <span>ALL BLOGS</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Insightfull;
