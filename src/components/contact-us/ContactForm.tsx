import { useState } from "react";
import arrowIc from "../../assets/icons/icon-arrow.svg";

interface ContactFormType {
  name: string;
  email: string;
  message: string;
}
interface EmptyErrorType {
  name: boolean;
  email: boolean;
  message: boolean;
}

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });
  const [emptyError, setEmptyError] = useState<EmptyErrorType>({
    name: false,
    email: false,
    message: false,
  });

  const handleChangeData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContactFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setEmptyError((prev) => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (!contactFormData.name) {
      setEmptyError((prev) => ({ ...prev, name: true }));
      hasError = true;
    } else {
      setEmptyError((prev) => ({ ...prev, name: false }));
    }
    if (!contactFormData.email) {
      setEmptyError((prev) => ({ ...prev, email: true }));
      hasError = true;
    } else {
      setEmptyError((prev) => ({ ...prev, email: false }));
    }
    if (!contactFormData.message) {
      setEmptyError((prev) => ({ ...prev, message: true }));
      hasError = true;
    } else {
      setEmptyError((prev) => ({ ...prev, message: false }));
    }

    if (!hasError) {
      setContactFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form className="xl:flex" onSubmit={handleSubmit}>
      <h1 className="mb-[42px] text-[48px] font-bold leading-[52px] tracking-[-1.7px] xl:w-[20%]">
        Connect with us
      </h1>

      <div className="xl:w-[80%]">
        <div className="flex flex-col gap-[43px] text-[20px] font-bold tracking-[-0.312px]">
          <div
            className={`relative border-b pb-[22px] pl-[34px] ${
              emptyError.name ? "border-b-red" : "border-b-very-dark-blue"
            } focus-within:border-b-2`}
          >
            <input
              type="text"
              placeholder="Name"
              className={`w-[80%] outline-none ${
                emptyError.name && "placeholder:text-red"
              }`}
              value={contactFormData.name}
              onChange={handleChangeData}
              name="name"
            />
            {emptyError.name && (
              <span className="absolute right-0 text-[18px] text-red">
                Can't be empty
              </span>
            )}
          </div>
          <div
            className={`relative border-b pb-[22px] pl-[34px] ${
              emptyError.email ? "border-b-red" : "border-b-very-dark-blue"
            } focus-within:border-b-2`}
          >
            <input
              type="email"
              placeholder="Email"
              className={`w-[80%] outline-none ${
                emptyError.email && "placeholder:text-red"
              }`}
              value={contactFormData.email}
              onChange={handleChangeData}
              name="email"
            />
            {emptyError.email && (
              <span className="absolute right-0 text-[18px] text-red">
                Can't be empty
              </span>
            )}
          </div>
          <div
            className={`relative border-b border-b-very-dark-blue pb-[22px] pl-[34px] ${
              emptyError.message ? "border-b-red" : "border-b-very-dark-blue"
            } focus-within:border-b-2`}
          >
            <textarea
              placeholder="Message"
              className={`w-[80%] resize-none outline-none ${
                emptyError.message && "placeholder:text-red"
              }`}
              value={contactFormData.message}
              onChange={handleChangeData}
              name="message"
            />
            {emptyError.message && (
              <span className="absolute bottom-[16px] right-0 text-[18px] text-red">
                Can't be empty
              </span>
            )}
          </div>
        </div>
        <button className="ml-auto grid h-[80px] w-[80px] place-items-center bg-very-dark-blue">
          <img src={arrowIc} alt="arrow right icon" className="object-cover" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
