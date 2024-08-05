import Media from "@components/media/Index";
import { BsPinMapFill } from "react-icons/bs";
import { FaPhone, FaRegClock, FaRegEnvelope } from "react-icons/fa";

const SampleMedia = () => {
  return (
    <>
      <Media
        icon={FaPhone}
        heading="Phone Number"
        body={<>(+55) 654 - 545 - 5418</>}
      />{" "}
      <Media
        icon={FaRegEnvelope}
        heading="Email Address"
        body={<>info@ribuild.com</>}
      />{" "}
      <Media
        icon={BsPinMapFill}
        heading="Our Location"
        body={<>4821, Anchor St, USA.</>}
        link="https://www.google.com"
      />{" "}
      <Media
        icon={FaRegClock}
        heading="Opening Hour"
        body={<>Mon - Fri: 09am - 07pm</>}
      />
    </>
  );
};

export default SampleMedia;
