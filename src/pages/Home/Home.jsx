import React from "react";

import "./Home.css";
// import swiper for hero section
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Icons
import { FaShieldAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";

// Import Images
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
import hero5 from "../../assets/images/HomeImages/hero5.jpg";

function Home() {
  // Properties array
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
  // Features array
  const features = [
    {
      title: "Trusted Deals",
      icon: <FaShieldAlt />,
    },
    {
      title: "Prime Locations",
      icon: <MdLocationOn />,
    },
    {
      title: "Legal Assistance",
      icon: <FaBalanceScale />,
    },
    {
      title: "Experienced Team",
      icon: <FaUsers />,
    },
  ];

  // Services array
  const services = [
    {
      title: "Property Buying",
      icon: <LuHouse />,
    },
    {
      title: "Property Selling",
      icon: <LuKeyRound />,
    },
    {
      title: "Rental Assistance",
      icon: <LuBriefcaseBusiness />,
    },
    {
      title: "Investment Consultation",
      icon: <LuTrendingUp />,
    },
  ];

  // Reviews Array
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
    <div className="home">
      {/* Hero section */}

      <section className="hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <img src={hero1} className="hero-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={hero2} className="hero-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={hero3} className="hero-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={hero4} className="hero-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={hero5} className="hero-img" />
          </SwiperSlide>
        </Swiper>

        {/* Content Shown in Hero section */}
        <div className="hero-overlay">
          <div className="home-container">
            <p>LET'S BEGIN</p>

            <h1>
              Ready to find your
              <br />
              <span> dream property?</span>
            </h1>

            <h5>
              Book a no-obligation site visit or speak with a senior advisor
              today.
            </h5>

            <div>
              <button>View Properties →</button>
              <button className="outline">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="properties">
        <div className="home-container">
          <p className="small">FEATURED LISTINGS</p>
          <h2>
            Handpicked properties for
            <br />
            discerning buyers
          </h2>

          <div className="card-container">
            {properties.map((item, index) => (
              <div className="property-card" key={index}>
                <div className="image-box">
                  <img src={item.img} alt={item.title} />

                  <span className="badge">{item.status}</span>
                </div>

                <h3>{item.title}</h3>
                <div className="property-details">
                  <span>
                    <FaBed /> {item.beds} Beds
                  </span>

                  <span>
                    <FaBath /> {item.baths} Baths
                  </span>

                  <span>
                    <MdOutlineSquareFoot /> {item.area}
                  </span>
                </div>

                <div className="property-location">
                  <p>
                    <MdLocationOn />
                    {item.location}
                  </p>
                </div>

                <h4 className="property-price">{item.price}</h4>

                <p className="view-details">View Details →</p>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <span className="view-all">View All Properties →</span>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="why">
        <div className="home-container">
          <p className="small">WHY AURELIA</p>

          <h2>A standard you can feel</h2>

          <div className="feature-box">
            {features.map((item, index) => (
              <div className="box" key={index}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>

                <p>
                  Every transaction is verified with integrity and transparency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="home-container">
          <p className="small">OUR SERVICES</p>

          <h2>Everything, end-to-end</h2>

          <div className="service-container">
            {services.map((item, index) => (
              <div className="service-box" key={index}>
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>

                <p>Professional assistance for your property journey.</p>
              </div>
            ))}
          </div>
          <div className="more-services">
            <span>More Services</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="reviews">
        <div className="home-container">
          <p className="small">CLIENT STORIES</p>

          <h2>Quietly trusted by hundreds</h2>

          <div className="review-container">
            {reviews.map((item, index) => (
              <div className="review-card" key={index}>
                <h3>★★★★★</h3>

                <p className="review-text">"{item.review}"</p>

                <div className="client-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="client-img"
                  />

                  <div>
                    <h4>{item.name}</h4>
                    <span>Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="cta">
        <div className="home-container">
          <h2>
            Ready to find your
            <br />
            <span> dream property?</span>
          </h2>

          <button>Book Site Visit</button>

          <button className="outline">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
