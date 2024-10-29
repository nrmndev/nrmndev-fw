import { SectionLabelComponentProps } from "@uiComponentTypes";
import classNames from "classnames";
import LabelWrapper from "./LabelWrapper";

const SectionLabel = ({
  position = "left",
  color = "primary",
  label,
  font,
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
    "section-label",
    `color-${color}`,
    position ? "section-label--" + position : ""
  );

  return (
    <>
      <span className={classes}>
        <LabelWrapper
          color={color}
          as={as}
          label={label}
          font={font}
          leftDecoration={LeftDecor}
          rightDecoration={RightDecor}
          textBackdrop={DecorTextBackdrop}
        />
      </span>
    </>
  );
};

export default SectionLabel;
