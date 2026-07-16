import { Link } from "react-router-dom";
import banner from "../assets/bathroom/banner.webp";
import bath1 from "../assets/bathroom/bath1.avif";
import bath2 from "../assets/bathroom/bath2.avif";
import bath3 from "../assets/bathroom/bath3.webp";
import bath4 from "../assets/bathroom/bath4.avif";
import bath5 from "../assets/bathroom/bath5.avif";
import bath6 from "../assets/bathroom/bath6.webp";
import SEO from "../components/SEO";

const Bathroom = () => {
  return (
    <>
      <SEO
        title="Bathroom Interior Design Ideas | Modern & Luxury Bathrooms"
        description="Explore modern bathroom interior design ideas for small, luxury & contemporary spaces. Smart layouts, space-saving solutions & stylish bathroom upgrades."
        url="https://www.dfurniture.in/bathroom/ "
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
        <h1 className="text-heading mt-3 font-extrabold text-[28px] sm:text-[36px] lg:text-[45px] leading-tight">
         Modern Bathroom Interior Design Ideas for Luxury Spaces
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Your living room is more than just a space – it is the centre of your
          home, where conversations begin, memories are created, and everyday
          moments are shared. Dfurniture, we design living room interiors that
          combine elegance, comfort, and functionality to create spaces that
          feel truly personal and timeless.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          With a deep understanding of modern lifestyles and evolving interior
          trends, we craft living rooms that are visually refined, intelligently
          planned, and designed to enhance the way you live. Whether you prefer
          a contemporary aesthetic, a classic ambience, or a luxurious statement
          interior, our design solutions are tailored to reflect your taste and
          complement your space perfectly.
        </p>
      </section>

      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: bath1, alt: "bath1", title: "Scandinavian Bathroom Tiles" },
            { src: bath2, alt: "bath2", title: "Minimalist Bathroom" },
            { src: bath3, alt: "bath3", title: "Contemporary Bathroom" },
            { src: bath4, alt: "bath4", title: "Modern Bathroom" },
            { src: bath5, alt: "bath5", title: "Contemporary Bathroom" },
            { src: bath6, alt: "bath6", title: "Contemporary Bathroom" },
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

      {/* seo purpose */}
       <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Bathroom Interior Design Services | Modern, Luxury & Small Bathroom Solutions
        </h2>
        <p className="text-black/80 mt-1">
          Create a bathroom that is not only functional but also beautifully designed to match your lifestyle. Our bathroom interior design solutions focus on smart space planning, premium aesthetics, and long-lasting practicality-perfect for homes of all sizes and styles.
        </p>
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Transform Your Bathroom into a Functional, Stylish Space
        </h2>
        <p className="text-black/80 mt-1">
          A well-designed bathroom improves everyday comfort while enhancing the overall value of your home. We design spaces that balance efficiency, elegance, and ease of use—whether it’s a compact apartment bathroom or a luxury master suite.
        </p>
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Small Bathroom Design Solutions
        </h2>
        <p className="text-black/80 mt-1">
          Maximize every inch of space with intelligent design strategies tailored for compact bathrooms.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Space-saving wall-mounted fixtures and vanities
          </li>
          <li className="text-black/80">
            Glass shower partitions for a clean, open look 
          </li>
          <li className="text-black/80">
            Light and neutral colour palettes for a spacious feel 
          </li>
          <li className="text-black/80">
            Smart storage solutions to reduce clutter 
          </li>
          <li className="text-black/80">
            Mirror design that enhances depth and brightness 
          </li>
        </ul>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Why Choose Our Bathroom Design Services?
        </h2>
        <p className="text-black/80 mt-1">
          We focus on delivering designs that combine creativity with functionality, ensuring every bathroom is practical, durable, and visually refined.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Customized designs based on your space and needs 
          </li>
          <li className="text-black/80">
            Modern, space-efficient planning approach 
          </li>
          <li className="text-black/80">
            Focus on premium finishes and materials 
          </li>
          <li className="text-black/80">
            Practical layouts designed for daily comfort 
          </li>
        </ul>
         <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Build a Bathroom That Reflects Your Lifestyle
        </h2>
        <p className="text-black/80 mt-1">
          Whether you want a compact space-saving bathroom, a modern contemporary design, or a luxury spa-inspired retreat, we create interiors that elevate your everyday living experience.
        </p>
      </section>
    </>
  );
};

export default Bathroom;
