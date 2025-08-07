"use client";

import React from "react";

const InfrastructurePlant = () => {
  const labEquipment = [
    { name: "Extrusion presses", img: "/q6.webp" },
    { name: "Hot Log Ovens", img: "/q7.png" },
    { name: "Melting furnaces", img: "/q81.jpg" },
    { name: "Aging ovens", img: "/q9.jpeg" },
    { name: "Automatic Double Puller System", img: "/q10.jpg" },
    { name: "Homogenising Furnace", img: "/homogenising2.jpg" },
  ];

  return (
    <>
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

      {/* Plant Overview Section *
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
                  Multiple fully-automated plants with high-capacity production
                  and seamless operations.
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
      */}

      {/* Machinery & Technology Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f7f3ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
            {/* Left: 2x2 Grid with Hover & Click Effect */}
            <div className="md:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-6">

              {labEquipment.map(({ name, img }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 text-center"
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-44 sm:h-52 md:h-56 object-cover"
                    draggable={false}
                  />
                  <div className="py-3 font-semibold text-gray-800 text-base">
                    {name}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Heading & Description */}
            <div className="md:w-1/3 w-full text-center md:text-left pt-8 md:pt-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 leading-tight">
                MACHINERY & TECHNOLOGY
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Our plant is equipped with state-of-the-art machinery to ensure
                seamless and efficient manufacturing, empowering precision and
                scalability at every stage.
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
              Manufacturing Workflow
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-full sm:max-w-xl md:max-w-4xl">
              From raw billets to finished systems — optimized, tracked, and
              quality-checked.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-around items-start relative gap-y-12 sm:gap-y-0 sm:gap-x-4">
            {/* Connecting line for larger screens */}
            <div className="hidden sm:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gray-300 z-0"></div>

            {/* Step 1 */}
            <div className="text-center relative z-10 w-full sm:w-1/3 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                Step 1: Raw Material Inspection
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Ensure quality and specifications of incoming billets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10 w-full sm:w-1/3 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                Step 2: Production & Processing
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Optimized extrusion, shaping, and assembly processes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10 w-full sm:w-1/3 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                Step 3: Final Quality Check
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Thorough inspection and testing of finished systems.
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
            {/*<p className="text-gray-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              aliquam aliquam nisi nisi.
            </p>*/}
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
                  src="/q5.png"
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

            {/* What is Extrusion */}
            <div className="mb-8 w-full text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
  <p className="whitespace-nowrap sm:whitespace-normal">
    A process that shapes heated aluminum by pushing it through a die using high pressure to create precise profiles.
  </p>
</div>



            <div className="w-full h-px bg-blue-600 mt-6 sm:mt-8"></div>
          </div>

          {/* Steps */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {/* Step 1 - Heating */}
            <Step
              number={1}
              title="Heating"
              description="Heating the aluminum billets to the required temperature to prepare for extrusion."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C10 5 7 7 7 11a5 5 0 0010 0c0-4-3-6-5-9z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                </svg>
              }
            />

            {/* Step 2 - Extrusion */}
            <Step
              number={2}
              title="Extrusion"
              description="Pushing heated aluminum through a shaped die to form desired profiles."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M12 3l9 9-9 9"
                  />
                </svg>
              }
            />

            {/* Step 3 - Cooling */}
            <Step
              number={3}
              title="Cooling"
              description="Cooling the extruded aluminum to solidify the shape."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-sky-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20m8-10H4"
                  />
                </svg>
              }
            />

            {/* Step 4 - Cutting */}
            <Step
              number={4}
              title="Cutting"
              description="Cutting the extruded profiles to required lengths for further processing."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636a9 9 0 01-12.728 0M12 12l9 9M12 12L3 21"
                  />
                </svg>
              }
            />

            {/* Step 5 - Aging */}
            <Step
              number={5}
              title="Aging"
              description="Heat treating the cut profiles to increase strength and durability."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a5 5 0 00-10 0v2M5 13h14l-1 7H6l-1-7z"
                  />
                </svg>
              }
            />

            {/* Step 6 - Surface Treatment */}
            <Step
              number={6}
              title="Surface Treatment"
              description="Applying coatings or finishing to enhance appearance and resistance."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              }
            />

            {/* Step 7 - Inspection */}
            <Step
              number={7}
              title="Inspection"
              description="Final inspection ensuring quality standards are met before shipment."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16 text-teal-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

// Step Component for reuse
const Step = ({ number, title, description, icon }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between">
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 max-w-full sm:max-w-2xl items-start text-center sm:text-left">
      <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-4 min-w-max">
        STEP {number}
      </h3>
      <p className="text-gray-700 text-base sm:text-xl leading-relaxed max-w-xl">
        {title}
      </p>
    </div>
    <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-8">{icon}</div>
  </div>
);

export default InfrastructurePlant;
