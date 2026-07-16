import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import blog1 from "../assets/blog/blog1.webp";
import blog2 from "../assets/blog/blog2.webp";
import blog3 from "../assets/blog/blog3.webp";
import blog4 from "../assets/about/about-story.webp";
import blog5 from "../assets/blog/blog1_2.webp";
import blogHero from "../assets/blog/banner.jpg";
import { FaAngleRight, FaHome } from "react-icons/fa";

const BLOGS = [
  {
      slug: "modular-kitchen-interiors-in-delhi",
      category: "Blog",
      title:
        "Top 10 Modular Kitchen Interiors in Delhi to Transform Your Home in 2026",
      excerpt:
        "Explore the top modular kitchen interiors in Delhi, layouts, prices, expert tips, and design ideas. Discover why 500+ Delhi families trust Dfurniture for their dream kitchen.",
      image: blog5,
      author: "Dfurniture",
      authorAvatar:
        "https://secure.gravatar.com/avatar/74c53b21cba283f6b6213d31c97a0eea618a47d469e8a57b6c985892bb2e0c58?s=50&d=mm&r=g",
      date: "June 04, 2026",
    },
  {
    slug: "home-furniture-manufacturer-in-delhi",
    category: "Blog",
    title:
      "Before You Set Up Your Home: The Honest Guide to Choosing a Home Furniture Manufacturer in Delhi",
    excerpt:
      "Trusted home furniture manufacturer in Delhi with 15+ years of craftsmanship. Custom beds, sofas, wardrobes and more designed, built and delivered by experts.",
    image: blog4,
    author: "Dfurniture",
    authorAvatar:
      "https://secure.gravatar.com/avatar/74c53b21cba283f6b6213d31c97a0eea618a47d469e8a57b6c985892bb2e0c58?s=50&d=mm&r=g",
    date: "May 27, 2026",
  },
  {
    slug: "modular-kitchen-manufacturer-in-delhi",
    category: "Blog",
    title:
      "Complete Guide to Choosing the Best Modular Kitchen Manufacturer in Delhi",
    excerpt:
      "Choosing the best Modular kitchen manufacturer in Delhi can feel overwhelming — but with 15+ years of experience and thousands of happy homes, Dfurniture makes it simple, honest, and stress-free. A kitchen is the busiest place in any Indian home. Tea in the morning, lunch packing, evening snacks, dinner with family — everything happens here.",
    image: blog1,
    author: "Dfurniture",
    authorAvatar:
      "https://secure.gravatar.com/avatar/74c53b21cba283f6b6213d31c97a0eea618a47d469e8a57b6c985892bb2e0c58?s=50&d=mm&r=g",
    date: "May 26, 2026",
  },
  {
    slug: "custom-wardrobe-designer-in-delhi",
    category: "Blog",
    title:
      "7 Smart Tips to Find the Perfect Custom Wardrobe Designer in Delhi [2026 Guide]",
    excerpt:
      "Buying a new wardrobe sounds simple — until you actually start looking for one. You call a few designers. Everyone says they are the best. One quote is ₹80,000, another is ₹1,80,000 for the same room. Some are pushing acrylic, some are recommending veneer.",
    image: blog2,
    author: "Dfurniture",
    authorAvatar:
      "https://secure.gravatar.com/avatar/74c53b21cba283f6b6213d31c97a0eea618a47d469e8a57b6c985892bb2e0c58?s=50&d=mm&r=g",
    date: "May 23, 2026",
  },
  {
    slug: "home-interior-designing-company-in-india",
    category: "Blog",
    title:
      "How to Find the Right Home Interior Designing Company in India for Modern Homes 2026",
    excerpt:
      "Written based on 15+ years of hands-on experience in India's home interior design and modular furniture industry, with insights drawn from real projects delivered by the Dfurniture team across Delhi NCR and beyond. A new house is just four walls and a door.",
    image: blog3,
    author: "Dfurniture",
    authorAvatar:
      "https://secure.gravatar.com/avatar/74c53b21cba283f6b6213d31c97a0eea618a47d469e8a57b6c985892bb2e0c58?s=50&d=mm&r=g",
    date: "May 21, 2026",
  },
];

function BlogCard({ blog, onClick }) {
  return (
    <>
      <div
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer group"
        onClick={() => onClick(blog.slug)}
      >
        <div className="overflow-hidden h-52">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
            {blog.category}
          </span>
          <h2 className="mt-2 text-lg font-bold text-gray-900 leading-snug group-hover:text-amber-700 transition-colors line-clamp-3">
            {blog.title}
          </h2>
          <p className="mt-2 text-sm text-gray-500 line-clamp-3">
            {blog.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <img
                src={blog.authorAvatar}
                alt={blog.author}
                className="w-5 h-5 rounded-full"
              />
              {blog.author}
            </span>
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Blog() {
  const navigate = useNavigate();

  function openPost(slug) {
    navigate(`/blog/${slug}`);
    
  }

  return (
    <>
      <SEO
        title="Interior Design & Furniture Blog | Dfurniture"
        description="Read expert tips on modular kitchens, custom wardrobes, and home interior design from Dfurniture — Delhi NCR's trusted furniture manufacturer."
        keywords="Interior Design Blog, Modular Kitchen Tips, Custom Wardrobe Ideas"
        url="https://www.dfurniture.in/blog/"
      />
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@700;900&display=swap');
        * { box-sizing: border-box; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style> */}
      {/* Page Banner */}
      <section
        style={{
          backgroundImage: `url(${blogHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="mx-5 rounded-3xl px-7 h-[490px] flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h2 className="text-[45px] lg:text-[55px] text-white font-extrabold">
            Blog
          </h2>
          <div className="flex gap-4 items-center">
            <Link to="/" className="flex gap-2 text-white">
              <FaHome className="text-white w-5 h-5" /> <p>D Furniture</p>
            </Link>
            <p>
              <FaAngleRight className="text-white" />
            </p>
            <p className="text-white">Blog</p>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
              Blog
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Latest Articles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} onClick={openPost} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}