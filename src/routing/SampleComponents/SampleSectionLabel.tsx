import { ProgressBar, DecoratedLabel } from "components/component.barrel.index";
import { AiOutlineSmallDash } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";

const SampleDecoratedLabel = () => {
  return (
    <>
      <DecoratedLabel
        typography={{ color: "white", as: "h3" }}
        text="Our Skills"
        decor={{
          right: { icon: FaBeer },
          left: { icon: FaBeer },
        }}
      />
      <ProgressBar
        label="Construction"
        total={50}
        current={50}
        showProgress
        format="percentage"
      />
      {/* <DecoratedLabel label="Im on the center" position="center" />
      <DecoratedLabel label="Im on the right" position="right" />
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

export default SampleDecoratedLabel;
