import { Link } from "react-router-dom";
import banner from "../assets/wardrobe/banner.webp";
import ward1 from "../assets/wardrobe/ward1.webp";
import ward2 from "../assets/wardrobe/ward2.avif";
import ward3 from "../assets/wardrobe/ward3.avif";
import ward4 from "../assets/wardrobe/ward4.webp";
import ward5 from "../assets/wardrobe/ward5.webp";
import ward6 from "../assets/wardrobe/ward6.webp";
import SEO from "../components/SEO";

const Wardrobe = () => {
  return (
    <>
      <SEO
        title="Custom Modular Wardrobe Solutions in Delhi"
        description="Discover smart wardrobe interior design ideas in Delhi. Get fully customised modular wardrobes with maximum storage, elegant design, and space optimisation tailored to your needs."
        url="https://www.dfurniture.in/wardrobe/"
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
        <h1 className="text-heading mt-3 font-extrabold text-[24px] sm:text-[32px] lg:text-[45px] leading-tight">
          Wardrobe Interior Design Ideas in Delhi | Custom Modular Wardrobe
          Solutions
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Modern wardrobe interior design in Delhi is all about maximizing
          space, improving organization, and creating a clean, functional
          bedroom layout. Our custom modular wardrobe solutions are designed to
          fit your space, storage needs, and interior style.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          We design wardrobes that are practical, durable, and visually
          refined—built for everyday use in Delhi homes where space optimization
          is essential.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: ward1, alt: "ward1", title: "Minimalist 5-Door Swing Wardrobe" },
            { src: ward2, alt: "ward2", title: "Modern 4-Door Swing Wardrobe" },
            { src: ward3, alt: "ward3", title: "Contemporary L-Shaped Wardrobe" },
            { src: ward4, alt: "ward4", title: "Modern 3-Door Swing Wardrobe" },
            { src: ward5, alt: "ward5", title: "Classic Frame Design Wardrobe" },
            { src: ward6, alt: "ward6", title: "Modern Swing Wardrobe" },
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

      {/* seo section */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          Wardrobe Interior Design Ideas We Offer
        </h2>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Sliding door wardrobes for compact rooms</li>
          <li>Hinged door modular wardrobes for easy access</li>
          <li>Floor-to-ceiling storage units for maximum space utilization</li>
          <li>Walk-in wardrobe interiors for premium homes</li>
          <li>Mirror and glass finish wardrobes for a modern look</li>
          <li>Customized drawer and compartment systems for organized storage</li>
        </ul>

        <h2 className="text-heading mt-5 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          Custom Modular Wardrobe Solutions in Delhi
        </h2>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Every wardrobe is designed based on:
        </p>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Room size and layout</li>
          <li>Storage requirements</li>
          <li>Material and finish preferences</li>
          <li>Lifestyle and usage patterns</li>
        </ul>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          We focus on creating modular interiors that make better use of
          available space while maintaining a clean and modern aesthetic.
        </p>

        <h2 className="text-heading mt-5 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          Why Choose Our Wardrobe Designs
        </h2>
        <ul className="mt-3 list-decimal pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Space-efficient modular planning</li>
          <li>Custom-built for Delhi homes and apartments</li>
          <li>High-quality materials and finishes</li>
          <li>Smart internal organization systems</li>
          <li>Clean, functional, and long-lasting designs</li>
        </ul>
      </section>
    </>
  );
};

export default Wardrobe;
