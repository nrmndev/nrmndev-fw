import { SectionLabelComponentProps } from "@uiComponentTypes";
import classNames from "classnames";
import LabelWrapper from "./LabelWrapper";
import { UtilityStyledComponent } from "@uiComponents";
import { forwardRef } from "react";
import { useComponentTemplate } from "@uiContext";

const SectionLabel = (
  {
    position = "left",
    color = "primary",
    label,
    font,
    decoration,
    template,
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
    position ? "section-label--" + position : ""
  );
  const componentTemplate = useComponentTemplate("sectionLabel", template || 0);

  // let labelWrapperTemplate = {};
  // if (componentTemplate) {
  //   labelWrapperTemplate = com
  // }
  return (
    <>
      <UtilityStyledComponent
        as={"span"}
        className={classes}
        ref={ref}
        color={color}
        {...componentTemplate}
      >
        <LabelWrapper
          color={color}
          as={as}
          label={label || "label"}
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
