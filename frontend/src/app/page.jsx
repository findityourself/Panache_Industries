"use client";
import React, { useState } from "react";
import { Settings, Award, Heart, Phone, Mail, MapPin } from "lucide-react";

const MainContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Background Image and Crossfade */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4 sm:px-6"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1)), url('/bgimg.jpg')`,
        }}
      >
        {/* Crossfade gradient overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(180deg, 
              transparent 0%, 
              transparent 60%, 
              rgba(249, 242, 235, 0.3) 90%,
              rgba(249, 242, 235, 0.7) 95%,
              #f9f2eb 100%)`,
          }}
        ></div>

        <div className="container mx-auto text-center text-white relative z-10 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg px-4">
            TAGLINE/HEADING
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque quis
            turpis cursus,
          </p>
        </div>
      </section>

      {/* Logo & Short Intro Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6"
        style={{ backgroundColor: "#F7F3ED" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Intro Text */}
            <div className="max-w-md text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-wide">
                SHORT INTRO
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Since 1920, we've been at the forefront of industrial
                innovation, delivering cutting-edge furnace solutions that power
                manufacturing excellence across diverse industries worldwide.
              </p>
            </div>
            {/* Logo Placeholder */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[433px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: "#F7F3ED" }}>
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-4 sm:mb-6 uppercase tracking-wider">
              OUR CAPABILITIES
            </h2>
            <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Comprehensive industrial solutions spanning advanced furnace
              technology, sustainable manufacturing processes, and custom
              engineering solutions tailored to your specific requirements.
            </p>
            
            {/* Mobile: Vertical Stack */}
            <div className="block lg:hidden space-y-6">
              {/* Blue Stats Card */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-blue-600">500K+</h3>
                  <h4 className="text-xl font-bold text-blue-600 uppercase">FURNACES</h4>
                </div>
                <p className="text-blue-400 text-sm">
                  Industrial furnaces delivered worldwide with cutting-edge efficiency and reliability standards.
                </p>
              </div>

              {/* Countries Card */}
              <div className="relative bg-black rounded-xl p-6 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="BW"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative text-white">
                  <h3 className="text-xl font-bold">25+</h3>
                  <h4 className="text-sm font-bold uppercase">COUNTRIES</h4>
                  <p className="text-xs mt-1">Global reach, local expertise</p>
                </div>
              </div>

              {/* Main Industrial Image */}
              <div className="rounded-xl overflow-hidden shadow-md h-48 hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Color"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Uptime Card */}
              <div className="relative bg-black rounded-xl p-6 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="BW2"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative text-white">
                  <h3 className="text-xl font-bold">99.9%</h3>
                  <h4 className="text-sm font-bold uppercase">UPTIME</h4>
                  <p className="text-xs mt-1">
                    Reliability that keeps your operations running smoothly.
                  </p>
                </div>
              </div>

              {/* Since 1920 Card */}
              <div className="bg-blue-600 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <p className="text-sm uppercase font-bold">Since</p>
                  <p className="text-4xl font-bold">1920</p>
                </div>
                <p className="text-sm">
                  Over a century of innovation in industrial furnace technology, continuously evolving to meet the changing needs of modern manufacturing.
                </p>
              </div>

              {/* Additional Industrial Image */}
              <div className="rounded-xl overflow-hidden shadow-md h-48 hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="industrial"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Settings Icon Card */}
              <div className="bg-orange-500 rounded-xl flex items-center justify-center shadow-md h-20 hover:shadow-lg hover:bg-orange-600 transition-all cursor-pointer">
                <Settings className="text-white w-8 h-8" />
              </div>
            </div>

            {/* Desktop: Original 3-column layout */}
            <div className="hidden lg:flex flex-nowrap items-stretch gap-6 h-[600px] overflow-x-auto">
              {/* Left Column */}
              <div className="flex flex-col gap-6 w-[30%]">
                {/* Blue Card */}
                <div className="bg-white rounded-xl p-6 shadow-md h-[250px] flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-600">500K+</h3>
                    <h4 className="text-xl font-bold text-blue-600 uppercase">
                      FURNACES
                    </h4>
                  </div>
                  <p className="text-blue-400 text-sm">
                    Industrial furnaces delivered worldwide with cutting-edge
                    efficiency and reliability standards.
                  </p>
                </div>
                {/* Bottom Left Industrial Image */}
                <div className="rounded-xl overflow-hidden shadow-md h-[250px] hover:shadow-lg transition-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="industrial"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Center Column */}
              <div className="flex flex-col gap-6 w-[35%]">
                {/* Top B/W Text Card */}
                <div className="relative bg-black rounded-xl p-6 shadow-md overflow-hidden h-[120px] hover:shadow-lg transition-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="BW"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative text-white">
                    <h3 className="text-xl font-bold">25+</h3>
                    <h4 className="text-sm font-bold uppercase">COUNTRIES</h4>
                    <p className="text-xs mt-1">
                      Global reach, local expertise
                    </p>
                  </div>
                </div>

                {/* Middle Full Color Image */}
                <div className="rounded-xl overflow-hidden shadow-md h-[250px] hover:shadow-lg transition-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Industrial Color"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Bottom B/W Card */}
                <div className="relative bg-black rounded-xl p-6 shadow-md overflow-hidden h-[120px] hover:shadow-lg transition-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="BW2"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative text-white">
                    <h3 className="text-xl font-bold">99.9%</h3>
                    <h4 className="text-sm font-bold uppercase">UPTIME</h4>
                    <p className="text-xs mt-1">
                      Reliability that keeps your operations running smoothly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 w-[30%]">
                {/* Blue Card */}
                <div className="bg-blue-600 text-white rounded-xl p-6 shadow-md h-[350px] flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <p className="text-sm uppercase font-bold">Since</p>
                    <p className="text-4xl font-bold mb-4">1920</p>
                  </div>
                  <p className="text-sm">
                    Over a century of innovation in industrial furnace
                    technology, continuously evolving to meet the changing needs
                    of modern manufacturing.
                  </p>
                </div>

                {/* Orange Gear Card */}
                <div className="bg-orange-500 rounded-xl flex items-center justify-center shadow-md h-[120px] hover:shadow-lg hover:bg-orange-600 transition-all cursor-pointer">
                  <Settings className="text-white w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6"
        style={{ backgroundColor: "#FFFDF9" }}
      >
        {/* Subtle top gradient for smooth transition */}
        <div
          className="absolute top-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(180deg, #f9f2eb 0%, rgba(249, 242, 235, 0.5) 50%, transparent 100%)`,
          }}
        ></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-6 uppercase tracking-wider">
            WHY CHOOSE US?
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Our commitment to excellence, innovation, and sustainability has
            made us the trusted partner for industrial leaders worldwide,
            delivering solutions that exceed expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
                SUSTAINABILITY
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Environmental responsibility through energy-efficient designs
                and sustainable manufacturing processes that reduce carbon
                footprint.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
                CUSTOMIZATION
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Tailored solutions designed to meet your specific operational
                requirements with precision engineering and innovative design.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
                QUALITY
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Uncompromising quality standards backed by rigorous testing and
                continuous improvement in every aspect of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-[#F7F3ED] px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-8 sm:mb-12">
            REACH OUT TO US
          </h2>
          
          {/* Mobile: Stacked Form */}
          <div className="block sm:hidden space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded text-black"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded text-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">NUMBER</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded text-black"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded h-32 resize-none text-black"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <button 
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium w-full sm:w-auto"
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* Desktop: Grid Form */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-4 max-w-2xl mx-auto">
              <div className="sm:text-right sm:pr-4 flex items-center">
                <label className="text-gray-700 font-medium w-full">NAME</label>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded text-black"
                  placeholder="Enter your name"
                />
              </div>

              <div className="sm:text-right sm:pr-4 flex items-center">
                <label className="text-gray-700 font-medium w-full">EMAIL</label>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded text-black"
                  placeholder="Enter your email"
                />
              </div>

              <div className="sm:text-right sm:pr-4 flex items-center">
                <label className="text-gray-700 font-medium w-full">NUMBER</label>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded text-black"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="sm:text-right sm:pr-4 flex items-start pt-2">
                <label className="text-gray-700 font-medium w-full">MESSAGE</label>
              </div>
              <div className="sm:col-span-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded h-24 sm:h-32 resize-none text-black"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="sm:col-span-4 flex justify-center mt-6">
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-8 sm:px-10 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;