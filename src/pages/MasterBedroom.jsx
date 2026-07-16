import { Link } from "react-router-dom";
import banner from "../assets/master-bedroom/banner.webp";
import master1 from "../assets/master-bedroom/master1.webp";
import master2 from "../assets/master-bedroom/master2.webp";
import master3 from "../assets/master-bedroom/master3.webp";
import master4 from "../assets/master-bedroom/master4.webp";
import master5 from "../assets/master-bedroom/master5.webp";
import master6 from "../assets/master-bedroom/master6.webp";
import SEO from "../components/SEO";

const bedroomItems = [
  { src: master1, alt: "master1", title: "Modern Master Bedroom" },
  { src: master2, alt: "master2", title: "Contemporary Master Bedroom" },
  { src: master3, alt: "master3", title: "Elegant Modern Master Bedroom" },
  { src: master4, alt: "master4", title: "Modern Master Bedroom" },
  { src: master5, alt: "master5", title: "Contemporary Master Bedroom" },
  { src: master6, alt: "master6", title: "Elegant Modern Master Bedroom" },
];

const MasterBedroom = () => {
  return (
    <>
    <SEO
        title="Architectural Master Bedroom Interiors in Delhi I Design Solutions"
        description="Transform your bedroom with Dfurniture’s Architectural master bedroom interiors in Delhi. Elegant design, customized furniture & expert interiors. Get started today."
        url="https://www.dfurniture.in/architectural-master-bedroom-interiors-in-delhi/"
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
        <h1 className="text-heading mt-3 font-extrabold text-[28px] sm:text-[35px] lg:text-[40px] leading-tight">
          Architectural Master Bedroom Interiors in Delhi Designed for Comfort & Style
        </h1>
        <h3 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[25px] lg:text-[30px] leading-tight">
          Where Luxury Meets Comfort and Everyday Functionality
        </h3>
        <p className="text-black/80 mt-5">
          Your master bedroom is more than just a room-it is your private retreat where comfort meets style. We specialize in designing elegant and functional <strong>master bedroom interiors in Delhi</strong>, tailored to reflect your personality and lifestyle.
        </p>
         <p className="text-black/80 mt-5">
          From modern minimalist spaces to luxury royal suites, we create bedrooms that feel calm, organized, and beautifully designed.
        </p>
        <h3 className="text-heading mt-3 font-extrabold text-[20px] sm:text-[25px] lg:text-[30px] leading-tight">
          About Our Interior Design Services
        </h3>
        <p className="text-black/80 mt-5">
          We are a professional interior design service specializing in master bedroom transformations. Our focus is on combining aesthetics with practicality to deliver spaces that not only look stunning but also enhance your everyday living experience.
        </p>
         <p className="text-black/80 mt-5">
          Whether you are renovating your home or designing a new apartment, we bring creative solutions that maximize space, improve lighting, and elevate comfort.
        </p>
      </section>

      {/* catalogue grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bedroomItems.map((item) => (
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
                  <a href="https://wa.me/919818855471">
                    Book Free Consultation
                  </a>
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

export default MasterBedroom;
