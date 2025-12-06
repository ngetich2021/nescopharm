import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Official brand icons with correct colors
import { siInstagram, siFacebook, siX, siTiktok } from 'simple-icons';

const InstagramIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" className="drop-shadow-md">
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fca5a5" />
        <stop offset="30%" stopColor="#f77737" />
        <stop offset="60%" stopColor="#e1306c" />
        <stop offset="100%" stopColor="#833ab4" />
      </linearGradient>
    </defs>
    <path fill="url(#igGradient)" d={siInstagram.path} />
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.2" opacity="0.7" />
    <circle cx="18.5" cy="5.5" r="1.3" fill="white" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24">
    <path fill="#000000" d={siTiktok.path.replace(/currentColor/g, 'black')} />
    <path fill="#00f2ea" d="M13.834 8.736a3.642 3.642 0 0 0-2.162-.715c-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.03 0 1.96-.41 2.646-1.07.27.88.98 1.58 1.85 1.8.2.05.4.08.6.08 1.66 0 3-.98 3.62-2.4.28-.64.42-1.32.42-2.02v-3.67a6.74 6.74 0 0 0 3.98 1.29V8.07a4.85 4.85 0 0 1-2.92-.99 5.07 5.07 0 0 1-1.08-1.68V12.1c0 .7-.14 1.38-.42 2.02-.62 1.42-1.96 2.4-3.62 2.4-.2 0-.4-.03-.6-.08-.87-.22-1.58-.92-1.85-1.8-.69.66-1.62 1.07-2.65 1.07-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8.8 0 1.54.25 2.16.68V5h2.16v11.5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.34 0 .66.06.96.17V8.736z" opacity="0.9" />
    <path fill="#ff0050" d="M13.834 8.736a3.642 3.642 0 0 0-2.162-.715c-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.03 0 1.96-.41 2.646-1.07.27.88.98 1.58 1.85 1.8.2.05.4.08.6.08 1.66 0 3-.98 3.62-2.4.28-.64.42-1.32.42-2.02v-3.67a6.74 6.74 0 0 0 3.98 1.29V8.07a4.85 4.85 0 0 1-2.92-.99 5.07 5.07 0 0 1-1.08-1.68V12.1c0 .7-.14 1.38-.42 2.02-.62 1.42-1.96 2.4-3.62 2.4-.2 0-.4-. extraverted03-.6-.08-.87-.22-1.58-.92-1.85-1.8-.69.66-1.62 1.07-2.65 1.07-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8.8 0 1.54.25 2.16.68V5h2.16v11.5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.34 0 .66.06.96.17V8.736z" opacity="0.9" />
  </svg>
);

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
              <a href="tel:+254750358680" className="hover:text-purple-300 transition-colors duration-300">+254 750 358 680</a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone className="text-xl text-purple-300" />
              <a href="tel:+254741537895" className="hover:text-purple-300 transition-colors duration-300">+254 741 537 895</a>
            </div>
          </div>
        </div>

        {/* Social Media - Now with REAL OFFICIAL COLORS */}
        <div className="space-y-5 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-purple-200 tracking-wide capitalize underline">social media</h2>
          <div className="flex flex-col items-center md:items-start space-y-6 text-purple-100 w-full">

            <a href="https://www.instagram.com/nescopharmafricaltd/" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <InstagramIcon />
              <span className="text-base font-medium">@nescopharmafricaltd</span>
            </a>

            <a href="https://www.facebook.com/nescopharmafricaltd" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="#1877F2" dangerouslySetInnerHTML={{ __html: siFacebook.svg }} />
              <span className="text-base font-medium">nescopharmafricaltd</span>
            </a>

            <a href="https://x.com/@nescopharm" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" className="text-white" dangerouslySetInnerHTML={{ __html: siX.svg }} />
              <span className="text-base font-medium">@nescopharmafricaltd</span>
            </a>

            <a href="https://www.tiktok.com/@nescopharmafricaltd" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <TikTokIcon />
              <span className="text-base font-medium">@nescopharmafricaltd</span>
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-purple-200 tracking-wide capitalize underline">quick links</h2>
          <ul className="space-y-4 text-purple-100 text-xl font-bold">
            {['Home', 'About Us', 'Products', 'Contacts'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="relative inline-block hover:text-purple-300 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-purple-700 text-center text-purple-300 text-sm">
        © {new Date().getFullYear()} Nescopharm Africa Limited
      </div>
    </footer>
  );
}