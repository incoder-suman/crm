import { Link } from "react-router-dom";
import banner from "../assets/pooja-room/banner.webp";
import pooja1 from "../assets/pooja-room/pooja1.avif";
import pooja2 from "../assets/pooja-room/pooja2.webp";
import pooja3 from "../assets/pooja-room/pooja3.avif";
import pooja4 from "../assets/pooja-room/pooja4.webp";
import pooja5 from "../assets/pooja-room/pooja5.webp";
import pooja6 from "../assets/pooja-room/pooja6.avif";
import SEO from "../components/SEO";

const PoojaRoomInteriorDesignerInDelhi = () => {
  return (
    <>
        <SEO
        title="Pooja Room Interior Designer in Delhi | Custom Mandir Design"
        description="Dfurniture offers Custom Pooja Room Interior Design in Delhi with elegant mandir designs, space-saving layouts & premium wooden finishes."
        keywords="pooja room interior designer in Delhi, custom mandir design Delhi, pooja room interiors Delhi, mandir interior designer Delhi, home mandir design Delhi, pooja unit designer Delhi, custom pooja room design Delhi, wooden mandir design Delhi, modern mandir design Delhi, pooja room furniture Delhi, luxury mandir interiors Delhi, designer pooja room in Delhi NCR, home temple interior design Delhi"
        url="https://www.dfurniture.in/pooja-room-interior-designer-in-delhi/"
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
          Elegant Pooja Room Interior Designer in Delhi for Every Home
        </h1>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Bring peace, positivity, and timeless elegance into your home with DFurniture, your trusted <strong>Pooja Room Interior Designer in Delhi</strong> and Custom Mandir Design expert. We specialize in creating beautifully designed pooja rooms that combine traditional craftsmanship with modern interiors. Our goal is to create a spiritual space that feels peaceful, functional, and perfectly connected with your home decor.
        </p>
        <p className="text-black/80 mt-5 text-sm sm:text-base">
          Whether you need a compact mandir for an apartment or a dedicated pooja room for a villa or independent home, our experienced team designs every detail with care. We create pooja spaces that feel welcoming, beautifully organized, and designed for everyday spiritual living.
        </p>
      </section>

      {/* card grid */}
      <section className="pt-8 pb-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: pooja1, alt: "pooja room interior designer in Delhi", title: "Wall Mounted Modern Pooja" },
            {
              src: pooja2,
              alt: "pooja room interiors Delhi",
              title: "Floor Mounted Mid Century Pooja",
            },
            {
              src: pooja3,
              alt: "mandir interior designer Delhi",
              title: "Brazilian Walnut Indian Traditional Pooja",
            },
            { src: pooja4, alt: "home mandir design Delhi", title: "Modern Wall-Mounted Pooja" },
            {
              src: pooja5,
              alt: "pooja room furniture Delhi",
              title: "Contemporary Pooja Unit Design",
            },
            {
              src: pooja6,
              alt: "luxury mandir interiors Delhi",
              title: "Frosty White Modern Floor Mounted Pooja",
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
        
        {/* seo purpose */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Custom Mandir Design Crafted for Your Space
        </h2>
        <p className="text-black/80 mt-5">
          Every home has different space requirements, and every family has unique spiritual preferences. At DFurniture, our <strong>custom mandir design in Delhi</strong> is planned according to your home layout, style, and daily worship needs. We design wall-mounted mandirs, corner pooja units, wooden temple cabinets, and complete pooja room interiors with personalized detailing.
        </p>
        <p className="text-black/80 mt-2">
          Our custom mandir solutions include premium finishes, carved woodwork, marble elements, decorative back panels, storage drawers, and elegant lighting. Every design is created to offer both beauty and practical usability while maintaining a calm and sacred atmosphere.
        </p>
        <h2 className="text-primary mt-6 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Premium Materials & Beautiful Finishing
        </h2>
        <p className="text-black/80 mt-5">
          A pooja room should feel warm, peaceful, and long-lasting. That is why our team carefully selects premium-quality materials and elegant finishing options to match your interiors. From traditional wooden mandirs to modern pooja units with contemporary styling, we focus on durability, craftsmanship, and fine detailing.
        </p>
        <h2 className="text-primary mt-6 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Why Choose DFurniture for Pooja Room Interiors in Delhi?
        </h2>
        <p className="text-black/80 mt-5">
          DFurniture is known for delivering personalized interiors with smart planning and quality craftsmanship. As a reliable <strong>Pooja Room Interior in Delhi</strong>, we understand how important a spiritual space is in every home.
        </p>
        <p className="text-black/80 mt-5">
          Why homeowners choose us:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Customized pooja room designs
          </li>
          <li className="text-black/80">
            Premium material quality
          </li>
          <li className="text-black/80">
            Traditional and modern mandir concepts
          </li>
          <li className="text-black/80">
            Space-saving solutions for apartments
          </li>
          <li className="text-black/80">
            Expert craftsmanship and detailing
          </li>
          <li className="text-black/80">
            End-to-end interior consultation in Delhi
          </li>
        </ul>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Design a Peaceful Spiritual Space with DFurniture
        </h2>
        <p className="text-black/80 mt-1">
         A beautifully designed pooja room creates the perfect balance of devotion, comfort, and style inside your home. Whether you are planning interiors for a new home or upgrading your current space, DFurniture helps you create a personalized mandir that reflects your style and spiritual values.
        </p>
         <p className="text-black/80 mt-1">
        Create a divine corner with a trusted Pooja Room Interior Designer in Delhi, Custom Mandir Design specialist. <a href="https://www.dfurniture.in/contact-us/" target="_blank" className="text-primary"><strong>Contact DFurniture</strong></a> today for a free consultation and bring your dream pooja room to life.
        </p>
      </section>
    </>
  );
};

export default PoojaRoomInteriorDesignerInDelhi;
