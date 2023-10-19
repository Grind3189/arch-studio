import welcomeImg from "../../assets/home/welcome.png";

const Welcome = () => {
  return (
    <div className="relative mb-[113px] md:mb-[233px] xl:mb-[211px]">
      <div className="mb-[68px] w-[65px] border-t border-t-grey-200 md:hidden" />
      <h1 className="max-md:hidden text-[120px] font-bold text-grey-100 absolute top-[-140px] xl:text-[250px] xl:z-10 xl:top-[-160px]">
        Welcome
      </h1>
      <div className="xl:flex xl:gap-[125px] xl:pl-[190px]">
        <div className="xl:self-end">
          <h2 className="mb-[22px] text-[48px] font-bold leading-[52px] tracking-[-1.7px] md:mb-[42px] md:text-[72px]">
            Welcome to <br />
            Arch Studio
          </h2>
          <p className="text-[18px] font-medium leading-[24px] text-grey-400 md:max-w-[800px] xl:mb-[15px]">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results. <br />
            <br />
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight. <br />
            <br />
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className="xl:h-[568px] xl:w-[500px] overflow-hidden relative">
          <img
            src={welcomeImg}
            alt="building image"
            className="object-cover w-full h-full absolute bottom-0 left-[-50px] top-[-130px] scale-[1.8]"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
