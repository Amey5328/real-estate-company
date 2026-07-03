const GalleryCard = ({
  image,
  title,
  category,
  location,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay + Content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

        <span className="mb-2 w-fit rounded-full border border-cyan-400 px-3 py-1 text-xs font-semibold uppercase tracking-[3px] text-cyan-300">
          {category}
        </span>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-300">
          📍 {location}
        </p>

        <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all duration-300 group-hover:translate-x-2">
          View Project
          <span>→</span>
        </p>

      </div>
    </div>
  );
};

export default GalleryCard;