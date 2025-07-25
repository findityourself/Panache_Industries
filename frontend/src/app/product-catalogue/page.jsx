"use client";
import React, { useState } from "react";
import { Search, Download, ArrowLeft, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Aluminum Windows Series",
    description: "High-quality aluminum windows for modern buildings",
    image: "/p1.jpg",
    price: "From $450",
    fullDescription:
      "Our aluminum windows combine durability with sleek design, offering excellent thermal performance and weather resistance. Available in various styles and finishes.",
    specifications: [
      "Material: High-grade aluminum",
      "Finish: Powder-coated, various colors",
      "Glass: Double/triple glazing options",
      "Security: Multi-point locking system",
      "Warranty: 10 years"
    ],
  },
  {
    id: 2,
    name: "Premium Door Systems",
    description: "Secure and stylish aluminum door solutions",
    image: "/p2.jpg",
    price: "From $850",
    fullDescription:
      "Our aluminum doors provide superior security and insulation while maintaining elegant aesthetics. Suitable for both residential and commercial applications.",
    specifications: [
      "Material: Reinforced aluminum",
      "Types: Sliding, folding, hinged options",
      "Finish: Anodized or powder-coated",
      "Security: High-grade locking mechanisms",
      "Customization: Various sizes and designs"
    ],
  },
  {
    id: 3,
    name: "Architectural Railings",
    description: "Modern safety and decorative railing systems",
    image: "/p3.jpg",
    price: "From $120 per meter",
    fullDescription:
      "Our aluminum railings combine safety with architectural beauty, perfect for balconies, staircases, and terraces. Custom designs available.",
    specifications: [
      "Material: Marine-grade aluminum",
      "Styles: Glass, horizontal, vertical",
      "Finish: Brushed, powder-coated",
      "Installation: Wall or floor mounted",
      "Maintenance: Virtually maintenance-free"
    ],
  },
  {
    id: 4,
    name: "Structural Aluminum Profiles",
    description: "Industrial-strength aluminum framing systems",
    image: "/p4.jpg",
    price: "From $25 per meter",
    fullDescription:
      "Structural aluminum profiles for construction and industrial applications. Lightweight yet strong, corrosion-resistant framing solutions.",
    specifications: [
      "Material: 6000-series aluminum",
      "Types: T-slot, angle, channel, I-beam",
      "Finish: Mill, anodized, or powder-coated",
      "Applications: Frames, supports, enclosures",
      "Custom: Cutting and machining available"
    ],
  },
  {
    id: 5,
    name: "Curtain Wall Systems",
    description: "Energy-efficient building facades",
    image: "/p5.jpg",
    price: "From $150 per sqm",
    fullDescription:
      "Advanced curtain wall systems that enhance building aesthetics while improving energy efficiency. Custom designs for any architectural vision.",
    specifications: [
      "System: Unitized or stick-built",
      "Glazing: Thermal break technology",
      "Performance: Weather and impact resistant",
      "Design: Custom shapes and configurations",
      "Sustainability: Recyclable materials"
    ],
  }
];

const ProductCatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDownloadCatalog = () => {
    const link = document.createElement("a");
    link.href = "/product-catalogue.pdf";
    link.download = "product-catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProductClick = (product) => {
    router.push(`/product-catalogue/${product.id}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  // Filter products by search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/productbg.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight uppercase tracking-wider">
            ALUMINUM PRODUCTS
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Premium aluminum solutions for construction and architecture. Explore our range of windows, doors, railings, structural profiles, and curtain walls.
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg bg-white"
                aria-label="Search products"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-20" style={{ backgroundColor: "#f9f2eb" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 uppercase tracking-wider">
                PRODUCT CATEGORIES
              </h2>
              <p className="text-gray-600 text-lg max-w-md leading-relaxed whitespace-nowrap xl:whitespace-normal">
  Browse our premium aluminum products designed for durability, aesthetics, and performance.
</p>


            </div>
            <button
              onClick={handleDownloadCatalog}
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold uppercase tracking-wide mt-6 lg:mt-0"
              aria-label="Download product catalogue"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD CATALOGUE
            </button>
          </div>

          {/* Product Grid - 3x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria
                </p>
              </div>
            ) : (
              filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${product.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProductClick(product);
                    }
                  }}
                  onClick={() => handleProductClick(product)}
                >
                  <div className="aspect-[4/5] flex items-center justify-center bg-gray-200 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover absolute inset-0"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <span
                      className="text-gray-400 text-lg font-semibold z-10 w-full h-full flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      Product Image {idx + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm opacity-90 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ${
            isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div
            className={`relative h-full flex items-center justify-center p-4 transition-all duration-300 ${
              isModalOpen ? "scale-100" : "scale-95"
            }`}
          >
            <div className="bg-gray-100 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center p-4 border-b border-gray-200">
                <button
                  onClick={handleCloseModal}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  BACK
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Side - Images */}
                <div className="lg:w-1/2 p-6">
                  {/* Main Image */}
                  <div className="aspect-[4/5] mb-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <span
                      className="text-gray-400 text-lg font-semibold"
                      style={{ display: "none" }}
                    >
                      Product Image
                    </span>
                  </div>

                  {/* Thumbnail Images */}
                  <div className="flex gap-2">
                    {[1, 2, 3].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-blue-500"
                      >
                        <img
                          src={selectedProduct.image}
                          alt={`${selectedProduct.name} view ${idx + 1}`}
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
                    <div className="w-20 h-20 rounded-lg bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                      +2
                    </div>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="lg:w-1/2 p-6 overflow-y-auto">
                  {/* Product Name and Price */}
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-blue-600 uppercase">
                      {selectedProduct.name}
                    </h2>
                    <span className="text-2xl font-bold text-gray-800">
                      {selectedProduct.price}
                    </span>
                  </div>

                  {/* Product Description */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Product Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.fullDescription}
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-blue-600 mb-3">
                      Technical Specification
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.specifications.map((spec, idx) => (
                        <li key={idx} className="text-gray-600">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="space-y-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-semibold min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                        Add To Cart
                      </span>
                    </div>

                    {/* Get Quote Button */}
                    <button className="text-blue-600 font-semibold hover:underline">
                      + Get A Quote
                    </button>

                    {/* Download Catalogue */}
                    <button
                      onClick={handleDownloadCatalog}
                      className="flex items-center gap-2 text-gray-800 font-semibold hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      DOWNLOAD PRODUCT CATALOGUE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalogPage;