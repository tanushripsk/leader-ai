import React from 'react'
import CountUp from 'react-countup'

function StatsSection() {
  return (
    <div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div style={{padding:"650px"}}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 w-11/12 md:w-10/12 lg:w-8/12">
          {/* First Row */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 border border-gray-500">
            <p className="text-white text-sm md:text-base lg:text-lg">Hours Behind the Lens</p>
            <hr/>
            <p className="text-white text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white">
                <CountUp end={9000} duration={3} />
              </span>
              <span className="text-orange-500">K+</span>
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 border border-gray-500">
            <p className="text-white text-sm md:text-base lg:text-lg">Years of Experience</p>
            <p className="text-white text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white">
                <CountUp end={15} duration={3} />
              </span>
              <span className="text-orange-500">+</span>
            </p>
          </div>

          {/* Second Row */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 border border-gray-500">
            <p className="text-white text-sm md:text-base lg:text-lg">Awards and Recognitions</p>
            <p className="text-white text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white">
                <CountUp end={13} duration={3} />
              </span>
              <span className="text-orange-500">+</span>
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 border border-gray-500">
            <p className="text-white text-sm md:text-base lg:text-lg">Happy Clients Served</p>
            <p className="text-white text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white">
                <CountUp end={200} duration={3} />
              </span>
              <span className="text-orange-500">+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
