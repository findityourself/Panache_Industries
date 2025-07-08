"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for closing menu on mobile navigation
  const handleMobileNav = () => setIsMenuOpen(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-[9999] px-2 sm:px-4 md:px-6 lg:px-8 pt-2 sm:pt-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative transition-all duration-500 ease-out transform ${
            isScrolled
              ? "backdrop-blur-xl bg-white/20 shadow-2xl shadow-blue-500/10 border border-white/30"
              : "backdrop-blur-md bg-white/10 shadow-xl shadow-black/5 border border-white/20"
          } rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-4`}
          style={{
            background: isScrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
          }}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Panache Industries Logo"
                  className={`transition-all duration-300 group-hover:scale-110 ${
                    isScrolled ? "h-8 sm:h-10" : "h-9 sm:h-11"
                  } w-auto drop-shadow-lg`}
                />
                <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 relative z-10">
              {[
                { path: "/", label: "Home" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-2 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-blue-500/20 backdrop-blur-sm shadow-lg"
                        : "bg-transparent group-hover:bg-white/30 group-hover:backdrop-blur-sm group-hover:shadow-md"
                    }`}
                  ></div>
                </Link>
              ))}

              {/* About Us Dropdown */}
              <div className="relative group">
                <Link
                  href="/about"
                  className={`relative px-2 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 ${
                    isActive("/about")
                      ? "text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  <span className="relative z-10">About Us</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive("/about")
                        ? "bg-blue-500/20 backdrop-blur-sm shadow-lg"
                        : "bg-transparent group-hover:bg-white/30 group-hover:backdrop-blur-sm group-hover:shadow-md"
                    }`}
                  ></div>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 lg:w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[10000]">
                  <div className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-2xl shadow-2xl shadow-blue-500/20 p-2">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                    {[
                      {
                        path: "/quality-control",
                        label: "Quality Control",
                      },
                      {
                        path: "/infrastructure",
                        label: "Infrastructure",
                      },
                      { path: "/industries", label: "Industries" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="relative block px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:text-black rounded-xl transition-all duration-200 hover:bg-white/40 hover:backdrop-blur-sm group/item"
                      >
                        <span className="relative z-10 text-xs lg:text-sm font-medium">
                          {item.label}
                        </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { path: "/product-catalogue", label: "Our Products" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-2 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-blue-500/20 backdrop-blur-sm shadow-lg"
                        : "bg-transparent group-hover:bg-white/30 group-hover:backdrop-blur-sm group-hover:shadow-md"
                    }`}
                  ></div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-2 sm:p-3 rounded-xl text-gray-700 hover:text-black hover:bg-white/30 hover:backdrop-blur-sm transition-all duration-300 group z-[10001]"
              aria-label="Toggle mobile menu"
              type="button"
            >
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 visible transform translate-y-0' 
          : 'opacity-0 invisible transform -translate-y-2'
      }`}>
        <div className="mt-2 mx-2 sm:mx-4 relative z-[9998]">
          <div className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
            <nav className="relative flex flex-col p-3 sm:p-4 space-y-1 sm:space-y-2">
              <Link
                href="/"
                onClick={handleMobileNav}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm ${
                  isActive("/")
                    ? "text-white bg-blue-500/20"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={handleMobileNav}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm ${
                  isActive("/about")
                    ? "text-white bg-blue-500/20"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Submenu under About Us */}
              <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-2 border-l-2 border-white/20 ml-3 sm:ml-4">
                {[
                  {
                    path: "/quality-control",
                    label: "Quality Control",
                  },
                  {
                    path: "/infrastructure",
                    label: "Infrastructure",
                  },
                  { path: "/industries", label: "Industries" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleMobileNav}
                    className="block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-black rounded-lg hover:bg-white/30 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/product-catalogue"
                onClick={handleMobileNav}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm ${
                  isActive("/product-catalogue")
                    ? "text-white bg-blue-500/20"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Our Products
              </Link>

              <Link
                href="/contact"
                onClick={handleMobileNav}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm ${
                  isActive("/contact")
                    ? "text-white bg-blue-500/20"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;