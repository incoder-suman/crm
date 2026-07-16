import { Link } from "react-router-dom";
import banner from "../assets/wardrobe/banner.webp";
import ward1 from "../assets/wardrobe/ward1.webp";
import ward2 from "../assets/wardrobe/ward2.avif";
import ward3 from "../assets/wardrobe/ward3.avif";
import ward4 from "../assets/wardrobe/ward4.webp";
import ward5 from "../assets/wardrobe/ward5.webp";
import ward6 from "../assets/wardrobe/ward6.webp";
import SEO from "../components/SEO";

const CustomWardrobeDesignersInDelhi = () => {
  return (
    <>
      <SEO
        title="Custom Wardrobe Designers in Delhi | Luxury Wardrobes"
        description="Dfurniture offers custom wardrobe designers in Delhi for luxury modular wardrobes, smart storage solutions, and modern home interiors."
        keywords="Custom Wardrobe Designers in Delhi, Luxury Wardrobes in Delhi, Best Custom Wardrobe Designers in Delhi, Modular Wardrobe Designers in Delhi, Premium Wardrobe Interiors in Delhi, Sliding Wardrobe Design in Delhi, Bespoke Luxury Wardrobes Delhi, Wardrobe Interior Designers in Delhi"
        url="https://www.dfurniture.in/custom-wardrobe-designers-in-delhi/"
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
          Design Your Perfect Wardrobe with Delhi’s Trusted Custom Wardrobe Experts
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Transform your bedroom with beautifully crafted wardrobes designed around your lifestyle. Dfurniture brings premium <strong>custom wardrobe design services in Delhi</strong>, offering elegant luxury modular wardrobes, smart storage planning, and modern finishes tailored to match your home interiors. Whether you are designing a new home or upgrading your existing space, our wardrobes are created to combine style, organization, and everyday functionality.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">We understand that every home in Delhi has unique space requirements and interior preferences. That’s why our wardrobes are fully customized - from size and layout to finishes, internal accessories, and storage planning. Our expert designers create wardrobes that not only enhance your bedroom aesthetics but also maximize storage with intelligent design solutions.</p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              src: ward1,
              alt: "Custom Wardrobe Designers in Delhi",
              title: "Minimalist 5-Door Swing Wardrobe",
            },
            { src: ward2, alt: "Luxury Wardrobes in Delhi", title: "Modern 4-Door Swing Wardrobe" },
            {
              src: ward3,
              alt: "Best Custom Wardrobe Designers in Delhi",
              title: "Contemporary L-Shaped Wardrobe",
            },
            { src: ward4, alt: "Modular Wardrobe Designers in Delhi", title: "Modern 3-Door Swing Wardrobe" },
            {
              src: ward5,
              alt: "Premium Wardrobe Interiors in Delhi",
              title: "Classic Frame Design Wardrobe",
            },
            { src: ward6, alt: "Bespoke Luxury Wardrobes Delhi", title: "Modern Swing Wardrobe" },
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

      {/* seo section */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-heading mt-3 font-extrabold text-[25px] sm:text-[35px] lg:text-[40px] leading-tight">
          Luxury Modular Wardrobes Designed for Modern Delhi Homes
        </h2>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          <strong>Dfurniture</strong>, we specialize in creating wardrobes that complement premium home interiors while making storage effortless and organized. Our modular wardrobe designs are carefully planned to use every inch efficiently while maintaining a refined and sophisticated appearance.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Choose from a wide range of wardrobe styles including:
        </h4>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>
            Sliding wardrobes with sleek modern finishes
          </li>
          <li>
            Hinged wardrobes with premium accessories
          </li>
          <li>
           Walk-in wardrobe designs for luxury interiors
          </li>
          <li>
            Floor-to-ceiling modular wardrobes
          </li>
          <li>
            Glass finish wardrobes with contemporary styling
          </li>
          <li>
            Wooden texture wardrobes for warm elegant interiors
          </li>
        </ul>

        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Every wardrobe is designed with high-quality materials, durable fittings, and premium finishes to ensure long-lasting performance with a timeless look.
        </p>
        <h2 className="text-heading mt-3 font-extrabold text-[25px] sm:text-[35px] lg:text-[40px] leading-tight">
          Smart Storage Solutions for Better Living
        </h2>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          A wardrobe should do more than look beautiful - it should make everyday life easier. Our smart wardrobe storage solutions are designed to keep your essentials organized while creating a clutter-free and comfortable bedroom.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
         Our storage options include:
        </h4>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Soft-close drawers and organizers</li>
          <li>Adjustable shelves and loft storage</li>
          <li>Dedicated shoe storage sections</li>
          <li>Accessories organizers</li>
          <li>Hanging units for clothing</li>
          <li>Hidden compartments and utility storage</li>
          <li>Space-saving wardrobe layouts for compact rooms</li>
        </ul>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          With thoughtful planning and elegant detailing, Dfurniture creates wardrobes that bring together luxury and functionality.
        </p>

        <h4 className="text-heading mt-7 font-extrabold text-[18px] sm:text-[22px] lg:text-[25px] leading-tight">
          Why Choose Dfurniture for Custom Wardrobes in Delhi?
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          <strong>Dfurniture</strong> is known for delivering stylish and practical wardrobe solutions that are personalized for every client.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          What makes us different?
        </h4>
        <ul className="mt-3 list-decimal pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>
            Customized wardrobe designs based on your room layout
          </li>
          <li>
            Luxury modular wardrobe solutions with premium finishes
          </li>
          <li>
             Smart storage planning for maximum space utilization
          </li>
          <li>
            Contemporary and classic wardrobe design options
          </li>
          <li>
             Durable materials with quality craftsmanship
          </li>
          <li>
             Professional design consultation and expert installation
          </li>
          <li>
            End-to-end support from concept to completionContemporary and classic wardrobe design options
          </li>
        </ul>
        <h4 className="text-heading mt-7 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          Upgrade Your Home with Dfurniture
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Create a wardrobe that reflects your style and fits your everyday needs perfectly. From elegant luxury wardrobes to smart modular storage solutions, Dfurniture helps homeowners across Delhi design beautiful and functional wardrobe interiors with complete customization.
        </p>
       <a href=" https://www.dfurniture.in/contact-us/" className="font-bold text-primary" target="_blank">Book Your Custom Wardrobe Design Consultation Today </a> 
      </section>
    </>
  );
};

export default CustomWardrobeDesignersInDelhi;
