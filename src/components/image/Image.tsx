import { UtilityStyledComponent } from "@uiComponents";
import { ImageComponentProps } from "@uiComponentTypes";

const Image = ({
  as = "img",
  src,
  alt = "Image",
  ...utilityProps
}: ImageComponentProps) => {
  return (
    <UtilityStyledComponent as={as} {...utilityProps} src={src} alt={alt} />
  );
};

export default Image;
