import {
  FaHome,
  FaHandshake,
  FaKey,
  FaChartLine,
  FaCalculator,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "Property Buying",
    description:
      "Discover the right property with expert guidance, verified listings and support at every step of your buying journey.",
    icon: FaHome,
  },
  {
    id: 2,
    number: "02",
    title: "Property Selling",
    description:
      "Sell your property with confidence through strategic pricing, effective marketing and professional negotiation.",
    icon: FaHandshake,
  },
  {
    id: 3,
    number: "03",
    title: "Rental Assistance",
    description:
      "Find the right rental property or reliable tenants with a simple, transparent and professionally managed process.",
    icon: FaKey,
  },
  {
    id: 4,
    number: "04",
    title: "Investment Advisory",
    description:
      "Make informed real estate investments with market insights, opportunity analysis and long-term strategic guidance.",
    icon: FaChartLine,
  },
  {
    id: 5,
    number: "05",
    title: "Property Valuation",
    description:
      "Understand the true market value of your property through careful analysis, local expertise and current market data.",
    icon: FaCalculator,
  },
];

export default servicesData;