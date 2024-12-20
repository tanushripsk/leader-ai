import React from "react";

function Clients() {
  const testimonials = [
    {
      image: "/f1.png",
      text: "It was a fantastic experience! They brought a level of professionalism and creativity to our product photography that truly set our brand apart. We look forward to working with them again in the future!",
      name: "Michael",
      title: "MD, Stellar Designs",
      rating: 5,
    },
    {
      image: "/f2.png",
      text: "We are thrilled with the product photography provided by James. They captured our products beautifully, highlighting their unique features and enhancing their appeal.",
      name: "Michael T.",
      title: "Marketing Manager, Stellar Designs",
      rating: 5,
    },
    {
      image: "/f3.png",
      text: "Thanks to you, our product images have never looked better! They have a keen eye for detail and a talent for capturing our products in the best possible light. We couldn't be happier with the results!",
      name: "Aurora Jensen",
      title: "Marketing Director",
      rating: 5,
    },
    {
      image: "/f4.avif",
      text: "He provided exceptional product photography services for our latest collection. Their attention to detail and creative approach resulted in images that perfectly showcased our products. Highly recommended!",
      name: "G. Monroe",
      title: "Marketing Manager, Stellar Designs",
      rating: 5,
    },
  ];

  return (
    <>
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      <main className="flex flex-col items-center w-full px-4">
        <h2 className="text-lg text-gray-400">Smiles and Stories from</h2>
        <h1 className="text-5xl font-bold text-orange-500">My Clients</h1>
        <div className="mt-8 w-full overflow-hidden">
          <div className="running-text flex space-x-8">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg w-64 flex-shrink-0"
              >
                <img
                  src={testimonial.image}
                  alt={`Client ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-sm mb-4">"{testimonial.text}"</p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star text-orange-500"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .running-text {
              display: flex;
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
      </main>
    </div>
    </>
  );
}

export default Clients;
