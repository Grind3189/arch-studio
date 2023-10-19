import { Link } from "react-router-dom";
import { useState } from "react";
import heroData from "./HeroData.json";
import arrowIc from "../../../assets/icons/icon-arrow.svg";
import { motion } from "framer-motion";

const Hero = () => {
  const [pickedPortfolio, setPickedPortfolio] = useState<string>("1");
  const buttons = [
    {
      id: "1",
      name: "01",
    },
    {
      id: "2",
      name: "02",
    },
    {
      id: "3",
      name: "03",
    },
    {
      id: "4",
      name: "04",
    },
  ];

  const filteredData = heroData.filter(
    (data) => data.id === pickedPortfolio,
  )[0];
  const bgImg =
    pickedPortfolio === "1"
      ? "bg-paramour-sm md:bg-paramour-md xl:bg-paramour-lg"
      : pickedPortfolio === "2"
      ? "bg-seraph-sm md:bg-seraph-md xl:bg-seraph-lg"
      : pickedPortfolio === "3"
      ? "bg-federal-sm md:bg-federal-md xl:bg-federal-lg"
      : "bg-trinity-sm md:bg-trinity-md xl:bg-trinity-lg";

  const handleChangePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPickedPortfolio(e.currentTarget.id);
  };
  return (
    <main
      className={`${bgImg} relative mb-[72px] flex h-[560px] flex-col justify-center border bg-cover px-8 md:mb-[248px] md:h-[720px] md:px-[58px] xl:mb-[195px] xl:px-[190px]`}
    >
      <motion.div className="z-10 text-white" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <h1 className="mb-[11px] w-[311px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] md:w-[457px] md:text-[96px] md:leading-[80px] xl:w-[544px]">
          {filteredData.title}
        </h1>
        <p className="mb-[83px] max-w-[457px] text-[18px] font-semibold leading-[24px]">
          {filteredData.desc}
        </p>
        <Link
          to="/portfolio"
          className="flex w-[252px] items-center justify-center gap-6 bg-very-dark-blue py-[22px] pt-[25px] text-[18px] font-bold lg:hover:bg-grey-400"
        >
          See Our Portfolio
          <img src={arrowIc} alt="arrow right icon" />
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-[-80px] z-10 hidden xl:block">
        {buttons.map((button) => {
          return (
            <button
              className={`w-[80px] lg:hover:bg-grey-100 lg:hover:text-grey-300 ${
                pickedPortfolio === button.id
                  ? "bg-black text-white"
                  : "bg-white text-grey-300"
              } py-7 text-[18px] font-bold`}
              id={button.id}
              onClick={handleChangePick}
            >
              {button.name}
            </button>
          );
        })}
      </div>
      <div className="absolute left-0 top-0 -z-0 h-full w-full bg-black/50" />
    </main>
  );
};

export default Hero;
