import { Link } from "react-router-dom";
import banner from "../assets/living-room/banner.webp";
import living1 from "../assets/living-room/living1.webp";
import living2 from "../assets/living-room/living2.webp";
import living3 from "../assets/living-room/living3.avif";
import living4 from "../assets/living-room/living4.avif";
import living5 from "../assets/living-room/living5.avif";
import living6 from "../assets/living-room/living6.avif";
import SEO from "../components/SEO";

const livingItems = [
  { src: living1, alt: "living1", title: "Classic Living Room" },
  { src: living2, alt: "living2", title: "Traditional Living Room" },
  { src: living3, alt: "living3", title: "Contemporary Living Room" },
  { src: living4, alt: "living4", title: "Modern Living Room" },
  { src: living5, alt: "living5", title: "Modern Living Room" },
  { src: living6, alt: "living6", title: "Stylish Contemporary Living Room" },
];

const LivingRoom = () => {
  return (
    <>
      <SEO
        title="Premium Furniture Solutions for Contemporary Residential & Commercial Interiors"
        description=" Dfurniture delivers premium-quality furniture solutions designed for modern residential and commercial interiors. Our collections combine refined aesthetics, functional design, and durable craftsmanship to create sophisticated living and working environments. "
        keywords="Living Room Interior Designs, Premium Living Room Interior Designs"
        url="https://www.dfurniture.in/living-room/"
      />

      {/* banner */}
      <section
        className="flex flex-col items-center justify-center h-[250px] sm:h-[350px] lg:h-[450px] text-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></section>

      {/* category link */}
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

      {/* design catalogue heading */}
      <section className="px-4 sm:px-10 lg:px-20 text-center">
        <h1 className="text-heading mt-3 font-extrabold text-[28px] sm:text-[36px] lg:text-[45px] leading-tight">
          Living Room Interior Designs That Redefine Modern Living
        </h1>
        <p className="text-black/80 mt-5">
          Your living room is more than just a space – it is the centre of your
          home, where conversations begin, memories are created, and everyday
          moments are shared. Dfurniture, we design living room interiors that
          combine elegance, comfort, and functionality to create spaces that
          feel truly personal and timeless.
        </p>
        <p className="text-black/80 mt-5">
          With a deep understanding of modern lifestyles and evolving interior
          trends, we craft living rooms that are visually refined, intelligently
          planned, and designed to enhance the way you live. Whether you prefer
          a contemporary aesthetic, a classic ambience, or a luxurious statement
          interior, our design solutions are tailored to reflect your taste and
          complement your space perfectly.
        </p>
      </section>

      {/* catalogue grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {livingItems.map((item) => (
            <div
              key={item.alt}
              className="border-[1px] border-category rounded-lg p-3 group"
            >
              <div className="h-60 overflow-hidden rounded-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[22px] mt-2 text-heading font-semibold">
                {item.title}
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="bg-category py-3 w-full text-sm text-white rounded-full transition-all duration-300 hover:bg-[#BB9A65]">
                  <a href="https://wa.me/919818855471">Book Free Consultation</a>
                </button>
                <button className="border-[1px] border-black py-3 w-full text-sm text-black rounded-full transition-all duration-300 hover:bg-heading hover:text-white">
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

export default LivingRoom;
