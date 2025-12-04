import Image from 'next/image';
import React from 'react';

export default function Hero() {
  const stats = [
    { value: '30+', label: 'Years of Experience' },
    { value: '500+', label: 'Medical Products' },
    { value: '100%', label: 'Customer Satisfaction' },
    { value: '47', label: 'Countries Served by Our Manufacturers' },
  ];

  return (
    <section className="relative w-full h-fit">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Nescopharm Africa Limited - Medical Distribution Kenya"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay - Slightly Stronger for Readability */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-6xl text-center text-white">
          <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl drop-shadow-2xl">
            Nescopharm Africa Limited
          </h1>
          <div className="space-y-3 text-lg font-medium opacity-95 md:text-xl lg:text-2xl">
            <p className="drop-shadow-md">Medical & Surgical Product Distributor</p>
            <p className="font-semibold text-white">Headquarters: Nairobi, Kenya</p>
            <p className="drop-shadow-md">
              Serving All <span className="font-bold text-white">47 Counties</span> Nationwide
            </p>
          </div>
        </div>

        {/* Stats - Original Orange Circles with Purple Theme Harmony */}
        <div className="mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4 md:gap-10 lg:gap-14 py-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex aspect-square flex-col items-center justify-center rounded-full 
                         bg-purple-600/95 backdrop-blur-md border border-white/25 shadow-2xl 
                         transition-all duration-500 hover:scale-110 hover:bg-purple-500 
                         hover:shadow-orange-500/50 w-32 sm:w-36 md:w-40 lg:w-48"
            >
              <span className="text-4xl font-black text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                {stat.value}
              </span>
              <span className="mt-3 px-3 text-center text-xs tracking-wider text-white/90 
                               md:text-sm lg:text-base leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button - Your Exact Purple (#1F0D64) with Elegant Shine */}
        <div className="text-center py-4">
          <button className="group relative overflow-hidden rounded-full bg-[#1F0D64] px-12 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-800/60 active:scale-95">
            <span className="relative z-10">Make Order Now</span>
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>
      </div>
    </section>
  );
}