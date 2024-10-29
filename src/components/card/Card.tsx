import { UtilityStyledComponent } from "@uiComponents";
import { CardComponentProps } from "@uiComponentTypes";

const Card = ({ ...utilityProps }: CardComponentProps) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card"
      {...utilityProps}
      padding={utilityProps.padding ?? "sm"}
    />
  );
};

export default Card;
