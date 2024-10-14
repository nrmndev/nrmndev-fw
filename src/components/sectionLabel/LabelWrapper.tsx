import {
  ColorOptions,
  ColorProps,
  IncrementOf5Options,
  SizeOptions,
} from "@uiTypes";
import { IconType } from "react-icons";
import { Typography } from "components/typography";
import TextBackdrop from "./TextBackdrop";
import LabelDecoration from "./LabelDecoration";

type LabelWrapperProps = {
  label: string;
  leftDecoration?: {
    Icon?: IconType;
    color?: ColorOptions | undefined;
  };
  rightDecoration?: {
    Icon?: IconType;
    color?: ColorOptions | undefined;
  };
  textBackdrop?: {
    size?: SizeOptions;
    opacity?: IncrementOf5Options;
    color?: ColorOptions;
    label: string;
  };
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
} & ColorProps;
const LabelWrapper = ({
  label,
  color = "primary",
  leftDecoration,
  rightDecoration,
  textBackdrop,
  as = "h2",
}: LabelWrapperProps) => {
  return (
    <div className="section-label__content">
      {textBackdrop?.label && <TextBackdrop {...textBackdrop} />}

      {leftDecoration?.Icon && (
        <LabelDecoration
          Icon={leftDecoration.Icon}
          color={leftDecoration.color ?? undefined}
          position="left"
        />
      )}

      <Typography as={as} className="section-label__text" color={color}>
        {label}
      </Typography>

      {rightDecoration?.Icon && (
        <LabelDecoration
          Icon={rightDecoration.Icon}
          color={rightDecoration.color ?? undefined}
          position="right"
        />
      )}
    </div>
  );
};

export default LabelWrapper;
