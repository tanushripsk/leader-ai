import React, { useState } from "react";

// Title Component
function Title({ mainText, highlightText, mainColor = "text-orange-500", highlightColor = "text-white" }) {
  return (
    <h1 className={`text-6xl font-bold mb-2 ${mainColor}`}>
      {mainText}
      <span className={highlightColor}>{highlightText}</span>
    </h1>
  );
}

// FAQFrenzy Component
function FAQFrenzy() {
  const questions = [
    {
      question: "How do I book a photography session with you?",
      answer: "You can book a session by filling out the contact form on my website or by omeiling me directly at (your email address). I'll get back to you within 24 hours to discuss the details and schedule your shoot.",
    },
    {
      question: "What are your rates for photography sessions?",
      answer: "Pricing includes the session, editing, and digital delivery of high-resolution photos.",
    },
    {
      question: "What does your pricing include?",
      answer: "I specialize in portrait, event, and lifestyle photography.",
    },
    {
      question: "What types of photography do you specialize in?",
      answer: "Packages include session time, photo editing, and a set number of final images.",
    },
    {
      question: "What is included in your photography packages?",
      answer: "Sessions typically last between 1-2 hours, depending on the type of shoot.",
    },
    {
      question: "How long does a typical photo session last?",
      answer: "Yes, I travel for shoots. Additional travel fees may apply based on location.",
    },
    {
      question: "Do you travel for shoots?",
      answer: "Wear comfortable clothing that reflects your style. Avoid bold patterns or logos.",
    },
    {
      question: "What should I wear to my photo session?",
      answer: "You can expect to receive your photos within 2-3 weeks after the session.",
    },
    {
      question: "How long will it take to receive my photos?",
      answer: "You can expect to receive your photos within 2-3 weeks after the session.",
    },
  ];

  // State to track expanded question
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      <main className="w-full max-w-6xl grid grid-cols-2 gap-8">
        {/* Left Side - Title */}
        <div className="flex flex-col items-start ">
          <Title mainText="FAQ" highlightText="Frenzy:" />
          <p className="text-lg text-gray-400">All your answers here</p>
        </div>
        {/* Right Side - FAQs */}
        <div className="flex flex-col space-y-6 items-end">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 w-full text-justify"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-white">{item.question}</h2>
                <button
                  className="text-gray-400 ml-4"
                  onClick={() => toggleExpand(index)}
                >
                  <i className={`fas ${expandedIndex === index ? "fa-times" : "fa-plus"}`}></i>
                </button>
              </div>
              {expandedIndex === index && (
                <p className="text-gray-400 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FAQFrenzy;
