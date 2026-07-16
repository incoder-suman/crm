import { Link } from "react-router-dom";
import banner from "../assets/modular-tv-unit/banner.webp";
import kids1 from "../assets/kids-bedroom/kids1.avif";
import kids2 from "../assets/kids-bedroom/kids2.webp";
import kids3 from "../assets/kids-bedroom/kids3.webp";
import kids4 from "../assets/kids-bedroom/kids4.avif";
import kids5 from "../assets/kids-bedroom/kids5.webp";
import kids6 from "../assets/kids-bedroom/kids6.avif";
import SEO from "../components/SEO";

const ModularTvUnit = () => {
  return (
    <>
      <SEO
        title="Custom TV Cabinet Designer in India | Premium Modular TV Unit"
        description="Design your living space with expert custom TV cabinet designers in India offering premium modular TV units and entertainment wall solutions. Get stylish, space-saving, and fully customised TV unit designs tailored to your home interiors, storage needs, and modern lifestyle."
        keywords="Custom TV Cabinet Designer in India"
        url="https://www.dfurniture.in/modular-tv-unit/"
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
            { to: "/architectural-master-bedroom-interiors-in-delhi", label: "Master Bedroom" },
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
        <h1 className="text-heading mt-3 font-extrabold text-[24px] sm:text-[32px] lg:text-[40px] leading-tight">
          Modular TV Unit Design Ideas | Custom TV Cabinet Designs in India
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Explore modern <strong>modular TV unit design ideas</strong> crafted
          for contemporary Indian homes. These custom TV cabinet designs are
          built to match your interior style, TV size, and storage needs while
          enhancing the overall look of your living room.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          A modular TV unit is more than just a TV stand—it is a functional
          entertainment wall that combines aesthetics, storage, and smart space
          utilisation.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: kids1, alt: "kids1", title: "Classic Grey TV Unit" },
            { src: kids2, alt: "kids2", title: "Modern Black TV Unit" },
            { src: kids3, alt: "kids3", title: "Tan, White, and Walnut Modern" },
            { src: kids4, alt: "kids4", title: "Modern TV Unit" },
            { src: kids5, alt: "kids5", title: "White Contemporary TV Unit" },
            { src: kids6, alt: "kids6", title: "Modern Wall-Mounted TV Unit" },
          ].map(({ src, alt, title }) => (
            <div key={alt} className="border-[1px] border-category rounded-lg p-3 group">
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
                  <a href="https://wa.me/919818855471">Book Free Consultation</a>
                </button>
                <button className="border-[1px] border-black py-2 sm:py-3 w-full text-xs sm:text-sm text-black rounded-full transition-all duration-300 hover:bg-heading hover:text-white">
                  <a href="https://wa.me/919818855471">Get Quote</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* seo section 1 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[20px] sm:text-[26px] lg:text-[30px] leading-tight">
          Trending Modular TV Unit Designs
        </h2>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          {[
            "Wall-mounted TV units with storage cabinets",
            "Floating TV unit designs for compact living rooms",
            "Full wall TV entertainment units with display shelves",
            "Minimalist TV panels with concealed wiring systems",
            "Wooden TV cabinets with premium veneer finishes",
            "High-gloss modular TV units for modern interiors",
            "TV units with drawers, shelves, and closed storage",
            "L-shaped and custom entertainment wall designs",
          ].map((item) => (
            <li key={item} className="text-black/80">
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* seo section 2 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[26px] lg:text-[30px] leading-tight">
          Custom TV Unit Design Solutions
        </h2>
        <p className="mt-2 text-sm sm:text-base">
          Our modular TV units are customised based on:
        </p>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          {[
            "TV screen size and viewing height",
            "Living room layout and wall space",
            "Storage requirements for devices and accessories",
            "Interior theme (modern, luxury, minimalist, classic)",
            "Material selection (laminate, acrylic, veneer, glass)",
            "Colour combinations and finish preferences",
          ].map((item) => (
            <li key={item} className="text-black/80">
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* seo section 3 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[26px] lg:text-[30px] leading-tight">
          Benefits of Modular TV Units
        </h2>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          {[
            "Space-saving designs for modern apartments and homes",
            "Smart storage with organised compartments",
            "Clean cable management for a clutter-free look",
            "Enhances living room aesthetics and focal point design",
            "Durable, long-lasting, and easy-to-maintain materials",
            "Fully customised as per customer requirements",
          ].map((item) => (
            <li key={item} className="text-black/80">
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
        <p className="text-black/80 mt-3 font-semibold text-sm sm:text-base">
          Custom TV Cabinet Designers in India
        </p>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          We specialise in{" "}
          <strong>Custom TV Cabinet Designer in India</strong> designing{" "}
          <strong>modular TV units and entertainment walls</strong> for homes
          across India, including apartments, villas, and luxury residences.
          Each design is planned to optimise space while maintaining a premium
          and modern interior appeal.
        </p>
      </section>
    </>
  );
};

export default ModularTvUnit;
