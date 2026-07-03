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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-6xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          className="absolute left-2 md:-left-16 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur transition hover:bg-cyan-400 hover:text-slate-900"
        >
          ❮
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={image}
            alt={title}
            className="max-h-[85vh] w-full object-contain"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 md:-right-16 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur transition hover:bg-cyan-400 hover:text-slate-900"
        >
          ❯
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-2xl text-white transition hover:rotate-90 hover:bg-red-600"
        >
          ✕
        </button>

        {/* Counter */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
          {current} / {total}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;