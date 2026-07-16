import { FaFacebook } from "react-icons/fa6";
import footerlogo from "../assets/footer logo.png";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { BiEnvelopeOpen } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="pt-[50px] pb-[30px] px-6 sm:px-10 lg:px-[50px] bg-[#403226]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
          {/* Logo */}
          <div className="flex flex-col justify-center items-center sm:col-span-2 lg:col-span-1">
            <img src={footerlogo} alt="footer logo" className="w-[60%] sm:w-[70%] lg:w-[80%]" />
            <div className="flex items-center justify-center gap-2 mt-5">
              <a href="" className="bg-[#3B558D] p-3 rounded-full">
                <FaFacebook className="text-lg text-white" />
              </a>
              <a href="" className="bg-[#292726] p-3 rounded-full">
                <BsInstagram className="text-lg text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-[25px] font-bold">Quick Links</p>
            <ul className="mt-4">
              <li className="text-white font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-white text-[25px] font-bold">Products</p>
            <ul className="mt-4">
              <li className="text-white font-semibold">
                <Link to="/modular-kitchen">Modular Kitchen</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/architectural-master-bedroom-interiors-in-delhi">Master Bedroom</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/living-room">Living Room</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/bathroom">Bathroom</Link>
              </li>
              <li className="text-white font-semibold pt-3">
                <Link to="/wardrobe">Wardrobe</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-white text-[25px] font-bold">Locations</p>
            <ul className="mt-4">
              <li className="text-white font-semibold flex gap-2 items-center">
                <MapPin className="p-2 bg-primary rounded-full text-white w-8 h-8 min-w-8" />
                K, 280, DSIIDC Industrial Area, Sector 3, Bawana, Delhi, 110039
              </li>
              <li className="text-white font-semibold flex gap-2 items-center mt-2">
                <FaPhoneAlt className="p-2 bg-primary rounded-full text-white w-8 h-8 min-w-8" />
                +91 9718613986
              </li>
              <li className="text-white font-semibold flex gap-2 items-center mt-2">
                <BiEnvelopeOpen className="p-2 bg-primary rounded-full text-white w-8 h-8 min-w-8" />
                info@dfurniture.in
              </li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.976652049501!2d77.05275180947696!3d28.779955975482764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d073505588be3%3A0x39014341a48d6b66!2sDHOMZ%20FURNITURE%20LLP!5e0!3m2!1sen!2sin!4v1779523394257!5m2!1sen!2sin"
              loading="lazy"
              width="100%"
              height="150"
              className="mt-5 rounded-sm"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-[#403226F2] p-3 text-center">
        <p className="text-white font-medium">
          Copyright © 2026 DHOMZ FURNITURE LLP | Powered by{" "}
          <a href="https://www.cybertricksmedia.com/" target="_blank">
            Bharat Bizmart
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
