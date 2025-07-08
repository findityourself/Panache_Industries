"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#F7F3ED] to-[#E8E4D9] text-black py-8 sm:py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <img
                  src="logo.png"
                  alt="Palanche Industries Logo"
                  className="h-8 sm:h-10 w-auto mr-3 sm:mr-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                Palanche Industries
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
            </p>
            <button className="relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm sm:text-base font-medium shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 group overflow-hidden">
              <Link
                href="/contact"
                className="relative z-10 block w-full h-full"
              >
                Contact Us
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/product-catalogue", label: "Our Products" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800">
              Connect With Us
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: Instagram,
                  label: "Instagram",
                  color: "hover:text-pink-500",
                  href: "https://instagram.com/",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  color: "hover:text-blue-600",
                  href: "https://facebook.com/",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                  color: "hover:text-sky-500",
                  href: "https://twitter.com/",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-700",
                  href: "https://linkedin.com/",
                },
              ].map(({ icon: Icon, label, color, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm sm:text-base text-gray-600 ${color} transition-all duration-300 hover:translate-x-2 group`}
                >
                  <div className="relative mr-2 sm:mr-3">
                    <Icon
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                      <Icon size={18} />
                    </div>
                  </div>
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/30 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} Palanche Industries. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
