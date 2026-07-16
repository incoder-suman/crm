import { Link } from "react-router-dom";
import banner from "../assets/modular-kitchen/banner.webp";
import mod1 from "../assets/modular-kitchen/mod1.webp";
import mod2 from "../assets/modular-kitchen/mod2.webp";
import mod3 from "../assets/modular-kitchen/mod3.webp";
import mod4 from "../assets/modular-kitchen/mod4.webp";
import mod5 from "../assets/modular-kitchen/mod5.webp";
import mod6 from "../assets/modular-kitchen/mod6.webp";
import SEO from "../components/SEO";

const kitchenItems = [
  { src: mod1, alt: "Modular Kitchen Manufacturer in Delhi", title: "Modern Straight Kitchen" },
  { src: mod2, alt: "Best Modular Kitchen Manufacturer Delhi", title: "Minimal L-Shaped Kitchen" },
  { src: mod3, alt: "Modern Modular Kitchen Manufacturer Delhi", title: "Modern Parallel Kitchen" },
  { src: mod4, alt: "Modular Kitchen Interiors Delhi", title: "Modern U-Shaped Kitchen" },
  { src: mod5, alt: "Kitchen Furniture Manufacturer Delhi", title: "Minimal L-Shaped Kitchen" },
  { src: mod6, alt: "Customized Kitchen Cabinets Delhi", title: "Modern U-Shaped Kitchen" },
];

const PremiumModularKitchenInteriorsInDelhi = () => {
  return (
    <>
      <SEO
        title="Premium Modular Kitchen Interiors in Delhi, India "
        description="Get premium modular kitchen interiors in Delhi, India with luxury designs, smart storage, modern layouts, and high-quality finishes for your home."
        keywords="Modular Kitchen Manufacturer in Delhi, Best Modular Kitchen Manufacturer Delhi, Modular Kitchen Delhi, Custom Modular Kitchen Delhi, Luxury Modular Kitchen Delhi, Modern Modular Kitchen Manufacturer Delhi, Modular Kitchen Designers Delhi, Modular Kitchen Interiors Delhi, Kitchen Furniture Manufacturer Delhi, Customized Kitchen Cabinets Delhi"
        url="https://www.dfurniture.in/premium-modular-kitchen-interiors-in-delhi/"
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

      {/* design catalogue heading */}
      <section className="px-4 sm:px-10 lg:px-20 text-center">
        <h1 className="text-primary mt-3 font-extrabold text-[28px] sm:text-[36px] lg:text-[45px] leading-tight">
          Premium Modular Kitchen Interiors in Delhi
        </h1>
        <p className="text-black/80 mt-5">
          A kitchen is the heart of a home, where design, functionality, and
          lifestyle converge. Dfurniture, we specialize in{" "}
          <strong>premium modular kitchen interiors in Delhi</strong>, creating
          spaces that combine modern elegance, ergonomic design, and lasting
          quality.
        </p>
        <p className="text-black/80 mt-5">
          Whether you live in a compact apartment or a spacious residence, our
          custom modular kitchens are meticulously designed to optimize space,
          enhance usability, and elevate the aesthetic appeal of your home.
        </p>
      </section>

      {/* catalogue grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {kitchenItems.map((item) => (
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

      {/* SEO sections */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Why Choose Dfurniture for Modular Kitchens?
        </h2>
        <p className="text-black/80 mt-3">
          Dfurniture, we believe a kitchen should be{" "}
          <strong>both beautiful and highly functional.</strong> Our modular
          kitchens are distinguished by:
        </p>
        <ul className="mt-5 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>
              Intelligent Space Planning: Efficient layouts that maximize space
              while maintaining seamless workflow.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Customized Storage Solutions: Pull-out drawers, corner cabinets,
              and specialized organizers for a clutter-free environment.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Premium Quality Materials: Termite-resistant, durable, and
              easy-to-maintain surfaces for long-term reliability.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Elegant Finishes: A wide selection of glossy laminates, matte
              textures, and natural wood finishes to match any interior style.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Low Maintenance Design: Engineered for effortless cleaning and
              sustained performance.
            </strong>
          </li>
        </ul>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Our Modular Kitchen Design Solutions
        </h2>
        <p className="text-black/80 mt-3">
          We offer a variety of <strong>modular kitchen layouts</strong>{" "}
          tailored to different home sizes and lifestyles:
        </p>
        <ul className="mt-5 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>
              Modern Straight Kitchen- A streamlined, minimalist design ideal
              for compact spaces, keeping all essentials within easy reach.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Minimal L-Shaped Kitchen- Optimizes corner spaces while ensuring
              smooth movement — suitable for both apartments and larger homes.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Modern Parallel Kitchen- Features dual counters to separate
              cooking and cleaning zones, perfect for medium to large kitchens.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Modern U-Shaped Kitchen – A spacious layout with ample countertop
              space and intelligent storage solutions.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Minimal L-Shaped Kitchen- A space-efficient solution for
              apartments, providing modern aesthetics without compromising
              functionality.
            </strong>
          </li>
          <li className="text-black/80">
            <strong>
              Modern U-Shaped Kitchen- An ergonomic, premium layout featuring
              luxury finishes and abundant storage, ideal for high-end
              residences.
            </strong>
          </li>
        </ul>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Our Process – From Concept to Completion
        </h2>
        <p className="text-black/80 mt-3">
          Dfurniture ensures a{" "}
          <strong>seamless and professional experience</strong> from
          consultation to installation:
        </p>
        <ul className="mt-5 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>Consultation:</strong>Understanding your lifestyle, cooking
            habits, and space requirements.
          </li>
          <li className="text-black/80">
            <strong>Design Development:</strong>Crafting 3D layouts and
            personalized kitchen concepts.
          </li>
          <li className="text-black/80">
            <strong>Material Selection:</strong>Expert guidance on finishes,
            fittings, and premium accessories.
          </li>
          <li className="text-black/80">
            <strong>Precision Installation:</strong>Skilled craftsmen ensure
            flawless execution and attention to detail.
          </li>
          <li className="text-black/80">
            <strong>Post-Installation Support:</strong> Reliable maintenance and
            service support for long-term satisfaction.
          </li>
        </ul>

        <h2 className="text-primary mt-7 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Transform Your Kitchen with Dfurniture
        </h2>
        <p className="text-black/80 mt-3">
          Experience the{" "}
          <strong>
            perfect blend of luxury, functionality, and design excellence
          </strong>{" "}
          with <strong>Dfurniture modular kitchens in Delhi.</strong> Whether
          renovating an existing kitchen or designing a new one, we deliver
          spaces that are <strong>elegant, practical, and enduring.</strong>
        </p>
        <p className="text-black/80 mt-1">
          <strong>Contact Dfurniture today</strong> to schedule a complimentary
          design consultation and create a kitchen that truly reflects your
          lifestyle.
        </p>
      </section>
    </>
  );
};

export default PremiumModularKitchenInteriorsInDelhi;
