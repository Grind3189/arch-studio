import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="relative xl:mx-auto xl:w-[1110px]">
      <motion.div
        className={`absolute flex items-center gap-12 rotate-90 ${
          pathname === "/"
            ? "left-[-220px] top-[90px]"
            : pathname === "/portfolio"
            ? "left-[-285px] top-[155px]"
            : pathname === "/about-us"
            ? "left-[-272px] top-[145px]"
            : "left-[-260px] top-[135px]"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-1 w-[104px] border-t border-t-grey-200" />
        <h1 className="text-[18px] font-medium uppercase tracking-[18px] text-grey-200">
          {pathname === "/"
            ? "Home"
            : pathname === "/portfolio"
            ? "Portfolio"
            : pathname === "/about-us"
            ? "About Us"
            : "Contact"}
        </h1>
      </motion.div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
