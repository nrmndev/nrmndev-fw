import { UtilityStyledComponent } from "@uiComponents";
import { CardMediaComponentProps } from "@uiComponentTypes";

const CardMedia = ({ ...utilityProps }: CardMediaComponentProps) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card__media"
      background={{ image: utilityProps.image }}
      {...utilityProps}
      //role="img"
      //title={title}
    />
  );
};

export default CardMedia;
