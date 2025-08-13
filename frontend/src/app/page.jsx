"use client";
import React, { useState } from "react";
import { Settings, Recycle, Anvil, Truck } from "lucide-react";

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
            BOLD IN BUILD
            <br />
            BRILLIANT IN VISION
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md px-4">
            Welcome to Panache Aluminum — your partner in precision-engineered
            aluminum systems for modern architecture.
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
                Panache Aluminum is a forward-thinking manufacturer delivering
                premium-quality aluminum doors, windows, railings, and façade
                solutions.
              </p>
            </div>
            {/* Logo Placeholder */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[433px] h-auto object-contain"
                style={{ borderRadius: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#F7F3ED" }}
      >
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
{/* Mobile: Vertical Stack */}
<div className="block lg:hidden space-y-6">
  {/* Blue Card */}
  <div className="bg-blue-600 text-white p-6 shadow-md hover:shadow-lg transition-shadow rounded-none">
    <div className="mb-2">
      <p className="text-l font-bold uppercase">
        Advanced Extrusion Technology
      </p>
    </div>
    <p className="text-xs mt-1">
      Our PLC-controlled extrusion lines deliver precise, versatile
      aluminum profiles from 5mm to 200mm.
    </p>
  </div>

  {/* Additional Industrial Image */}
  <div className="overflow-hidden shadow-md h-96 hover:shadow-lg transition-shadow rounded-none">
    <img
      src="/la.png"
      alt="industrial"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      style={{ borderRadius: 0 }}
    />
  </div>

  {/* Precision Machinery Card */}
  <div className="bg-blue-600 text-white p-6 shadow-md hover:shadow-lg transition-shadow rounded-none">
    <div className="mb-2">
      <p className="text-l font-bold uppercase">
        Precision Machinery: Presses, Furnaces, Aging Ovens
      </p>
    </div>
    <p className="text-xs mt-1">
      Advanced machinery ensures precision and durability in every profile.
    </p>
  </div>

  {/* Main Industrial Image */}
  <div className="overflow-hidden shadow-md h-96 hover:shadow-lg transition-shadow rounded-none">
    <img
      src="/mid.png"
      alt="Industrial Color"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      style={{ borderRadius: 0 }}
    />
  </div>

  {/* Custom Profiles Card */}
  <div className="bg-blue-600 text-white p-6 shadow-md hover:shadow-lg transition-shadow rounded-none">
    <div className="mb-4">
      <p className="text-l font-bold uppercase">
        Custom Profiles, Modular Systems, Thermal Breaks
      </p>
    </div>
    <p className="text-xs mt-1">
      We design custom profiles and modular systems with thermal
      breaks to enhance performance and energy efficiency.
    </p>
  </div>

  {/* Additional Industrial Image */}
  <div className="overflow-hidden shadow-md h-96 hover:shadow-lg transition-shadow rounded-none">
    <img
      src="/glassybackground.png"
      alt="industrial"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      style={{ borderRadius: 0 }}
    />
  </div>
</div>



            {/* Desktop: Original 3-column layout */}
            <div className="hidden lg:flex flex-nowrap items-stretch gap-6 h-[600px] overflow-x-auto">
              {/* Left Column */}
              <div className="flex flex-col gap-6 w-[30%]">
                {/* Blue Card */}
                <div className="bg-blue-600 text-white p-6 shadow-md h-[250px] flex flex-col justify-between hover:shadow-lg transition-shadow rounded-none w-full">
                  <div>
                    <h3 className="text-2xl font-bold uppercase">
                      Advanced Extrusion Technology
                    </h3>
                    <h4 className="text-xl font-bold text-blue-600"></h4>
                  </div>
                  <p className="text-sm">
                    Our PLC-controlled extrusion lines deliver precise,
                    versatile aluminum profiles from 5mm to 200mm.
                  </p>
                </div>
                {/* Bottom Left Industrial Image */}
                <div className="overflow-hidden shadow-md h-[250px] hover:shadow-lg transition-shadow rounded-none">
                  <img
                  src="/la.png"
                  alt="industrial"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ borderRadius: 0 }}
                />
                </div>
              </div>

              {/* Center Column */}
              <div className="flex flex-col gap-6 w-[35%]">
                

                {/* Middle Full Color Image */}
                {/* Middle Full Color Image - Static Display */}
<div className="overflow-hidden shadow-md h-[250px] hover:shadow-lg transition-shadow rounded-none">
  <img
    src="/mid.png"
    alt="Industrial Color"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    style={{ borderRadius: 0, cursor: "default" }}
  />
</div>



                {/* Bottom B/W Card */}
                <div className="bg-blue-600 text-white p-6 shadow-md h-[250px] flex flex-col justify-between hover:shadow-lg transition-shadow rounded-none w-full">
      <div>
        <p className="text-2xl uppercase font-bold">
          Precision Machinery: Presses, Furnaces, Aging Ovens
        </p>
        <p className="text-4xl font-bold"></p>
      </div>
      <p className="text-sm">
        Advanced machinery ensures precision and durability in every profile.
      </p>
    </div>
  </div>

              

              {/* Right Column */}
              <div className="flex flex-col gap-6 w-[30%]">
                {/* Blue Card */}
                <div className="bg-blue-600 text-white p-6 shadow-md h-[250px] flex flex-col justify-between hover:shadow-lg transition-shadow rounded-none">
                  <div>
                    <p className="text-2xl uppercase font-bold">
                      Custom Profiles, Modular Systems, Thermal Breaks
                    </p>
                    <p className="text-4xl font-bold"></p>
                  </div>
                  <p className="text-sm">
                    We design custom profiles and modular systems with thermal
                    breaks to enhance performance and energy efficiency.
                  </p>
                </div>

                {/* Orange Gear Card */}
                <div className="shadow-md h-[250px] hover:shadow-lg transition-shadow rounded-none overflow-hidden">
  <img
    src="/glassybackground.png"
    alt="Industrial"
    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
    style={{ cursor: "default" }}
  />
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve Section */}
<section
  className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
  style={{ backgroundColor: "#F7F3ED" }}
