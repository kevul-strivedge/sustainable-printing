import MapEmbed from "../ui/MapEmbed";
import BannerComponent from "./BannerComponent";
import ContactInfoStrip from "./ContactInfoStrip";
import QuickLinks from "./QuickLinks";

const ContactUs = () => {
  return (
    <>
      <BannerComponent
        image="/images/bannerImage3.png"
        heading="Contact Us"
        alt="Contact us page banner"
        className="h-[460px] sm:text-[64px] text-[32px]"
        headingColor="#ffffff"
        headingFont="sm:!text-[64px] !text-[32px]"
      />
      <ContactInfoStrip />
      <MapEmbed />
      <QuickLinks />
    </>
  );
};

export default ContactUs;
