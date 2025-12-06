'use client'

import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Official WhatsApp icon

export default function Hero() {
  const stats = [
    { value: '30+', label: 'Years of Experience' },
    { value: '100%', label: 'Customer Satisfaction' },
  ];

  const whatsappNumber = "254741537895"; // No + sign needed here
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Nescopharm%20Africa!%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20your%20products.`;

  return (
    <section className="relative w-full h-fit overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-top-right"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/nesco11.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 via-transparent to-purple-200/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8">

        {/* Title */}
        <h1 className="mb-2 sm:mb-6 md:mb-8text-center">
          <span className="block text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold text-yellow-300 tracking-tight drop-shadow-2xl">
            Nescopharm Africa Limited
          </span>
        </h1>

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="relative h-48 sm:h-60 md:h-80 w-48 sm:w-60 md:w-80  rounded-full overflow-hidden shadow-2xl ring-8 ring-purple-300/50 backdrop-blur-sm">
            <Image
              src="/nesco7.png"
              alt="Nescopharm Africa Limited Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats + Description */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-24">

          <div className="flex-shrink-0">
            <div className="group flex aspect-square flex-col items-center justify-center rounded-full 
                             bg-purple-600/95 backdrop-blur-md border-4 border-purple-300/50 shadow-2xl 
                             transition-all duration-500 hover:scale-110 hover:bg-purple-500 hover:border-purple-200
                             w-40 sm:w-44 md:w-48 lg:w-56">
              <span className="text-6xl font-black text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
                {stats[0].value}
              </span>
              <span className="md:mt-3 px-6 text-center text-base tracking-wider text-white/95 md:text-lg lg:text-xl font-medium">
                {stats[0].label}
              </span>
            </div>
          </div>

          <div className="text-center flex-1 px-8">
            <div className="md:space-y-3 text-xl md:text-2xl font-bold text-yellow-200 drop-shadow-xl">
              <p>Medical & Surgical Product Distributor</p>
              <p className="text-white">(Non-pharma consumable)</p>
              <p className="text-white">Headquarters: Nairobi, Kenya</p>
              <p className="text-2xl md:text-3xl text-yellow-300">
                Serving All <span className="font-black">47 Counties</span> Nationwide
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="group flex aspect-square flex-col items-center justify-center rounded-full 
                             bg-purple-600/95 backdrop-blur-md border-4 border-purple-300/50 shadow-2xl 
                             transition-all duration-500 hover:scale-110 hover:bg-purple-500 hover:border-purple-200
                             w-40 sm:w-44 md:w-48 lg:w-56">
              <span className="text-4xl font-black text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
                {stats[1].value}
              </span>
              <span className="md:mt-3 px-6 text-center text-base tracking-wider text-white/95 md:text-lg lg:text-xl font-medium">
                {stats[1].label}
              </span>
            </div>
          </div>
        </div>

        {/* Silent WhatsApp CTA Button – No link preview on hover */}
        <div className="mt-8 sm:12 md:16 lg:20 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-16 py-2 sm:py-4 md:p-6 text-lg sm:text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:from-purple-500 hover:to-purple-600 active:scale-95 border-4 border-purple-300 cursor-pointer"
            aria-label="Contact us on WhatsApp"
            // Prevents browser from showing the URL on hover
            onMouseEnter={(e) => e.preventDefault()}
            onMouseLeave={(e) => e.preventDefault()}
          >
            <span className="relative z-10 drop-shadow-lg flex items-center gap-4">
              Contact us now
              <FaWhatsapp className="w-10 h-10 text-white" />
            </span>

            {/* Shine animation on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-800 group-hover:translate-x-full" />
          </a>
        </div>

      </div>
    </section>
  );
}