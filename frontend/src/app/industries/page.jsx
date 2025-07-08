"use client";

import React, { useState } from "react";
import { Lightbulb, Car, Cog, Building, Wind } from "lucide-react"; // Removed Plane as it's not used

const IndustriesPage = () => {
  const [activeCard, setActiveCard] = useState(0);

  const industryCards = [
    {
      title: "ARCHITECTURE\n& FACADE",
      desc: "Innovative architectural solutions combining cutting-edge design with sustainable materials for modern facades.",
      bg: "bg-blue-200",
      textColor: "text-gray-200",
      icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/h1.jpg",
    },
    {
      title: "SOLAR\nENERGY",
      desc: "Sustainable energy solutions harnessing solar power for residential and commercial applications.",
      bg: "bg-blue-600",
      textColor: "text-white",
      icon: <Wind className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/h2.jpg",
    },
    {
      title: "LED\nLIGHTING",
      desc: "Energy-efficient LED lighting systems for urban infrastructure and smart city development.",
      bg: "bg-gray-900",
      textColor: "text-white",
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/h3.jpg",
    },
    {
      title: "AUTOMOTIVE\n& TRANSPORT",
      desc: "Advanced automotive solutions and transport infrastructure for modern mobility needs.",
      bg: "bg-gray-600",
      textColor: "text-white",
      icon: <Car className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/p1.jpg",
    },
    {
      title: "INDUSTRIAL\nMACHINERY",
      desc: "Precision industrial machinery and equipment for manufacturing and processing operations.",
      bg: "bg-orange-500",
      textColor: "text-white",
      icon: <Cog className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/p2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] flex items-center bg-gradient-to-r from-blue-400/20 to-blue-600/20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/industries.jpg"
            alt="Industries background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
            INDUSTRIES WE SERVE
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-xl md:max-w-2xl text-center px-2">
            Serving diverse industries with innovative solutions and
            unparalleled expertise across multiple sectors, delivering
            excellence in every project we undertake.
          </p>
        </div>
      </div>

      {/* WHO WE WORK WITH Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-10 sm:mb-12 md:mb-16 text-[#0365E7]">
            WHO WE WORK WITH
          </h2>

          {/* Industry Cards Grid */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6">
            {industryCards.map((card, index) => (
              <div
                key={index}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                  ${
                    index === activeCard
                      ? "w-full md:w-[480px] lg:w-[600px]"
                      : "w-full md:w-32 lg:w-44"
                  }
                  h-[300px] sm:h-[400px] md:h-[500px] group
                `}
                onClick={() => setActiveCard(index)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Color Overlay */}
                <div
                  className={`absolute inset-0 ${card.bg} ${
                    index === activeCard ? "opacity-35" : "opacity-40"
                  } transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div
                  className={`relative z-10 p-4 sm:p-6 h-full flex flex-col ${card.textColor}`}
                >
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">{card.icon}</div>

                  {/* Title - Always visible */}
                  <h3
                    className={`font-bold leading-tight whitespace-pre-line transition-all duration-500
                    ${
                      index === activeCard
                        ? "text-xl sm:text-2xl mb-4 sm:mb-6"
                        : "text-sm sm:text-base mb-2 transform rotate-0"
                    }
                  `}
                  >
                    {card.title}
                  </h3>

                  {/* Description - Only visible when active */}
                  {index === activeCard && (
                    <div className="animate-fadeIn flex-grow flex flex-col justify-center">
                      <p className="text-sm sm:text-base leading-relaxed opacity-90">
                        {card.desc}
                      </p>
                    </div>
                  )}

                  {/* Vertical title for inactive cards on larger screens */}
                  {index !== activeCard && (
                    <div className="hidden md:flex flex-grow items-center justify-center">
                      <div className="transform -rotate-90 whitespace-nowrap">
                        <span className="text-xs sm:text-sm font-semibold tracking-wider">
                          {card.title.replace("\n", " ")}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6 sm:mb-8">
                CASE STUDIES
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  CLIENT NAME
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed px-2 lg:px-0">
                  Testimonial, what we did for the client, what was their
                  requirements, solutions we provided, brief about them and our
                  services.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/p3.jpg"
                alt="Case study project"
                className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-[#F7F3ED]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/p4.jpg"
                alt="Testimonial project"
                className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-end order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-orange-500 mb-6 sm:mb-8">
                TESTIMONIALS
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  CLIENT NAME
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed px-2 lg:px-0">
                  Testimonial, what we did for the client, what was their
                  requirements, solutions we provided, brief about them and our
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default IndustriesPage;