import { HeightProps } from "@uiTypes";
import { UtilityStyledComponent } from "components/utility-styled-component";

type CardMediaComponentProps = {
  image: string;
  //title?: string;   //check implementation of title from MUI
} & HeightProps;

const CardMedia = ({
  image = "",
  //title = "",
  height = { value: 120, unit: "px" },
}: CardMediaComponentProps) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card__media"
      background={{ image }}
      height={height}
      //role="img" //check implementation of role from MUI
      //title={title}
    />
  );
};

export default CardMedia;
