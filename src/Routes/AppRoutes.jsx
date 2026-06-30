import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Properties from "../pages/Properties/Properties";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import Blog from "../pages/Blog/Blog";
import FAQ from "../pages/FAQ/FAQ";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties/>}/>

       

        <Route path="services" element={<Services />} />

        <Route path="gallery" element={<Gallery />} />

        <Route path="blog" element={<Blog />} />

        <Route path="faq" element={<FAQ />} />

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;