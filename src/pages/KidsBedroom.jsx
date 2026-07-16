import { Link } from "react-router-dom";
import banner from "../assets/kids-bedroom/banner.webp";
import kids1 from "../assets/kids-bedroom/kids1.avif";
import kids2 from "../assets/kids-bedroom/kids2.webp";
import kids3 from "../assets/kids-bedroom/kids3.webp";
import kids4 from "../assets/kids-bedroom/kids4.avif";
import kids5 from "../assets/kids-bedroom/kids5.webp";
import kids6 from "../assets/kids-bedroom/kids6.avif";

const KidsBedroom = () => {
  return (
    <>
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
          Best Kids Bedroom Designer Company in Delhi | Custom Kids Room
          Interior Designers
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Dfurniture is a top-rated{" "}
          <strong>Best Kids Bedroom Designer Company in Delhi,</strong>{" "}
          specializing in{" "}
          <strong>
            custom kids bedroom interiors, kids room design, and modern
            children's bedroom furniture solutions.
          </strong>{" "}
          We create beautifully designed, functional, and safe spaces that
          perfectly balance creativity, comfort, and practicality for your
          child.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: kids1, alt: "kids1", title: "Scandinavian Kids Bedroom" },
            { src: kids2, alt: "kids2", title: "Modern Kids Bedroom" },
            { src: kids3, alt: "kids3", title: "Contemporary Kids Bedroom" },
            { src: kids4, alt: "kids4", title: "Modern Kids Bedroom" },
            { src: kids5, alt: "kids5", title: "Modern Kids Bedroom" },
            { src: kids6, alt: "kids6", title: "Apple Tree Theme Modern Kids Bedroom" },
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
        <h2 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[22px] lg:text-[25px] leading-tight">
          Professional Kids Bedroom Interior Designers in Delhi
        </h2>
        <p className="text-black/80 mt-1 text-sm sm:text-base">
          As experienced{" "}
          <strong>kids bedroom interior designers in Delhi,</strong> we focus on
          delivering fully customized interior design solutions that transform
          ordinary rooms into smart, playful, and inspiring environments. Our
          designs are tailored for all age groups—toddlers, kids, and teenagers.
        </p>
      </section>

      {/* seo section 2 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[26px] lg:text-[30px] leading-tight">
          Our Expertise in Kids Room Design Includes:
        </h2>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          {[
            "Modern kids bedroom interior design in Delhi",
            "Customized kids study room and learning space design",
            "Space-saving kids bedroom furniture solutions",
            "Luxury and budget-friendly kids room interiors",
            "Themed kids bedroom design (cartoon, minimal, educational, creative themes)",
            "Smart storage beds, wardrobes, study tables & shelving units",
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
          Why Choose Us for Kids Bedroom Design in Delhi?
        </h2>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          {[
            "Expert kids interior designers in Delhi NCR",
            "Fully customized and space-efficient designs",
            "High-quality, safe, and child-friendly materials",
            "Creative and functional room layouts",
            "On-time project delivery and professional execution",
            "Affordable pricing for premium kids bedroom interiors",
          ].map((item) => (
            <li key={item} className="text-black/80">
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* seo section 4 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[26px] lg:text-[30px] leading-tight">
          Transform Your Child's Room into a Smart Learning & Play Space
        </h2>
        <p className="text-black/80 mt-1 text-sm sm:text-base">
          We design <strong>modern kids bedrooms in Delhi</strong> that encourage
          creativity, learning, and comfort. Whether you want a{" "}
          <strong>
            stylish kids bedroom makeover, modular kids furniture, or a complete
            room interior design,
          </strong>{" "}
          we deliver end-to-end solutions tailored to your needs.
        </p>
      </section>
    </>
  );
};

export default KidsBedroom;
