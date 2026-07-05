import { Link } from "react-router-dom";

const ServiceCard = ({
  icon: Icon,
  number,
  title,
  description,
  featured = false,
}) => {
  return (
    <article
      className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
        featured
          ? "border-[#ffc400] bg-[#0b3475] shadow-xl"
          : "border-slate-200 bg-white shadow-sm hover:border-[#ffc400]/70 hover:shadow-2xl"
      }`}
    >
      {/* Service Number */}
      <span
        className={`absolute right-7 top-5 text-5xl font-bold transition duration-500 ${
          featured
            ? "text-white/5"
            : "text-slate-100 group-hover:text-[#ffc400]/10"
        }`}
      >
        {number}
      </span>

      {/* Icon */}
      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 ${
          featured
            ? "bg-[#ffc400] text-[#0b3475]"
            : "bg-[#0b3475] text-[#ffc400]"
        }`}
      >
        <Icon className="text-2xl" />
      </div>

      <h3
        className={`mt-7 text-2xl font-bold ${
          featured ? "text-white" : "text-[#0b3475]"
        }`}
      >
        {title}
      </h3>

      <div className="mt-4 h-0.5 w-11 bg-[#ffc400] transition-all duration-500 group-hover:w-20" />

      <p
        className={`mt-5 leading-7 ${
          featured ? "text-blue-100/80" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      {/* Push enquiry to bottom */}
      <Link
        to="/contact"
        className={`mt-auto flex w-fit items-center gap-2 pt-7 font-semibold transition-all duration-300 ${
          featured
            ? "text-[#ffc400]"
            : "text-[#0b3475] group-hover:text-[#d9a700]"
        }`}
      >
        Make an Enquiry

        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>

      {/* Bottom Hover Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ffc400] transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

export default ServiceCard;