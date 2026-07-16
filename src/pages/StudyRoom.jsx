import { Link } from "react-router-dom";
import banner from "../assets/study-room/banner.webp";
import study1 from "../assets/study-room/study1.webp";
import study2 from "../assets/study-room/study2.webp";
import study3 from "../assets/study-room/study3.avif";
import study4 from "../assets/study-room/study4.webp";
import study5 from "../assets/study-room/study5.webp";
import study6 from "../assets/study-room/study6.webp";
import SEO from "../components/SEO";

const StudyRoom = () => {
  return (
    <>
    <SEO
        title="Study Room Interior Designer in Delhi | Custom Design  "
        description="Hire DFurniture for study room interior designer in Delhi. We create custom, space-saving study rooms with smart storage, ergonomic layouts & modern style."
        keywords="Study Room Interior Designer, Study Room Interior Designer in Delhi"
        url="https://www.dfurniture.in/study-room-interior-designer-in-delhi/"
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
          Study Room Interior Designers in Delhi I Modern & Functional Designs
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Dfurniture is a leading name for{" "}
          <strong>Best Study Room Interior Designers in Delhi,</strong> offering
          innovative and functional solutions to create the perfect learning and
          working environment. We specialize in designing modern study rooms that
          combine comfort, productivity, and aesthetics.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Whether you need a compact study corner, a kids' study room, or a
          professional home office setup, our expert designers craft customized
          solutions that match your space and lifestyle.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: study1, alt: "study1", title: "Modern Study Room" },
            { src: study2, alt: "study2", title: "Contemporary Study Room" },
            { src: study3, alt: "study3", title: "Mid-Century Modern Study Room" },
            { src: study4, alt: "study4", title: "Modern Wood And Aqua Green Study Room" },
            { src: study5, alt: "study5", title: "Mid-Century Modern Study Room" },
            { src: study6, alt: "study6", title: "Modern White Study Room Design" },
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
        <h2 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] leading-tight">
          Why Choose Dfurniture for Study Room Interior Design in Delhi?
        </h2>
        <p className="text-black/80 mt-1 text-sm sm:text-base">
          Dfurniture is a leading provider of{" "}
          <strong>study room interior design in Delhi,</strong> offering
          customized and functional{" "}
          <strong>kids study room interior design solutions</strong> tailored to
          your space and lifestyle.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          We design smart, ergonomic, and stylish study spaces that improve
          focus, productivity, and comfort.
        </p>
      </section>

      {/* seo section 2 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] leading-tight">
          Key Features:
        </h2>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          {[
            "Customized study room interior design solutions",
            "Expert kids study room planning",
            "Smart space optimization",
            "High-quality materials and durable finishes",
            "3D visualization before execution",
            "End-to-end turnkey interior services",
            "On-time project delivery",
          ].map((item) => (
            <li key={item} className="text-black/80 text-sm sm:text-base">
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          With innovative design and precise execution, Dfurniture transforms
          ordinary rooms into modern, inspiring study environments. We ensure
          transparency, quality, and design excellence, making us a trusted
          choice for study room interiors in Delhi.
        </p>
      </section>
    </>
  );
};

export default StudyRoom;
