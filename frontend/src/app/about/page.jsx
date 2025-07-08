"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const [openValue, setOpenValue] = useState("Core Value 1");

  const handleValueClick = (value) => {
    if (openValue === value) {
      setOpenValue(null);
    } else {
      setOpenValue(value);
    }
  };

  const values = [
    {
      title: "Core Value 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.",
    },
    {
      title: "Core Value 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.",
    },
    {
      title: "Core Value 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.",
    },
    {
      title: "Core Value 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about.jpg"
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-center">
            ABOUT US
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque quis
            turpis cursus.
          </p>
        </div>
      </div>

      {/* Our Story Timeline Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
              <img
                src="/h2.jpg"
                alt="Timeline Visual"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Story */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
                OUR STORY
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque
                quis turpis cursus.
              </p>
              <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque
                quis turpis cursus.
              </p>

              {/* Timeline */}
              <div className="relative mt-10 sm:mt-12 md:mt-16">
                {/* Timeline line */}
                <div className="absolute left-0 w-full h-[1px] bg-black/60 top-[18px] sm:top-[22px]"></div>

                {/* Timeline points */}
                <div className="relative flex justify-between items-start">
                  {["YEAR", "YEAR", "YEAR", "YEAR"].map((year, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* Vertical line for first point */}
                      {index === 0 && (
                        <div className="absolute h-6 sm:h-8 w-[1px] bg-black/60 top-[-8px] sm:top-[-10px]"></div>
                      )}

                      {/* Timeline dot */}
                      <div
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${
                          index === 0 ? "bg-black" : "bg-black/60"
                        } rounded-full mb-2 sm:mb-3 mt-4 sm:mt-5`}
                      ></div>

                      {/* Year text */}
                      <p
                        className={`text-xs sm:text-sm font-medium ${
                          index === 0 ? "text-black" : "text-black/60"
                        }`}
                      >
                        {year}
                      </p>

                      {/* Event text for first point */}
                      {index === 0 && (
                        <div className="absolute top-[-25px] sm:top-[-30px] left-[-15px] sm:left-[-20px] whitespace-nowrap">
                          <p className="text-xs text-black/60">
                            EVENT AT THIS TIME
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl lg:max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 lg:gap-x-20">
            {/* Mission */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-medium mb-6 sm:mb-10 text-black tracking-wider">
                OUR MISSION
              </h3>
              <div className="flex justify-center mb-6 sm:mb-10">
                <svg
                  className="w-20 h-20 sm:w-24 sm:h-24"
                  viewBox="0 0 100 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 30C54.4183 30 58 26.4183 58 22C58 17.5817 54.4183 14 50 14C45.5817 14 42 17.5817 42 22C42 26.4183 45.5817 30 50 30Z"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M68 50C68 41.1634 60.3726 34 50 34C39.6274 34 32 41.1634 32 50"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34 42C38.4183 42 42 38.4183 42 34C42 29.5817 38.4183 26 34 26C29.5817 26 26 29.5817 26 34C26 38.4183 29.5817 42 34 42Z"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52 64C52 55.1634 44.3726 48 34 48C23.6274 48 16 55.1634 16 64"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66 42C70.4183 42 74 38.4183 74 34C74 29.5817 70.4183 26 66 26C61.5817 26 58 29.5817 58 34C58 38.4183 61.5817 42 66 42Z"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M84 64C84 55.1634 76.3726 48 66 48C55.6274 48 48 55.1634 48 64"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50 9C50 11.2091 48.2091 13 46 13C43.7909 13 42 11.2091 42 9C42 6.79086 43.7909 5 46 5C48.2091 5 50 6.79086 50 9Z"
                    fill="#F97316"
                  />
                  <path
                    d="M46 13V5M46 5V-1M53.0711 9L57.2426 4.82843M38.9289 9L34.7574 4.82843M53.0711 9L57.2426 13.1716M38.9289 9L34.7574 13.1716"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-serif text-base sm:text-lg text-gray-500 max-w-xs sm:max-w-md mx-auto leading-snug">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-medium mb-6 sm:mb-10 text-black tracking-wider">
                OUR VISION
              </h3>
              <div className="flex justify-center mb-6 sm:mb-10">
                <svg
                  className="w-20 h-20 sm:w-24 sm:h-24"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2,32 C2,32 16,20 32,20 C48,20 62,32 62,32 C62,32 48,44 32,44 C16,44 2,32 2,32 Z"
                    stroke="#F97316"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="8"
                    stroke="#F97316"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M40 40 l-6 10 l3 -8 h-8 l6 -10 l-3 8 h8 z"
                    stroke="#F97316"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <p className="font-serif text-base sm:text-lg text-gray-500 max-w-xs sm:max-w-md mx-auto leading-snug">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-blue-600 mb-3 sm:mb-4">
              OUR VALUES
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam
              aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
              {/* Left side - Logo */}
              <div className="w-48 sm:w-64 md:w-[280px] lg:w-[343px] flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Company Logo"
                  className="w-full h-auto"
                />
              </div>

              {/* Right side - Values */}
              <div className="flex-1 w-full">
                <div className="space-y-2 sm:space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="border-b border-gray-300">
                      <button
                        onClick={() => handleValueClick(value.title)}
                        className="w-full py-2 sm:py-3 flex items-center justify-between text-left group"
                      >
                        <span className="text-gray-800 font-[600] text-lg sm:text-xl md:text-2xl">
                          {value.title}
                        </span>
                        <span className="text-gray-400 text-lg sm:text-xl">
                          {openValue === value.title ? "×" : "+"}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-200 ease-in-out ${
                          openValue === value.title
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-2 sm:pb-3 text-gray-600 text-sm sm:text-base">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black mb-3 sm:mb-4 text-center">
              WHAT WE OFFER?
            </h2>
            <p className="text-base sm:text-lg text-black/70 mb-8 sm:mb-12 text-center max-w-2xl mx-auto px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam
              aliquam nisi nisi, eu imperdiet ex ullamcorper eu pellentesque
              quis turpis cursus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
              <Link
                href="/quality-control"
                className="group relative overflow-hidden w-full max-w-[360px] h-[350px] sm:h-[400px] md:h-[472px] mx-auto"
              >
                <div className="w-full h-full">
                  <img
                    src="/q1.jpg"
                    alt="Quality Control"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    QUALITY
                    <br />
                    CONTROL
                  </h3>
                  <div className="self-end">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-lg sm:text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/infrastructure"
                className="group relative overflow-hidden w-full max-w-[360px] h-[350px] sm:h-[400px] md:h-[472px] mx-auto"
              >
                <div className="w-full h-full">
                  <img
                    src="/infrabg.jpg"
                    alt="Our Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    OUR
                    <br />
                    INFRASTRUCTRE
                  </h3>
                  <div className="self-end">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-lg sm:text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/industries"
                className="group relative overflow-hidden w-full max-w-[360px] h-[350px] sm:h-[400px] md:h-[472px] mx-auto"
              >
                <div className="w-full h-full">
                  <img
                    src="/industries.jpg"
                    alt="Industries We Serve"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    INDUSTRIES WE
                    <br />
                    SERVE
                  </h3>
                  <div className="self-end">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-lg sm:text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl md:max-w-3xl lg:max-w-6xl">
          <div className="relative mb-8 sm:mb-12">
            <img
              src="/contact.jpg"
              alt="Our Locations"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-start p-6 sm:p-8 md:p-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight sm:leading-none">
                OUR
                <br />
                LOCATIONS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-6 lg:gap-x-8">
            <div className="md:border-r md:border-gray-300 md:pr-6 lg:pr-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Office 1
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque
                quis turpis cursus.
              </p>
            </div>
            <div className="md:border-r md:border-gray-300 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Office 2
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque
                quis turpis cursus.
              </p>
            </div>
            <div className="md:pl-6 lg:pl-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Plant 1
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque
                quis turpis cursus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reach Out To Us Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6 max-w-lg md:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8 sm:mb-12">
            REACH OUT TO US
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-4 sm:gap-y-6">
            <div className="text-left sm:text-right sm:pr-4 md:pr-8 flex items-center">
              <label className="text-gray-700 font-medium text-sm sm:text-base">
                NAME
              </label>
            </div>
            <div className="sm:col-span-3">
              <input
                type="text"
                className="w-full p-2 sm:p-2.5 border border-gray-300 rounded text-black text-sm sm:text-base"
                placeholder="name"
              />
            </div>

            <div className="text-left sm:text-right sm:pr-4 md:pr-8 flex items-center">
              <label className="text-gray-700 font-medium text-sm sm:text-base">
                EMAIL
              </label>
            </div>
            <div className="sm:col-span-3">
              <input
                type="email"
                className="w-full p-2 sm:p-2.5 border border-gray-300 rounded text-black text-sm sm:text-base"
                placeholder="email"
              />
            </div>

            <div className="text-left sm:text-right sm:pr-4 md:pr-8 flex items-center">
              <label className="text-gray-700 font-medium text-sm sm:text-base">
                NUMBER
              </label>
            </div>
            <div className="sm:col-span-3">
              <input
                type="tel"
                className="w-full p-2 sm:p-2.5 border border-gray-300 rounded text-black text-sm sm:text-base"
                placeholder="number"
              />
            </div>

            <div className="text-left sm:text-right sm:pr-4 md:pr-8 self-start pt-2">
              <label className="text-gray-700 font-medium text-sm sm:text-base">
                MESSAGE
              </label>
            </div>
            <div className="sm:col-span-3">
              <textarea
                className="w-full p-2 sm:p-2.5 border border-gray-300 rounded h-24 sm:h-28 resize-none text-black text-sm sm:text-base"
                placeholder="type here..."
              ></textarea>
            </div>

            <div className="col-span-1 sm:col-span-4 flex justify-center mt-4 sm:mt-6">
              <button className="bg-blue-600 text-white px-8 sm:px-10 py-2 sm:py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-sm sm:text-base">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;