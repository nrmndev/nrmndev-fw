import { Typography, TextBackdrop, LabelDecoration } from "@uiComponents";
import { LabelWrapperComponentProps } from "@uiComponentTypes";

const LabelWrapper = ({
  label,
  leftDecoration,
  rightDecoration,
  textBackdrop,
  as = "h2",
  ...utilityProps
}: LabelWrapperComponentProps) => {
  return (
    <div className="section-label__content">
      {textBackdrop?.label && <TextBackdrop {...textBackdrop} />}

      {leftDecoration?.Icon && (
        <LabelDecoration {...leftDecoration} position="left" />
      )}

      <Typography as={as} className="section-label__text" {...utilityProps}>
        {label}
      </Typography>

      {rightDecoration?.Icon && (
        <LabelDecoration {...rightDecoration} position="right" />
      )}
    </div>
  );
};

export default LabelWrapper;
