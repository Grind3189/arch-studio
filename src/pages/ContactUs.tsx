import ContactDetails from "../components/contact-us/ContactDetails";
import ContactForm from "../components/contact-us/ContactForm";
import Hero from "../components/contact-us/Hero";

function ContactUs() {
  return (
    <main className="max-xl:md:px-[97px]">
      <Hero />
      <section className="max-md:px-[33px]">
        <ContactDetails />
      </section>
      <div className="h-[367px] bg-map-sm md:bg-map-md xl:bg-map-lg bg-cover mb-[73px] md:mb-[200px] xl:mb-[159px]" />

      <section className="max-md:px-[33px]">
        <ContactForm />
      </section>

    </main>
  );
}

export default ContactUs;
