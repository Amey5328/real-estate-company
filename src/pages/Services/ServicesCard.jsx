import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  id,
  icon: Icon,
  number,
  title,
  description,
}) => {
  return (
    <article className="group flex h-[320px] flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#ffc400] hover:shadow-xl">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0b3475] text-[#ffc400] transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#0b3475]">
            <Icon className="text-2xl" />
          </div>

          <h3 className="line-clamp-2 text-xl font-bold leading-snug text-[#0b3475]">
            {title}
          </h3>

        </div>

        <span className="ml-4 text-4xl font-bold text-slate-100 transition group-hover:text-[#ffc400]/20">
          {number}
        </span>

      </div>

      {/* Divider */}
      <div className="mt-6 h-[3px] w-14 rounded-full bg-[#ffc400]" />

      {/* Description */}
      <div className="mt-5 h-[96px] overflow-hidden">
        <p className="text-[16px] leading-7 text-slate-600">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-slate-100 pt-5">

        <Link
          to={`/services/${id}`}
          className="inline-flex items-center gap-2 font-semibold text-[#0b3475] transition-all duration-300 hover:gap-3 hover:text-[#ffc400]"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
};

export default ServiceCard;