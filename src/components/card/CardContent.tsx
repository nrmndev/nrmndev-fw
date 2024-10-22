import { CardContentComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

const CardContent = ({ ...utilityProps }: CardContentComponentProps) => {
  return (
    <UtilityStyledComponent
      as="div"
      className={"card__content"}
      {...utilityProps}
    />
  );
};

export default CardContent;
