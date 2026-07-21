import villa from "../../assets/images/logo/aboutImages/real_villa.jpg";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaAward,
  FaBuilding,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";

import team1 from "../../assets/images/logo/aboutImages/real_profile1.jpg";
import team2 from "../../assets/images/logo/aboutImages/real_profile2.jpg";
import team3 from "../../assets/images/logo/aboutImages/real_profile3.jpg";
import team4 from "../../assets/images/logo/aboutImages/real_profile4.jpg";

function About() {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Mission",
      description:
        "To connect people with beautiful homes through honesty and exceptional service.",
    },
    {
      icon: <FaEye />,
      title: "Vision",
      description:
        "To become one of the most trusted luxury real estate companies.",
    },
    {
      icon: <FaHeart />,
      title: "Core Values",
      description:
        "Integrity, excellence, innovation and customer satisfaction.",
    },
  ];

  const stats = [
    {
      icon: <FaAward />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <FaBuilding />,
      number: "1000+",
      title: "Luxury Properties",
    },
    {
      icon: <FaUsers />,
      number: "500+",
      title: "Happy Clients",
    },
    {
      icon: <FaDollarSign />,
      number: "$2.4B",
      title: "Property Sold",
    },
  ];

  const team = [
    {
      image: team1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
    },
    {
      image: team2,
      name: "David Wilson",
      role: "Property Consultant",
    },
    {
      image: team3,
      name: "Emily Brown",
      role: "Interior Designer",
    },
    {
      image: team4,
      name: "Michael Carter",
      role: "Investment Advisor",
    },
  ];

  return (
    
  <div className="w-full bg-white font-sans">

    <div className="about-about px-[8%] py-20"></div>
    <div className="about-about w-full px-[8%] py-20 bg-white font-sans">
      {/* Hero Section */}
      <section className="about-hero flex flex-col lg:flex-row items-center justify-between gap-[70px] animate-[fadeUp_.8s_ease]">
        <div className="about-hero-left flex-1 relative">
          <img
            src={villa}
            alt="Luxury Villa"
            className="w-full rounded-[25px] block object-cover"
          />

          <div className="about-experience-card absolute -bottom-4 right-6 bg-[#D6A028] rounded-xl shadow-xl px-5 py-3 w-[220px]">
            <h2 className="text-[32px] font-serif text-[#102040] leading-none">
              10+
            </h2>

            <p className="mt-1 text-[11px] font-medium text-[#102040] whitespace-nowrap">
              Years curating extraordinary properties.
            </p>
          </div>
        </div>

        <div className="about-hero-right flex-1 text-center lg:text-left">
          <p className="about-hero-subtitle mb-5 text-[14px] font-bold tracking-[3px] text-[#D6A028]">
            ABOUT AURELIA ESTATES
          </p>

          <h1 className="mb-[25px] font-serif text-[34px] leading-[1.2] text-[#102040] md:text-[42px] lg:text-[55px]">
            Built on trust.
            <br />
            Defined by excellence.
          </h1>

          <p className="mb-5 text-[16px] leading-[1.8] text-[#666] md:text-[18px]">
            Aurelia Estates was founded on a simple belief — real estate is not
            just about properties, it's about people, trust and legacy.
          </p>

          <p className="text-[16px] leading-[1.8] text-[#666] md:text-[18px]">
            We started with a passion for connecting exceptional homes with
            exceptional lives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission mt-[120px] animate-[fadeUp_.8s_ease]">
        <h4 className="mb-[10px] text-center tracking-[3px] text-[#D6A028]">
          OUR VALUES
        </h4>

        <h2 className="mb-[60px] text-center font-serif text-[32px] text-[#102040] md:text-[45px]">
          Mission, Vision & Values
        </h2>

        <div className="about-mission-container grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              className="about-card rounded-[20px] bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-[10px]"
              key={index}
            >
              <div className="about-icon mb-[25px] flex h-[70px] w-[70px] items-center justify-center rounded-[18px] bg-[#102040] text-[28px] text-[#D6A028]">
                {card.icon}
              </div>

              <h3 className="mb-5 text-[#102040]">{card.title}</h3>

              <p className="leading-[1.8] text-[#666]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
      {/* Stats Section */}
      <section className="about-stats w-full bg-[#081B44] py-24">

  <div className="mx-auto max-w-[1400px] px-[8%]">

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

      {stats.map((item, index) => (

        <div
          key={index}
          className="flex flex-col items-center text-center"
        >

          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#D6A028] text-3xl text-[#D6A028]">

            {item.icon}

          </div>

          <h2 className="font-serif text-[60px] leading-none text-[#D6A028]">

            {item.number}

          </h2>

          <p className="mt-4 text-lg text-white">

            {item.title}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      <div className="about-about px-[8%]">

      

      {/* CTA Section */}
      <section className="about-cta mt-[120px] rounded-[25px] bg-[#102040] px-10 py-20 text-center text-white animate-[fadeUp_.8s_ease]">
        <h2 className="mb-5 font-serif text-[32px] text-white md:text-[48px]">
          Ready to Find Your Dream Home?
        </h2>

        <p className="mx-auto mb-10 max-w-[700px] text-[18px] leading-[1.8] text-[#ddd]">
          Let our experienced team help you discover the perfect luxury property
          that matches your lifestyle and dreams.
        </p>

        <div className="about-cta-buttons flex flex-col justify-center gap-5 md:flex-row">
          <button className="about-primary-btn w-full rounded-full bg-[#D4A017] px-[35px] py-[15px] text-[17px] font-bold text-[#102040] transition duration-300 hover:-translate-y-[5px] md:w-auto">
            Explore Properties
          </button>

          <button className="about-secondary-btn w-full rounded-full border-2 border-white bg-transparent px-[35px] py-[15px] text-[17px] text-white transition duration-300 hover:bg-white hover:text-[#102040] md:w-auto">
            Contact Us
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team mt-[120px] animate-[fadeUp_.8s_ease]">
        <h4 className="mb-[10px] text-center tracking-[3px] text-[#D6A028]">
          OUR TEAM
        </h4>

        <h2 className="mb-[60px] text-center font-serif text-[32px] text-[#102040] md:text-[45px]">
          Meet Our Experts
        </h2>

        <div className="about-team-container grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              className="about-team-card overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-[10px]"
              key={index}
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[320px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="about-team-info p-[25px] text-center">
                <h3 className="mb-2 text-[#102040]">{member.name}</h3>

                <p className="text-[#777]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
