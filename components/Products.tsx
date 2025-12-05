"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HiCheckCircle } from "react-icons/hi2";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  sizes?: string;
  packing?: string;
};

// --- Product Data (Category removed) ---
const products: Product[] = [
  {
    id: 1,
    name: "Suction Catheter",
    image: "/suction_catheter.jpg",
    description: "Medical grade PVC suction catheter with color-coded connector",
    features: [
      "Medical grade PVC",
      "Transparent or frosted",
      "Tube length: 30cm, 45cm, 60cm etc.",
      "Size: F5 to F24",
      "PE or blister packing",
      "Sterilized by EO GAS",
    ],
  },
  {
    id: 2,
    name: "Oxygen Mask",
    image: "/oxygen_mask.jpg",
    description: "Simple oxygen mask with adjustable strap and 2m tubing",
    features: [
      "100% medical grade PVC",
      "Sizes: S (Newborn), M (Child), L/XL (Adult)",
      "colors:white/green",
      "Length:10m,10yards.5m,5yards",
      "package:simple package/plastic tin/iron tin",
    ],
    sizes: "S-Newborn, M-Child, L/XL-Adult",
    packing: "1pc/PE bag, 50pcs/carton",
  },
  {
    id: 3,
    name: "Nebulizer Mask",
    image: "/nebulizer_mask.jpg",
    description: "Complete nebulizer mask kit with medication chamber",
    features: [
      "Made of Medical grade PVC",
      "Adjustable nasal clip",
      "Sizes: S, M, L, XL",
      "For adult, pediatric & infant",
      "Color: Green or white",
      "Tube length:2m, 6m , OD",
    ],
    sizes: "S, M, L, XL",
  },
  {
    id: 4,
    name: "Nasal Oxygen Cannula",
    image: "/Nasal_Oxygen_Cannula.jpg",
    description: "Soft curved prong nasal cannula with over-ear design",
    features: [
      "Medical grade PVC",
      "Soft curved prongs",
      "Total length: 2.5m",
      "Adult, pediatric & infant sizes",
      "Green or white transparent",
    ],
  },
  {
    id: 5,
    name: "Zinc Oxide Adhesive Plaster",
    image: "/zinc_oxide_tape.jpg",
    description: "Strong zinc oxide adhesive tape, hand-tearable",
    features: [
      "made of medical grade PVC",
      "For adults,pediatric and infant",
      "Color: green or white",
    ],
    sizes: "S/M/L/XL",
  },
  {
    id: 6,
    name: "Foley Catheter",
    image: "/Foley_catheter.jpg",
    description: "Silicone-coated latex balloon catheter",
    features: [
      "Made of natural latex",
      "1-way,6Fr-24Fr",
      "2-way, pediatric,6Fr-10Fr,3-5ml",
      "2-way, standard, 12Fr-20Fr, 5ml-15ml/30ml/cc",
      "2-way, standard, 22Fr-24Fr, 5ml-15ml/30ml/cc",
      "3-way standard, 16Fr-24Fr, 5ml-15ml/cc, 30ml-50ml/cc",
      "2-way, standard, 12Fr-20Fr, 5ml-15ml/30ml/cc",
      "2-way, standard, 22Fr-24Fr, 5ml-15ml/30ml/cc",
    ],
  },
  {
    id: 7,
    name: "Feeding Tube",
    image: "/feeding_tube.jpg",
    description: "Medical grade PVC",
    features: [
      "Medical grade PVC",
      "Transparent or frosted",
      "Tube length: 40cm+2cm(infant), 120cm+2cm(adults)",
      "Sizes: F4,F6,F8,F10,F12,F14,F16,F18,F20,F22",
      "PE packaging or blister packing",
      "Sterilized by EO GAS",
    ],
  },
  {
    id: 8,
    name: "Endotracheal Tube",
    image: "/Endotracheal_tube.jpg",
    description: "Cuffed/uncuffed endotracheal tube with radiopaque line",
    features: [
      "Medical grade PVC",
      "With or without cuff",
      "Radio Opaque line provided",      
      "In blister packaging or peel able pouch as per request",
      "Sterile by EO, single use",
    ],
  },
  {
    id: 9,
    name: "Autoclave Tape",
    image: "/Auroclave_tape.jpg",
    description: "Sterilization indicator tape for STEAM & ETO",
    features: [
      "Size: 19mm × 50m",
      "Innovative designs as per your request",
      "Sterilization method STEAM and ETO",
      "Material:masking tape",
    ],
  },
  {
    id: 10,
    name: "Surgical Suture",
    image: "/surgical_suture.jpg",
    description: "Absorbable & non-absorbable surgical sutures with needles",
    features: [
      "synthetic absorbable,nature absorbable, non absorbable",
      "polyglycolic acid, polyglactin, polyglactin rapid, polydioxanone",
      "chromic catgut, plain catgut, silk, nylon, polyester, polypropylene",
      "Length: 45cm, 75cm, 90cm, 150cm or customized",
      "Thread no: 0,1,2,2/0,3/0, 4/0, 5/0, 6/0, 7/0, 8/0",
      "Needle type: 1/2,3/8,1/4, 5/8 circle,J shape, compound curve, 1/2 curve straight",
      "Needle Length: (6,8, 10,12,13,15,16,18,20,22,25,30,38,40)mm",
      "Needle shape: Round bodied(Taper Point), Curved cutting(regular cutting), Reverse cutting,Tapper Cutting",
      "Micro-point reverse cutting, Micro-point spatula, curved, Blunt taper point, Taper point, Fish look",
    ],
  },
];
// --- End Product Data ---

