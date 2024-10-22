import { ImageComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "components/utility-styled-component";

const Image = ({
  as = "img",
  src = "test",
  alt = "",
  ...utilityProps
}: ImageComponentProps) => {
  return (
    <UtilityStyledComponent as={as} {...utilityProps} src={src} alt={alt} />
  );
};

export default Image;
