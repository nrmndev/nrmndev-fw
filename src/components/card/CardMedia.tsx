import { UtilityStyledComponent } from "components/component.barrel.index";
import { CardMediaComponentProps } from "components/component.barrel.types";
import { forwardRef } from "react";

const CardMedia = (
  { ...utilityProps }: CardMediaComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
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
