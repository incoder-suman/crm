import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, url, noindex = false }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url.trim()} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url.trim()} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dfurniture" />
      <meta property="og:image" content="https://www.dfurniture.in/og-image.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.dfurniture.in/og-image.jpg" />
    </Helmet>
  );
}

export default SEO;