"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { products } from "@data/products"; // Adjust the import path as necessary

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const actualParams =
    typeof params.then === "function" ? React.use(params) : params;
  const id = parseInt(actualParams.id, 10);
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(
    product ? product.images?.[0] || product.image : null
  );

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images?.[0] || product.image);
    }
  }, [product]);

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

  // Updated function to use the specific product's PDF link
  const handleDownloadCatalog = () => {
    if (product.pdf) {
      const link = document.createElement("a");
      link.href = product.pdf; // Use the specific PDF from the product object
      link.download = `${product.name.replace(/\s/g, "-").toLowerCase()}.pdf`; // Generate a user-friendly filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No PDF catalogue available for this product.");
      alert("No PDF catalogue available for this product.");
    }
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
            <div className="aspect-[4/5] mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center relative">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-1 sm:gap-2 overflow-x-auto">
              {product.images?.slice(0, 5).map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer border-2 ${
                    selectedImage === imgUrl ? "border-blue-600" : "border-transparent"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {product.images?.length > 5 && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm sm:text-base">
                  +{product.images.length - 5}
                </div>
              )}
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