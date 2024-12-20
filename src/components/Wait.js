import React from 'react';

function Wait() {
  return (
    <div>
      <div className="p-8 bg-orange-500">
        <main>
          <h2 className="text-6xl font-bold mb-8">Wait...<br />There's more!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-5 flex items-center justify-between">
              <div className="mr-4">
                <h4 className="text-2xl font-bold mb-4 text-white">Event <br /> Photography</h4>
              </div>
              <p className="text-gray-400 ml-auto">Tell powerful stories through our event photography, capturing real-life events and moments.</p>
            </div>
            <div className="bg-black p-5 flex items-center justify-between">
              <div className="mr-4">
                <h4 className="text-2xl font-bold mb-4 text-white">Aerial <br /> Photography</h4>
              </div>
              <p className="text-gray-400 ml-auto">Get a bird's-eye view with stunning aerial photography captured via drones, perfect for real estate, events, and landscapes.</p>
            </div>
            <div className="bg-black p-5 flex items-center justify-between">
              <div className="mr-4">
                <h4 className="text-2xl font-bold mb-4 text-white">Corporate <br /> Photography</h4>
              </div>
              <p className="text-gray-400 ml-auto">Enhance your brand image with professional corporate photography for headshots, team photos, and company events.</p>
            </div>
            <div className="bg-black p-5 flex items-center justify-between">
              <div className="mr-4">
                <h4 className="text-2xl font-bold mb-4 text-white">Editorial <br /> Photography</h4>
              </div>
              <p className="text-gray-400 ml-auto">Bring your stories to life with compelling editorial photography for magazines, blogs, and publications.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Wait;
