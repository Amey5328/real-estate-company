import { useState } from "react";
import "./Gallery.css";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";
import galleryData from "./galleryData";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

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
    <main className="gallery-page">

      <section className="gallery-hero">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-breadcrumb">Home / Gallery</p>
      </section>

      <section className="gallery-container">
        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => openImage(index)}
            />
          ))}
        </div>
      </section>

      {currentIndex !== null && (
        <GalleryModal
          image={galleryData[currentIndex].image}
          title={galleryData[currentIndex].title}
          onClose={closeImage}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </main>
  );
};

export default Gallery;