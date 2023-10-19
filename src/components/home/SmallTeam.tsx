import { Link } from "react-router-dom";
import arrowIc from '../../assets/icons/icon-arrow.svg'

const SmallTeam = () => {
  return (
    <section className="bg-small-team-sm md:bg-small-team-md xl:bg-small-team-lg relative h-[562px] bg-cover flex xl:mb-[207px] mb-[73px]">
      <div className="text-white h-full w-full font-bold flex justify-center flex-col px-8 bg-black/50 md:px-[58px] xl:px-[190px]">
        <h1 className="text-[48px] leading-[52px] tracking-[-1.7px] mb-[23px] md:text-[72px] md:tracking-[-2px] md:leading-[64px]">
          Small team, <br />
          big ideas
        </h1>
        <Link to="about-us" className="bg-very-dark-blue w-[187px] flex items-center h-[72px] justify-center gap-6 text-[18px] lg:hover:bg-grey-400">About Us
        <img src={arrowIc} alt="icon arrow right" /></Link>
      </div>
    </section>
  );
};

export default SmallTeam;
