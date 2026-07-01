import "./Gallery.css";
import GalleryCard from "./GalleryCard";
import galleryData from "./galleryData";

const Gallery = () => {
  return (
    <main className="gallery-page">

      {/* Hero Section */}
      <section className="gallery-hero">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-breadcrumb">
          Home / Gallery
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-container">

        <div className="gallery-grid">

          {galleryData.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>

      </section>

    </main>
  );
};

export default Gallery;