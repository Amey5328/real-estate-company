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

      <section className="relative overflow-hidden bg-[#0b3475]">
        {/* Soft background glow */}
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/10 blur-3xl" />

        {/* Subtle decorative lines */}
        <div className="absolute right-0 top-0 hidden opacity-10 lg:block">
          <svg
            width="420"
            height="260"
            viewBox="0 0 420 260"
            fill="none"
          >
            {[...Array(7)].map((_, index) => (
              <path
                key={index}
                d={`M80 ${20 + index * 24} C180 ${-10 + index * 24
                  }, 280 ${80 + index * 18}, 440 ${30 + index * 20
                  }`}
                stroke="#FFC400"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#ffc400]">
              Our Portfolio
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Spaces We Have
              <span className="block text-[#ffc400]">
                Brought to Life.
              </span>
            </h1>

            <div className="mt-8 h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#ffc400] via-[#ffc400]/70 to-transparent" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/90">
              Explore residential, commercial and architectural projects shaped
              through thoughtful planning, quality craftsmanship and attention
              to detail.
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#ffc400]/60 to-transparent" />
      </section>

      {/* ================= GALLERY SECTION ================= */}

      <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-24">
        {/* Soft background shapes */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b3475]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#ffc400]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1450px] px-8 lg:px-12">
          {/* Heading Area */}
          <div className="relative mx-auto max-w-4xl text-center">
            {/* Decorative faded text */}
            <span className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap text-7xl font-bold uppercase tracking-widest text-[#0b3475]/[0.025] md:text-8xl">
              Gallery
            </span>

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[7px] text-[#d9a700]">
                Our Portfolio
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0b3475] sm:text-5xl">
                Explore Our{" "}
                <span className="text-[#e0ad00]">
                  Recent Projects
                </span>
              </h2>

              <div className="mx-auto mt-8 h-[1px] w-full max-w-3xl bg-gradient-to-r from-transparent via-[#0b3475] to-transparent" />

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Explore a curated collection of residential, commercial and
                architectural projects completed with quality craftsmanship and
                thoughtful design.
              </p>
            </div>
          </div>

          {/* Gallery Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
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