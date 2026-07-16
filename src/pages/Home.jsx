import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";

import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../assets/home/slider1.jpg";
import slider2 from "../assets/home/slider2.jpg";
import slider3 from "../assets/home/slider3.jpg";
import slider4 from "../assets/home/slider4.jpg";
import kitchen from "../assets/home/kitchen.webp";
import bedroom from "../assets/home/bedroom.webp";
import living from "../assets/home/livingroom.webp";
import wardrobe from "../assets/home/wardrobe.webp";
import about from "../assets/home/about.webp";
import att1 from "../assets/home/att1.png";
import att2 from "../assets/home/att2.png";
import off1 from "../assets/home/off1.jpg";
import off2 from "../assets/home/off2.png";
import off3 from "../assets/home/off3.png";
import off4 from "../assets/home/off4.png";
import off5 from "../assets/home/off5.png";
import why1 from "../assets/home/why1.png";
import why2 from "../assets/home/why2.png";
import why3 from "../assets/home/why3.png";
import why4 from "../assets/home/why4.png";
import why5 from "../assets/home/why5.png";
import bg from "../assets/home/bg.jpg";
import quote from "../assets/home/quote.svg";
import t1 from "../assets/home/t1.png";
import t2 from "../assets/home/t2.png";
import t3 from "../assets/home/t3.png";
import t4 from "../assets/home/t4.png";
import t5 from "../assets/home/t5.png";
import t6 from "../assets/home/t6.png";
import shape from "../assets/home/testimonial-shape.png";
import { Link } from "react-router-dom";
import { ArrowRight, CircleDot, Quote, QuoteIcon } from "lucide-react";
import { FaAngleRight, FaQuoteRight } from "react-icons/fa6";
import { BiCaretRight } from "react-icons/bi";
import { useState } from "react";
import { BsQuote } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import SEO from "../components/SEO";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "Years Of Manufacturing",
  },
  {
    number: 10,
    suffix: "k+",
    title: "Delivered Projects",
  },
  {
    number: 1500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    number: 99.9,
    suffix: "+",
    title: "Repeat Customers Ratio",
  },
];

const category = [
  {
    image: kitchen,
    title: "Interior Design Company in Gurgaon",
    description:
      "Experience the perfect blend of style and functionality with our modular kitchen solutions",
    link: "/modular-kitchen",
  },
  {
    image: bedroom,
    title: "Best Interior Designers in India",
    description:
      "Transform your bedroom into a tranquil retreat with our exquisite furniture collection.",
    link: "/architectural-master-bedroom-interiors-in-delhi",
  },
  {
    image: living,
    title: "Luxury Home Interior Designers Gurgaon",
    description:
      "Create a warm and inviting atmosphere in your living room with our sophisticated furniture.",
    link: "/living-room",
  },
  {
    image: wardrobe,
    title: "Residential Interior Designers Gurgaon",
    description:
      "It's always good to change and keep things fresh, whether it's a hairstyle or wardrobe.",
    link: "/wardrobe",
  },
];

const items = [
  "Bathroom",
  "Kitchen",
  "Wardrobe",
  "Master Bedroom",
  "Living Room",
];

const offerings = [
  {
    id: 1,
    title: "Master Bedroom Design",
    alt:"Best Interior Designer Company in Gurgaon",
    description:
      "A luxurious and cozy master bedroom with carefully curated furniture, soothing colors, and modern aesthetics for ultimate comfort and style.",
    image: off1,
    sale: true,
  },
  {
    id: 2,
    title: "Contemporary Living Room",
    alt:"Home Interior Designers in Gurgaon",
    description:
      "A chic and elegant living room design blending modern furnishings, sleek lines, and tasteful decor elements to create a welcoming ambiance.",
    image: off2,
    sale: true,
  },
  {
    id: 3,
    title: "3-Door Swing Wardrobe",
    alt:"Interior Design Company in Gurgaon",
    description:
      "A spacious wardrobe with three swing doors, offering organized storage for clothes and accessories, designed to blend seamlessly with any bedroom decor.",
    image: slider3,
    sale: true,
  },
  {
    id: 4,
    title: "Modern Bathroom Design",
    alt:"Best Interior Designers in India",
    description:
      "A sophisticated bathroom featuring clean lines, minimalist fixtures, and innovative storage solutions for a refreshing experience.",
    image: off3,
    sale: true,
  },
  {
    id: 5,
    title: "L-Shaped Kitchen Design",
    alt:"Luxury Home Interior Designers Gurgaon",
    description:
      "A space-efficient kitchen layout featuring a functional L-shape, maximizing corner spaces and ensuring smooth workflow with ample storage and countertop area.",
    image: off4,
    sale: false,
  },
  {
    id: 5,
    title: "Wall-Mounted Pooja Room",
    alt:"Residential Interior Designers Gurgaon",
    description:
      "A compact and stylish wall-mounted pooja unit with intricate designs, providing a serene space for prayers while saving floor space.",
    image: off5,
    sale: false,
  },
];

