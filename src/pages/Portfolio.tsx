import dataList from "../components/portfolio/data.json";

function Portfolio() {
  const getBg = (id: number) => {
    if (id === 1) {
      return "bg-portfolio-seraph-sm md:bg-portfolio-seraph-md xl:bg-portfolio-seraph-lg";
    } else if (id === 2) {
      return "bg-eebox-sm md:bg-eebox-md xl:bg-eebox-lg";
    } else if (id === 3) {
      return "bg-portfolio-federal-sm md:bg-portfolio-federal-md xl:bg-portfolio-federal-lg";
    } else if (id === 4) {
      return "bg-del-sol-sm md:bg-del-sol-md xl:bg-del-sol-lg";
    } else if (id === 5) {
      return "bg-le-prototype-sm md:bg-le-prototype-md xl:bg-le-prototype-lg";
    } else if (id === 6) {
      return "bg-tower-228b-sm md:bg-tower-228b-md xl:bg-tower-228b-lg";
    } else if (id === 7) {
      return "bg-edelweiss-hotel-sm md:bg-edelweiss-hotel-md xl:bg-edelweiss-hotel-lg";
    } else if (id === 8) {
      return "bg-netcry-sm md:bg-netcry-md xl:bg-netcry-lg";
    } else if (id === 9) {
      return "bg-hypers-sm md:bg-hypers-md xl:bg-hypers-lg";
    } else if (id === 10) {
      return "bg-sxiv-sm md:bg-sxiv-md xl:bg-sxiv-lg";
    } else if (id === 11) {
      return "bg-portfolio-trinity-sm md:bg-portfolio-trinity-md xl:bg-portfolio-trinity-lg";
    } else {
      return "bg-portfolio-paramour-sm md:bg-portfolio-paramour-md xl:bg-portfolio-paramour-lg";
    }
  };
  return (
    <main className="flex flex-col items-center gap-6 px-8 md:px-[98px] xl:grid xl:grid-cols-3 xl:gap-[30px] xl:px-0">
      {dataList.map((data) => {
        const image = getBg(data.id);
        return (
          <div
            className={`h-[240px] ${image} flex w-[311px] bg-cover text-white md:w-[573px] xl:h-[560px] xl:w-full`}
          >
            <div className="h-full w-full flex-col justify-end flex bg-black/20 p-6 md:p-10">
              <h1 className="text-[32px] font-bold leading-[40px]">{data.title}</h1>
              <span className="text-[18px] font-medium opacity-75">
                {data.date}
              </span>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Portfolio;
