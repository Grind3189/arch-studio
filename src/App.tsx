import { Routes, Route, useLocation } from "react-router-dom";
import { scrollToTop } from "./utils";
import { useEffect } from "react";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
