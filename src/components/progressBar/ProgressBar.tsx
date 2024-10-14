import { BaseProps, ColorProps, MarginProps, PaddingProps } from "@uiTypes";

export interface IProps
  extends Omit<BaseProps, "children">,
    PaddingProps,
    MarginProps,
    ColorProps {
  label?: string;
  labelPosition?: "top" | "bottom";
  total: number;
  current: number;
  showProgress?: boolean;
  format?: "percentage" | "whole";
  variant?: "striped" | "solid";
}

const ProgressBar = ({
  total,
  current,
  color = "primary",
  label,
  showProgress = false,
  format = "percentage",
  variant = "solid",
}: IProps) => {
  const currentBarWidth = (current / total) * 100;
  return (
    <>
      <span className="progress-bar">
        {showProgress && (
          <span className="progress-bar__text">
            {label && (
              <span className="progress-bar__text__label">{label}</span>
            )}

            <span className="progress-bar__text__total">
              {format === "percentage" && currentBarWidth}
              {format === "percentage" && "%"}
            </span>
          </span>
        )}
        <span className="progress-bar__bar">
          {variant === "striped" && (
            <span className="progress-bar-stripes"></span>
          )}
          <span
            className={`progress-bar__bar__current bg-${color}`}
            style={{
              width: `${currentBarWidth <= 100 ? currentBarWidth : 100}%`,
            }}
          />
        </span>
      </span>
    </>
  );
};

export default ProgressBar;
