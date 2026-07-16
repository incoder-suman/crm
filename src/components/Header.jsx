import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact-us" },
];

const productLinks = [
  { label: "Modular Kitchen", to: "/modular-kitchen" },
  { label: "Master Bedroom", to: "/architectural-master-bedroom-interiors-in-delhi" },
  { label: "Living Room", to: "/living-room" },
  { label: "Bathroom", to: "/bathroom" },
  { label: "Wardrobe", to: "/wardrobe" },
  {
    label: "Study Room Interior Designer",
    to: "/study-room-interior-designer",
  },
  {
    label: "Kids Bedroom Designer Company",
    to: "/kids-bedroom-designer-company",
  },
  { label: "Modular TV Unit", to: "/modular-tv-unit" },
  { label: "Pooja Room", to: "/pooja-room" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <div className="bg-white relative z-50">
      {/* Main bar */}
      <div className="flex justify-between px-4 sm:px-10 lg:px-20 py-2 items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-28 sm:w-36" />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 items-center justify-center">
            <Link
              to="/"
              className="uppercase font-semibold text-[15px] text-black transition-all duration-300 hover:text-primary tracking-wide"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="uppercase font-semibold text-[15px] text-black transition-all duration-300 hover:text-primary tracking-wide"
            >
              About Us
            </Link>
            <li className="relative group list-none">
              <button className="uppercase font-semibold text-[15px] text-black transition-all duration-300 hover:text-primary flex gap-2 items-center tracking-wide">
                Products
                <FaAngleDown className="text-[12px] transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute left-1/2 -translate-x-1/4 top-[45px] w-[230px] bg-white border-t-[3px] rounded-lg border-primary shadow-[0_15px_40px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                <ul className="py-4">
                  {productLinks.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block px-6 py-3 text-sm font-semibold text-primary hover:text-black"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <Link
              to="/blog"
              className="uppercase font-semibold text-[15px] text-black transition-all duration-300 hover:text-primary tracking-wide"
            >
              Blog
            </Link>
            <Link
              to="/contact-us"
              className="uppercase font-semibold text-[15px] text-black transition-all duration-300 hover:text-primary tracking-wide"
            >
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919718613986"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-[1px] border-[#40322633] py-3 px-6 rounded-full group relative">
              <p className="text-black font-semibold text-[15px] transition-all duration-300 group-hover:text-primary tracking-wide">
                Book Consultation
              </p>
              <ArrowRight
                className="absolute top-1 -right-5 w-10 h-10 p-2 text-white transition-all duration-300 bg-primary rounded-full -rotate-45 group-hover:rotate-0 group-hover:translate-x-2"
                color="white"
              />
            </div>
          </a>
        </div>

        {/* Hamburger (mobile/tablet) */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={closeAll}
                className="block py-3 uppercase font-semibold text-[14px] text-black hover:text-primary tracking-wide border-b border-gray-100"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Products accordion */}
          <li>
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className="w-full flex justify-between items-center py-3 uppercase font-semibold text-[14px] text-black hover:text-primary tracking-wide border-b border-gray-100"
            >
              Products
              <FaAngleDown
                className={`text-[12px] transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                productsOpen ? "max-h-[400px]" : "max-h-0"
              }`}
            >
              <ul className="pl-4 pb-2">
                {productLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={closeAll}
                      className="block py-2 text-sm font-semibold text-primary hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={closeAll}
                className="block py-3 uppercase font-semibold text-[14px] text-black hover:text-primary tracking-wide border-b border-gray-100"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* CTA in mobile menu */}
          <li className="pt-4 pb-2">
            <a
              href="https://wa.me/919718613986"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="inline-block border-[1px] border-[#40322633] py-3 px-6 rounded-full"
            >
              <p className="text-black font-semibold text-[14px] tracking-wide">
                Book Consultation
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
