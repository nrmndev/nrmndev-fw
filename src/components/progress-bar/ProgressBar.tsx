import { ProgressBarComponentProps } from "components/component.barrel.types";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { forwardRef } from "react";

const ProgressBar = (
  {
    total,
    current,
    color = "primary",
    label,
    showProgress = false,
    format = "percentage",
    variant = "solid",
    template,
    ...utilityProps
  }: ProgressBarComponentProps,
  ref?: React.Ref<HTMLSpanElement>
) => {
  const currentBarWidth = (current / total) * 100;

  return (
    <>
      <UtilityStyledComponent
        as="span"
        className="progress-bar"
        {...utilityProps}
        ref={ref}
      >
        {showProgress && (
          <span className="progress-bar__text">
            {label && (
              <span className="progress-bar__text__label">{label}</span>
            )}

            <span className="progress-bar__text__total">
              {format === "percentage" && currentBarWidth + "%"}
            </span>
          </span>
        )}
        <span className="progress-bar__bar">
          {variant === "striped" && (
            <span className="progress-bar-stripes"></span>
          )}
          <UtilityStyledComponent
            as="span"
            className={`progress-bar__bar__current bg-${color}`}
            width={{
              value: currentBarWidth <= 100 ? currentBarWidth : 100,
              unit: "%",
            }}
          />
        </span>
      </UtilityStyledComponent>
    </>
  );
};

export default forwardRef(ProgressBar);

// export interface IProps
//   extends Omit<BaseProps, "children">,
//     PaddingProps,
//     MarginProps,
//     WidthProps,
//     ColorProps {
//   label?: string;
//   labelPosition?: "top" | "bottom";
//   total: number;
//   current: number;
//   showProgress?: boolean;
//   format?: "percentage" | "whole";
//   variant?: "striped" | "solid";
// }
