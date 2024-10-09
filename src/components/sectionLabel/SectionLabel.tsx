import { SectionLabelProps } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";
import TopDecoration from "./TopDecoration";
import BottomDecoration from "./BottomDecoration";
import CenterWrapper from "./CenterWrapper";
import TextBackdrop from "./TextBackdrop";

export interface SectionLabelComponentProps extends SectionLabelProps {
  label: string;
  position?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// decoration?: {
//   top?: { color?: ColorOptions; icon?: IconType };
//   right?: { color?: ColorOptions; icon?: IconType };
//   bottom?: { color?: ColorOptions; icon?: IconType };
//   left?: { color?: ColorOptions; icon?: IconType };
//   textBackdrop?: {
//     size?: SizeOptions;
//     opacity?: OpacityOptions;
//     color?: ColorOptions;
//   };
// label: string;
// position?: "left" | "center" | "right"
// };
const SectionLabel = ({
  position = "left",
  label,
  decoration,
  as = "h2",
  ...rest
}: SectionLabelComponentProps) => {
  let TopDecor, RightDecor, BottomDecor, LeftDecor, DecorTextBackdrop;
  if (decoration) {
    TopDecor = decoration.top;
    RightDecor = decoration.right;
    BottomDecor = decoration.bottom;
    LeftDecor = decoration.left;
    DecorTextBackdrop = decoration.textBackdrop;
  }

  const classes = classNames(
    "sectionLabel",
    position ? "section-label--" + position : ""
  );

  return (
    <>
      <span className={classes}>
        {/* {DecorTextBackdrop?.label && <TextBackdrop {...DecorTextBackdrop} />} */}
        {/* {TopDecor?.Icon && <TopDecoration {...TopDecor} />} */}

        <CenterWrapper
          as={as}
          label={label}
          leftDecoration={LeftDecor}
          rightDecoration={RightDecor}
          textBackdrop={DecorTextBackdrop}
        />

        {/* {BottomDecor?.Icon && <BottomDecoration {...BottomDecor} />} */}
      </span>
    </>
  );
};

export default SectionLabel;
