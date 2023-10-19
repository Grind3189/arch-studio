import Heritage from "../components/about-us/Heritage";
import Hero from "../components/about-us/Hero";
import Leaders from "../components/about-us/Leaders";

function AboutUs() {
  return (
    <main className="max-xl:md:px-[98px]">
      <Hero />

      <div className="px-[33px] md:px-0">
        <Heritage />
        <Leaders />
      </div>
    </main>
  );
}

export default AboutUs;