const testimonials = [
  {
    text: "Their service is marked by efficiency and punctuality.",
    name: "Manish Saini",
    image: t1,
  },
  {
    text: "Awesome service! They are punctual and very efficient.",
    name: "Simran Shivdasani",
    image: t2,
  },
  {
    text: "Had a very nice experience…all timeline met….quality of work is very good….keeps customer's taste and requirement in mind…..would like to recommend to others",
    name: "Pankaj Gupta",
    image: t3,
  },
  {
    text: "Though work got bit delayed but very much satisfied now. Special thanks to Preeti and her team.",
    name: "Mayank Chhabra",
    image: t4,
  },
  {
    text: "Very Good Work done. created beautiful bed study and wardrobe. thankyou 🙂",
    name: "Neeraj Jain",
    image: t5,
  },
  {
    text: "Very good quality work and always timely delivered…. satisfied to work with DHOMZ furniture.",
    name: "Vijendra Singh",
    image: t6,
  },
];

const images = [why1, why2, why3, why4, why5];

const CARDS_PER_PAGE = 3;
const TOTAL_DOTS = Math.ceil(offerings.length / CARDS_PER_PAGE);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = offerings.slice(
    currentIndex * CARDS_PER_PAGE,
    currentIndex * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  const handlePrev = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  const handleNext = () =>
    setCurrentIndex((p) => Math.min(p + 1, TOTAL_DOTS - 1));
  return (
    <>
      <SEO
        title="Best Home Interior Designing Company India | Gurgaon"
        description="Looking for the Best Home Interior Designing Company India? DFurniture is also the Best Interior Designer Company in Gurgaon for elegant homes."
        keywords="Best Home Interior Designing Company India, Best Interior Designer Company in Gurgaon, Home Interior Designers in Gurgaon, Interior Design Company in Gurgaon, Best Interior Designers in India, Luxury Home Interior Designers Gurgaon, Residential Interior Designers Gurgaon, Interior Design Company India, Home Interior Design Services Gurgaon"
        url="https://www.dfurniture.in/"
      />
      {/* slider */}
      <section>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          <SwiperSlide>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
              <img
                src={slider1}
                alt="Best Home Interior Designing Company India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
              <img
                src={slider2}
                alt="Best Interior Designer Company in Gurgaon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
              <img
                src={slider3}
                alt="Home Interior Designers in Gurgaon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
              <img
                src={slider4}
                alt="slider4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* stats */}
      <section className="py-8 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-[32px] sm:text-[40px] font-bold text-tertiary">
                  <CountUp
                    end={item.number}
                    duration={3}
                    decimals={item.number % 1 !== 0 ? 1 : 0}
                    className="text-tertiary"
                  />
                  {item.suffix}
                </h2>
                <p className="text-[16px] sm:text-[19px] text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* category */}
      <section className="py-5 px-4 sm:px-10 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-center justify-center">
          {category.map((cat, id) => (
            <div
              key={id}
              className="rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-[0px_0px_8px] shadow-[#00000012] transition-all duration-300 hover:-translate-y-3"
            >
              <Link to={cat.link}>
                <div className="h-56">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pb-8 px-5 flex flex-col items-center justify-center text-center">
                  <h2 className="text-[#5C3A7E] font-bold text-[22px] mt-5">
                    {cat.title}
                  </h2>
                  <p className="mt-3 text-[#3F4245]">{cat.description}</p>
                  <ArrowRight className="mt-6" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="overflow-hidden py-6 bg-white">
        <div className="marquee-track flex items-center whitespace-nowrap">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center shrink-0">
              {items.map((item, idx) => (
                <div
                  key={`${loopIdx}-${idx}`}
                  className="flex items-center shrink-0"
                >
                  <span className="marquee-word">
                    {item.replace(/ /g, "\u00A0")}
                  </span>
                  <span className="marquee-plus">+</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            animation: marquee-scroll 35s linear infinite;
            width: max-content;
          }

          .marquee-word {
            display: inline-block;
            font-size: clamp(36px, 6vw, 80px);
            font-weight: 700;
            font-family: "Arial", sans-serif;
            line-height: 1;
            padding: 0 20px;
            cursor: default;

            background-image: linear-gradient(
              135deg,
              #bb9a65 50%,
              transparent 51%
            );
            background-size: 230% 230%;
            background-position: 100% 100%;
            background-repeat: no-repeat;

            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1px #dcdcdc;

            transition:
              background-position 0.7s ease,
              -webkit-text-stroke-color 0.7s ease;
          }

          .marquee-word:hover {
            background-position: 0% 0%;
            -webkit-text-stroke-color: #dcdcdc;
          }

          .marquee-plus {
            font-size: clamp(42px, 7vw, 90px);
            font-weight: 800;
            line-height: 1;
            color: #bb9a65;
            padding: 0 14px;
          }

          @keyframes marquee-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* about section */}
      <section className="py-12 px-4 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center items-center">
          <div>
            <img
              src={about}
              alt="Best Home Interior Designing Company India"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="text-primary font-semibold flex items-center">
              <BiCaretRight className="text-primary w-6 h-6" /> SINCE 2010
            </p>
            <h1 className="text-heading font-extrabold text-[28px] sm:text-[36px] lg:text-[45px] leading-tight mt-5">
              Dfurniture - Best Home Interior Design Company in India
            </h1>
            <p className="text-secondary mt-5">
              Crafting Thoughtful, Livable Spaces Since 2010 Dfurniture is a
              trusted{" "}
              <strong>Best Home Interior Designing Company India</strong>,
              delivering modern, sophisticated, and budget-conscious interior
              solutions for apartments, villas, and independent houses.
              Headquartered in Delhi NCR, we specialize in bespoke home
              interiors,{" "}
              <a href="https://www.dfurniture.in/modular-kitchen" target="_blank">
               <strong className="text-primary">modular kitchens</strong> 
              </a>
              , luxury living spaces, and intelligent space-saving designs
              tailored to the way you live
            </p>
            <div className="grid grid-cols-2 gap-5 justify-center items-end mt-4">
              <div>
                <div className="relative text-center">
                  <img src={att1} alt="Best Home Interior Design Company in India" className="h-40" />
                  <div className="absolute bottom-5 left-14">
                    <p className="font-semibold text-[15px]">01</p>
                    <p className="text-primary">Kitchen</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative text-center">
                  <div className="absolute bottom-5 left-14">
                    <p className="font-semibold text-[15px]">02</p>
                    <p className="text-primary">Wardrobes</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative text-center">
                  <img src={att2} alt="att2" className="h-40" />
                  <div className="absolute bottom-5 left-14">
                    <p className="font-semibold text-[15px]">03</p>
                    <p className="text-primary">Beds</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative text-center">
                  <div className="absolute bottom-5 left-14">
                    <p className="font-semibold text-[15px]">04</p>
                    <p className="text-primary">Study Table</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* offer */}
      <section className="flex flex-col justify-center pt-5 pb-8 px-4 sm:px-10 md:px-16 lg:px-24">
        <h3 className="text-heading text-[26px] sm:text-[30px] lg:text-[35px] font-extrabold">
          Trusted Home Interior Designing Company in India
        </h3>
        <p className="text-secondary pt-4">
          Dfurniture, we believe a home should reflect who you are. As one of
          India's most trusted home interior design companies, we craft
          luxurious, personalized spaces that blend elegance with everyday
          functionality.
        </p>
        <h4 className="text-heading text-[20px] sm:text-[25px] mt-3 font-extrabold">
          Homeowners Choose Us:
        </h4>
        <ul className="list-disc text-secondary text-left">
          <li>
            Tailor-made luxury interiors designed around your lifestyle, taste,
            and space
          </li>
          <li>
            Smart space optimization that makes every corner of your home work
            beautifully
          </li>
        </ul>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section
        className="w-full py-14 px-4 sm:px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #c9973a 0%, #a07028 20%, #6b4718 50%, #3b2409 100%)",
        }}
      >
        <div className="max-w-[1600px] px-4 sm:px-10 lg:px-24 mx-auto flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-white text-[26px] sm:text-[32px] font-bold mb-10 text-center">
            What we offer for you
          </h2>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            slidesPerGroup={1}
            centeredSlides={false}
            spaceBetween={20}
            speed={800}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".offer-next",
              prevEl: ".offer-prev",
            }}
            pagination={{
              clickable: true,
              el: ".offer-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="w-full offer-swiper"
          >
            {offerings.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div
                  className="bg-white flex flex-col pb-5 h-full"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full" style={{ height: "265px" }}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />

                    {item.sale && (
                      <span
                        className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-4 py-1"
                        style={{
                          borderRadius: "6px",
                        }}
                      >
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Text */}
                  <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-gray-900 text-[22px] font-bold">
                      {item.title}
                    </h3>

                    <p className="text-secondary text-[15px] tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex items-center gap-5 mt-10">
            <button className="offer-prev">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  [22, 8, 1],
                  [19, 11, 1.2],
                  [16, 14, 1.5],
                  [13, 17, 2],
                  [16, 20, 1.5],
                  [19, 23, 1.2],
                  [22, 26, 1],
                ].map(([x, y, r], i) => (
                  <circle key={i} cx={x} cy={y} r={r} fill="white" />
                ))}
              </svg>
            </button>

            <div className="offer-pagination flex items-center"></div>

            <button className="offer-next">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  [12, 8, 1],
                  [15, 11, 1.2],
                  [18, 14, 1.5],
                  [21, 17, 2],
                  [18, 20, 1.5],
                  [15, 23, 1.2],
                  [12, 26, 1],
                ].map(([x, y, r], i) => (
                  <circle key={i} cx={x} cy={y} r={r} fill="white" />
                ))}
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Styling */}
        <style jsx>{`
          .offer-swiper .swiper-wrapper {
            align-items: stretch;
          }

          .offer-swiper .swiper-slide {
            height: auto;
          }

          .offer-pagination {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .offer-pagination .swiper-pagination-bullet {
            width: 7px;
            height: 7px;
            background: rgba(255, 255, 255, 0.35);
            opacity: 1;
            margin: 0 !important;
            transition: all 0.25s ease;
          }

          .offer-pagination .swiper-pagination-bullet-active {
            width: 11px;
            height: 11px;
            background: #c48742;
          }

          .offer-prev,
          .offer-next {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </section>

      {/* why choose */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-10 md:px-16 lg:px-24 text-center">
        <h4 className="text-heading text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold">
          Why Choose Dfurniture for Home Interior Design in India?
        </h4>
        <p className="text-secondary pt-2">
          Dfurniture is a leading home interior design company in India, trusted
          for delivering premium, customized, and luxury interior solutions
          tailored to modern homeowners. Whether you're designing a new
          apartment, villa, or independent house, our expert interior designers
          in India create stylish, functional, and space-efficient interiors
          that match your lifestyle and budget.
        </p>

        <div className="w-full py-10 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={35}
            slidesPerView={5.5}
            loop={true}
            loopAdditionalSlides={5}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 5.5,
                spaceBetween: 35,
              },
            }}
            className="!overflow-visible"
          >
            {[...images, ...images].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-2xl border border-secondary">
                  <img
                    src={img}
                    alt="Home Interior Design Services Gurgaon"
                    className="h-[138px] w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-secondary">
          From concept to completion, we ensure a seamless and stress-free
          interior design experience.
        </p>
      </section>

      {/* parallax CTA */}
      <section
        className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-28 px-4 sm:px-10 lg:px-24 text-center relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4 sm:px-10 lg:px-36">
          <h4 className="text-white text-[28px] sm:text-[38px] lg:text-[55px] font-extrabold leading-tight">
            Looking for the Perfect Blend of Comfort and Hygiene?
          </h4>
          <p className="text-white mt-3">
            Our modular kitchens are designed around the way you cook. From
            customised storage that keeps every essential within easy reach to
            smart layouts that make the most of compact spaces, every detail is
            crafted for effortless everyday use. Built with food-safe materials
            and engineered to modern hygiene standards, our kitchens deliver the
            perfect balance of comfort, cleanliness, and lasting quality.
          </p>
        </div>
      </section>

      {/* testimonial */}
      <section className="flex flex-col lg:flex-row items-center justify-center bg-[#f3f7fa] py-12 text-center">
        <div className="relative hidden lg:block">
          <FaQuoteLeft className="text-[#EDF1F3] w-[300px] h-[300px]" />
          <div className="absolute top-10 left-20">
            <p className="text-primary font-semibold flex items-center">
              <BiCaretRight className="text-primary w-6 h-6" /> CLIENT FEEDBACK
            </p>
            <h2 className="text-heading font-extrabold text-left text-[45px] leading-[45px] mt-5">
              Hear from clients.
            </h2>
          </div>
        </div>

        {/* Mobile heading (shown only on small screens) */}
        <div className="block lg:hidden px-6 pb-6 text-left w-full">
          <p className="text-primary font-semibold flex items-center">
            <BiCaretRight className="text-primary w-6 h-6" /> CLIENT FEEDBACK
          </p>
          <h2 className="text-heading font-extrabold text-[32px] leading-tight mt-3">
            Hear from clients.
          </h2>
        </div>

        <section className="overflow-hidden bg-[#f4f7fa] py-10 w-full lg:w-auto">
          <div className="pl-[4%] relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = ".testimonial-prev";
                swiper.params.navigation.nextEl = ".testimonial-next";
              }}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              slidesPerView={3.2}
              spaceBetween={10}
              loop={true}
              speed={900}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: 3.2,
                  spaceBetween: 28,
                },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mr-4 rounded-[34px] bg-white px-10 pb-[40px] pt-[45px] overflow-visible">
                    <div
                      aria-hidden="true"
                      className="absolute right-0 bottom-0 w-[119px] h-[112px] bg-[#f4f7fa]"
                      style={{
                        WebkitMaskImage: `url(${shape})`,
                        maskImage: `url(${shape})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "bottom right",
                        maskPosition: "bottom right",
                      }}
                    />
                    <p className="font-[400] text-secondary text-left">
                      {item.text}
                    </p>

                    <h3 className="mt-5 text-[16px] font-[600] text-[#c49a52] text-left">
                      {item.name}
                    </h3>

                    <div className="absolute bottom-[0px] right-[2px] z-20">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[60px] w-[60px] rounded-full object-cover border-[#f4f7fa]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <div className="mt-10 flex items-center justify-end gap-0 pr-[5%] sm:pr-[10%] lg:pr-[20%]">
              <button className="testimonial-prev flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#d5c4a4] bg-white transition-all duration-300 hover:bg-[#c49a52] hover:text-white group">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300"
                >
                  <path
                    d="M12 4L6 10L12 16"
                    stroke="#5B4636"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="testimonial-next flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#c49a52] transition-all duration-300 hover:bg-black hover:text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L14 10L8 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* Home Interior Design Services */}
      <section className="py-12 text-center px-4 sm:px-10 md:px-16 lg:px-24">
        <h4 className="text-heading text-[24px] sm:text-[30px] lg:text-[35px] font-extrabold">
          Home Interior Design Services in India | Complete Interior Solutions
        </h4>
        <p className="text-secondary pt-2 px-0 sm:px-10 lg:px-24">
          Dfurniture is a full-service home interior design company offering
          end-to-end interior solutions for residential spaces across India. We
          specialize in creating functional, stylish, and customized interiors
          that enhance comfort and elevate modern living.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 lg:gap-10 mt-10 items-center">
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Modular Kitchen Design
            </h5>
            <p className="text-black/80 pt-3">
              Modern, space-efficient, and ergonomic kitchens designed to
              enhance both functionality and style.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Bedroom Interior Design
            </h5>
            <p className="text-black/80 pt-3">
              Create peaceful and comfortable bedrooms with elegant layouts,
              soothing colors, and smart storage solutions.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Living Room Interior Design
            </h5>
            <p className="text-black/80 pt-3">
              Stylish and welcoming living spaces designed for comfort,
              relaxation, and entertaining guests.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Bathroom Interior Design
            </h5>
            <p className="text-black/80 pt-3">
              Contemporary bathroom designs with smart layouts, premium
              fittings, and luxurious finishes.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Custom Wardrobe Design
            </h5>
            <p className="text-black/80 pt-3">
              Tailor-made wardrobe solutions that maximize storage while
              complementing your interiors.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Study Room Interior Design
            </h5>
            <p className="text-black/80 pt-3">
              Productive and inspiring study spaces designed for focus and
              efficiency.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Kids Bedroom Interior Design
            </h5>
            <p className="text-black/80 pt-3">
              Fun, safe, and colorful room designs that grow with your child.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Modular TV Unit Design
            </h5>
            <p className="text-black/80 pt-3">
              Sleek and modern TV units that add functionality and enhance
              living room aesthetics.
            </p>
          </div>
          <div className="box-border h-full bg-[#FFF3DF] rounded-xl p-6 transition-all duration-300 hover:border-t-[5px] hover:border-r-[5px] hover:border-primary">
            <h5 className="text-[22px] text-primary font-bold">
              Pooja Room Interior Design
            </h5>
            <p className="text-black/80 pt-3">
              Elegant and serene pooja rooms that bring peace, positivity, and
              balance to your home.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-12 px-4 sm:px-10 md:px-16 lg:px-24">
        <h2 className="text-primary text-[26px] sm:text-[30px] lg:text-[35px] font-extrabold">
          Our Interior Design Process
        </h2>
        <p className="text-secondary pt-1 font-semibold">
          Dfurniture, we follow a clear, streamlined, and transparent interior
          design process to ensure high-quality results and a smooth client
          experience from start to finish.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-black/80 flex gap-2 items-start">
            <CircleDot className="text-primary w-4 h-4 mt-1 shrink-0" />
            <p>
              <span className="font-semibold">Initial Consultation – </span>We
              begin by understanding your ideas, lifestyle, space requirements,
              and budget. This helps us create a design direction that truly
              reflects your personality.
            </p>
          </li>
          <li className="text-black/80 flex gap-2 items-start">
            <CircleDot className="text-primary w-4 h-4 mt-1 shrink-0" />
            <p>
              <span className="font-semibold">
                Design & 3D Visualization –{" "}
              </span>
              Our experts transform your vision into detailed layouts and
              realistic 3D designs, allowing you to preview your dream home
              before execution begins.
            </p>
          </li>
          <li className="text-black/80 flex gap-2 items-start">
            <CircleDot className="text-primary w-4 h-4 mt-1 shrink-0" />
            <p>
              <span className="font-semibold">
                Material & Finish Selection –{" "}
              </span>
              Choose from a curated range of premium-quality materials,
              textures, and finishes that balance durability, aesthetics, and
              budget.
            </p>
          </li>
          <li className="text-black/80 flex gap-2 items-start">
            <CircleDot className="text-primary w-4 h-4 mt-1 shrink-0" />
            <p>
              <span className="font-semibold">Execution & Installation – </span>
              We ensure precise execution with skilled professionals, strict
              quality control, and timely project completion without
              compromising on detail.
            </p>
          </li>
          <li className="text-black/80 flex gap-2 items-start">
            <CircleDot className="text-primary w-4 h-4 mt-1 shrink-0" />
            <p>
              <span className="font-semibold">After-Sales Support – </span>Our
              relationship doesn't end at handover. We provide continued support
              and assistance even after project completion for your peace of
              mind.
            </p>
          </li>
        </ul>
        <h2 className="text-primary text-[26px] sm:text-[30px] lg:text-[35px] font-extrabold mt-3">
          Transform Your Home with Dfurniture
        </h2>
        <p className="text-secondary pt-1">
          Whether you own a compact apartment, a spacious villa, or a modern
          studio, Dfurniture delivers interior designs that blend comfort,
          functionality, and aesthetics seamlessly.
        </p>
        <p className="text-secondary">
          Contact Dfurniture today for a free interior design consultation and
          experience why we are among the most trusted home interior designers
          in India.
        </p>
      </section>
    </>
  );
};

export default Home;
