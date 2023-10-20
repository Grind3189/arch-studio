import logo from "../../assets/logo.svg";
import ToggleMenuBtn from "./ToggleMenuBtn";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) {
        setShowNav(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize) 
    }


  }, [])

  document.body.style.overflowY = showNav ? "hidden" : "auto"

  return (
    <header className="flex h-[96px] items-center justify-between px-8 md:justify-normal md:gap-[78px] md:px-[97px] md:py-[56px] xl:gap-[94px] xl:px-0">
      <Link to="/">
        <motion.img
          src={logo}
          alt="arch studio logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Link>
      <ToggleMenuBtn toggleNav={toggleNav} showNav={showNav} />

      <nav
        className={`right-0 top-[96px] z-50 h-full w-full bg-black/50 transition-all duration-300 max-md:fixed ${
          showNav ? "translate-x-0 opacity-100" : "translate-x-[50%] opacity-0"
        } md:h-[unset] md:w-[unset] md:translate-x-0 md:bg-transparent md:opacity-100`}
      >
        <ul className="ml-auto flex w-[90%] flex-col gap-[17px] bg-grey-100 px-12 py-[39px] text-[32px] font-bold md:ml-0 md:w-full md:flex-row md:gap-[61px] md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:text-grey-300 xl:gap-[61px]">
          <li onClick={() => setShowNav(false)}>
            <Link to="portfolio" className="lg:hover:text-black">
              Portfolio
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link to="about-us" className="lg:hover:text-black">
              About Us
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link to="contact-us" className="lg:hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
