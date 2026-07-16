import { Link } from "react-router-dom";
import banner from "../assets/modular-kitchen/banner.webp";
import mod1 from "../assets/modular-kitchen/mod1.webp";
import mod2 from "../assets/modular-kitchen/mod2.webp";
import mod3 from "../assets/modular-kitchen/mod3.webp";
import mod4 from "../assets/modular-kitchen/mod4.webp";
import mod5 from "../assets/modular-kitchen/mod5.webp";
import mod6 from "../assets/modular-kitchen/mod6.webp";
import SEO from "../components/SEO";
import ProductFAQ from "../components/ProductFAQ";

const kitchenItems = [
  {
    src: mod1,
    alt: "mod1",
    title: "Modern Straight Kitchen",
    description:
      "A clean, practical, and space-efficient single-wall layout suited for smaller flats and studio apartments where space is limited and a minimal design is preferred.",
  },
  {
    src: mod2,
    alt: "mod2",
    title: "Minimal L-Shaped Kitchen",
    description:
      "Best suited for apartments and medium-sized homes. The L-shaped layout provides smooth movement, efficient use of corner space, and generous storage.",
  },
  {
    src: mod3,
    alt: "mod3",
    title: "Modern Parallel Kitchen",
    description:
      "Ideal for long and narrow kitchens in compact homes. Two rows of cabinets on facing walls keep everything within easy reach and make cooking faster and more efficient.",
  },
  {
    src: mod4,
    alt: "mod4",
    title: "Modern U-Shaped Kitchen",
    description:
      "Designed for larger kitchens and families who cook daily. This layout offers maximum countertop space, extensive storage, and separate zones for cooking, washing, and preparation.",
  },
  {
    src: mod5,
    alt: "mod5",
    title: "Minimal L-Shaped Kitchen",
    description:
      "A versatile layout that adapts to different spaces and styles — combining minimal design with smart storage to create a kitchen that is both functional and elegant.",
  },
  {
    src: mod6,
    alt: "mod6",
    title: "Modern U-Shaped Kitchen",
    description:
      "The most efficient layout for large families. Covers three walls with cabinets and countertop — providing maximum workspace, extensive storage, and a highly organized cooking environment.",
  },
];

const kitchenFaqs = [
  {
    question: "Which is the best Modular Kitchen Manufacturer in Delhi?",
    answer:
      "Dfurniture is a trusted Modular Kitchen Manufacturer in Delhi with 15+ years of experience. We offer customized designs, quality materials, in-house manufacturing, and professional installation across Delhi NCR.",
  },
  {
    question: "How much does a modular kitchen cost in Delhi?",
    answer:
      "The cost depends on the kitchen size, layout, materials, and finishes. After a free site visit, we provide a detailed quotation with transparent pricing and no hidden charges.",
  },
  {
    question: "Do you provide modular kitchen services across Delhi NCR?",
    answer:
      "Yes. We serve Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, and other NCR locations with complete modular kitchen design, manufacturing, and installation services.",
  },
  {
    question: "How long does it take to complete a modular kitchen?",
    answer:
      "Most modular kitchen projects are completed within 4–5 weeks, including design, manufacturing, and installation. The timeline may vary based on customization.",
  },
  {
    question: "Which modular kitchen layout is best for small homes?",
    answer:
      "L-Shaped, Straight, and Parallel kitchens are ideal for compact spaces. Our experts recommend the best layout after understanding your space and storage requirements.",
  },
  {
    question: "Which materials are best for a modular kitchen?",
    answer:
      "BWP plywood, HDHMR boards, premium laminates, acrylic finishes, and branded hardware are popular choices because they offer strength, durability, and moisture resistance.",
  },
  {
    question:
      "What is the difference between a modular kitchen and a traditional kitchen?",
    answer:
      "A modular kitchen is made with factory-manufactured units that are easy to install, maintain, and customize. Traditional kitchens are built on-site and offer less flexibility for future changes.",
  },
  {
    question: "Why should I choose Dfurniture for my modular kitchen?",
    answer:
      "Dfurniture offers customized kitchen solutions backed by 15+ years of experience, quality craftsmanship, premium materials, transparent pricing, and dedicated customer support from design to installation.",
  },
];

