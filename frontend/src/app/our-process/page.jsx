"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function OurProcess() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <main className="relative min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-[#F7F3ED] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Process</h1>
        <p className="text-lg text-gray-600 mb-10">
          Here is the step-by-step process of our manufacturing and delivery pipeline.
        </p>

        {/* Flowchart Image */}
        <div
          ref={imageRef}
          className={`relative w-full max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Image
            src="/Flowchart_final1-1.png"
            alt="Our Process Flowchart"
            width={1000}
            height={650}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
