import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCaretRight, BiHome } from "react-icons/bi";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";

import aboutHero from "../assets/about/hero.jpg";
import aboutStory from "../assets/about/about-story.webp";
import att1 from "../assets/home/att1.png";
import att2 from "../assets/home/att2.png";

import kitchen from "../assets/about/kitchen.svg";
import wardrobe from "../assets/about/wardrobe.svg";
import beds from "../assets/about/beds.svg";
import study from "../assets/about/study.svg";
import iconCustom from "../assets/about/engineer-worker.svg";
import iconRange from "../assets/about/compass-draw.svg";
import iconQuality from "../assets/about/tools-wrench.svg";
import iconInnovative from "../assets/about/axis-three.svg";
import iconService from "../assets/about/user.svg";
import iconTrust from "../assets/about/thumbs-up.svg";
import shape from "../assets/about/shape-bottom.webp";
import { ArrowRight, Home } from "lucide-react";
import { HiHome } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import SEO from "../components/SEO";

const features = [
  {
    icon: iconCustom,
    title: "Customized Furniture Solutions | Tailor-Made Furniture Design",
    description:
      "Tailor-made furniture designs crafted to match your home's style, space, and requirements.",
  },
  {
    icon: iconRange,
    title:
      "Wide Range of Furniture Products | Living, Bedroom, Dining & Office",
    description:
      "Explore living room, bedroom, dining, and home office furniture, all crafted with precision and quality.",
  },
  {
    icon: iconQuality,
    title: "Quality & Durability | Premium Craftsmanship Furniture",
    description:
      "Premium materials and expert craftsmanship ensure durable, long-lasting furniture built for everyday use.",
  },
  {
    icon: iconInnovative,
    title: "Innovative Furniture Designs | Modern & Functional Style",
    description:
      "Modern, innovative furniture designs that balance aesthetics, functionality, and everyday practicality.",
  },
  {
    icon: iconService,
    title: "Customer-Centric Service | End-to-End Furniture Support",
    description:
      "End-to-end support from design consultation through delivery and installation for a seamless experience.",
  },
  {
    icon: iconTrust,
    title:
      "Trusted Expertise | 15+ Years Furniture Manufacturing Experience in Delhi",
    description:
      "Over 15 years of experience as a leading furniture manufacturer in Delhi, delivering reliable quality and craftsmanship.",
  },
];

