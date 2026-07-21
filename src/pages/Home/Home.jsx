import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Icons
import {
  FaShieldAlt,
  FaBalanceScale,
  FaUsers,
  FaBed,
  FaBath,
} from "react-icons/fa";
import { MdLocationOn, MdOutlineSquareFoot } from "react-icons/md";
import {
  LuHouse,
  LuKeyRound,
  LuBriefcaseBusiness,
  LuTrendingUp,
} from "react-icons/lu";

// Import Images
import ctaimg from "../../assets/images/HomeImages/ctaimg.jpg";
import exterior from "../../assets/images/HomeImages/real_exteriorimg.jpg";
import interior from "../../assets/images/HomeImages/real_interiorimg.jpg";
import seaside from "../../assets/images/HomeImages/real_seasideimg.jpg";
import client1 from "../../assets/images/HomeImages/client1.jpg";
import client2 from "../../assets/images/HomeImages/client2.jpg";
import client3 from "../../assets/images/HomeImages/client3.jpg";
import hero1 from "../../assets/images/HomeImages/hero1.jpg";
import hero2 from "../../assets/images/HomeImages/hero2.jpg";
import hero3 from "../../assets/images/HomeImages/hero3.jpg";
import hero4 from "../../assets/images/HomeImages/hero4.jpg";
import hero5 from "../../assets/images/HomeImages/herogymimg.jpg";

