import { SectionLabelComponentProps } from "@uiComponentTypes";
import classNames from "classnames";
import LabelWrapper from "./LabelWrapper";
import { UtilityStyledComponent } from "components/utility-styled-component";
import { forwardRef } from "react";

const SectionLabel = (
  {
    position = "left",
    color = "primary",
    label,
    font,
    decoration,
    as = "h2",
  }: SectionLabelComponentProps,
  ref?: React.Ref<HTMLSpanElement>
) => {
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
      <UtilityStyledComponent className={classes} ref={ref}>
        <LabelWrapper
          color={color}
          as={as}
          label={label}
          font={font}
          leftDecoration={LeftDecor}
          rightDecoration={RightDecor}
          textBackdrop={DecorTextBackdrop}
        />
      </UtilityStyledComponent>
    </>
  );
};

export default forwardRef(SectionLabel);
