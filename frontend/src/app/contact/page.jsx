"use client";
import React from "react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#F7F3ED]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact.jpg"
            alt="Contact Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>{" "}
          {/* Dark overlay for text readability */}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
            CONTACT US
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-xl md:max-w-2xl text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque quis
            turpis cursus.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl md:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10 sm:mb-12">
            REACH OUT TO US
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-y-5 sm:gap-y-4 items-center">
            {/* Name Input */}
            <div className="sm:col-span-1 text-left sm:text-right sm:pr-8">
              <label htmlFor="name" className="text-gray-700 font-medium text-sm sm:text-base">
                NAME
              </label>
            </div>
            <div className="sm:col-span-3">
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>

            {/* Email Input */}
            <div className="sm:col-span-1 text-left sm:text-right sm:pr-8">
              <label htmlFor="email" className="text-gray-700 font-medium text-sm sm:text-base">
                EMAIL
              </label>
            </div>
            <div className="sm:col-span-3">
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                placeholder="your.email@example.com"
                aria-label="Email"
              />
            </div>

            {/* Number Input */}
            <div className="sm:col-span-1 text-left sm:text-right sm:pr-8">
              <label htmlFor="number" className="text-gray-700 font-medium text-sm sm:text-base">
                NUMBER
              </label>
            </div>
            <div className="sm:col-span-3">
              <input
                type="tel"
                id="number"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                placeholder="+1 234 567 8900"
                aria-label="Phone Number"
              />
            </div>

            {/* Message Textarea */}
            <div className="sm:col-span-1 text-left sm:text-right sm:pr-8">
              <label htmlFor="message" className="text-gray-700 font-medium text-sm sm:text-base">
                MESSAGE
              </label>
            </div>
            <div className="sm:col-span-3">
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md h-24 sm:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                placeholder="Type your message here..."
                aria-label="Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-4 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-base sm:text-lg"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center text-gray-900 mb-10 sm:mb-12">
            OUR LOCATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 max-w-5xl mx-auto rounded-lg overflow-hidden border md:border-0 border-gray-300">
            {/* Office 1 */}
            <div className="p-6 sm:p-8 md:border-r md:border-gray-600 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Office 1
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque
                quis turpis cursus.
              </p>
            </div>
            {/* Office 2 */}
            <div className="p-6 sm:p-8 md:border-r md:border-gray-600 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Office 2
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque
                quis turpis cursus.
              </p>
            </div>
            {/* Plant 1 */}
            <div className="p-6 sm:p-8 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Plant 1
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque
                quis turpis cursus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;