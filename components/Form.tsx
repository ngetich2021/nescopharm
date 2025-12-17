'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

emailjs.init('xKf7-js4M4kBvER0v');

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Phone validation: must be Kenyan mobile format (07../01.. or +2547../+2541.. only)
  const validatePhone = (value: string): boolean => {
    const cleaned = value.replace(/\s+/g, '');
    return /^(\+254[71]\d{8}|0[71]\d{8})$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Validate phone before proceeding
    const contactInput = formRef.current.contact as HTMLInputElement;
    if (contactInput && contactInput.value) {
      if (!validatePhone(contactInput.value)) {
        setStatus('Please enter a valid Kenyan mobile number (e.g., 0712345678, 0112345678, or +254712345678).');
        return;
      }
    }

    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });

    let timeInput = formRef.current.querySelector(
      'input[name="submission_time"]'
    ) as HTMLInputElement;

    if (!timeInput) {
      timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'submission_time';
      formRef.current.appendChild(timeInput);
    }
    timeInput.value = formattedDate;

    setIsLoading(true);
    setStatus(null);

    const serviceId = 'service_3f4lfhn';
    const templateId = 'template_7xx64oi';

    emailjs
      .sendForm(serviceId, templateId, formRef.current)
      .then((result) => {
        console.log('SUCCESS!', result.text, result.status);
        setStatus('Thank you! Your message has been sent successfully. 🎉');
        formRef.current?.reset();
        timeInput.remove();

        // Close the form after a short delay to let the user see the success message
        setTimeout(() => {
          onClose();
        }, 2000);
      })
      .catch((error) => {
        console.error('EmailJS detailed error:', error);
        let errorMsg = 'Something went wrong. Please try again later.';
        if (error?.text) errorMsg = `Error: ${error.text}`;
        setStatus(errorMsg);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 ">
      {/* Close Button */}
      <div className="p-4 flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="bg-purple-800/80 hover:bg-purple-900 rounded-full p-3 shadow-lg transition transform hover:scale-110 focus:outline-none"
          aria-label="Close form"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-lg">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl shadow-2xl p-8 border-3 border-white"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Fill the Following Details
            </h2>

            {/* Status Message */}
            {status && (
              <p
                className={`text-center mb-6 text-lg font-medium py-3 px-5 rounded-lg ${
                  status.includes('Thank') || status.includes('🎉')
                    ? 'text-green-300 bg-green-900/30'
                    : 'text-red-300 bg-red-900/30'
                }`}
              >
                {status}
              </p>
            )}

            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-purple-100 font-medium mb-2">
                Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:border-purple-300 focus:bg-white/30 transition"
              />
            </div>

            {/* Business / Company Name Field - Required */}
            <div className="mb-6">
              <label htmlFor="business" className="block text-purple-100 font-medium mb-2">
                Company / Business Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                id="business"
                name="business"
                required
                placeholder="Enter your company or business name..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:border-purple-300 focus:bg-white/30 transition"
              />
            </div>

            {/* Mobile Number Field - Strictly Kenyan mobile only */}
            <div className="mb-6">
              <label htmlFor="contact" className="block text-purple-100 font-medium mb-2">
                Mobile Number <span className="text-red-300">*</span>
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                required
                placeholder="e.g. 0712345678, 0112345678 or +254712345678"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:border-purple-300 focus:bg-white/30 transition"
              />
              <p className="text-purple-200 text-sm mt-2">
                Kenyan mobile only: 07../01.. or +2547../+2541..
              </p>
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-purple-100 font-medium mb-2">
                Message <span className="text-red-300">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Enter your message..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-300/30 text-white placeholder-purple-200 focus:outline-none focus:border-purple-300 focus:bg-white/30 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-1"
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}