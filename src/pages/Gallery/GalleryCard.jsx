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
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#ffc400]/70 hover:shadow-2xl"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Permanent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#062b68]/50 via-transparent to-transparent" />

      {/* Hover Overlay + Content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#062b68]/95 via-[#0b3475]/55 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">

        <span className="mb-3 w-fit rounded-full border border-[#ffc400]/70 bg-[#ffc400]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[3px] text-[#ffc400]">
          {category}
        </span>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-blue-100/80">
          📍 {location}
        </p>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-[#ffc400]/70 to-transparent" />

        <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#ffc400]">
          <span>View Project</span>

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </p>

      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ffc400] transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default GalleryCard;