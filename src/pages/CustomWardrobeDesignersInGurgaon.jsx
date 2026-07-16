import { Link } from "react-router-dom";
import banner from "../assets/wardrobe/banner.webp";
import ward1 from "../assets/wardrobe/ward1.webp";
import ward2 from "../assets/wardrobe/ward2.avif";
import ward3 from "../assets/wardrobe/ward3.avif";
import ward4 from "../assets/wardrobe/ward4.webp";
import ward5 from "../assets/wardrobe/ward5.webp";
import ward6 from "../assets/wardrobe/ward6.webp";
import SEO from "../components/SEO";

const CustomWardrobeDesignersInGurgaon = () => {
  return (
    <>
      <SEO
        title="Custom Wardrobe Designer in Gurgaon I Luxury Modular Interiors"
        description="DFurniture offers expert custom wardrobe design in Gurgaon with luxury modular interiors, premium finishes, and smart space-saving storage solutions."
        keywords="Custom Wardrobe Designer in Gurgaon, Best Custom Wardrobe Designer in Gurgaon, Luxury Modular Wardrobe Designer Gurgaon, Modular Wardrobe Design Gurgaon, Wardrobe Interior Designer Gurgaon, Sliding Wardrobe Designer Gurgaon, Walk-in Wardrobe Designer Gurgaon, Bespoke Wardrobe Design Gurgaon, Premium Wardrobe Interiors Gurgaon"
        url="https://www.dfurniture.in/custom-wardrobe-designer-in-gurgaon/"
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
          Dfurniture – Premium Custom Wardrobe Designer in Gurgaon for Luxury Modular Interiors
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Create a refined and beautifully organized living space with Dfurniture, a trusted <stong>Custom Wardrobe Designer in Gurgaon</stong> and Luxury Modular Interiors in Gurgaon. We design and deliver premium custom wardrobes that combine elegant aesthetics, intelligent storage, and modern modular functionality for homes across Gurgaon. Our wardrobe interiors are thoughtfully planned to complement your bedroom layout while enhancing everyday convenience with seamless organization and premium finishes.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Dfurniture, we understand that a wardrobe is more than storage - it is an essential part of your bedroom interiors that defines comfort, functionality, and style. Our expert designers create fully customized wardrobe solutions based on your space, lifestyle, and design preferences. Whether you are furnishing a luxury apartment, a villa, or a modern residence in Gurgaon, we deliver wardrobes tailored to your interiors with a strong focus on quality craftsmanship and long-term usability.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              src: ward1,
              alt: "Custom Wardrobe Designer in Gurgaon",
              title: "Minimalist 5-Door Swing Wardrobe",
            },
            { src: ward2, alt: "Best Custom Wardrobe Designer in Gurgaon", title: "Modern 4-Door Swing Wardrobe" },
            {
              src: ward3,
              alt: "Luxury Modular Wardrobe Designer Gurgaon",
              title: "Contemporary L-Shaped Wardrobe",
            },
            { src: ward4, alt: "Modular Wardrobe Design Gurgaon", title: "Modern 3-Door Swing Wardrobe" },
            {
              src: ward5,
              alt: "Wardrobe Interior Designer Gurgaon",
              title: "Classic Frame Design Wardrobe",
            },
            { src: ward6, alt: "Walk-in Wardrobe Designer Gurgaon", title: "Modern Swing Wardrobe" },
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
          Luxury Modular Wardrobe Designs Tailored for Gurgaon Homes
        </h2>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
         As a leading <strong>Custom Wardrobe Designer in Gurgaon</strong>, Dfurniture creates wardrobe interiors that bring together sophisticated design and practical storage. Every wardrobe is carefully planned to maximize available space while maintaining a clean and elegant visual appeal. From compact modular wardrobes to premium walk-in <a href="https://www.dfurniture.in/wardrobe/" target="_blank"><strong>wardrobe interiors</strong> </a>, we offer tailored solutions for every bedroom style and requirement.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Our custom wardrobe solutions include:
        </h4>
        
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>
            Sliding wardrobe designs with premium finishes
          </li>
          <li>
            Hinged wardrobes with customized internal storage
          </li>
          <li>
            Luxury walk-in wardrobe interiors
          </li>
          <li>
            Floor-to-ceiling modular wardrobes
          </li>
          <li>
            Wardrobes with integrated dressing units
          </li>
          <li>
            Glass and mirror wardrobe panels
          </li>
          <li>
           Bedroom wardrobes with loft storage
          </li>
          <li>
           Bespoke wardrobe interiors for villas and premium residences
          </li>
        </ul>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
         Every wardrobe is designed with attention to detail, ensuring functionality, durability, and a polished luxury finish.
        </p>

        <h4 className="text-heading mt-7 font-extrabold text-[18px] sm:text-[22px] lg:text-[25px] leading-tight">
          Smart Storage Solutions with Premium Finishes
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          A well-designed wardrobe should deliver effortless storage and complement the overall aesthetics of your bedroom. Dfurniture combines thoughtful space planning with premium-quality materials to create wardrobes that feel elegant, organized, and highly functional.
        </p>
        <h4 className="text-heading mt-7 font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight">
          Our wardrobe interiors feature:
        </h4>
        <ul className="mt-3 list-disc pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>Premium laminates and textured finishes</li>
          <li>Soft-close drawers and shutters</li>
          <li>Customized shelving and hanging sections</li>
          <li>Internal storage for accessories and essentials</li>
          <li>Space-saving modular compartments</li>
          <li>Elegant designer handles and premium fittings</li>
          <li>Modern wardrobe layouts with maximum storage efficiencyxternal look that matches your bedroom décor</li>
        </ul>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Every detail is carefully selected to create wardrobes that offer everyday convenience while elevating the look of your interiors.
        </p>

        <h4 className="text-heading mt-7 font-extrabold text-[18px] sm:text-[22px] lg:text-[25px] leading-tight">
          How Does It Work?
        </h4>
         <p className="text-black/80 mt-5 text-sm sm:text-base">
         Dfurniture is known for delivering personalized modular interiors with exceptional attention to detail. Our experienced team works closely with homeowners across Gurgaon to create wardrobes that balance storage, design, and premium craftsmanship.
        </p>
        <ul className="mt-3 list-decimal pl-6 sm:pl-10 space-y-1 text-sm sm:text-base">
          <li>
            Trusted <strong>Custom Wardrobe Designer in Gurgaon</strong>
          </li>
          <li>
            Bespoke luxury modular wardrobe interiors          </li>
          <li>
            Premium materials and modern finishes
          </li>
          <li>
            Smart storage planning for every bedroom
          </li>
          <li>
            Tailored wardrobe designs for Gurgaon homes
          </li>
          <li>
            Expert installation and finishing
          </li>
          <li>End-to-end interior consultation and project execution</li>
        </ul>
        <h4 className="text-heading mt-7 font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight">
          Book Luxury Modular Wardrobe Interiors in Gurgaon with Dfurniture
        </h4>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          A beautifully designed wardrobe adds elegance, improves organization, and completes your bedroom interiors with a premium finish. Whether you are planning interiors for a new home or upgrading an existing bedroom, Dfurniture delivers customized wardrobe solutions designed around your lifestyle.
        </p>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          Choose Dfurniture, your trusted <strong>Custom Wardrobe Designer in Gurgaon, Luxury Modular Interiors,</strong> and create a wardrobe that reflects luxury, functionality, and timeless design.
        </p>
        <p className="text-black/80 mt-3 text-sm sm:text-base">
          <strong>Schedule your consultation with Dfurniture today and transform your Gurgaon home with premium custom wardrobe interiors.</strong>
        </p>
      </section>
    </>
  )
}

export default CustomWardrobeDesignersInGurgaon