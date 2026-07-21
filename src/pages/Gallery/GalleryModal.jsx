const GalleryModal = ({
  image,
  title,
  current,
  total,
  onClose,
  onNext,
  onPrevious,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-6xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          className="absolute left-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur transition-all duration-300 hover:bg-[#ffc400] hover:text-[#062b68] md:-left-16"
          aria-label="Previous image"
        >
          ❮
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur transition-all duration-300 hover:bg-[#ffc400] hover:text-[#062b68] md:-right-16"
          aria-label="Next image"
        >
          ❯
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-[#ffc400] hover:text-[#062b68]"
          aria-label="Close gallery"
        >
          ✕
        </button>

        {/* Counter */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
          <span className="text-[#ffc400]">{current}</span>
          {" / "}
          {total}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;