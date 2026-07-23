import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaKey,
  FaHardHat,
  FaTools,
  FaWarehouse,
  FaCity,
  FaHospital,
  FaSchool,
  FaHotel,
  FaPencilRuler,
  FaDraftingCompass,
  FaCouch,
  FaPaintRoller,
  FaHammer,
  FaTint,
  FaWrench,
  FaTrashAlt,
  FaTasks,
  FaCalculator,
  FaTree,
  FaBolt,
  FaFaucet,
} from "react-icons/fa";

import residentialImg from "../../assets/images/services/residential.jpg";
import commercialImg from "../../assets/images/services/commercial.jpg";
import industrialImg from "../../assets/images/services/industrial.jpg";
import turnkeyImg from "../../assets/images/services/turnkey.jpg";
import civilImg from "../../assets/images/services/civil.jpg";
import contractorImg from "../../assets/images/services/contractor.jpg";
import rccImg from "../../assets/images/services/rcc.jpg";

const servicesData = [
  {
    id: "residential-construction",
    number: "01",
    title: "Residential Construction",
    description:
      "Professional construction services for villas, duplexes, apartments, and custom homes.",

    overview:
      "We build high-quality residential spaces designed around your lifestyle. From planning and approvals to construction and final handover, our experienced team ensures every home is completed with precision, safety, and premium craftsmanship.",

    image: residentialImg,

    icon: FaHome,

    benefits: [
      "Premium quality materials",
      "Experienced engineers",
      "On-time project delivery",
      "Transparent pricing",
    ],
    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Site Consultation",
        description: "We visit the site and understand your family's requirements."
      },
      {
        title: "Design & Planning",
        description: "Architectural drawings and structural plans are prepared."
      },
      {
        title: "Construction",
        description: "The home is built using premium materials and skilled labor."
      },
      {
        title: "Quality Inspection",
        description: "Every phase undergoes detailed quality checks."
      },
      {
        title: "Home Handover",
        description: "Your dream home is delivered ready for occupancy."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "commercial-construction",
    number: "02",
    title: "Commercial Construction",
    description:
      "Construction solutions for offices, retail stores, malls, and commercial complexes.",

    overview:
      "Our commercial construction services focus on creating functional and modern business spaces that meet industry standards while ensuring timely project completion.",

    image: commercialImg,

    icon: FaBuilding,

    benefits: [
      "Efficient project management",
      "Modern infrastructure",
      "Energy-efficient designs",
      "Budget-friendly execution",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "industrial-construction",
    number: "03",
    title: "Industrial Construction",
    description:
      "Construction of factories, industrial plants, and manufacturing facilities.",

    overview:
      "We deliver industrial buildings designed for productivity, durability, and operational efficiency while complying with safety standards.",

    image: industrialImg,

    icon: FaIndustry,

    benefits: [
      "Industrial-grade materials",
      "Safe construction",
      "Heavy-duty structures",
      "Long-term durability",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],
    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "turnkey-construction",
    number: "04",
    title: "Turnkey Construction",
    description:
      "Complete end-to-end construction solutions from planning to handover.",

    overview:
      "Our turnkey construction service manages every stage of your project, allowing you to receive a fully completed building without coordinating multiple contractors.",

    image: turnkeyImg,

    icon: FaKey,

    benefits: [
      "Single point of contact",
      "Cost control",
      "Time-saving execution",
      "Stress-free construction",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],

    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],
    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "civil-construction",
    number: "05",
    title: "Civil Construction",
    description:
      "Reliable civil engineering and infrastructure development services.",

    overview:
      "We undertake civil construction projects including roads, drainage systems, retaining walls, and infrastructure development with precision engineering.",

    image: civilImg,

    icon: FaHardHat,

    benefits: [
      "Strong engineering",
      "Modern equipment",
      "Durable structures",
      "Quality control",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "building-contractors",
    number: "06",
    title: "Building Contractors",
    description:
      "Professional building contracting services for residential and commercial projects.",

    overview:
      "Our skilled contractors manage every stage of construction while maintaining quality, safety, and timely delivery.",

    image: contractorImg,

    icon: FaTools,

    benefits: [
      "Experienced workforce",
      "Professional supervision",
      "Transparent pricing",
      "Quality workmanship",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "rcc-construction",
    number: "07",
    title: "RCC Construction",
    description:
      "Strong reinforced cement concrete structures for long-lasting buildings.",

    overview:
      "We specialize in RCC construction using advanced engineering methods to create safe, durable, and high-strength structures for all project types.",

    image: rccImg,

    icon: FaBuilding,

    benefits: [
      "High structural strength",
      "Durable construction",
      "Earthquake-resistant design",
      "Premium concrete quality",
    ],
    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "villa-construction",
    number: "08",
    title: "Villa Construction",
    description:
      "Luxury villa construction services tailored to your lifestyle and architectural vision.",

    overview:
      "We specialize in designing and constructing elegant villas with premium materials, modern layouts, and exceptional craftsmanship. Every project is customized to reflect your personal style while ensuring comfort, durability, and functionality.",

    image: residentialImg,

    icon: FaHome,

    benefits: [
      "Customized luxury designs",
      "Premium quality finishes",
      "Smart space planning",
      "Long-lasting construction",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],
    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "apartment-construction",
    number: "09",
    title: "Apartment Construction",
    description:
      "Construction of residential apartment buildings with modern amenities and efficient layouts.",

    overview:
      "Our apartment construction services focus on creating comfortable, safe, and sustainable living spaces while maintaining structural integrity and efficient project execution.",

    image: residentialImg,

    icon: FaCity,

    benefits: [
      "Efficient space utilization",
      "Modern amenities",
      "High-quality materials",
      "Timely project completion",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],
    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "office-construction",
    number: "10",
    title: "Office Construction",
    description:
      "Modern office construction designed for productivity, functionality, and aesthetics.",

    overview:
      "We develop professional office spaces that encourage collaboration, improve productivity, and create a strong brand image while meeting all commercial construction standards.",

    image: commercialImg,

    icon: FaBuilding,

    benefits: [
      "Modern office layouts",
      "Efficient project execution",
      "Energy-efficient solutions",
      "Flexible workspace design",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "warehouse-construction",
    number: "11",
    title: "Warehouse Construction",
    description:
      "Construction of durable warehouses and storage facilities for industrial and commercial use.",

    overview:
      "We build high-capacity warehouses with optimized layouts, durable structural systems, and efficient storage solutions that support smooth business operations.",

    image: industrialImg,

    icon: FaWarehouse,

    benefits: [
      "Large storage capacity",
      "Durable structures",
      "Optimized layouts",
      "Cost-effective construction",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "factory-construction",
    number: "12",
    title: "Factory Construction",
    description:
      "Construction of manufacturing facilities with robust industrial infrastructure.",

    overview:
      "Our factory construction services provide efficient production environments designed for heavy machinery, workflow optimization, and long-term operational performance.",

    image: industrialImg,

    icon: FaIndustry,

    benefits: [
      "Heavy-duty structures",
      "Optimized production layouts",
      "Safety compliance",
      "Durable construction",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "hospital-construction",
    number: "13",
    title: "Hospital Construction",
    description:
      "Healthcare facility construction designed for patient comfort, safety, and operational efficiency.",

    overview:
      "We construct hospitals, clinics, and healthcare facilities that meet medical standards while providing functional spaces for patients, doctors, and healthcare professionals.",

    image: commercialImg,

    icon: FaHospital,

    benefits: [
      "Healthcare-compliant design",
      "Patient-focused infrastructure",
      "Modern medical facilities",
      "Safe construction practices",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "school-construction",
    number: "14",
    title: "School Construction",
    description:
      "Educational infrastructure designed to provide safe, inspiring, and functional learning environments.",

    overview:
      "We build schools, colleges, and educational institutions with durable structures, modern classrooms, and student-friendly facilities that encourage learning and growth.",

    image: commercialImg,

    icon: FaSchool,

    benefits: [
      "Safe learning environment",
      "Modern classrooms",
      "Durable construction",
      "Efficient project execution",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],
    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "hotel-construction",
    number: "15",
    title: "Hotel Construction",
    description:
      "Premium hotel and hospitality construction services focused on luxury, comfort, and functionality.",

    overview:
      "We construct hotels, resorts, and hospitality projects that combine elegant architecture with durable construction. Our team ensures every project delivers exceptional guest experiences while meeting modern hospitality standards.",

    image: commercialImg,

    icon: FaHotel,

    benefits: [
      "Luxury architectural finishes",
      "Premium construction quality",
      "Modern hospitality infrastructure",
      "Timely project completion",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "architectural-design",
    number: "16",
    title: "Architectural Design",
    description:
      "Innovative architectural design services that transform ideas into inspiring structures.",

    overview:
      "Our architects create modern, functional, and sustainable designs tailored to your vision. We focus on aesthetics, practicality, and compliance with construction standards.",

    image: commercialImg,

    icon: FaPencilRuler,

    benefits: [
      "Creative design concepts",
      "Optimized space planning",
      "Sustainable architecture",
      "Client-focused solutions",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "structural-design",
    number: "17",
    title: "Structural Design",
    description:
      "Safe and efficient structural engineering solutions for every type of construction project.",

    overview:
      "We design strong and reliable structural systems that ensure durability, safety, and compliance with engineering standards while optimizing construction costs.",

    image: industrialImg,

    icon: FaDraftingCompass,

    benefits: [
      "Earthquake-resistant designs",
      "Optimized structural systems",
      "Cost-effective engineering",
      "Long-term durability",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "interior-design",
    number: "18",
    title: "Interior Design",
    description:
      "Stylish and functional interior solutions for residential and commercial spaces.",

    overview:
      "We design interiors that combine beauty, comfort, and functionality. From furniture planning to lighting and décor, every detail is carefully planned to create inspiring spaces.",

    image: commercialImg,

    icon: FaCouch,

    benefits: [
      "Customized interiors",
      "Premium finishes",
      "Modern aesthetics",
      "Space optimization",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],
    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "exterior-design",
    number: "19",
    title: "Exterior Design",
    description:
      "Modern exterior design solutions that enhance the beauty and value of every property.",

    overview:
      "Our exterior designers create visually attractive façades and outdoor spaces that reflect your style while ensuring durability and weather resistance.",

    image: commercialImg,

    icon: FaPaintRoller,

    benefits: [
      "Beautiful elevations",
      "Weather-resistant materials",
      "Improved curb appeal",
      "Long-lasting finishes",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],
    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "renovation",
    number: "20",
    title: "Renovation",
    description:
      "Professional renovation services that transform old spaces into modern, functional environments.",

    overview:
      "Whether it's a home, office, or commercial property, we provide complete renovation solutions including structural improvements, interior upgrades, and modern finishes.",

    image: contractorImg,

    icon: FaHammer,

    benefits: [
      "Modern upgrades",
      "Improved functionality",
      "Enhanced property value",
      "Affordable renovation solutions",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "waterproofing",
    number: "21",
    title: "Waterproofing",
    description:
      "Reliable waterproofing solutions that protect buildings from leakage, moisture, and structural damage.",

    overview:
      "We provide advanced waterproofing treatments for roofs, terraces, basements, bathrooms, and walls using premium waterproofing materials and proven techniques.",

    image: contractorImg,

    icon: FaTint,

    benefits: [
      "Leakage prevention",
      "Moisture protection",
      "Long-lasting waterproof coating",
      "Increased building life",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "building-repairs",
    number: "22",
    title: "Building Repairs",
    description:
      "Comprehensive repair and maintenance solutions to restore the strength, safety, and appearance of your property.",

    overview:
      "Our building repair services cover structural repairs, crack filling, plaster restoration, flooring repairs, and preventive maintenance to extend the life of residential and commercial buildings.",

    image: contractorImg,

    icon: FaWrench,

    benefits: [
      "Fast repair services",
      "Experienced technicians",
      "Durable repair solutions",
      "Affordable maintenance plans",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],


    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }

    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "demolition",
    number: "23",
    title: "Demolition",
    description:
      "Safe and controlled demolition services for residential, commercial, and industrial structures.",

    overview:
      "We provide professional demolition services using modern equipment while following strict safety standards and environmental regulations.",

    image: industrialImg,

    icon: FaTrashAlt,

    benefits: [
      "Safe demolition methods",
      "Modern machinery",
      "Minimal environmental impact",
      "Timely execution",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "project-management",
    number: "24",
    title: "Project Management",
    description:
      "Professional construction project management ensuring quality, cost control, and timely completion.",

    overview:
      "Our project managers coordinate planning, procurement, execution, quality control, and communication to deliver successful construction projects.",

    image: commercialImg,

    icon: FaTasks,

    benefits: [
      "Better cost control",
      "Timely project delivery",
      "Risk management",
      "Quality assurance",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "cost-estimation",
    number: "25",
    title: "Cost Estimation",
    description:
      "Accurate construction cost estimation to help clients plan projects confidently.",

    overview:
      "We prepare detailed project estimates covering materials, labour, equipment, and timelines to ensure complete budget transparency before construction begins.",

    image: commercialImg,

    icon: FaCalculator,

    benefits: [
      "Accurate budgeting",
      "Reduced financial risk",
      "Transparent pricing",
      "Detailed cost reports",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "landscape-design",
    number: "26",
    title: "Landscape Design",
    description:
      "Creative landscape design services that enhance outdoor spaces with beauty and functionality.",

    overview:
      "We design and develop beautiful landscapes, gardens, pathways, water features, and outdoor living spaces that complement your property.",

    image: commercialImg,

    icon: FaTree,

    benefits: [
      "Beautiful outdoor spaces",
      "Improved property value",
      "Sustainable landscaping",
      "Customized designs",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "electrical-works",
    number: "27",
    title: "Electrical Works",
    description:
      "Complete electrical installation and maintenance services for residential and commercial buildings.",

    overview:
      "Our certified electricians provide safe electrical installations, wiring, lighting solutions, power distribution, and maintenance services following industry standards.",

    image: commercialImg,

    icon: FaBolt,

    benefits: [
      "Certified electricians",
      "Safe installations",
      "Energy-efficient solutions",
      "Reliable maintenance",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],
    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },

  {
    id: "plumbing-works",
    number: "28",
    title: "Plumbing Works",
    description:
      "Professional plumbing installation and maintenance services for homes, offices, and industrial facilities.",

    overview:
      "We provide complete plumbing solutions including water supply systems, drainage, sanitary fittings, leak repairs, and maintenance to ensure reliable performance.",

    image: commercialImg,

    icon: FaFaucet,

    benefits: [
      "Leak-free installations",
      "Quality plumbing materials",
      "Experienced plumbers",
      "Long-lasting performance",
    ],

    scope: [
      {
        title: "Site Preparation",
        description:
          "Land clearing, excavation, surveying, and site setup before construction begins."
      },
      {
        title: "Foundation Work",
        description:
          "Strong RCC foundations designed for long-term structural stability."
      },
      {
        title: "Structural Construction",
        description:
          "Columns, beams, slabs, and masonry work built to engineering standards."
      },
      {
        title: "Roofing",
        description:
          "Durable roofing systems with weather-resistant materials."
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Modern electrical wiring and plumbing installations following safety codes."
      },
      {
        title: "Final Finishing",
        description:
          "Painting, flooring, fixtures, and finishing touches for project completion."
      }
    ],

    process: [
      {
        title: "Consultation",
        description:
          "We discuss your project requirements, budget, timeline, and expectations to understand your vision."
      },
      {
        title: "Planning",
        description:
          "Our experts prepare architectural plans, schedules, material estimates, and project timelines."
      },
      {
        title: "Construction",
        description:
          "Our skilled engineers and workers execute the project using quality materials and industry best practices."
      },
      {
        title: "Quality Inspection",
        description:
          "Every stage is inspected to ensure safety, structural integrity, and compliance with quality standards."
      },
      {
        title: "Project Handover",
        description:
          "After final inspections and client approval, we hand over the completed project with complete documentation."
      }
    ],
    faq: [
      {
        question: "How long does the construction process take?",
        answer:
          "The project duration depends on its size and complexity. We provide a detailed timeline before starting the project."
      },
      {
        question: "Do you provide free consultation?",
        answer:
          "Yes, we offer an initial consultation to understand your requirements and discuss the project scope."
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We work closely with our clients to customize designs according to their needs and preferences."
      },
      {
        question: "Do you provide project updates?",
        answer:
          "Yes. We keep our clients informed with regular progress updates throughout the construction process."
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We use premium materials and follow industry-standard construction practices with strict quality inspections."
      }
    ],

    whyChooseUs: [
      {
        title: "Experienced Professionals",
        description:
          "Our skilled engineers, architects, and construction experts bring years of industry experience to every project."
      },
      {
        title: "Premium Quality",
        description:
          "We use high-quality materials and follow strict quality standards to ensure durable and reliable structures."
      },
      {
        title: "On-Time Delivery",
        description:
          "Efficient planning and project management help us complete projects within the committed timeline."
      },
      {
        title: "Transparent Communication",
        description:
          "We keep you informed throughout the project with regular updates and complete transparency."
      },
      {
        title: "Safety First",
        description:
          "We follow industry safety regulations and best practices to protect our team, clients, and project sites."
      },
      {
        title: "Customer Satisfaction",
        description:
          "Our goal is to exceed client expectations by delivering quality workmanship and exceptional service."
      }
    ],
  },
];

export default servicesData;