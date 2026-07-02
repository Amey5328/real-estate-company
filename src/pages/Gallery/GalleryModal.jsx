import "./GalleryModal.css";

const GalleryModal = ({
  image,
  title,
  onClose,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="gallery-modal" onClick={onClose}>
      <div
        className="gallery-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <button
          className="prev-btn"
          onClick={onPrevious}
        >
          ❮
        </button>

        <img
          src={image}
          alt={title}
          className="gallery-modal-image"
        />

        <button
          className="next-btn"
          onClick={onNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;