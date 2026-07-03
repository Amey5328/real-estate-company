import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/navigation";
import logo from "../../assets/images/logo/real-estate-logo-design.png";

const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const navbarRef = useRef(null);
const logoRef = useRef(null);
const navLinksRef = useRef([]);
const contactBtnRef = useRef(null);

const logoVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.05,
    rotate: -2,
    transition: {
      duration: 0.3,
    },
  },
};

const linkVariants = {
  hover: {
    y: -3,
    color: "#FDC500",
    transition: {
      duration: 0.2,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.25,
    },
  },
  tap: {
    scale: 0.95,
  },
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
useEffect(() => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(navbarRef.current, {
    y: -80,
    opacity: 0,
    duration: 0.8,
  })
    .from(
      logoRef.current,
      {
        opacity: 0,
        x: -30,
        duration: 0.5,
      },
      "-=0.4"
    )
    .from(
      navLinksRef.current,
      {
        opacity: 0,
        y: -15,
        stagger: 0.08,
        duration: 0.4,
      },
      "-=0.2"
    )
    .from(
      contactBtnRef.current,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
      },
      "-=0.2"
    );
}, []);
  return (
    <>
      <header ref={navbarRef}
        className={`fixed top-0 left-0 z-50 w-full bg-[#00296B] py-4 shadow-lg transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <motion.div
  variants={logoVariants}
  initial="initial"
  whileHover="hover"
>
  <NavLink
    to="/"
    ref={logoRef}
    className="flex items-center gap-3"
  >
    <img
              src={logo}
      className="h-12 w-auto"
    />

    <div>
      <h1 className="text-2xl font-bold text-slate-900">
        AURELIA
      </h1>

      <p className="text-xs uppercase tracking-[4px] text-gray-500">
       ESTATES
      </p>
    </div>
  </NavLink>
</motion.div>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {NAV_LINKS.map((link, index) => (
  <NavLink
    key={link.id}
    ref={(el) => (navLinksRef.current[index] = el)}
    to={link.path}
    className={({ isActive }) =>
      `relative text-[15px] font-medium transition-colors duration-300 ${
        isActive
      ? "text-[#FDC500]"
      : "text-[#00296B] hover:text-[#FDC500]"
      }`
    }
  >
    {link.title}
  </NavLink>
))}

          </nav>

          {/* Contact Button */}

          <div className="hidden lg:block">

            <NavLink
  ref={contactBtnRef}
  to="/contact"
  className="flex items-center gap-2 rounded-full bg-[#FDC500] px-6 py-3 text-[#00296B] font-semibold transition-all duration-300 hover:bg-[#00296B] hover:text-[#FDC500]"
>
              Book site visit

              <FiArrowRight size={18} />
            </NavLink>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-slate-900"
          >
            <HiOutlineBars3 size={34} />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[60] transition-all duration-500
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}

        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Drawer */}

        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl
          transition-transform duration-500
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-xl font-bold">
              Menu
            </h2>

            <button
              onClick={() => setIsOpen(false)}
            >
              <HiOutlineXMark size={32} />
            </button>

          </div>

          <nav className="flex flex-col p-8 gap-6">

            {NAV_LINKS.map((link) => (

              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition
                  ${
                    isActive
                      ? "text-[#FDC500]"
                      : "text-[#00296B] hover:text-[#FDC500]"
                  }`
                }
              >
                {link.title}
              </NavLink>

            ))}

            <motion.div
  ref={contactBtnRef}
  variants={buttonVariants}
  whileHover="hover"
  whileTap="tap"
>
  <NavLink
    to="/contact"
    className="flex items-center gap-2 rounded-full
bg-[#FDC500]
px-6 py-3
font-semibold
text-[#00296B]
shadow-lg
transition-all duration-300
hover:bg-[#00296B]
hover:text-[#FDC500]"
  >
    Contact Us

    <FiArrowRight />
  </NavLink>
</motion.div>

          </nav>

        </div>

      </div>
    </>
  );
};

export default Navbar;