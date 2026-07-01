import React from "react";
import "./RealEstateBlog.css";

const CATEGORIES = [
  "Buying",
  "Selling",
  "Market Trends",
  "Renovation",
  "Investing",
  "Neighborhoods",
];

const POSTS = [
  {
    lot: "01",
    category: "Buying",
    featured: true,
    title: "Reading a Neighborhood Before You Read the Listing",
    excerpt:
      "Square footage tells you the size of a house. Trash pickup day, sidewalk cracks, and the number of strollers on a Tuesday morning tell you the size of a life. Here's how to walk a block like an appraiser.",
    author: "M. Alvarez",
    date: "Jun 18, 2026",
    readTime: "6 min read",
  },
  {
    lot: "02",
    category: "Market Trends",
    title: "What Comparable Sales Actually Tell You",
    excerpt:
      "Three houses sold nearby last month, and none of them are your house. A short guide to reading comps without letting them read you first.",
    author: "D. Okafor",
    date: "Jun 11, 2026",
    readTime: "5 min read",
  },
  {
    lot: "03",
    category: "Selling",
    title: "Staging Rooms People Actually Live In",
    excerpt:
      "Empty vases and folded towels don't sell houses. Believable rooms do. Notes on staging for the way buyers actually picture Tuesday nights.",
    author: "R. Fenwick",
    date: "Jun 04, 2026",
    readTime: "4 min read",
  },
  {
    lot: "04",
    category: "Renovation",
    title: "The Renovations That Pay You Back",
    excerpt:
      "A new kitchen island is fun. A new roof is not. A practical ranking of upgrades by dollars returned, not dollars felt.",
    author: "S. Whitlock",
    date: "May 27, 2026",
    readTime: "7 min read",
  },
  {
    lot: "05",
    category: "Investing",
    title: "Small Multifamily: The Quiet On-Ramp to Investing",
    excerpt:
      "Duplexes and triplexes rarely make headlines, which is exactly why they're worth a second look. A grounded case for starting small.",
    author: "D. Okafor",
    date: "May 19, 2026",
    readTime: "8 min read",
  },
  {
    lot: "06",
    category: "Neighborhoods",
    title: "Ashwood Park: A Walking Guide",
    excerpt:
      "Coffee at the corner, a farmers market on Saturdays, and a bus line that actually runs on time. A local's route through one of the city's quieter enclaves.",
    author: "M. Alvarez",
    date: "May 12, 2026",
    readTime: "5 min read",
  },
];

function CategoryTag({ category }) {
  const slug = category.toLowerCase().replace(/\s+/g, "-");
  return <span className={`tag tag--${slug}`}>{category}</span>;
}

function PlotMark({ category }) {
  const slug = category.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className={`plot plot--${slug}`} aria-hidden="true">
      <span className="plot__corner plot__corner--tl" />
      <span className="plot__corner plot__corner--br" />
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <article className={`card ${post.featured ? "card--featured" : ""}`}>
      <div className="card__plot">
        <PlotMark category={post.category} />
        <span className="card__lot">LOT&nbsp;{post.lot}</span>
      </div>
      <div className="card__body">
        <CategoryTag category={post.category} />
        <h3 className="card__title">{post.title}</h3>
        <p className="card__excerpt">{post.excerpt}</p>
        <div className="card__meta">
          <span>{post.author}</span>
          <span className="card__dot">·</span>
          <span>{post.date}</span>
          <span className="card__dot">·</span>
          <span>{post.readTime}</span>
        </div>
        <a className="card__link" href="#read">
          Read full story <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function RealEstateBlog() {
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="re-page">
      <header className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">FIELD NOTES ON REAL ESTATE</p>
          <h1 className="hero__title">Notes from the Neighborhood</h1>
          <p className="hero__subtitle">
            Straight-talking dispatches on buying, selling, and living well
            where you land — written by people who've actually done the
            walkthroughs.
          </p>
          <a className="hero__cta" href="#listings">
            Start reading
          </a>
        </div>

        <div className="ticker" role="list" aria-label="Categories">
          {CATEGORIES.concat(CATEGORIES).map((cat, i) => (
            <span className="ticker__item" role="listitem" key={`${cat}-${i}`}>
              {cat}
            </span>
          ))}
        </div>
      </header>

      <main id="listings" className="listings">
        <div className="listings__header">
          <h2>Latest listings</h2>
          <p>Six fresh reads, filed by lot number.</p>
        </div>

        {featured && (
          <div className="listings__featured">
            <BlogCard post={featured} />
          </div>
        )}

        <div className="listings__grid">
          {rest.map((post) => (
            <BlogCard post={post} key={post.lot} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <p className="footer__title">Get new listings in your inbox</p>
            <p className="footer__subtitle">
              One email, twice a month. No spam, no pop-ups, no fine print.
            </p>
          </div>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <p className="footer__legal">© 2026 Field Notes. All rights reserved.</p>
      </footer>
    </div>
  );
}