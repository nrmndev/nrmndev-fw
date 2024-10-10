import { Media } from "@uiComponents";
import { FaPhone } from "react-icons/fa";
import constructionImg from "@images/homepage/construction_1.jpg";

const SampleMedia = () => {
  return (
    <>
      <p>Media icon: react-icons, iconPosition: left</p>
      <Media
        borderRadius={"xs"}
        background="black"
        color="white"
        icon={{
          icon: FaPhone,
          //background: "primary",
          margin: "sm",
          rounded: true,
          variant: "outline",
          position: "right",
        }}
        heading={{ children: "Phone Number" }}
        body={{ children: <>(+55) 654 - 545 - 5418</> }}
      />
      <hr />
      <p>Media icon: react-icons, iconPosition: right</p>
      <Media
        icon={{ icon: FaPhone, position: "right" }}
        heading={{ children: "Phone Number" }}
        body={{ children: <>(+55) 654 - 545 - 5418</> }}
      />
      <hr />
      <p>Media icon: react-icons, iconPosition: top-left</p>
      <Media
        icon={{ icon: FaPhone, position: "top-left" }}
        heading={{ children: "Phone Number" }}
        body={{ children: <>(+55) 654 - 545 - 5418</> }}
      />
      <hr />
      <p>Media icon: as img, iconPosition: top-center</p>
      <Media
        icon={{ icon: constructionImg, position: "top-center", rounded: true }}
        heading={{ children: "Phone Number" }}
        body={{ children: <>(+55) 654 - 545 - 5418</> }}
      />
      <hr />
      {/* <p>Media icon: react-icons, iconPosition: left</p>
      <Media
        icon={FaPhone}
        heading="Phone Number"
        body={<>(+55) 654 - 545 - 5418</>}
      />
      <hr />
      <p>Media icon: react-icons, iconPosition: top-left</p>
      <Media
        icon={FaPhone}
        iconPosition="top-left"
        heading="Phone Number"
        body={<>(+55) 654 - 545 - 5418</>}
      />
      <hr />
      <p>Media icon: react-icons, iconPosition: top-center</p>
      <Media
        icon={FaRegEnvelope}
        iconPosition="top-center"
        heading="Email Address"
        body={<>info@ribuild.com</>}
      />
      <hr />
      <p>Media icon: as IMG, iconPosition: top-right</p>
      <Media
        icon={constructionImg}
        iconPosition="top-right"
        roundedIcon
        heading="Phone Number"
        body={<>(+55) 654 - 545 - 5418</>}
      />
      <hr /> */}
    </>
  );
};

export default SampleMedia;
