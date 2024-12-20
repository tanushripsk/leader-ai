import React from 'react';

function Brands() {
  return (
    <div>
      <div className="flex flex-col items-center py-10 bg-black">
        <h1 className="text-lg text-white mb-8">Brands I have worked with</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 container">
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand1.svg" alt="Brand logo 1" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand2.svg" alt="Brand logo 2" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand3.svg" alt="Brand logo 3" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand4.svg" alt="Brand logo 4" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand5.svg" alt="Brand logo 5" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand6.svg" alt="Brand logo 6" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand7.svg" alt="Brand logo 7" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand8.svg" alt="Brand logo 8" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand9.svg" alt="Brand logo 9" />
          </div>
          <div className="bg-gray-900 p-6 flex justify-center items-center">
            <img src="/brand10.svg" alt="Brand logo 10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
