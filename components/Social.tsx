"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import ContactForm from './Form';

export default function SocialContact() {
  const phoneNumber = "+254741537895";
  const waLink = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Floating Button - Bottom Left */}
      <div className="fixed left-5 bottom-5 z-50">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-9 h-9 text-white" />
          <span className="absolute left-full ml-4 px-4 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp: {phoneNumber}
          </span>
        </a>
      </div>

      {/* Floating Buttons - Bottom Right */}
      <div className="fixed bottom-16 right-6 z-50 flex flex-col gap-4">

        {/* Official WhatsApp - Right Side */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-8 w-8 text-white" />
          <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {phoneNumber}
          </span>
        </a>

        {/* Email Button - Opens Contact Form */}
        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Send Email - Open Contact Form"
        >
          <FiMail className="h-7 w-7 text-white" />
          <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Send us an Email
          </span>
        </button>

        {/* Phone 1 - Green */}
        <a
          href={`tel:${phoneNumber}`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <FiPhone className="h-7 w-7 text-white" />
          <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {phoneNumber}
          </span>
        </a>

        {/* Phone 2 - Red */}
        <a
          href="tel:+254750358680"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <FiPhone className="h-7 w-7 text-white" />
          <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            +254 750 358 680
          </span>
        </a>

      </div>

      {/* Contact Form Panel - Slides in from the right (only the form, no extra wrapper or bg) */}
      {isFormOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg overflow-y-auto transition-transform duration-300 ease-in-out translate-x-0">
          {/* Pass the close function to ContactForm */}
          <ContactForm onClose={() => setIsFormOpen(false)} />
        </div>
      )}
    </>
  );
}