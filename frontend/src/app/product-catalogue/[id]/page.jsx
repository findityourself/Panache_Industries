"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Industrial Furnace Model A1",
    description:
      "High-efficiency industrial furnace for heavy-duty applications",
    image: "/p1.jpg",
    price: "$12,500",
    fullDescription:
      "Lorem Dolor Sit Amet, Consectetur adipiscing elit. Aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.",
    specifications: [
      "2 x Top Anchor",
      "2 x Light Tube Rod 400mm",
      "1 x Direct Light Tube 900mm",
      "1 x Suspension Rod 600mm",
      "1 x Suspension Panel 600mm",
    ],
  },
  {
    id: 2,
    name: "Precision Welding Equipment",
    description: "Professional welding equipment for industrial use",
    image: "/p2.jpg",
    price: "$8,750",
    fullDescription:
      "Professional grade welding equipment designed for industrial applications with advanced safety features.",
    specifications: [
      "1 x Welding Unit",
      "1 x Power Cable 5m",
      "2 x Electrode Holders",
      "1 x Ground Clamp",
      "1 x Safety Mask",
    ],
  },
  {
    id: 3,
    name: "Safety Gear Pro Series",
    description: "Complete safety equipment for industrial workers",
    image: "/p3.jpg",
    price: "$450",
    fullDescription:
      "Comprehensive safety equipment package for industrial workplace protection and compliance.",
    specifications: [
      "1 x Safety Helmet",
      "1 x High-Vis Vest",
      "1 x Safety Goggles",
      "1 x Work Gloves",
      "1 x Safety Boots",
    ],
  },
  {
    id: 4,
    name: "Heavy Duty Crane System",
    description: "Industrial crane system for heavy lifting operations",
    image: "/p4.jpg",
    price: "$35,000",
    fullDescription:
      "Heavy-duty crane system for industrial lifting operations with advanced control systems.",
    specifications: [
      "1 x Main Crane Unit",
      "1 x Control Panel",
      "2 x Support Beams",
      "1 x Lifting Hook Assembly",
      "1 x Remote Control",
    ],
  },
  {
    id: 5,
    name: "Automated Assembly Line",
    description: "Complete automated assembly line solution",
    image: "/p5.jpg",
    price: "$125,000",
    fullDescription:
      "Complete automated assembly line solution for manufacturing processes with high efficiency.",
    specifications: [
      "3 x Conveyor Sections",
      "2 x Robotic Arms",
      "1 x Control System",
      "4 x Sensors",
      "1 x Quality Control Unit",
    ],
  },
  {
    id: 6,
    name: "Quality Control System",
    description: "Advanced quality control and testing equipment",
    image: "/p6.jpg",
    price: "$15,500",
    fullDescription:
      "Advanced quality control and testing equipment for precise measurement and analysis.",
    specifications: [
      "1 x Testing Unit",
      "1 x Measurement Tools",
      "1 x Data Logger",
      "2 x Calibration Standards",
      "1 x Software Package",
    ],
  },
];

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const actualParams =
    typeof params.then === "function" ? React.use(params) : params;
  const id = parseInt(actualParams.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto py-10 sm:py-16 md:py-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Product Not Found
        </h2>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          Back to Catalogue
        </button>
      </div>
    );
  }

  const handleDownloadCatalog = () => {
    const link = document.createElement("a");
    link.href = "/product-catalogue.pdf";
    link.download = "product-catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f9f2eb] pb-8 sm:pb-12">
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/productbg.jpg')`,
        }}
      >
        <div className="max-w-xl sm:max-w-3xl lg:max-w-6xl mx-auto text-center text-white relative z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight uppercase tracking-wider">
            {product.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto mt-6 sm:mt-8 px-4">
        <div className="flex items-center mb-4 sm:mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            BACK
          </button>
        </div>
        <div className="flex flex-col lg:flex-row h-full gap-6 sm:gap-8">
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <span
                className="text-gray-400 text-base sm:text-lg font-semibold"
                style={{ display: "none" }}
              >
                Product Image
              </span>
            </div>
            <div className="flex gap-1 sm:gap-2">
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-blue-500"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <span
                    className="text-gray-400 text-xs"
                    style={{ display: "none" }}
                  >
                    Img
                  </span>
                </div>
              ))}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm sm:text-base">
                +2
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 uppercase">
                {product.name}
              </h2>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">
                {product.price}
              </span>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">
                Product Description
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {product.fullDescription}
              </p>
            </div>
            <div className="mb-6 sm:mb-8">
              <h3 className="font-semibold text-blue-600 mb-2 sm:mb-3 text-base sm:text-lg">
                Technical Specification
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {product.specifications.map((spec, idx) => (
                  <li key={idx} className="text-gray-600 text-sm sm:text-base">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4">
              
              <button className="text-blue-600 font-semibold hover:underline text-sm sm:text-base">
                + Get A Quote
              </button>
              <button
                onClick={handleDownloadCatalog}
                className="flex items-center gap-1 sm:gap-2 text-gray-800 font-semibold hover:underline text-sm sm:text-base"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                DOWNLOAD PRODUCT CATALOGUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}