// src/pages/Sitemap.jsx

import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Blog", path: "/blog" },
    ],
  },

  {
    title: "Modular Kitchen",
    links: [
      {
        name: "Modular Kitchen",
        path: "/modular-kitchen",
      },
      {
        name: "Modular Kitchen Manufacturer In Delhi",
        path: "/modular-kitchen-manufacturer-in-delhi",
      },
      {
        name: "Premium Modular Kitchen Interiors In Delhi",
        path: "/premium-modular-kitchen-interiors-in-delhi",
      },
    ],
  },

  {
    title: "Wardrobe Designs",
    links: [
      {
        name: "Wardrobe",
        path: "/wardrobe",
      },
      {
        name: "Custom Wardrobe Designers In Delhi",
        path: "/custom-wardrobe-designers-in-delhi",
      },
      {
        name: "Custom Wardrobe Designer In Gurgaon",
        path: "/custom-wardrobe-designer-in-gurgaon",
      },
      {
        name: "Top Custom Wardrobe Designer In Gurgaon",
        path: "/top-custom-wardrobe-designer-in-gurgaon",
      },
    ],
  },

  {
    title: "Interior Services",
    links: [
      {
        name: "Master Bedroom Interiors",
        path: "/architectural-master-bedroom-interiors-in-delhi",
      },
      {
        name: "Living Room",
        path: "/living-room",
      },
      {
        name: "Bathroom",
        path: "/bathroom",
      },
      {
        name: "Study Room Interior Designer",
        path: "/study-room-interior-designer",
      },
      {
        name: "Study Room Interior Designer In Delhi",
        path: "/study-room-interior-designer-in-delhi",
      },
      {
        name: "Kids Bedroom Designer Company",
        path: "/kids-bedroom-designer-company",
      },
      {
        name: "Kids Bedroom Designer Company In Delhi",
        path: "/kids-bedroom-designer-company-in-delhi",
      },
      {
        name: "Modular TV Unit",
        path: "/modular-tv-unit",
      },
      {
        name: "Pooja Room",
        path: "/pooja-room",
      },
      {
        name: "Pooja Room Interior Designer In Delhi",
        path: "/pooja-room-interior-designer-in-delhi",
      },
    ],
  },

  {
    title: "Blog Pages",
    links: [
      {
        name: "Modular Kitchen Manufacturer In Delhi",
        path: "/blog/modular-kitchen-manufacturer-in-delhi",
      },
      {
        name: "Custom Wardrobe Designer In Delhi",
        path: "/blog/custom-wardrobe-designer-in-delhi",
      },
      {
        name: "Home Interior Designing Company In India",
        path: "/blog/home-interior-designing-company-in-india",
      },
      {
        name: "Home Furniture Manufacturer In Delhi",
        path: "/blog/home-furniture-manufacturer-in-delhi",
      },
    ],
  },
];

const Sitemap = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Website Sitemap
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore all pages of DFurniture from one place for easy navigation
            and better browsing experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-7 border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 border-b border-[#c19a6b] pb-3">
                {section.title}
              </h2>

              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:text-[#c19a6b] transition-all duration-300 hover:pl-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;