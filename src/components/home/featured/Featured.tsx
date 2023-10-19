import { Link } from "react-router-dom";
import arrowIc from "../../../assets/icons/icon-arrow.svg";
import FeaturedLink from "./FeaturedLink";

const Featured = () => {
  return (
    <section>
      <div className="mb-[41px] flex justify-between items-center">
        <h1 className="text-[48px] font-bold tracking-[-1.71px] md:text-[72px]">Featured</h1>
        <Link
          to="portfolio"
          className="flex h-[72px] w-[169px] items-center justify-center gap-6 bg-black text-[18px] font-bold text-white max-md:hidden lg:hover:bg-grey-400"
        >
          <span>See All</span>
          <img src={arrowIc} alt="arrow right icon" />
        </Link>
      </div>
      <div className="flex flex-col gap-6 xl:h-[560px] xl:flex-row">
        <div className="h-[240px] bg-del-sol-sm bg-cover md:bg-del-sol-md xl:h-full xl:flex-1 xl:bg-del-sol-lg">
          <FeaturedLink count={1}>Project Del Sol</FeaturedLink>
        </div>
        <div className="h-[240px] bg-tower-228b-sm bg-cover md:bg-tower-228b-md xl:h-full xl:flex-1 xl:bg-tower-228b-lg">
          <FeaturedLink count={2}>228B Tower</FeaturedLink>
        </div>
        <div className="h-[240px] bg-le-prototype-sm bg-cover md:bg-le-prototype-md xl:h-full xl:flex-1 xl:bg-le-prototype-lg">
          <FeaturedLink count={3}>Le Prototype</FeaturedLink>
        </div>
      </div>
    </section>
  );
};

export default Featured;
