import { ContainerGrid, Media } from "@components";
import { BsPinMapFill } from "react-icons/bs";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import constructionImg from "@images/homepage/construction_1.jpg";

const SampleMedia = () => {
  return (
    <>
      <ContainerGrid templateColumns={4}>
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
          roundedIcon
        />{" "}
        <Media
          icon={constructionImg}
          heading="Opening Hour"
          body={<>Mon - Fri: 09am - 07pm</>}
          roundedIcon
        />
      </ContainerGrid>
    </>
  );
};

export default SampleMedia;
