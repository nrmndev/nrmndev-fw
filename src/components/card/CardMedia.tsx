import { UtilityStyledComponent } from "@uiComponents";
import { CardMediaComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const CardMedia = (
  { ...utilityProps }: CardMediaComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card__media"
      background={{ image: utilityProps.image }}
      {...utilityProps}
      ref={ref}
      //role="img"
      //title={title}
    />
  );
};

export default forwardRef(CardMedia);
