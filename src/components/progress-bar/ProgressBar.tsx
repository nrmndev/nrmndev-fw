import { ProgressBarComponentProps } from "@uiComponentTypes";
import { UtilityStyledComponent } from "@uiComponents";

const ProgressBar = ({
  total,
  current,
  color = "primary",
  label,
  showProgress = false,
  format = "percentage",
  variant = "solid",
  ...utilityProps
}: ProgressBarComponentProps) => {
  const currentBarWidth = (current / total) * 100;
  return (
    <>
      <UtilityStyledComponent
        as="span"
        className="progress-bar"
        {...utilityProps}
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

export default ProgressBar;

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