const ModularKitchen = () => {
  return (
    <>
      <SEO
        title="Modular Kitchen Manufacturer in Delhi | Modular Kitchens | Dfurniture"
        description="Looking for a trusted Modular Kitchen Manufacturer in Delhi? Dfurniture offers 100% customized modular kitchens with free site visit, 3D design, and professional installation across Delhi NCR. 15+ years of experience. Contact us today."
        keywords="Modular Kitchen Manufacturer in Delhi, Modular Kitchens"
        url="https://www.dfurniture.in/modular-kitchen/"
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
          Modular Kitchen Manufacturer in Delhi | Dfurniture
        </h1>
        <p className="text-black/80 mt-5">
          Your kitchen deserves better. At <a href="/contact-us" className="text-primary"><strong>Dfurniture</strong></a>, we build
          fully customized modular kitchens across Delhi NCR — designed for your
          space, built in our own factory, and installed by our own team. No
          middlemen. No compromises.
        </p>
        <h3 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[30px] lg:text-[40px] leading-tight">
          About Dfurniture
        </h3>
        <p className="text-black/80 mt-5">
          Dfurniture is a trusted{" "}
          <strong>Modular Kitchen Manufacturer in Delhi</strong> with over 15
          years of experience. We have delivered customized kitchens across
          South Delhi, West Delhi, East Delhi, North Delhi, Noida, Gurgaon, and
          Ghaziabad.
        </p>
        <p className="text-black/80 mt-5">
          Everything is made in our own factory. Every kitchen is built
          according to your exact space, storage needs, and budget — from the
          first design meeting to the final installation.
        </p>
      </section>
      {/* catalogue grid */}
      <section className="pt-8 pb-12 px-4 text-center sm:px-10 lg:px-20">
        <h4 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[30px] lg:text-[40px] leading-tight">
          Kitchen Layouts We Offer
        </h4>
        <p className="text-black/80 mt-3">
          Every home is different. We build kitchens in all major layouts to
          suit every space and lifestyle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
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
              <p>{item.description}</p>
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
          Our Expertise
        </h2>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Free Site Visit and Kitchen Measurement
          </li>
          <li className="text-black/80">
            Space Planning and Layout Recommendation
          </li>
          <li className="text-black/80">3D Design Visualization</li>
          <li className="text-black/80">Premium Material Selection</li>
          <li className="text-black/80">In-House Factory Manufacturing</li>
          <li className="text-black/80">Smart Storage Planning</li>
          <li className="text-black/80">Professional Installation</li>
          <li className="text-black/80">After-Sales Support</li>
        </ul>
      </section>
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h4 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Why Choose Dfurniture?
        </h4>
        <p className="text-black/80 mt-1">
          Homeowners across Delhi NCR looking for a dependable{" "}
          <a href="/blog/modular-kitchen-manufacturer-in-delhi" className="text-primary"><strong>Modular Kitchen Manufacturer in Delhi</strong></a> choose
          Dfurniture because we deliver quality, customization, and honest
          service — every single time.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>Factory-Direct Manufacturing -</strong> We make your kitchen
            ourselves. Better quality, faster delivery, lower cost.
          </li>
          <li className="text-black/80">
            <strong>100% Customized Design -</strong> Designed for your exact
            space. You see the full 3D design before we make anything.
          </li>
          <li className="text-black/80">
            <strong>Premium Materials -</strong> BWR/BWP moisture-resistant
            boards, soft-close hardware, and durable finishes made for Indian
            kitchen conditions.
          </li>
          <li className="text-black/80">
            <strong>Transparent Pricing -</strong> Full itemized quote upfront.
            No hidden charges. No surprises.
          </li>
          <li className="text-black/80">
            <strong>On-Time Delivery -</strong> We commit to a deadline and we
            deliver on it.
          </li>
          <li className="text-black/80">
            <strong>Complete Service -</strong> One team from design to
            installation. You do not need to manage multiple vendors.
          </li>
        </ul>
      </section>
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h4 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          15+ Years of Trust, Growth & Commitment
        </h4>
        <p className="text-black/80 mt-1">
          Dfurniture has designed and delivered hundreds of modular kitchens
          across Delhi NCR over the past 15 years — every project handled by our
          own in-house designers, craftsmen, and installation team, with strict
          quality checks at every stage. We have worked across every budget and
          every space, and our growth has come entirely from one thing —
          customers referring us to people they care about.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">15+ Years of Industry Experience</li>
          <li className="text-black/80">
            500+ Modular Kitchens Delivered Across Delhi NCR
          </li>
          <li className="text-black/80">
            100% In-House Manufacturing — No Outsourcing
          </li>
          <li className="text-black/80">
            Strict Quality Checks at Every Production Stage
          </li>
          <li className="text-black/80">
            Growth Built Entirely on Customer Trust and Referrals
          </li>
        </ul>
      </section>
      <ProductFAQ faqs={kitchenFaqs} />
       <section className="px-4 sm:px-10 lg:px-20 pb-5 mb-5">
        <h4 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Create Your Dream Kitchen with Dfurniture
        </h4>
        <p className="text-black/80 mt-1">
          Looking for a trusted <a href="/" className="text-primary"><strong>Modular Kitchen Manufacturer in Delhi</strong></a>? Dfurniture gives you complete kitchen solutions — smart design, quality manufacturing, professional installation, and full after-sales support — all built around your home and your lifestyle.
        </p>
        <h6 className="text-primary mt-3 font-extrabold text-[18px] sm:text-[20px] leading-tight">
          Contact us today for a free site visit and 3D design consultation.
        </h6>
      </section>
    </>
  );
};

export default ModularKitchen;
