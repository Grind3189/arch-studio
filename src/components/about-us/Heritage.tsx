import heritageImg from '../../assets/about/desktop/image-heritage.jpg'

const Heritage = () => {
  return (
    <section className='xl:flex xl:h-[558px] xl:gap-[124px] mb-[231px]'>
      <div>
        <hr className="mb-[68px] w-[65px] md:mb-[49px]" />
        <h1 className="mb-[22px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] md:text-[72px] md:mb-[62px]">
          Our <br />
          Heritage
        </h1>
        <p className="text-[18px] font-medium leading-[24px] text-grey-400 md:max-w-[900px]">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country. <br />
          <br />
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs. <br />
          <br />
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <img src={heritageImg} alt="building image" className='object-cover max-xl:hidden' />
    </section>
  );
};

export default Heritage;
