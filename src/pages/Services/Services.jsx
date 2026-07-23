import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServicesCard";
import servicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0b3475] py-28">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#ffc400]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#ffc400]/20 px-5 py-2 text-sm font-semibold tracking-wider text-[#ffc400]">
            OUR SERVICES
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Complete Construction
            <br />
            Solutions Under One Roof
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            From planning and design to execution and maintenance, we deliver
            reliable construction services tailored to residential,
            commercial and industrial projects.
          </p>

          <a
            href="#services-grid"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#ffc400] px-8 py-4 font-semibold text-[#0b3475] transition hover:scale-105"
          >
            Explore Services
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Services Intro */}
      <section
        id="services-grid"
        className="bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[4px] text-[#ffc400]">
              WHAT WE OFFER
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
              Professional Construction Services
            </h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-[#ffc400]"></div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Explore our wide range of construction and design services.
              Click <strong>Learn More</strong> to view detailed information
              about each service.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                number={service.number}
                title={service.title}
                description={service.description}
                icon={service.icon}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;