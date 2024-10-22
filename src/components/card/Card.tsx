import { CardComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

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