const faqs = [
  {
    q: "What are custom furniture solutions?",
    a: "Custom furniture solutions are made-to-order designs created to match your space, style, and functional needs perfectly. They help you get furniture that fits your home instead of adjusting your space for ready-made pieces.",
  },
  {
    q: "Can I choose materials, colors, and finishes?",
    a: "Yes, you can select from a wide range of premium materials, laminates, fabrics, colors, and finishes to match your interior style.",
  },
  {
    q: "Does Dfurniture provide custom furniture services?",
    a: "Yes, Dfurniture specializes in custom furniture solutions across India for homes, offices, and commercial interiors.",
  },
  {
    q: "What types of furniture can be customized?",
    a: "You can customize sofas, beds, wardrobes, dining sets, office furniture, modular kitchens, storage units, and more based on your requirements.",
  },
  {
    q: "How does the custom furniture process work?",
    a: "The process usually includes consultation, design planning, material selection, manufacturing, quality checks, and final installation at your location.",
  },
  {
    q: "Why choose custom furniture in India?",
    a: "Custom furniture in India offers better space utilization, personalized designs, improved comfort, and long-lasting quality compared to mass-produced furniture.",
  },
  {
    q: "Is custom furniture expensive in India?",
    a: "Not always. Custom furniture can be budget-friendly because it is designed according to your exact needs, reducing unnecessary costs and wastage.",
  },
  {
    q: "How long does it take to deliver custom furniture?",
    a: "Delivery time depends on design complexity and material selection, usually ranging from 1 to 4 weeks.",
  },
  {
    q: "Does Dfurniture offer delivery and installation?",
    a: "Yes, Dfurniture provides complete end-to-end services including safe delivery and professional installation.",
  },
  {
    q: "Why is custom furniture a better investment?",
    a: "Custom furniture offers better durability, perfect fit, unique design, and long-term value, making it a smart investment for your home or office.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Custom Furniture Solutions in India | Smart Interior Design"
        description="DFurniture delivers Smart Interior Design & Custom Furniture Solutions in India. Create modern, elegant & functional spaces tailored to your lifestyle."
        keywords="Best Home Interior Design Company India, Smart Interior Design India, Customized Furniture Solutions India, Luxury Home Interiors India, Modern Furniture Solutions India, Residential & Commercial Interior Designers India, Space Saving Furniture India, Modular Interior Design India, Turnkey Interior Design Company India, Premium Furniture & Interior Solutions India"
        url="https://www.dfurniture.in/about-us/ "
      />
      {/* Page Banner */}
      <section
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="mx-5 rounded-3xl px-12 h-[500px] flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h2 className="text-[55px] text-white font-extrabold">About Us</h2>
          <div className="flex gap-4 items-center">
            <Link to="/" className="flex gap-2 text-white">
              <FaHome className="text-white w-5 h-5" /> <p>D Furniture</p>
            </Link>
            <p>
              <FaAngleRight className="text-white" />
            </p>
            <p className="text-white">About Us</p>
          </div>
        </div>
      </section>

      {/* Hero / Intro */}
      <section className="py-10 sm:py-14 lg:py-20 px-5 sm:px-10 lg:px-24">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img
              src={aboutStory}
              alt="Custom Furniture Solutions in India"
              className="w-full rounded-xl object-cover h-[500px]"
            />
          </div>

          <div>
            <p className="text-primary font-semibold flex items-center text-sm  uppercase tracking-wide">
              <span className="w-2 h-4 rounded-t-full rounded-l-full rounded-r-none bg-primary mr-1"></span>{" "}
              Since 2010
            </p>

            <h1 className="text-heading font-extrabold text-3xl sm:text-4xl lg:text-[35px] leading-tight mt-4">
              Smart Interior Design & Custom Furniture Solutions in India
            </h1>

            <p className="text-secondary mt-5 text-sm sm:text-base leading-relaxed">
              Dfurniture is a leading interior design and{" "}
              <strong>Custom Furniture Solutions in India</strong>, specializing
              in high-quality, affordable, and tailor-made furniture solutions
              since 2010. With over 15 years of experience in the furniture and
              interior industry, we deliver innovative, space-saving, and modern
              furniture designs that enhance both residential and commercial
              spaces.
            </p>

            <p className="text-secondary mt-4 text-sm sm:text-base leading-relaxed">
              We offer complete end-to-end services including modular furniture
              design,{" "}
              <a href="https://www.dfurniture.in/" target="_blank">
               <strong className="text-primary">Home Interior Solutions in India</strong> 
              </a>
              office furniture, and fully customized furniture manufacturing.
              Our expert team combines advanced design technology, skilled
              craftsmanship, and premium materials to create durable,
              functional, and aesthetically refined furniture that perfectly
              aligns with your space, style, and requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {/* Kitchen */}
              <div className="group flex items-center gap-5 border border-[#40322626] rounded-full py-1 px-1 cursor-pointer transition-all duration-300 hover:border-primary">
                <div className="w-16 h-16 rounded-full bg-[#F3F7FA] flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                  <img
                    src={kitchen}
                    alt="Kitchen"
                    className="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h4 className="text-[18px] font-semibold text-heading transition-all duration-300 group-hover:text-primary">
                  Kitchen
                </h4>
              </div>

              {/* Wardrobes */}
              <div className="group flex items-center gap-5 border border-[#40322626] rounded-full py-1 px-1 cursor-pointer transition-all duration-300 hover:border-primary">
                <div className="w-16 h-16 rounded-full bg-[#F3F7FA] flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                  <img
                    src={wardrobe}
                    alt="wardrobe"
                    className="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h4 className="text-[18px] font-semibold text-heading transition-all duration-300 group-hover:text-primary">
                  Wardrobes
                </h4>
              </div>

              {/* Beds */}
              <div className="group flex items-center gap-5 border border-[#40322626] rounded-full py-1 px-1 cursor-pointer transition-all duration-300 hover:border-primary">
                <div className="w-16 h-16 rounded-full bg-[#F3F7FA] flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                  <img
                    src={beds}
                    alt="bed"
                    className="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h4 className="text-[18px] font-semibold text-heading transition-all duration-300 group-hover:text-primary">
                  Beds
                </h4>
              </div>

              {/* Study Table */}
              <div className="group flex items-center gap-5 border border-[#40322626] rounded-full py-1 px-1 cursor-pointer transition-all duration-300 hover:border-primary">
                <div className="w-16 h-16 rounded-full bg-[#F3F7FA] flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                  <img
                    src={study}
                    alt="study"
                    className="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h4 className="text-[18px] font-semibold text-heading transition-all duration-300 group-hover:text-primary">
                  Study Table
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dfurniture */}
      <section className="pt-3 pb-8 lg:pb-[50px] px-5 lg:px-[70px]">
        <div>
          <div className="text-center">
            <p className="text-primary font-semibold flex items-center justify-center text-sm uppercase tracking-wide">
              <span className="w-2 h-4 rounded-t-full rounded-l-full rounded-r-none bg-primary mr-1"></span>
              Steps
            </p>

            <h3 className="text-heading text-3xl sm:text-4xl lg:text-[48px] font-extrabold mt-3">
              Why Choose Dfurniture?
            </h3>

            <p className="text-secondary mt-5 text-sm sm:text-base leading-relaxed">
              Dfurniture, we are committed to delivering stylish, functional,
              and affordable furniture designed to enhance modern living spaces.
              Whether you are furnishing a new home or upgrading your existing
              interiors, we provide thoughtfully designed solutions that fit
              your space, lifestyle, and budget.
            </p>

            <p className="text-secondary mt-4 text-sm sm:text-base leading-relaxed">
              Our focus is on combining comfort, durability, and contemporary
              design – helping you create interiors that feel both practical and
              personal.
            </p>
          </div>

          {/* Feature cards */}
          <section className="pt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {features.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group relative overflow-visible rounded-[28px] bg-[#F3F7FA] p-10 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {/* Corner Shape */}
                    <div
                      className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-white z-[2]"
                      style={{
                        WebkitMaskImage: `url(${shape})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "bottom right",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${shape})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "bottom right",
                        maskSize: "contain",
                      }}
                    />

                    {/* Soft Layer */}
                    <div
                      className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-white/40 z-[1]"
                      style={{
                        WebkitMaskImage: `url(${shape})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "bottom right",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${shape})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "bottom right",
                        maskSize: "contain",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:bg-[#BB9A65]">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>

                      <h3 className="mb-5 text-[22px] font-semibold leading-[1.3] text-[#3d2f25]">
                        {item.title}
                      </h3>

                      <div className="relative mb-5 h-px overflow-hidden bg-[#d6d6d6]">
                        <span className="absolute left-0 top-0 h-full w-0 bg-[#BB9A65] transition-all duration-500 group-hover:w-full"></span>
                      </div>

                      <p className="text-[15px] leading-[1.7] text-[#6f6f6f]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-5 sm:px-10 lg:px-24">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center">
            <h3 className="text-heading text-3xl sm:text-4xl lg:text-[48px] font-extrabold mt-3">
              Frequently Asked Questions (FAQs)
            </h3>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="border border-[#E8DCDC]">
              {faqs.slice(0, 5).map((item, i) => {
                const isOpen = openIndex === i;

                return (
                  <div key={i}>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex justify-between items-center text-left px-[30px] py-[30px]"
                    >
                      <h4 className="font-bold text-[18px] text-black pr-4">
                        {item.q}
                      </h4>

                      <span className="text-[38px] font-bold leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4">
                          <p className="text-[18px] leading-[1.9] text-[#666]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="border border-[#E8DCDC]">
              {faqs.slice(5, 10).map((item, idx) => {
                const realIndex = idx + 5;
                const isOpen = openIndex === realIndex;

                return (
                  <div key={realIndex}>
                    <button
                      onClick={() => toggle(realIndex)}
                      className="w-full flex justify-between items-center text-left px-[30px] py-[30px]"
                    >
                      <h4 className="font-bold text-[18px] text-black pr-4">
                        {item.q}
                      </h4>

                      <span className="text-[38px] font-bold leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4">
                          <p className="text-[18px] leading-[1.9] text-[#666]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
