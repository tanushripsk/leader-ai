import React, { useState } from "react";

function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to handle success or error messages
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await response.json();
        setStatusMessage(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Error: Unable to connect to the server.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="bg-gray-800 p-4 w-full max-w-md text-white">
        <div className="text-center mb-4">
          <h2 className="text-lg">EMAIL</h2>
          <p className="text-xl">Finnegan@email.com</p>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-lg">PHONE</h2>
          <p className="text-xl">+1458741139</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <i className="fab fa-instagram text-2xl hover:text-orange-500"></i>
            <p>INSTAGRAM</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-facebook text-2xl hover:text-orange-500"></i>
            <p>FACEBOOK</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-twitter text-2xl hover:text-orange-500"></i>
            <p>TWITTER</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-behance text-2xl hover:text-orange-500"></i>
            <p>BEHANCE</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-youtube text-2xl hover:text-orange-500"></i>
            <p>YOUTUBE</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-linkedin text-2xl hover:text-orange-500"></i>
            <p>LINKEDIN</p>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-lg">SEND ME A MESSAGE</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600"
          />
          <div className="flex space-x-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-1/2 p-2 bg-gray-700 text-white border border-gray-600"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-1/2 p-2 bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-orange-600 text-white hover:bg-orange-500 transition-colors"
          >
            Submit
          </button>
        </form>
        {statusMessage && (
          <p className="text-center mt-4 text-lg text-green-400">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
