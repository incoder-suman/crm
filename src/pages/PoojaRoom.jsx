import { Link } from "react-router-dom";
import banner from "../assets/pooja-room/banner.webp";
import pooja1 from "../assets/pooja-room/pooja1.avif";
import pooja2 from "../assets/pooja-room/pooja2.webp";
import pooja3 from "../assets/pooja-room/pooja3.avif";
import pooja4 from "../assets/pooja-room/pooja4.webp";
import pooja5 from "../assets/pooja-room/pooja5.webp";
import pooja6 from "../assets/pooja-room/pooja6.avif";

const PoojaRoom = () => {
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
          Pooja Room Designs
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Trending TV cabinet designs from Livspace that can be customised to
          your style, preference and TV sizes. TV units are essential piece of
          furniture that serves as a focal point for your room while giving you
          amazing storage.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: pooja1, alt: "pooja1", title: "Wall Mounted Modern Pooja" },
            { src: pooja2, alt: "pooja2", title: "Floor Mounted Mid Century Pooja" },
            { src: pooja3, alt: "pooja3", title: "Brazilian Walnut Indian Traditional Pooja" },
            { src: pooja4, alt: "pooja4", title: "Modern Wall-Mounted Pooja" },
            { src: pooja5, alt: "pooja5", title: "Contemporary Pooja Unit Design" },
            { src: pooja6, alt: "pooja6", title: "Frosty White Modern Floor Mounted Pooja" },
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
    </>
  );
};

export default PoojaRoom;
