import { Link, Navigate, useParams } from "react-router-dom";
import {
    FaArrowLeft,
    FaCheckCircle,
    FaClipboardList,
    FaCogs,
    FaStar,
    FaUsers,
    FaAward,
    FaShieldAlt,
    FaClock,
} from "react-icons/fa";

import {
    Users,
    Award,
    Clock3,
    MessageSquare,
    ShieldCheck,
    HeartHandshake,
    Plus, Minus
} from "lucide-react";
import { useState } from "react";

import servicesData from "./ServicesData";

const whyChooseIcons = [
    Users,
    Award,
    Clock3,
    MessageSquare,
    ShieldCheck,
    HeartHandshake,
];

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const service = servicesData.find(
        (item) => item.id === serviceId
    );
    
const [openFAQ, setOpenFAQ] = useState(null);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="bg-gray-50">


            {/* Hero */}

            <section
                className="relative h-[500px] overflow-hidden"
            >

                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-900/75" />

                <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6">

                    {/* Breadcrumb */}

                    <div className="mb-6 flex items-center gap-2 text-sm text-yellow-400">

                        <Link to="/">Home</Link>

                        <span>/</span>

                        <Link to="/services">Services</Link>

                        <span>/</span>

                        <span className="text-white">
                            {service.title}
                        </span>

                    </div>

                    <h1 className="max-w-3xl text-6xl font-bold leading-tight text-white">
                        {service.title}
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
                        {service.description}
                    </p>

                </div>

            </section>

            {/* Overview */}

            <section className="bg-white py-24">
                <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2">

                    {/* Image */}

                    <div className="overflow-hidden rounded-3xl shadow-xl">

                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover transition duration-700 hover:scale-105"
                        />

                    </div>

                    {/* Content */}

                    <div>

                        <span className="font-semibold uppercase tracking-[3px] text-[#ffc400]">
                            About This Service
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
                            {service.title}
                        </h2>

                        <div className="mt-5 h-1 w-20 rounded-full bg-[#ffc400]" />

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            {service.overview}
                        </p>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2">

                            <div className="flex items-center gap-4">
                                <FaUsers className="text-2xl text-[#ffc400]" />
                                <span className="font-medium">
                                    Experienced Team
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaAward className="text-2xl text-[#ffc400]" />
                                <span className="font-medium">
                                    Premium Quality
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaShieldAlt className="text-2xl text-[#ffc400]" />
                                <span className="font-medium">
                                    Trusted Construction
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaClock className="text-2xl text-[#ffc400]" />
                                <span className="font-medium">
                                    On-Time Delivery
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* Key Benefits */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-[1400px] px-6">

                    <div className="text-center">

                        <span className="font-semibold uppercase tracking-[3px] text-[#ffc400]">
                            Advantages
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
                            Key Benefits
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ffc400]" />

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {service.benefits.map((benefit, index) => (

                            <div
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#ffc400] hover:shadow-xl"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b3475] text-[#ffc400] transition group-hover:bg-[#ffc400] group-hover:text-[#0b3475]">

                                    <FaCheckCircle className="text-2xl" />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#0b3475]">
                                    {benefit}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    We focus on delivering this benefit consistently across every project through careful planning, quality execution, and dedicated customer support.
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* Scope of Work */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-[1400px] px-6">

                    <div className="text-center">

                        <span className="font-semibold uppercase tracking-[3px] text-[#ffc400]">
                            What We Do
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
                            Scope of Work
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ffc400]" />

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            We provide comprehensive construction solutions covering every stage of
                            your project, from planning to successful completion.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {service.scope.map((item, index) => (

                            <div
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#ffc400] hover:shadow-xl"
                            >

                                <div className="flex items-center gap-5">

                                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0b3475] text-2xl font-bold text-[#ffc400] transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#0b3475]">
                                        {index + 1}
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#0b3475]">
                                        {item.title}
                                    </h3>

                                </div>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* Process */}

            <section className="bg-white py-24">
                <div className="mx-auto max-w-[1400px] px-6">

                    {/* Section Heading */}

                    <div className="text-center">

                        <span className="font-semibold uppercase tracking-[3px] text-[#ffc400]">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
                            Our Construction Process
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ffc400]" />

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Every successful project follows a clear and organized process that
                            ensures quality, transparency, and timely completion.
                        </p>

                    </div>

                    {/* Timeline */}

                    <div className="mt-20 flex flex-col gap-12 xl:flex-row xl:justify-between">
                        {service.process.map((step, index) => (

                            <div
                                key={index}
                                className="group relative text-center"
                            >

                                {index !== service.process.length - 1 && (
                                    <div className="absolute left-[60%] top-8 hidden h-[3px] w-full bg-slate-200 xl:block"></div>
                                )}

                                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0b3475] text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffc400] group-hover:text-[#0b3475]">
                                    {index + 1}
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-[#0b3475]">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
            {/* Why Choose Us */}

            <section className="bg-white py-24">
                <div className="mx-auto max-w-[1400px] px-6">

                    <div className="text-center">
                        <span className="font-semibold uppercase tracking-[3px] text-[#ffc400]">
                            Why Choose Us
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
                            Building Trust Through Excellence
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ffc400]" />

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            We combine expertise, innovation, and commitment to deliver construction
                            solutions that meet the highest standards of quality and client satisfaction.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {service.whyChooseUs.map((item, index) => {

                            const Icon = whyChooseIcons[index % whyChooseIcons.length];

                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#ffc400] hover:shadow-xl"
                                >

                                    <div className="flex items-center gap-5">

                                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0b3475] text-[#ffc400] transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#0b3475]">

                                            <Icon size={30} />

                                        </div>

                                        <h3 className="text-2xl font-bold text-[#0b3475]">
                                            {item.title}
                                        </h3>

                                    </div>

                                    <p className="mt-6 leading-7 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>

            {/* FAQ */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-5xl px-6">

                    <div className="text-center">

                        <span className="font-semibold uppercase tracking-[3px] text-[#ffc400]">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#0b3475]">
                            Have Questions?
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ffc400]" />

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Here are answers to some of the most common questions about our construction services.
                        </p>

                    </div>

                    <div className="mt-16 space-y-5">

                        {service.faq.map((item, index) => (

                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                            >

                                <button
                                    onClick={() =>
                                        setOpenFAQ(openFAQ === index ? null : index)
                                    }
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >

                                    <h3 className="text-lg font-semibold text-[#0b3475]">
                                        {item.question}
                                    </h3>

                                    {openFAQ === index ? (
                                        <Minus className="text-[#ffc400]" />
                                    ) : (
                                        <Plus className="text-[#ffc400]" />
                                    )}

                                </button>

                                {openFAQ === index && (

                                    <div className="border-t border-slate-200 px-6 pb-6 pt-4">

                                        <p className="leading-7 text-slate-600">
                                            {item.answer}
                                        </p>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>
            </section>
{/* CTA */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">

        {/* Left Side */}

        <div>

          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#0b3475]">
            Let's Build Together
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#0b3475]">
            Ready to Turn Your Vision
            <span className="block text-[#ffc400]">
              Into Reality?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're planning a residential, commercial, or industrial
            project, our experienced team is ready to deliver exceptional
            quality, innovative solutions, and reliable construction services
            from concept to completion.
          </p>

        </div>

        {/* Right Side */}

        <div className="rounded-3xl bg-slate-50 p-8">

          <h3 className="text-2xl font-bold text-[#0b3475]">
            Why Work With Us?
          </h3>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-xl text-[#ffc400]" />
              <span className="text-slate-700">
                Free Project Consultation
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-xl text-[#ffc400]" />
              <span className="text-slate-700">
                Experienced Construction Experts
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-xl text-[#ffc400]" />
              <span className="text-slate-700">
                Transparent Pricing
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-xl text-[#ffc400]" />
              <span className="text-slate-700">
                On-Time Project Delivery
              </span>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/contact"
              className="rounded-xl bg-[#0b3475] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#092b5f]"
            >
              Get Free Consultation
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-[#0b3475] px-8 py-4 font-semibold text-[#0b3475] transition-all duration-300 hover:bg-[#0b3475] hover:text-white"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
        </div>
    );
};

export default ServiceDetails;