import { UtilityStyledComponent } from "@uiComponents";
import { CardContentComponentProps } from "@uiComponentTypes";

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
