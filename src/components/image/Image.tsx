import {
  AsImgProps,
  BorderProps,
  BorderRadiusProps,
  DisplayProps,
  HeightProps,
  WidthProps,
} from "@uiTypes";
import { UtilityStyledComponent } from "components/utility-styled-component";

type ImageComponentProps = DisplayProps &
  AsImgProps &
  BorderProps &
  BorderRadiusProps &
  WidthProps &
  HeightProps;

const Image = ({ ...rest }: ImageComponentProps) => {
  const { as = "img", src = "test", alt = "", ...utilityProps } = rest;
  return (
    <UtilityStyledComponent as={as} {...utilityProps} src={src} alt={alt} />
  );
};

export default Image;
