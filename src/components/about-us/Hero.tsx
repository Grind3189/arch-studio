const Hero = () => {
  return (
    <section className="mb-[365px] md:mb-[200px]">
      <div className="relative h-[240px] bg-about-us-hero-sm bg-cover md:h-[720px] md:bg-about-us-hero-md xl:w-[635px] xl:bg-about-us-hero-lg">
        <div className="h-full w-full bg-black/50" />
        <div className="absolute bottom-[-250px] w-[80%] bg-white md:bottom-0 md:right-0 md:h-[431px] xl:right-[-475px] xl:w-[650px] xl:pl-[80px]">
          <div className="relative h-full w-full pl-8 pt-10 md:flex md:flex-col md:justify-end md:pt-0 xl:items-end xl:text-left">
            <hr className="mb-[73px] mt-[88px] w-[65px] max-md:hidden xl:mb-[57px] xl:ml-[70px] xl:self-start" />
            <span className="absolute right-0 top-[-85px] text-[120px] font-bold tracking-[-3px] text-grey-100 max-md:hidden xl:left-[-95px] xl:top-[-150px] xl:text-[250px] xl:tracking-[-5px]">
              About
            </span>
            <h1 className="mb-[21px] text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:mb-[38px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] xl:self-center">
              Your team of
              <br />
              professionals
            </h1>
            <p className="w-[311px] text-[18px] font-medium leading-[24px] text-grey-400 md:mb-[1px] md:w-[455px]">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
