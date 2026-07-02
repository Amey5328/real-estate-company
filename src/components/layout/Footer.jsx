import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaXTwitter, href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={item} className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold tracking-wide">
                Estate<span className="text-cyan-400">Pro</span>
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                Premium real estate solutions for buying, selling, and renting properties with confidence.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-cyan-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>support@estatepro.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `group relative inline-block text-sm transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-300 hover:text-white"
                      }`
                    }
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="transition-colors duration-300 hover:text-white">Property Buying</li>
              <li className="transition-colors duration-300 hover:text-white">Property Selling</li>
              <li className="transition-colors duration-300 hover:text-white">Rental Assistance</li>
              <li className="transition-colors duration-300 hover:text-white">Investment Advisory</li>
              <li className="transition-colors duration-300 hover:text-white">Property Valuation</li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Connect
            </h4>
            <p className="mb-5 text-sm leading-6 text-slate-300">
              Follow us for the latest property updates, market insights, and new listings.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <Icon className="text-base" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-14 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 EstatePro. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition-colors duration-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;