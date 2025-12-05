'use client';

import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggle = () => setIsOpen(v => !v);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 shadow-2xl shadow-purple-500/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="w-full max-w-none mx-0 px-0">

          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between px-8 py-3">
            <a href="#home">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={70}
                height={60}
                className="transition-transform duration-300 hover:scale-105 ring-2 ring-purple-400"
                priority
              />
            </a>
            <div className="flex gap-20">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={close}
                  className="text-2xl font-bold capitalize text-white tracking-wider relative group p-1 transition-colors hover:text-purple-300"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between px-6 py-3">
            <a href="#home">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={60}
                height={50}
                className="ring-1 ring-purple-300"
                priority
              />
            </a>

            {/* Hamburger / Close button – always on top & accessible */}
            <button
              onClick={toggle}
              className="relative text-purple-300 hover:text-white z-50 p-2 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <IoClose size={36} /> : <IoMenu size={36} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu – EXACTLY your original style: top-20, h-fit, w-fit, NO bg */}
      <div
        id="mobile-menu"
        className={`
          fixed top-20 right-0 h-fit w-fit lg:hidden
          border-l border-b border-purple-600/50  bg-purple-700
          shadow-2xl shadow-black/80
          transition-all duration-500 ease-in-out z-40
          ${isOpen 
            ? 'translate-x-0 opacity-100 pointer-events-auto' 
            : 'translate-x-full opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="flex flex-col p-8 pt-6 gap-6">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              className="text-2xl font-bold text-purple-200 capitalize tracking-wide hover:text-purple-300 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Optional subtle dark overlay (keeps content readable when menu has no bg) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  );
}