function Home() {
  const properties = [
    {
      img: exterior,
      title: "Luxury Apartment",
      location: "Bandra West, Mumbai",
      price: "₹10.25 Cr",
      status: "For Sale",
      beds: 3,
      baths: 2,
      area: "1800 sq.ft",
    },
    {
      img: interior,
      title: "Modern Apartment",
      location: "Alibaug, Maharashtra",
      price: "₹8.90 Cr",
      status: "For Sale",
      beds: 3,
      baths: 2,
      area: "1800 sq.ft",
    },
    {
      img: seaside,
      title: "Seaside Villa",
      location: "Lower Parel, Mumbai",
      price: "₹1.25 L / mo",
      status: "For Rent",
      beds: 3,
      baths: 2,
      area: "1800 sq.ft",
    },
  ];

  const features = [
    { title: "Trusted Deals", icon: <FaShieldAlt /> },
    { title: "Prime Locations", icon: <MdLocationOn /> },
    { title: "Legal Assistance", icon: <FaBalanceScale /> },
    { title: "Experienced Team", icon: <FaUsers /> },
  ];

  const services = [
    { title: "Property Buying", icon: <LuHouse /> },
    { title: "Property Selling", icon: <LuKeyRound /> },
    { title: "Rental Assistance", icon: <LuBriefcaseBusiness /> },
    { title: "Investment Consultation", icon: <LuTrendingUp /> },
  ];

  const reviews = [
    {
      image: client1,
      review: "Excellent service and smooth buying experience.",
      name: "Sarah Johnson",
    },
    {
      image: client2,
      review: "Professional team and transparent process.",
      name: "Emily Brown",
    },
    {
      image: client3,
      review: "Highly recommend Aurelia for luxury properties.",
      name: "David Miller",
    },
  ];

  return (
    <div className="home m-0 p-0 font-[Poppins,sans-serif]">
      {/* HERO SECTION */}
      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden text-center text-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-full w-full"
        >
          {[hero1, hero2, hero3, hero4, hero5].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                className="block h-[100vh] w-full object-cover"
                alt={`Hero ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* HERO OVERLAY */}
        <div className="absolute left-0 z-10 flex h-[84vh] w-full items-center justify-center bg-black/35 text-center">
          <div className="w-[95%] max-w-[1400px] mx-auto">
            <p className="text-[18px] font-bold text-[#d4a33a]">LET'S BEGIN</p>

            <h1 className="my-5 text-[64px] font-bold leading-[1.2] max-[1200px]:text-[56px] max-[992px]:text-[46px] max-[768px]:text-[36px] max-[480px]:text-[30px]">
              Ready to find your
              <br />
              <span className="text-[#d4a33a]">dream property?</span>
            </h1>

            <h5 className="mx-auto max-w-[700px] text-[18px] font-normal leading-[1.8] text-[#ececec] max-[992px]:text-[17px] max-[768px]:text-[16px] max-[480px]:text-[15px]">
              Book a no-obligation site visit or speak with a senior advisor
              today.
            </h5>

            <div className="mt-[35px] flex justify-center gap-[15px] max-[768px]:flex-col max-[768px]:items-center">
              <button className="cursor-pointer rounded-[40px] bg-gradient-to-br from-[#d4a33a] to-[#f4c542] px-[34px] py-[15px] text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_25px_rgba(212,163,58,0.45)] max-[768px]:w-[220px] max-[480px]:w-full">
                View Properties →
              </button>

              <button className="cursor-pointer rounded-[40px] border-2 border-white bg-transparent px-[34px] py-[15px] text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-[5px] hover:bg-white hover:text-[#102040] hover:shadow-[0_12px_25px_rgba(212,163,58,0.45)] max-[768px]:w-[220px] max-[480px]:w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES SECTION */}
      <section className="relative bg-white px-0 py-[90px] max-[992px]:py-[70px] max-[768px]:py-[60px]">
        <div className="mx-auto w-[95%] max-w-[1400px] max-[1200px]:w-[92%] max-[768px]:w-[94%]">
          <p className="mb-[15px] text-[14px] font-semibold uppercase tracking-[3px] text-[#c8a046]">
            FEATURED LISTINGS
          </p>

          <h2 className="mb-5 text-[46px] leading-[1.25] text-[#102040] max-[1200px]:text-[40px] max-[992px]:text-[36px] max-[768px]:text-[30px] max-[480px]:text-[26px]">
            Handpicked properties for
            <br />
            discerning buyers
          </h2>

          <div className="mt-[45px] flex flex-wrap gap-[30px] max-[768px]:flex-col">
            {properties.map((item, index) => (
              <div
                className="group min-w-[300px] flex-1 overflow-hidden rounded-[18px] border-b-[5px] border-[#d4a33a] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-[12px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)] max-[992px]:min-w-[280px] max-[768px]:w-full"
                key={index}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="block h-[240px] w-full object-cover transition duration-500 group-hover:scale-110 max-[1200px]:h-[220px] max-[768px]:h-[220px] max-[480px]:h-[200px]"
                  />

                  <span className="absolute left-3 top-3 rounded-[20px] bg-orange-500 px-3 py-[5px] text-[13px] font-bold tracking-[0.5px] text-white">
                    {item.status}
                  </span>
                </div>

                <h3 className="mx-5 mb-[10px] mt-5 text-[larger] font-bold text-[#102040]">
                  {item.title}
                </h3>

                <div className="mx-5 my-[15px] flex items-center justify-between text-[15px] text-[#666]">
                  <span className="flex items-center gap-[6px]">
                    <FaBed className="text-[16px] text-[#d4a33a]" />
                    {item.beds} Beds
                  </span>

                  <span className="flex items-center gap-[6px]">
                    <FaBath className="text-[16px] text-[#d4a33a]" />
                    {item.baths} Baths
                  </span>

                  <span className="flex items-center gap-[6px]">
                    <MdOutlineSquareFoot className="text-[16px] text-[#d4a33a]" />
                    {item.area}
                  </span>
                </div>

                <div className="mx-[13px] flex items-center gap-2 text-[#666]">
                  <MdLocationOn className="text-[16px] text-[#777]" />
                  {item.location}
                </div>

                <h4 className="mx-5 my-[10px] text-[25px] font-medium tracking-[0.2px] text-[#102040]">
                  {item.price}
                </h4>

                <p className="m-5 inline-flex cursor-pointer items-center gap-[6px] text-[16px] font-semibold text-[#d4a33a] transition duration-300 hover:translate-x-[5px] hover:text-[#102040]">
                  View Details →
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <span className="cursor-default text-[16px] font-semibold text-[#102040] transition duration-300 hover:text-[#d4a33a]">
              View All Properties →
            </span>
          </div>
        </div>
      </section>

      {/* WHY AURELIA */}
      <section className="relative bg-[#f8f9fc] py-[90px] text-center max-[992px]:py-[70px] max-[768px]:py-[60px]">
        <div className="mx-auto w-[95%] max-w-[1400px]">
          <p className="mb-[15px] text-[14px] font-semibold uppercase tracking-[3px] text-[#c8a046]">
            WHY AURELIA
          </p>

          <h2 className="mb-5 text-[46px] leading-[1.25] text-[#102040] max-[1200px]:text-[40px] max-[992px]:text-[36px] max-[768px]:text-[30px] max-[480px]:text-[26px]">
            A standard you can feel
          </h2>

          <div className="mt-[50px] flex flex-wrap items-stretch justify-center gap-[30px] max-[768px]:flex-col">
            {features.map((item, index) => (
              <div
                key={index}
                className="group min-w-[250px] flex-1 rounded-[18px] bg-white px-[30px] py-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-[12px] max-[992px]:basis-[calc(50%-20px)] max-[768px]:w-full max-[768px]:min-w-full"
              >
                <div className="mx-auto mb-[25px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#102040] text-[30px] text-[#d4a33a] transition duration-500 group-hover:rotate-[360deg] max-[480px]:h-[60px] max-[480px]:w-[60px] max-[480px]:text-[26px]">
                  {item.icon}
                </div>

                <h3 className="mb-[15px] text-[22px] text-[#102040]">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-[1.8] text-[#666]">
                  Every transaction is verified with integrity and transparency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-white py-[90px] text-center max-[992px]:py-[70px] max-[768px]:py-[60px]">
        <div className="mx-auto w-[95%] max-w-[1400px]">
          <p className="mb-[15px] text-[14px] font-semibold uppercase tracking-[3px] text-[#c8a046]">
            OUR SERVICES
          </p>

          <h2 className="mb-5 text-[46px] leading-[1.25] text-[#102040] max-[1200px]:text-[40px] max-[992px]:text-[36px] max-[768px]:text-[30px] max-[480px]:text-[26px]">
            Everything, end-to-end
          </h2>

          <div className="mt-[50px] flex flex-wrap items-stretch justify-center gap-[30px] max-[768px]:flex-col">
            {services.map((item, index) => (
              <div
                key={index}
                className="group min-w-[250px] flex-1 rounded-[18px] bg-white px-[25px] py-[35px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-[12px] hover:bg-[#102040] max-[992px]:basis-[calc(50%-20px)] max-[768px]:w-full max-[768px]:min-w-full"
              >
                <div className="mx-auto mb-[25px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f5f5f5] text-[32px] text-[#d4a33a] transition duration-300 group-hover:bg-white max-[480px]:h-[60px] max-[480px]:w-[60px] max-[480px]:text-[26px]">
                  {item.icon}
                </div>

                <h3 className="mb-[15px] text-[22px] text-[#102040] group-hover:text-white">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-[1.8] text-[#666] group-hover:text-white">
                  Professional assistance for your property journey.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[30px] flex justify-end gap-2 text-[16px] font-semibold text-[#102040] transition duration-300 hover:translate-x-1 hover:text-[#d4a33a]">
            <span>More Services</span>
            <span className="text-[18px]">→</span>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-[#f8f9fc] py-[90px] text-center max-[992px]:py-[70px] max-[768px]:py-[60px]">
        <div className="mx-auto w-[95%] max-w-[1400px]">
          <p className="mb-[15px] text-[14px] font-semibold uppercase tracking-[3px] text-[#c8a046]">
            CLIENT STORIES
          </p>

          <h2 className="mb-5 text-[46px] leading-[1.25] text-[#102040] max-[1200px]:text-[40px] max-[992px]:text-[36px] max-[768px]:text-[30px] max-[480px]:text-[26px]">
            Quietly trusted by hundreds
          </h2>

          <div className="mt-[50px] flex flex-wrap items-stretch justify-center gap-[30px] max-[768px]:flex-col">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] flex-1 rounded-[18px] border-t-[5px] border-[#d4a33a] bg-white p-[35px] text-left shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-[12px] max-[992px]:basis-[calc(50%-20px)] max-[768px]:w-full max-[768px]:min-w-full max-[768px]:p-[30px] max-[480px]:p-[25px]"
              >
                <h3 className="text-[22px] tracking-[3px] text-[#d4a33a]">
                  ★★★★★
                </h3>

                <p className="my-[25px] text-[16px] leading-[1.9] text-[#555]">
                  "{item.review}"
                </p>

                <div className="mt-[25px] flex items-center gap-[15px] max-[480px]:gap-[10px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[65px] w-[65px] rounded-full object-cover max-[480px]:h-[55px] max-[480px]:w-[55px]"
                  />

                  <div>
                    <h4 className="mb-[5px] text-[18px] text-[#102040] max-[480px]:text-[16px]">
                      {item.name}
                    </h4>

                    <span className="text-[14px] text-[#888] max-[480px]:text-[13px]">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center bg-no-repeat px-5 py-[100px] text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${ctaimg})`,
        }}
      >
        <div className="mx-auto w-[95%] max-w-[1400px]">
          <h2 className="mb-5 text-[48px] leading-[1.3] text-white max-[768px]:text-[34px]">
            Ready to find your
            <br />
            <span className="text-[#d4a33a]">dream property?</span>
          </h2>

          <button className="m-[10px] rounded-[40px] bg-gradient-to-br from-[#d4a33a] to-[#f4c542] px-[34px] py-[15px] font-semibold text-white transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_25px_rgba(212,163,58,0.45)] max-[768px]:w-[220px] max-[480px]:w-full">
            Book Site Visit
          </button>

          <button className="m-[10px] rounded-[40px] border-2 border-white bg-transparent px-[34px] py-[15px] font-semibold text-white transition duration-300 hover:-translate-y-[5px] hover:bg-white hover:text-[#102040] max-[768px]:w-[220px] max-[480px]:w-full">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
