import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-16 px-6 shadow-lg">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Contact Us */}
        <div className="space-y-5" id="contact">
          <h2 className="text-3xl font-bold text-purple-200 tracking-wide capitalize underline">get in touch</h2>
          <div className="text-purple-100 leading-relaxed space-y-3">
            <p className="text-sm">For inquiries, product catalogues, please contact:</p>
            <p className="font-semibold"><strong>NESCOPHARM AFRICA LIMITED</strong></p>
            <div className="flex items-start justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="mt-1 text-xl text-purple-300" />
              <span>Kampala Road, off Enterprises Road, Nairobi, Kenya</span>
            </div>
            <div className="flex flex-col items-start justify-center md:justify-start space-y-2">
              <a href="mailto:info@nescopharm.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors duration-300">
                <FaEnvelope className="text-xl text-purple-300" /> info@nescopharm.com
              </a>
              <a href="mailto:admin@nescopharm.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors duration-300">
                <FaEnvelope className="text-xl text-purple-300" /> admin@nescopharm.com
              </a>
              <a href="mailto:nescopharmafricaltd@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors duration-300">
                <FaEnvelope className="text-xl text-purple-300" /> nescopharmafricaltd@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone className="text-xl text-purple-300" />
              <a href="tel:+254750358680" className="hover:text-purple-300 transition-colors duration-300">+254750358680</a>
            </div>
          </div>
        </div>
        {/* Social Media Handles */}
        <div className="space-y-5 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-purple-200 tracking-wide capitalize underline">social media</h2>
          <div className="flex flex-col items-center md:items-start space-y-4 text-purple-100 w-full">
            <a
              href="https://www.instagram.com/nescopharmafricaltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-purple-300 hover:scale-105 transition-transform duration-300"
            >
              <FaInstagram className="text-3xl text-purple-300" />
              <span className="text-base font-medium">@nescopharmafricaltd</span>
            </a>
            <a
              href="https://www.facebook.com/nescopharmafricaltd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-purple-300 hover:scale-105 transition-transform duration-300"
            >
              <FaFacebookF className="text-3xl text-purple-300" />
              <span className="text-base font-medium">nescopharmafricaltd</span>
            </a>
            <a
              href="https://x.com/nescopharmafricaltd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-purple-300 hover:scale-105 transition-transform duration-300"
            >
              <FaTwitter className="text-3xl text-purple-300" />
              <span className="text-base font-medium">@nescopharmafricaltd</span>
            </a>
            <a
              href="https://www.tiktok.com/@nescopharmafricaltd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-purple-300 hover:scale-105 transition-transform duration-300"
            >
              <FaTiktok className="text-3xl text-purple-300" />
              <span className="text-base font-medium">@nescopharmafricaltd</span>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-purple-200 tracking-wide capitalize underline">quick links</h2>
          <ul className="space-y-4 text-purple-100 text-xl font-bold">
            <li>
              <a href="#home" className="relative inline-block hover:text-purple-300 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="relative inline-block hover:text-purple-300 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="relative inline-block hover:text-purple-300 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="relative inline-block hover:text-purple-300 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Simple Bottom Line */}
      <div className="mt-12 pt-8 border-t border-purple-700 text-center text-purple-300 text-sm">
        © {new Date().getFullYear()} Nescopharm Africa Limited
      </div>
    </footer>
  );
}
