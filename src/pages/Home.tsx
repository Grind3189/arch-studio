import Featured from "../components/home/featured/Featured";
import SmallTeam from "../components/home/SmallTeam";
import Welcome from "../components/home/Welcome";
import Hero from "../components/home/hero/Hero";

function Home() {
  return (
    <div className="md:px-[98px] xl:px-0">
      <Hero />
      <section className="max-md:px-8">
        <Welcome />
      </section>
      <SmallTeam />
      <section className="max-md:px-8">
        <Featured />
      </section>
    </div>
  );
}

export default Home;
