import jakeImg from "../../assets/about/desktop/avatar-jake.jpg";
import thompsonImg from "../../assets/about/desktop/avatar-thompson.jpg";
import jacksonImg from "../../assets/about/desktop/avatar-jackson.jpg";
import mariaImg from "../../assets/about/desktop/avatar-maria.jpg";
import linkedInIc from '../../assets/icons/icon-linkedin.svg'
import twitterIc from '../../assets/icons/icon-twitter.svg'

type LeadersType = {
  name: string;
  role: string;
  linkedIn: string;
  twitter: string;
  image: string;
}[];

const Leaders = () => {
  const leaders: LeadersType = [
    {
      name: "Jake Richards",
      role: "Chief Architect",
      linkedIn: "",
      twitter: "",
      image: jakeImg,
    },
    {
      name: "Thompson Smith",
      role: "Head of Finance",
      linkedIn: "",
      twitter: "",
      image: thompsonImg,
    },
    {
      name: "Jackson Rourke",
      role: "Lead Designer",
      linkedIn: "",
      twitter: "",
      image: jacksonImg,
    },
    {
      name: "Maria Simpson",
      role: "Senior Architect",
      linkedIn: "",
      twitter: "",
      image: mariaImg,
    },
  ];
  return (
    <section className="justify-between xl:flex">
      <h1 className="mb-[55px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] xl:text-[72px] xl:leading-[64px] xl:tracking-[-2px]">
        The <br />
        Leaders
      </h1>

      <div className="flex flex-col items-center justify-center gap-[79px] md:grid md:grid-cols-[280px_280px] md:justify-start md:gap-[11px] max-xl:lg:gap-[32px] xl:gap-y-[103px] xl:grid-cols-[350px_350px] xl:gap-x-[30px]">
        {leaders.map((leader) => {
          return (
            <div className="md:w-full">
              <div className="relative h-[256px] w-[280px] xl:w-full xl:h-[320px] group">
                <img
                  src={leader.image}
                  alt=""
                  className="object-cover"
                />
                <div className="bg-black/50 absolute w-full h-full top-0 left-0 flex items-center justify-center gap-[30px] opacity-0 invisible transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:visible">
                  <img src={linkedInIc} alt="linked in icon" className="cursor-pointer" />
                  <img src={twitterIc} alt="twitter icon" className="cursor-pointer" />
                </div>
              </div>
              <h1 className="text-[32px] font-bold">{leader.name}</h1>
              <span className="text-[18px] font-medium">{leader.role}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Leaders;