>
  <div className="container mx-auto max-w-7xl text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
      SECTORS WE SERVE
    </h2>
    <p className="text-gray-700 text-lg sm:text-xl font-light max-w-4xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-2 select-none">
      {[
        "Residential",
        "Commercial",
        "Hospitality",
        "Retail",
        "Industrial",
        "Infrastructure",
      ].map((sector, idx) => (
        <React.Fragment key={sector}>
          <span
            className="cursor-default px-3 py-1 text-gray-700 inline-block rounded-none"
          >
            {sector}
          </span>
          {idx !== 5 && (
            <span
              className="text-blue-600 mx-1 cursor-default select-none inline-block"
              aria-hidden="true"
            >
              |
            </span>
          )}
        </React.Fragment>
      ))}
    </p>
  </div>
</section>

      {/* Why Choose Us Section */}
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

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 max-w-6xl mx-auto">
      {/* High-strength alloys & sleek aesthetics */}
      <div className="text-center group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
          <Anvil className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
          HIGH-STRENGTH ALLOYS
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Crafted from premium-grade billets to deliver superior strength and sleek finishes that elevate modern design aesthetics.
        </p>
      </div>

      {/* Tailored design solutions */}
      <div className="text-center group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
          <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
          TAILORED DESIGN SOLUTIONS
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Customized profiles designed precisely to your operational needs with innovative engineering.
        </p>
      </div>

      {/* Sustainable & recyclable production */}
      <div className="text-center group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
          <Recycle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
          SUSTAINABLE & RECYCLABLE PRODUCTION
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Energy-efficient manufacturing with fully recyclable aluminum, reducing environmental impact.
        </p>
      </div>

      {/* On-time delivery, every time */}
      <div className="text-center group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
          <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
          ON-TIME DELIVERY
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Streamlined production and logistics ensure your orders arrive promptly without compromise.
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