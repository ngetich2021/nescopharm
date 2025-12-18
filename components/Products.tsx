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

// --- Product Data (Now includes the newly requested items) ---
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
      "Tube length: 40cm±2cm(infant), 120cm±2cm(adults)",
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

  // ==================== PREVIOUSLY ADDED PRODUCTS ====================
  {
    id: 11,
    name: "Stool Container",
    image: "/stc.png",
    description: "Sterile specimen container with spoon for stool sample collection",
    features: [
      "Medical-grade polypropylene",
      "Leak-proof screw cap with integrated spoon",
      "Graduated markings for accurate measurement",
      "Individually packed",
      "Sterilized or non-sterile options available",
      "Clear visibility for sample inspection",
    ],
    sizes: "30ml, 60ml",
    packing: "1pc/polybag, 500–1000pcs/carton",
  },
  {
    id: 12,
    name: "Urine Container",
    image: "/urc.png",
    description: "Sterile urine specimen container with secure screw cap",
    features: [
      "Made from high-clarity polypropylene",
      "Leak-proof double-threaded cap",
      "Graduated up to 100ml or 120ml",
      "Label area for patient information",
      "Sterile (EO gas) or non-sterile",
      "Wide mouth for easy collection",
    ],
    sizes: "60ml, 90ml, 120ml",
    packing: "Individual sterile pack or bulk",
  },
  {
    id: 13,
    name: "Crepe Bandage",
    image: "/crepe.png",
    description: "Elastic crepe bandage for support, compression & dressing retention",
    features: [
      "High-quality cotton with elastic threads",
      "Excellent stretch and regain properties",
      "Soft, breathable and skin-friendly",
      "Washed and ready for use (non-sterile)",
      "Two metal clips included",
      "Conforms easily to body contours",
    ],
    sizes: "5cm, 7.5cm, 10cm, 15cm × 4.5m (stretched)",
    packing: "1 roll/polybag, 12 rolls/box",
  },
  {
    id: 14,
    name: "Plaster of Paris Bandage",
    image: "/pob.png",
    description: "Fast-setting POP bandage for orthopedic casting and immobilization",
    features: [
      "Premium leno gauze with high-quality gypsum",
      "Creamy texture, fast setting (3–6 minutes)",
      "Excellent molding and strength",
      "Low powder loss",
      "Smooth finish, high stability",
      "X-ray friendly",
    ],
    sizes: "4\", 6\", 8\" × 3.6m (common sizes)",
    packing: "Individual foil pack, 12 rolls/box",
  },
  {
    id: 15,
    name: "Urine Bag",
    image: "/urb.png",
    description: "Disposable urine drainage bag with anti-reflux valve",
    features: [
      "Medical-grade PVC, latex-free",
      "2000ml capacity with clear graduation",
      "Anti-reflux drip chamber",
      "T-valve or cross valve outlet",
      "Non-return valve prevents backflow",
      "Sterile, single-use",
      "Bottom outlet for easy emptying",
    ],
    sizes: "2000ml standard (pediatric 100–200ml available)",
    packing: "1pc/PE bag, 250pcs/carton", 
  },

  // ==================== PREVIOUSLY ADDED SYRINGES ====================
  {
    id: 16,
    name: "Disposable Syringes",
    image: "/syringes.jpg",
    description: "Sterile single-use syringes available with or without hypodermic needle",
    features: [
      "Medical-grade polypropylene barrel & plunger",
      "Highly transparent barrel with clear graduation",
      "Latex-free gasket for smooth movement",
      "Luer slip or luer lock tip",
      "With or without needle (21G–27G)",
      "Ultra-sharp triple-bevel needle (when included)",
      "EO gas sterilized, non-pyrogenic, non-toxic",
      "Individual blister packaging",
    ],
    sizes: "1ml, 2ml (TB), 3ml, 5ml, 10ml, 20ml, 50/60ml",
    packing: "1pc/blister pack, 100pcs/box, 2400–3600pcs/carton",
  },

  // ==================== NEW PRODUCTS YOU REQUESTED ====================
  {
    id: 17,
    name: "Sterile Gauze Swabs",
    image: "/Sterile-Gauze-Swabs.jpg",
    description: "Used for cleaning and dressing wounds\nMade from soft, absorbent cotton gauze\nSterilized to prevent infection\nHigh absorbency for fluids and exudates\nNon-linting texture\nIndividually packed or packed in sets\nSizes: 4\" X 4\"-8ply\nMaterial: medical-grade cotton",
    features: [
      "Used for cleaning and dressing wounds",
      "Made from soft, absorbent cotton gauze",
      "Sterilized to prevent infection",
      "High absorbency for fluids and exudates",
      "Non-linting texture",
      "Individually packed or packed in sets",
      "Sizes: 4\" X 4\"-8ply",
      "Material: medical-grade cotton",
    ],
    sizes: "4\" × 4\" (8-ply) – other sizes available on request",
    packing: "100 pcs/pack or individual sterile peel packs",
  },
  {
    id: 18,
    name: "WOW BANDAGES/Salvage Gauze",
    image: "/wow.png",
    description: "Used to secure dressings and support injured body parts\nProvides compression and protection\nAvailable in various types: elastic, crepe, adhesive, and roller\nEasy to apply and adjust\nBreathable and flexible material\nWidths: 2–10 cm\nSterile or non-sterile options\nMaterial: cotton, elastic, or synthetic fibers",
    features: [
      "Used to secure dressings and support injured body parts",
      "Provides compression and protection",
      "Available in various types: elastic, crepe, adhesive, and roller",
      "Easy to apply and adjust",
      "Breathable and flexible material",
      "Widths: 2–10 cm",
      "Sterile or non-sterile options",
      "Material: cotton, elastic, or synthetic fibers",
    ],
    sizes: "2 cm, 5 cm, 7.5 cm, 10 cm (width) × 4–4.5 m (length)",
    packing: "Individual roll or 12 rolls/box",
  },
  {
    id: 19,
    name: "Disposable Vaccination Syringe 0.5ml",
    image: "/Disposable-Vaccination-Syringe-0.5ml.jpg",
    description: "Used for intramuscular, subcutaneous, or intradermal injections\nPre-sterilized and single-use to prevent infection\nClear barrel with accurate graduation markings\nSmooth plunger for easy administration\nAttached needle or needleless depending on type\nAvailable in various sizes: 1 ml, 2 ml, 5 ml\nLow dead space design for accurate dosing\nMaterial: medical-grade plastic and stainless steel",
    features: [
      "Used for intramuscular, subcutaneous, or intradermal injections",
      "Pre-sterilized and single-use",
      "Clear barrel with accurate graduation markings",
      "Smooth plunger for easy administration",
      "Attached needle (commonly 23G–25G × 1\")",
      "Low dead space design",
      "Material: medical-grade plastic and stainless steel",
    ],
    sizes: "0.5 ml (fixed needle), also available in 1 ml, 3 ml, 5 ml",
    packing: "Individual blister pack, 100 pcs/box",
  },
  {
    id: 20,
    name: "Disposable Insulin Syringe 0.5ml",
    image: "/Disposable-Insulin-syringe-0.5m.jpg",
    description: "Used for subcutaneous administration of insulin\nPre-sterilized and single-use to prevent infection\nClear barrel with accurate graduation markings\nAttached fine needle for minimal pain\nLow dead space design to reduce insulin waste\nLength: 6–8 mm\nGauge: 29–31 G\nMaterial: medical-grade plastic and stainless steel",
    features: [
      "Specifically for subcutaneous insulin administration",
      "Pre-sterilized and single-use",
      "Ultra-fine needle (29–31G) for minimal pain",
      "Low dead space to minimize insulin waste",
      "Clear barrel with U-100 insulin markings",
      "Needle length: 6–8 mm",
      "Material: medical-grade plastic and stainless steel",
    ],
    sizes: "0.3 ml, 0.5 ml, 1 ml (U-100 markings)",
    packing: "Individual blister pack, 100 pcs/box",
  },
];
// --- End Product Data ---

export default function Products() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  // Prevent horizontal scroll when modal is open
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
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
                    className="object-fit group-hover:scale-110 transition-transform duration-500 rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-purple-900 text-lg font-bold line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal – unchanged */}
        {selected && (
          <>
            <div
              className="fixed inset-0 bg-purple-950/70 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />

            <div className="fixed inset-0 z-50 overflow-y-auto p-4">
              <div className="min-h-full flex items-center justify-center">
                <div
                  className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative ring-8 ring-purple-100"
                  onClick={(e) => e.stopPropagation()}
                >
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