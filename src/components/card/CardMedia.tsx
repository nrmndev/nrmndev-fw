import { CardMediaComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

const CardMedia = ({ ...utilityProps }: CardMediaComponentProps) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card__media"
      background={{ image: utilityProps.image }}
      height={utilityProps.height}
      {...utilityProps}
      //role="img" //check implementation of role from MUI
      //title={title}
    />
  );
};

export default CardMedia;
