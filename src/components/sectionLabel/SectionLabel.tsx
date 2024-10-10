import { ColorProps, SectionLabelProps } from "@uiTypes";
import classNames from "classnames";
import LabelWrapper from "./LabelWrapper";

export interface SectionLabelComponentProps
  extends SectionLabelProps,
    ColorProps {
  label: string;
  position?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionLabel = ({
  position = "left",
  color = "primary",
  label,
  decoration,
  as = "h2",
}: SectionLabelComponentProps) => {
  let RightDecor, LeftDecor, DecorTextBackdrop;
  if (decoration) {
    LeftDecor = decoration.left;
    RightDecor = decoration.right;
    DecorTextBackdrop = decoration.textBackdrop;
  }

  const classes = classNames(
    "sectionLabel",
    `color-${color}`,
    position ? "section-label--" + position : ""
  );

  return (
    <>
      <span className={classes}>
        {/* {DecorTextBackdrop?.label && <TextBackdrop {...DecorTextBackdrop} />} */}
        {/* {TopDecor?.Icon && <TopDecoration {...TopDecor} />} */}

        <LabelWrapper
          color={color}
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
