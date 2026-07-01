import "./GalleryCard.css";

const GalleryCard = ({ image, title, onClick }) => {
  return (
    <div className="gallery-card" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="gallery-image"
      />
    </div>
  );
};

export default GalleryCard;