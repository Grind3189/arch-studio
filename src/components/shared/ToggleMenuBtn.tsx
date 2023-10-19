import { motion } from "framer-motion";

interface ToggleMenuBtnProp {
  toggleNav: () => void;
  showNav: boolean;
}
const ToggleMenuBtn = ({ toggleNav, showNav }: ToggleMenuBtnProp) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={toggleNav}
      className="md:hidden"
    >
      <motion.path
        stroke="black"
        strokeWidth="3"
        animate={
          showNav
            ? { d: "M1.94836 1.87891L20.0519 19.1202" }
            : { d: "M0 2L24 2" }
        }
      />
      <motion.path
        d="M24 8.71973H0"
        stroke="black"
        strokeWidth="3"
        animate={showNav ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.path
        stroke="black"
        strokeWidth="3"
        animate={
          showNav ? { d: "M2 19.0967L20.2399 1.99974" } : { d: "M24 16H0" }
        }
      />
    </motion.svg>
  );
};

export default ToggleMenuBtn;
