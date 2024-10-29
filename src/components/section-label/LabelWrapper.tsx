import {
  Typography,
  TextBackdrop,
  LabelDecoration,
  UtilityStyledComponent,
} from "@uiComponents";
import { LabelWrapperComponentProps } from "@uiComponentTypes";

const LabelWrapper = (
  {
    label,
    leftDecoration,
    rightDecoration,
    textBackdrop,
    as = "h2",
    ...utilityProps
  }: LabelWrapperComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="section-label__content"
      ref={ref}
    >
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
    </UtilityStyledComponent>
  );
};

export default LabelWrapper;
