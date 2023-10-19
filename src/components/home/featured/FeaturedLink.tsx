import { Link } from "react-router-dom";


interface FeaturedLinkProp {
    children: React.ReactNode
    count: number
}
const FeaturedLink = ({children, count}: FeaturedLinkProp) => {
  return (
    <Link
      to="portfolio"
      className="relative flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent to-black/50 px-[24px] py-[23px] md:p-10 text-white"
    >
      <h1 className="text-[32px] font-bold">{children}</h1>
      <span className="text-[18px] font-medium opacity-75">
        View All Projects
      </span>
      <span className="max-md:hidden text-[250px] absolute right-[16px] top-[-40px] opacity-50 font-bold xl:right-[-16px]">{count}</span>
    </Link>
  );
};

export default FeaturedLink;
