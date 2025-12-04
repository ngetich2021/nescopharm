import React from 'react';

export default function About() {
  return (
    <main className="bg-purple-50 min-h-screen py-12 px-6 md:py-20">
      <div className="w-full mx-auto">

        {/* Hero Title - Purple Accent */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-3">
            About Nescopharm Africa Limited
          </h1>
          <div className="h-1 w-24 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16 md:space-y-20">

          {/* About us */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 text-center">About us</h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Nescopharm Africa Limited is a trusted distributor of high-quality surgical products in Kenya. 
              We are committed to providing healthcare institutions, hospitals, and medical professionals with 
              world-class surgical solutions that meet international standards. With a deep understanding of 
              the healthcare sector and a keen focus on quality and reliability, Nescopharm has positioned itself 
              as a key player in Kenya’s surgical product distribution market. All our products are ISO-certified 
              and CE-marked, ensuring that our customers receive safe, compliant, and reliable medical tools 
              and supplies.
            </p>
          </section>

          {/* Our Products */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 text-center">Our Products</h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              We offer a comprehensive range of surgical products and medical supplies tailored to meet the needs 
              of healthcare providers across Kenya. Our product range includes:
            </p>
            <ul className="space-y-4 text-lg md:text-xl text-gray-700">
              {[
                "General surgical instruments",
                "Disposable surgical supplies",
                "Orthopedic consumables",
                "Wound care products",
                "Sterilization equipment and accessories"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg md:text-xl text-gray-800">
              All products are sourced from reputable global manufacturers and meet the strictest standards 
              for safety and effectiveness.
            </p>
          </section>

          {/* Our Management */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 text-center">Our Management</h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Our company is led by a team of professionally trained and experienced managers with a strong 
              background in medical supply chain management, regulatory compliance, and customer service. 
              Their collective expertise ensures operational excellence, timely deliveries, and superior 
              client support.
            </p>
          </section>

          {/* Our Vision */}
          <section className="bg-purple-100 rounded-2xl p-8 md:p-10 -mx-6 md:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 text-center">Our Vision</h2>
            <p className="text-lg md:text-xl text-purple-900 leading-relaxed italic">
              To offer healthy healthcare solutions that enhance patient outcomes and support the advancement 
              of medical services in Kenya. At Nescopharm Africa Limited, we envision a future where every 
              healthcare provider has access to reliable and affordable surgical solutions. Our mission is 
              to bridge the gap between quality medical supplies and the healthcare systems that need them most.
            </p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
              Why Choose Nescopharm Africa Limited?
            </h2>
            <div className="space-y-5">
              {[
                "ISO and CE certified product offerings",
                "Reliable and timely distribution services",
                "Professionally trained staff with healthcare sector experience",
                "Strong ethical standards and regulatory compliance",
                "Commitment to customer satisfaction and service excellence"
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-purple-100 w-180">
                  <span className="text-2xl text-purple-600 font-bold">✓</span>
                  <span className="text-lg md:text-xl text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}