import { Link } from "react-router-dom";
import banner from "../assets/wardrobe/banner.webp";
import ward1 from "../assets/wardrobe/ward1.webp";
import ward2 from "../assets/wardrobe/ward2.avif";
import ward3 from "../assets/wardrobe/ward3.avif";
import ward4 from "../assets/wardrobe/ward4.webp";
import ward5 from "../assets/wardrobe/ward5.webp";
import ward6 from "../assets/wardrobe/ward6.webp";
import SEO from "../components/SEO";

const TopCustomWardrobeDesignerInGurgaon = () => {
  return (
    <>
      <SEO
        title="Top Custom Wardrobe Designer in Gurgaon | Dfurniture Luxury Interiors"
        description="DFurniture is a top custom wardrobe designer in Gurgaon offering luxury modular wardrobes, smart storage solutions, and premium modern interior designs"
        keywords="Top Custom Wardrobe Designer in Gurgaon, Custom Wardrobe Designer in Gurgaon, Best Custom Wardrobe Designer in Gurgaon, Luxury Modular Wardrobe Designer in Gurgaon, Wardrobe Designer in Gurgaon, Modular Wardrobe Designer in Gurgaon, Designer Wardrobes in Gurgaon"
        url="https://www.dfurniture.in/ward-robe/top-custom-wardrobe-designer-in-gurgaon/"
      />
      {/* banner */}
      <section
        className="flex flex-col items-center justify-center h-[250px] sm:h-[350px] md:h-[450px] text-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></section>
      {/* category links */}
      <section className="py-5 px-4 sm:px-10 lg:px-20">
        <div className="flex overflow-x-auto gap-3 sm:gap-5 p-1 scrollbar-hide">
          {[
            { to: "/modular-kitchen", label: "Kitchen" },
            {
              to: "/architectural-master-bedroom-interiors-in-delhi",
              label: "Master Bedroom",
            },
            { to: "/living-room", label: "Living Room" },
            { to: "/bathroom", label: "Bathroom" },
            { to: "/wardrobe", label: "Wardrobe" },
            { to: "/study-room-interior-designer", label: "Study Room" },
            { to: "/kids-bedroom-designer-company", label: "Kid's" },
            { to: "/modular-tv-unit", label: "TV Unit" },
            { to: "/pooja-room", label: "Pooja Room" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} className="flex-shrink-0">
              <p className="py-[6px] px-5 bg-primary text-white font-semibold tracking-wide rounded-full whitespace-nowrap text-sm sm:text-base">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </section>
      {/* design catalogue */}
      <section className="px-4 sm:px-10 lg:px-20 text-center">
        <h1 className="text-heading mt-3 font-extrabold text-[24px] sm:text-[32px] lg:text-[45px] leading-tight">
          ToDfurniture – Top Custom Wardrobe Designer in Gurgaon for Premium
          Wardrobe Interiors
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Looking for a trusted{" "}
          <strong>Top Custom Wardrobe Designer in Gurgaon</strong>? Dfurniture
          creates beautifully customized wardrobe interiors designed to match
          your space, lifestyle, and storage needs. We specialize in premium
          wardrobe solutions for apartments, villas, luxury residences, and
          modern homes across Gurgaon. Our wardrobes are designed to improve
          bedroom organization while adding elegance, comfort, and functionality
          to your interiors.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Dfurniture, every wardrobe is designed with careful planning and
          premium craftsmanship. Whether you need a sliding wardrobe for a
          compact apartment in Gurgaon or a spacious walk-in wardrobe for a
          luxury home, we create customized storage solutions that maximize
          every inch of space while enhancing the beauty of your bedroom
          interiors.
        </p>
      </section>
      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              src: ward1,
              alt: "Top Custom Wardrobe Designer in Gurgaon",
              title: "Minimalist 5-Door Swing Wardrobe",
            },
            { src: ward2, alt: "Custom Wardrobe Designer in Gurgaon", title: "Modern 4-Door Swing Wardrobe" },
            {
              src: ward3,
              alt: "Best Custom Wardrobe Designer in Gurgaon",
              title: "Contemporary L-Shaped Wardrobe",
            },
            { src: ward4, alt: "Luxury Modular Wardrobe Designer in Gurgaon", title: "Modern 3-Door Swing Wardrobe" },
            {
              src: ward5,
              alt: "Wardrobe Designer in Gurgaon",
              title: "Classic Frame Design Wardrobe",
            },
            { src: ward6, alt: "Modular Wardrobe Designer in Gurgaon", title: "Modern Swing Wardrobe" },
          ].map(({ src, alt, title }) => (
            <div
              key={alt}
              className="border-[1px] border-category rounded-lg p-3 group"
            >
              <div className="h-52 sm:h-56 md:h-60 overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] mt-2 text-heading font-semibold">
                {title}
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="bg-category py-2 sm:py-3 w-full text-xs sm:text-sm text-white rounded-full transition-all duration-300 hover:bg-[#BB9A65]">
                  <a href="https://wa.me/919818855471">
                    Book Free Consultation
                  </a>
                </button>
                <button className="border-[1px] border-black py-2 sm:py-3 w-full text-xs sm:text-sm text-black rounded-full transition-all duration-300 hover:bg-heading hover:text-white">
                  <a href="https://wa.me/919818855471">Get Quote</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* seo section */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[25px] sm:text-[35px] lg:text-[40px] leading-tight">
          Custom Wardrobe Designs in Gurgaon for Every Home
        </h2>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Every home in Gurgaon has unique storage and design requirements. As
          an experienced <strong>Custom Wardrobe Designer in Gurgaon</strong>,
          Dfurniture delivers wardrobe interiors tailored to your home layout
          and personal style. We create wardrobes that are practical, elegant,
          and built for everyday convenience.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Our wardrobe design solutions in Gurgaon include:
        </h4>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Sliding wardrobes for modern apartments</li>
          <li>Hinged wardrobes with custom storage</li>
          <li>Walk-in wardrobe interiors for premium homes</li>
          <li>Floor-to-ceiling wardrobes</li>
          <li>Bedroom wardrobes with loft storage</li>
          <li>Dressing units with wardrobe combinations</li>
          <li>Luxury wardrobes with glass and mirror finishes</li>
        </ul>

        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Each wardrobe is designed to create better organization while
          maintaining a stylish and seamless bedroom look.
        </p>
        <h2 className="text-heading mt-3 font-extrabold text-[18px] sm:text-[22px] lg:text-[25px] leading-tight">
          Smart Wardrobe Storage Solutions for Gurgaon Homes
        </h2>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Dfurniture designs wardrobes that bring together smart storage and
          elegant interiors. Our team carefully plans every wardrobe with
          functional sections for clothes, accessories, footwear, seasonal
          storage, and daily essentials.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Features include:
        </h4>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Premium laminate and textured finishes</li>
          <li>Soft-close drawers and shutters</li>
          <li>Custom shelves and hanging sections</li>
          <li>Built-in accessories organizers</li>
          <li>Space-saving internal storage</li>
          <li>Mirror wardrobe panels</li>
          <li>Modern luxury wardrobe finishes</li>
        </ul>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Our goal is to create wardrobes that feel organized, spacious, and
          perfectly suited for Gurgaon homes.
        </p>

        <h4 className="text-heading mt-7 font-extrabold text-[18px] sm:text-[22px] lg:text-[25px] leading-tight">
          Why Choose Dfurniture as Your Wardrobe Designer in Gurgaon?
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Dfurniture is trusted by homeowners across Gurgaon for personalized
          wardrobe interiors and quality craftsmanship. We focus on smart
          planning, premium materials, and detailed finishing to deliver
          wardrobes that are both practical and visually impressive.
        </p>
        <ul className="mt-3 list-decimal pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Fully customized wardrobe designs in Gurgaon</li>
          <li>Expert bedroom storage planning</li>
          <li>Premium materials and finishing</li>
          <li>Modern and luxury wardrobe interiors</li>
          <li>Space-saving wardrobe solutions</li>
          <li>Professional installation and project support</li>
          <li>Personalized design consultation across Gurgaon</li>
        </ul>
        <h4 className="text-heading mt-7 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          Book Your Custom Wardrobe Design in Gurgaon with Dfurniture
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          A beautifully designed wardrobe adds functionality and completes{" "}
          <a
            href="https://www.dfurniture.in/"
            className="text-primary font-semibold"
            target="_blank"
          >
            {" "}
            your bedroom interiors
          </a>{" "}
          with style. Whether you are designing a new home or upgrading your
          existing bedroom interiors, Dfurniture helps create wardrobes that
          combine elegance, storage, and everyday comfort
        </p>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Choose Dfurniture, the{" "}
          <strong>Top Custom Wardrobe Designer in Gurgaon</strong>, for
          personalized wardrobe interiors designed around your space and
          lifestyle.
          <a
            href="https://www.dfurniture.in/contact-us/"
            className="text-primary font-semibold"
            target="_blank"
          >
            Book your free consultation today and create your dream custom
            wardrobe in Gurgaon with Dfurniture.{" "}
          </a>
        </p>
      </section>
      =
    </>
  );
};

export default TopCustomWardrobeDesignerInGurgaon;
