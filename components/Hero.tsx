'use client'

import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const stats = [
    { value: '30+', label: 'management Years of Experience' },
    { value: '100%', label: 'Customer Satisfaction' },
  ];

  const whatsappNumber = "254741537895";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Nescopharm%20Africa!%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20your%20products.`;

  return (
    <section className="relative w-full h-fit">
      {/* Full Background Image desktop */}
      <div className="hidden lg:flex absolute inset-0 -z-10">
        <Image
          src="/desk_1.png"
          alt="Nescopharm Africa Background"
          fill
          priority
          className="object-fit object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-transparent to-purple-900/70" />
      </div>
       {/* Full Background Image  tablet*/}
      <div className="hidden sm:flex lg:hidden absolute inset-0 -z-10">
        <Image
          src="/desk_1.png"
          alt="Nescopharm Africa Background"
          fill
          priority
          className="object-fit object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-transparent to-purple-900/70" />
      </div>
       {/* Full Background Image phones*/}
      <div className="sm:hidden absolute inset-0 -z-10">
        <Image
          src="/sm_2.png"
          alt="Nescopharm Africa Background"
          fill
          priority
          className="object-fit object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-transparent to-purple-900/70" />
      </div>

      {/* Main Content – tight vertical stacking */}
      <div className="relative z-10 flex flex-col items-center px-6 py-2 lg:py-4 gap-0">

        {/* Title */}
        <h1 className="text-center mb-4 lg:mb-6">
          <span className="block text-2xl md:text-5xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            Nescopharm Africa Limited
          </span>
        </h1>

        {/* Animated Logo
        <div className="mb-2 flex justify-center">
          <div className="relative w-72 h-72 
                           rounded-full overflow-hidden shadow-2xl border border-purple-500/30 
                           bg-purple-500 backdrop-blur-sm">
            <video
              src="/nesco15.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-full"
              aria-label="Nescopharm Africa Animated Logo"
            />
          </div>
        </div> */}

        {/* Stats + Description – no outer gap */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-12">

          {/* Stat 1 */}
          <div className="hidden lg:flex justify-center">
            <div className="group flex aspect-square flex-col items-center justify-center rounded-full 
                             bg-purple-600/95 backdrop-blur-md border-4 border-purple-300/50 shadow-2xl 
                             transition-all duration-500 hover:scale-110 hover:bg-purple-500 hover:border-purple-200
                             w-40 sm:w-24 md:w-28 lg:w-36 p-2">
              <span className="text-[12px] md:text-[16px] lg:text-xl font-black text-white drop-shadow-2xl">
                {stats[0].value}
              </span>
              <span className="mt-3 text-center text-sm sm:text-base lg:text-lg tracking-wider text-white/95 font-medium">
                {stats[0].label}
              </span>
            </div>
          </div>

          {/* Center Description */}
          <div className="text-center px-6 lg:px-8">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 drop-shadow-xl">
              <p>Medical & Surgical Product Distributor</p>
              <p className="text-white text-base sm:text-lg">(Non-pharma consumable)</p>
              <p className="text-white">Headquarters: Nairobi, Kenya</p>
              <p className="hidden md:block text-xl sm:text-2xl text-yellow-300 mt-2 font-bold">
                Serving  <span className="font-black"> Countrywide</span>
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="hidden lg:flex justify-center">
            <div className="group flex aspect-square flex-col items-center justify-center rounded-full 
                             bg-purple-600/95 backdrop-blur-md border-4 border-purple-300/50 shadow-2xl 
                             transition-all duration-500 hover:scale-110 hover:bg-purple-500 hover:border-purple-200
                             w-40 sm:w-24 md:w-28 lg:w-36 p-2">
              <span className="text-[12px] md:text-[16px] lg:text-xl font-black text-white drop-shadow-2xl">
                {stats[1].value}
              </span>
              <span className="mt-3 text-center text-sm sm:text-base lg:text-lg tracking-wider text-white/95 font-medium">
                {stats[1].label}
              </span>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA – tighter spacing
        <div className="mt-2 lg:mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-purple-700 
                       px-4 py-2 sm:px-16 sm:py-2 text-lg sm:text-xl font-bold text-white shadow-2xl 
                       transition-all duration-300 hover:scale-110 hover:from-purple-500 hover:to-purple-600 
                       active:scale-95 border-4 border-purple-300"
          >
            <span className="relative z-10 drop-shadow-lg flex items-center gap-4">
              Contact us now
              <FaWhatsapp className="w-10 h-10" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </div> */}
      </div>
    </section>
  );
}