export default function Products() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  // Prevent any horizontal scroll when modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (selected) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Search only by product name (category removed)
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <main className="h-fit bg-gradient-to-b from-purple-50 via-purple-50 to-purple-100 py-8 px-4 sm:py-12">
        <div className="w-full mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-3">
            PRODUCT CATALOGUE
          </h1>
          <p className="text-base sm:text-lg text-purple-700 font-medium mb-10">
            Nescopharm Africa LTD – Registered by the Pharmacy and Poisons Board of Kenya
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600" size={26} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-full border-2 border-purple-200 bg-white/90 
                            focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 
                            shadow-lg transition-all duration-300 placeholder-purple-400"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                              border border-purple-100 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative aspect-square bg-purple-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-purple-900 text-lg font-bold line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-purple-950/70 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 overflow-y-auto p-4">
              <div className="min-h-full flex items-center justify-center">
                <div
                  className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative ring-8 ring-purple-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Hero Image */}
                  <div className="relative h-56 sm:h-72 md:h-80">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />

                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 bg-white/95 hover:bg-purple-100 rounded-full p-3 shadow-xl 
                                 transition-all hover:scale-110 z-10 border-2 border-purple-200"
                      aria-label="Close"
                    >
                      <IoClose size={28} className="text-purple-800" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-3">
                        {selected.name}
                      </h2>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {selected.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-purple-900 mb-5">Key Features</h3>
                      <ul className="space-y-4">
                        {selected.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <HiCheckCircle className="w-6 h-6 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(selected.sizes || selected.packing) && (
                      <div className="border-t-2 border-purple-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-purple-50/50 -m-8 p-8 mt-8 rounded-b-3xl">
                        {selected.sizes && (
                          <div>
                            <strong className="block text-purple-900 font-bold mb-2 text-lg">Sizes</strong>
                            <p className="text-gray-800 font-medium">{selected.sizes}</p>
                          </div>
                        )}
                        {selected.packing && (
                          <div>
                            <strong className="block text-purple-900 font-bold mb-2 text-lg">Packing</strong>
                            <p className="text-gray-800 font-medium">{selected.packing}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}