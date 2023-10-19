import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.svg";
import arrowIc from "../../assets/icons/icon-arrow.svg";

const Footer = () => {
  return (
    <footer className="mt-[132px] md:mt-[200px]">
      <div className="flex flex-col items-center justify-center gap-[33px] bg-grey-100 md:h-[120px] md:w-[80%] md:flex-row md:justify-between xl:justify-start xl:h-[200px] xl:w-[984px]">
        <div className="mt-[-70px] grid h-[150px] w-[150px] place-items-center bg-black md:mt-0 md:h-full md:w-[120px] xl:w-[200px] xl:mr-[85px]">
          <img src={logo} alt="logo image" />
        </div>
        <div className="flex flex-col gap-[33px] text-[18px] font-bold text-grey-400 md:flex-row md:gap-[50px] xl:mr-auto">
          <Link to="portfolio" className="lg:hover:text-black">Portfolio</Link>
          <Link to="about-us" className="lg:hover:text-black">About Us</Link>
          <Link to="contact-us" className="lg:hover:text-black">Contact</Link>
        </div>
        <Link
          to="portfolio"
          className="mb-12 flex h-[72px] w-[252px] items-center justify-center gap-6 bg-black text-[18px] font-bold text-white md:mb-0 md:mr-[-20%] xl:mr-[-125px] lg:hover:bg-grey-400"
        >
          <span>See Our Portfolio</span>
          <img src={arrowIc} alt="right arrow icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
