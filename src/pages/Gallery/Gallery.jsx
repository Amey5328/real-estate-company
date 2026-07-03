import { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";
import galleryData from "./galleryData";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);

  const closeModal = () => setCurrentIndex(null);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 lg:py-20">

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>

        {/* Left Decorative Lines */}
        <div className="absolute left-0 top-0 opacity-20">
          <svg width="420" height="320" viewBox="0 0 420 320" fill="none">
            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                d={`M0 ${30 + i * 18} C120 ${-10 + i * 18},250 ${90 + i * 12
                  },420 ${40 + i * 15}`}
                stroke="#22d3ee"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* Right Decorative Lines */}
        <div className="absolute right-0 top-0 rotate-180 opacity-20">
          <svg width="420" height="320" viewBox="0 0 420 320" fill="none">
            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                d={`M0 ${30 + i * 18} C120 ${-10 + i * 18},250 ${90 + i * 12
                  },420 ${40 + i * 15}`}
                stroke="#22d3ee"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 font-semibold uppercase tracking-[10px] text-cyan-400">
            Welcome
          </p>

          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Project Gallery
          </h1>

          <div className="mt-5 flex items-center justify-center gap-4">

            <div className="h-px w-20 bg-slate-600"></div>

            <div className="h-1 w-16 rounded-full bg-cyan-400"></div>

            <div className="h-px w-20 bg-slate-600"></div>

          </div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            A collection of completed residential, commercial and architectural projects that reflect quality craftsmanship and thoughtful design.
          </p>
          {/* <div className="mt-8 flex items-center justify-center text-sm text-slate-300">

            <span>Home</span>

            <span className="mx-3 text-cyan-400">/</span>

            <span>Gallery</span>

          </div> */}

        </div>

      </section>

      {/* ================= GALLERY SECTION ================= */}

      <section className="relative overflow-hidden bg-slate-50 py-20">

        {/* Background Glow */}

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl"></div>

        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-slate-200 opacity-50 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mb-16 text-center">

            <p className="mb-3 font-semibold uppercase tracking-[6px] text-cyan-500">
              Gallery Collection
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Our Recent Work
            </h2>

            <div className="mt-6 flex items-center justify-center gap-4">

              <div className="h-px w-20 bg-slate-300"></div>

              <div className="h-1 w-16 rounded-full bg-cyan-400"></div>

              <div className="h-px w-20 bg-slate-300"></div>

            </div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Explore a curated collection of residential, commercial and architectural projects completed with quality craftsmanship and thoughtful design.
            </p>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">

            {galleryData.map((item, index) => (
              <GalleryCard
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                location={item.location}
                onClick={() => openImage(index)}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ================= MODAL ================= */}

      {currentIndex !== null && (
        <GalleryModal
          image={galleryData[currentIndex].image}
          title={galleryData[currentIndex].title}
          current={currentIndex + 1}
          total={galleryData.length}
          onNext={nextImage}
          onPrevious={previousImage}
          onClose={closeModal}
        />
      )}

    </main>
  );
};

export default Gallery;