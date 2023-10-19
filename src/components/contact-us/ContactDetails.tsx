import { Link } from "react-router-dom";
import arrowIc from "../../assets/contact/icon-arrow-black.svg";

const ContactDetails = () => {
  return (
    <div className="mb-[71px] md:mb-[226px] xl:mb-[203px]">
      <hr className="mb-[68px] w-[65px]" />
      <div className="xl:flex xl:items-center xl:justify-between xl:gap-[30px]">
        <h1 className="mb-10 text-[48px] font-bold leading-[52px] md:text-[72px] md:leading-[64px] md:tracking-[-1.7px] xl:mb-0 xl:self-start">
          Contact
          <br />
          Details
        </h1>

        <div className="mb-10 flex flex-col gap-[43px] md:flex-row md:justify-between xl:mb-0 xl:flex-col">
          <div className="text-grey-400">
            <span className="mb-[14px] text-[18px] font-bold">Main Office</span>
            <p className="text-[18px] font-medium leading-[24px]">
              Mail : archone@mail.com <br />
              Address : 1892 Chenoweth Drive TN <br />
              Phone : 123-456-3451
            </p>
          </div>
          <Link
            to=""
            className="flex items-center gap-6 text-[18px] font-bold text-very-dark-blue"
          >
            <span>View on Map</span>
            <img src={arrowIc} alt="" />
          </Link>
        </div>
        <div className="flex flex-col gap-[43px] md:flex-row md:justify-between xl:flex-col">
          <div className="text-grey-400">
            <span className="mb-[14px] text-[18px] font-bold">Office II</span>
            <p className="text-[18px] font-medium leading-[24px]">
              Mail : archtwo@mail.com <br />
              Address : 3399 Wines Lane TX <br />
              Phone : 832-123-4321
            </p>
          </div>
          <Link
            to=""
            className="flex items-center gap-6 text-[18px] font-bold text-very-dark-blue"
          >
            <span>View on Map</span>
            <img src={arrowIc} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
