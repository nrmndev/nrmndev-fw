import { ProgressBar, SectionLabel } from "@uiComponents";

import { AiOutlineSmallDash } from "react-icons/ai";
const SampleSectionLabel = () => {
  return (
    <>
      <SectionLabel
        color="white"
        as="h3"
        label="Our skills"
        decoration={{
          left: { Icon: AiOutlineSmallDash, color: "secondary" },
          right: { Icon: AiOutlineSmallDash, color: "secondary" },
        }}
      />
      <ProgressBar
        label="Construction"
        total={50}
        current={50}
        showProgress
        format="percentage"
      />
      {/* <SectionLabel label="Im on the center" position="center" />
      <SectionLabel label="Im on the right" position="right" />
      <span className="sectionLabel">
        <span className="sectionLabel__backdrop">Just watched you go</span>
        <span className="sectionLabel__decoration decoration--top">
          <MdStars />
        </span>
        <div className="sectionLabel__content">
          <span className="sectionLabel__decoration decoration--left">
            <MdStars />
          </span>
          <span className="sectionLabel__text">The sample section label</span>
          <span className="sectionLabel__decoration decoration--right">
            <MdStars />
          </span>
        </div>
        <span className="sectionLabel__decoration decoration--bottom">
          <MdStars />
        </span>
      </span> */}
    </>
  );
};

export default SampleSectionLabel;
