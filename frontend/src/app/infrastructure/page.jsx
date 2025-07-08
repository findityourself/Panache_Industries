import React from "react";

const InfrastructurePlant = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center text-white py-20 sm:py-24 md:py-32 overflow-hidden bg-[#f7f3ed]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,197,253,0.1)), url('/infrabg.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-wide">
            INFRASTRUCTURE
          </h1>
          <p className="text-base sm:text-lg max-w-xl md:max-w-2xl leading-relaxed opacity-90 px-2">
            Complete turnkey renewable energy solutions and cutting-edge
            technology solutions tailored to all climates and environments
            worldwide.
          </p>
        </div>
      </section>

      {/* Plant Overview Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#f7f3ed]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center lg:items-end">
            <div className="space-y-6 sm:space-y-8 self-center lg:self-end">
              <div>
                <h2 className="text-4xl sm:text-5xl font-medium text-blue-600 mb-1 sm:mb-2">
                  PLANT
                </h2>
                <h3 className="text-4xl sm:text-5xl font-medium text-blue-600 mb-6 sm:mb-8">
                  OVERVIEW
                </h3>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-500 mb-3 sm:mb-4 tracking-wide">
                  LOCATION
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center shadow-lg overflow-hidden bg-white rounded-lg">
              <img
                src="/q2.jpg"
                alt="Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Details Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f7f3ed]">
        <div className="max-w-xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center md:items-end">
            <div className="md:w-2/3 w-full order-2 md:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div
                  className="h-40 sm:h-48 md:h-56 w-full bg-cover bg-center shadow-md rounded"
                  style={{ backgroundImage: "url('/q3.jpg')" }}
                />
                <div
                  className="h-40 sm:h-48 md:h-56 w-full bg-cover bg-center shadow-md rounded"
                  style={{ backgroundImage: "url('/q4.jpg')" }}
                />
                <div
                  className="h-40 sm:h-48 md:h-56 w-full bg-cover bg-center shadow-md rounded"
                  style={{ backgroundImage: "url('/q5.jpg')" }}
                />
                <div
                  className="h-40 sm:h-48 md:h-56 w-full bg-cover bg-center shadow-md rounded"
                  style={{ backgroundImage: "url('/q1.jpg')" }}
                />
              </div>
            </div>
            <div className="md:w-1/3 w-full pt-8 md:pt-24 order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4 leading-tight">
                MACHINERY
                <br />
                DETAILS
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Workflow Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              MANUFACTURING WORKFLOW
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-full sm:max-w-xl md:max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-around items-start relative gap-y-12 sm:gap-y-0 sm:gap-x-4">
            {/* Connecting line for larger screens */}
            <div className="hidden sm:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gray-300 z-0"></div>

            <div className="text-center relative z-10 w-full sm:w-1/3 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                STEP 1
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                certification development/ analysis of forum ipsum dolor sit
                amet tempor adipiscing elit.
              </p>
            </div>

            <div className="text-center relative z-10 w-full sm:w-1/3 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                STEP 2
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                certification development/ analysis of forum ipsum dolor sit
                amet tempor adipiscing elit.
              </p>
            </div>

            <div className="text-center relative z-10 w-full sm:w-1/3 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                STEP 3
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                certification development/ analysis of forum ipsum dolor sit
                amet tempor adipiscing elit.
              </p>
            </div>

            {/* Arrow pointing right for larger screens */}
            <div className="hidden sm:flex absolute right-0 top-6 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full items-center justify-center shadow-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f7f3ed]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              GALLERY
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              aliquam aliquam nisi nisi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px] sm:h-[280px] lg:h-[420px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/qbg.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] sm:h-[130px] lg:h-[205px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/q1.jpg"
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[250px] sm:h-[350px] lg:h-[539px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/q2.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-4">
              <div className="h-[280px] sm:h-[360px] lg:h-[554px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/q3.jpg"
                  alt="Gallery 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[180px] sm:h-[240px] lg:h-[361px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/q4.jpg"
                  alt="Gallery 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[120px] sm:h-[160px] lg:h-[249px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/q5.jpg"
                  alt="Gallery 6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div className="h-[140px] sm:h-[180px] lg:h-[279px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/p1.jpg"
                  alt="Gallery 7"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[260px] sm:h-[340px] lg:h-[523px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/p2.jpg"
                  alt="Gallery 8"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[180px] sm:h-[240px] lg:h-[362px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/p3.jpg"
                  alt="Gallery 9"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extrusion Process Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f7f3ed]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 sm:mb-8 tracking-wide">
              EXTRUSION PROCESS
            </h2>
            <div className="text-left sm:text-right">
              <h3 className="text-blue-600 text-lg sm:text-xl font-medium mb-1 sm:mb-2">
                Why Panache is the right extrusion partner?
              </h3>
              <p className="text-gray-600 text-sm sm:text-lg max-w-full sm:max-w-md sm:ml-auto">
                Consectetur adipiscing elit, aliquam aliquam nisi nisi, eu
                <br className="hidden sm:block" />
                imperdiet ex ullamcorper eu.
              </p>
            </div>
            <div className="w-full h-px bg-blue-600 mt-6 sm:mt-8"></div>
          </div>

          {/* Steps */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 max-w-full sm:max-w-2xl items-start text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-4 min-w-max">
                  STEP 1
                </h3>
                <p className="text-gray-700 text-base sm:text-xl leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
                </p>
              </div>
              <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-8">
                {/* Step 1 Icon - Circular process with arrows */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                  <div className="absolute inset-0 border-3 sm:border-4 border-blue-600 rounded-full"></div>
                  <div className="absolute inset-3 sm:inset-4 bg-blue-600 rounded-full"></div>
                  {/* Arrows around circle */}
                  <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-blue-600"></div>
                  </div>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 rotate-180">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-blue-600"></div>
                  </div>
                  <div className="absolute -left-1 sm:-left-2 top-1/2 transform -translate-y-1/2 -rotate-90">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-blue-600"></div>
                  </div>
                  <div className="absolute -right-1 sm:-right-2 top-1/2 transform -translate-y-1/2 rotate-90">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 max-w-full sm:max-w-2xl items-start text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-4 min-w-max">
                  STEP 2
                </h3>
                <p className="text-gray-700 text-base sm:text-xl leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
                </p>
              </div>
              <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-8">
                {/* Step 2 Icon - Geometric shape */}
                <div className="relative w-24 h-18 sm:w-28 sm:h-20 md:w-32 md:h-24">
                  <div className="absolute inset-0 bg-blue-600 transform skew-y-6 rotate-6 sm:skew-y-12 sm:rotate-12 rounded"></div>
                  <div className="absolute top-1 left-1 right-2 bottom-2 sm:top-2 sm:left-2 sm:right-4 sm:bottom-4 bg-blue-500 transform skew-y-3 rotate-3 sm:skew-y-6 sm:rotate-6 rounded"></div>
                  <div className="absolute top-2 left-2 right-4 bottom-4 sm:top-4 sm:left-4 sm:right-8 sm:bottom-8 bg-blue-400 transform skew-y-1 rotate-1 sm:skew-y-3 sm:rotate-3 rounded"></div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePlant;