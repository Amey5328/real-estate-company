import "./GalleryCard.css";

const GalleryCard = ({ image, title }) => {
  return (
    <div className="gallery-card">
      <img
        src={image}
        alt={title}
        className="gallery-image"
      />
    </div>
  );
};

export default GalleryCard;