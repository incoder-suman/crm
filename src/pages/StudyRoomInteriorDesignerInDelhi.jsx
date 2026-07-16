import { Link } from "react-router-dom";
import banner from "../assets/study-room/banner.webp";
import study1 from "../assets/study-room/study1.webp";
import study2 from "../assets/study-room/study2.webp";
import study3 from "../assets/study-room/study3.avif";
import study4 from "../assets/study-room/study4.webp";
import study5 from "../assets/study-room/study5.webp";
import study6 from "../assets/study-room/study6.webp";
import SEO from "../components/SEO";

const StudyRoomInteriorDesignerInDelhi = () => {
  return (
    <>
      <SEO
        title="Best Study Room Interior Designer in Delhi, India "
        description="Hire DFurniture for Study Room Interior Designer in Delhi. We create custom, space-saving study rooms with smart storage, ergonomic layouts & modern style."
        keywords="Best Study Room Interior Designer in Delhi, Study Room Interior Designer in Delhi,  Study Room Design in Delhi, Home Study Room Interior Designer Delhi, Custom Study Room Furniture Delhi, Modern Study Room Interiors Delhi, Study Room Designer in Delhi, Luxury Study Room Interior Design Delhi, Study Table and Storage Design Delhi"
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
        <h1 className="text-heading mt-3 font-extrabold text-[24px] sm:text-[32px] lg:text-[40px] leading-tight">
          Best Study Room Interior Designer in Delhi for Smart & Functional
          Spaces
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          A thoughtfully designed study room creates the ideal environment for
          focus, productivity, and creativity. <strong>Dfurniture</strong>, we
          offer <strong>Best Study Room Interior Design in Delhi</strong>,
          delivering customized interiors that blend intelligent space planning,
          modern aesthetics, and highly functional furniture solutions. Whether
          you need a dedicated home study, a student-friendly learning space, or
          a sophisticated work-from-home setup, our team designs study rooms
          that are practical, elegant, and tailored to your lifestyle.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          As a trusted <strong>Study Room Interior Designer in Delhi</strong>,
          Dfurniture creates customized interiors that maximize every corner of
          your home with ergonomic furniture, seamless storage, and premium
          finishes. From compact study areas in apartments to spacious home
          office interiors, we design environments that encourage productivity
          while complementing your overall home décor.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              src: study1,
              alt: "Best Study Room Interior Designer in Delhi",
              title: "Modern Study Room",
            },
            {
              src: study2,
              alt: "Study Room Interior Designer in Delhi",
              title: "Contemporary Study Room",
            },
            {
              src: study3,
              alt: "Study Room Design in Delhi",
              title: "Mid-Century Modern Study Room",
            },
            {
              src: study4,
              alt: "Home Study Room Interior Designer Delhi",
              title: "Modern Wood And Aqua Green Study Room",
            },
            {
              src: study5,
              alt: "Custom Study Room Furniture Delhi",
              title: "Mid-Century Modern Study Room",
            },
            {
              src: study6,
              alt: "Modern Study Room Interiors Delhi",
              title: "Modern White Study Room Design",
            },
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

      {/* seo section 1 */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] leading-tight">
          Why Choose Dfurniture as Your Study Room Interior Designer in Delhi?
        </h2>
        <h4 className="text-primary mt-5 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Customized Study Room Interiors Designed Around Your Lifestyle
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Every study space should feel personal and purposeful. Dfurniture, we
          create bespoke study room interiors in Delhi based on your work
          habits, storage requirements, and design preferences. Our custom
          designs ensure every element feels practical and visually balanced.
        </p>
        <h4 className="text-primary mt-5 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Customized Study Smart Space Planning with Functional Storage
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          A productive study room begins with smart organization. We design
          custom study tables, wall-mounted bookshelves, drawer units, and
          storage cabinets that help maintain a clean, clutter-free, and
          efficient workspace.
        </p>
        <h4 className="text-primary mt-5 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Customized Modern Furniture with Premium Finishes
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Dfurniture combines high-quality materials with elegant craftsmanship
          to create study room interiors that feel modern, durable, and
          sophisticated. Choose from contemporary finishes, warm wood textures,
          sleek laminates, and customized furniture detailing.
        </p>
        <h4 className="text-primary mt-5 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Customized Ergonomic Design for Better Productivity
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Comfort matters in every workspace. Our study room designs focus on
          ergonomic layouts, proper lighting placement, comfortable furniture
          proportions, and easy movement to create an inspiring and efficient
          study environment.
        </p>
        <h4 className="text-primary mt-5 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Customized Complete Study Room Interior Solutions in Delhi
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          From concept planning and custom furniture manufacturing to
          installation and finishing, Dfurniture offers complete study room
          interior solutions in Delhi with attention to detail, premium quality,
          and timely project execution.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Our Study Room Interior Design Services in Delhi
        </h4>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Custom study room interior design</li>
          <li>Study tables with storage</li>
          <li>Home office and workspace interiors</li>
          <li>Built-in bookshelves and wall shelving</li>
          <li>Kids’ study room interiors</li>
          <li>Modern work-from-home study spaces</li>
          <li>Space-saving study furniture solutions</li>
          <li>Premium lighting and décor styling</li>
          <li>Custom cabinetry and storage units</li>
        </ul>
        <h4  className="text-primary mt-5 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">Customized Create a Productive & Stylish Study Room with Dfurniture</h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Transform your study area into a refined and functional space with <strong>Dfurniture</strong>, your trusted <strong>Study Room Interior Designer in Delhi.</strong> We design customized study rooms that combine smart storage, premium furniture, and elegant interiors to help you work, study, and create with complete comfort.
        </p>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Looking for a professional Study Room Interior Designer in Delhi? Connect with Dfurniture today for customized study room interiors designed with functionality, style, and long-term comfort in mind.
        </p>
      </section>
    </>
  );
};

export default StudyRoomInteriorDesignerInDelhi;
