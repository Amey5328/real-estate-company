import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Properties from "../pages/Properties/Properties";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";


import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import RealEstateBlog from "../pages/Blog/RealEstateBlog";
import FAQPage from "../pages/FAQ/FAQPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties/>}/>

       

        <Route path="services" element={<Services />} />

        <Route path="gallery" element={<Gallery />} />

        <Route path="blog" element={<RealEstateBlog />} />

        <Route path="faq" element={<FAQPage />} />

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;