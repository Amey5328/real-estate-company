// const About = () => {
//   return <h1>About Page</h1>;
// };

// export default About;

import "./About.css";
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
    <div className="about">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <img src={villa} alt="Luxury Villa" />

          <div className="experience-card">

            <h2>10+</h2>

            <p>
              Years of delivering
              <br />
              exceptional properties.
            </p>

          </div>

        </div>

        <div className="hero-right">

          <p className="hero-subtitle">
            ABOUT AURELIA ESTATES
          </p>

          <h1>
            Built on trust.
            <br />
            Defined by excellence.
          </h1>

          <p>
            Aurelia Estates was founded on a simple belief —
            real estate is not just about properties,
            it's about people, trust and legacy.
          </p>

          <p>
            We started with a passion for connecting
            exceptional homes with exceptional lives.
          </p>

        </div>

      </section>

      {/* Mission Section */}

      <section className="mission">

        <h4>OUR VALUES</h4>

        <h2>Mission, Vision & Values</h2>

        <div className="mission-container">

          {cards.map((card, index) => (

            <div className="card" key={index}>

              <div className="icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

            </div>

          ))}

        </div>

      </section>

      <section className="stats">

  <div className="stats-container">

    {stats.map((item, index) => (

      <div className="stat-card" key={index}>

        <div className="stat-icon">
          {item.icon}
        </div>

        <h2>{item.number}</h2>

        <p>{item.title}</p>

      </div>

    ))}

  </div>

</section>

   {/* ================= CTA SECTION ================= */}

<section className="cta">

  <h2>Ready to Find Your Dream Home?</h2>

  <p>
    Let our experienced team help you discover the perfect
    luxury property that matches your lifestyle and dreams.
  </p>

  <div className="cta-buttons">

    <button className="primary-btn">
      Explore Properties
    </button>

    <button className="secondary-btn">
      Contact Us
    </button>

  </div>

</section>

  {/* 👇 Paste the Team Section HERE */}
  <section className="team">

    <h4>OUR TEAM</h4>

    <h2>Meet Our Experts</h2>

    <div className="team-container">

      {team.map((member, index) => (

        <div className="team-card" key={index}>

          <img
            src={member.image}
            alt={member.name}
          />

          <div className="team-info">

            <h3>{member.name}</h3>

            <p>{member.role}</p>

          </div>

        </div>

      ))}

    </div>

  </section>

</div>

    
  );
}

export default About;
