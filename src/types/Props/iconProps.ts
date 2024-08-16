import { SizeUnionTypes } from "@uniontypes";
import { IconType } from "react-icons";

export default interface IconProps {
  icon: IconType | string;
  rounded?: boolean;
  iconSize?: SizeUnionTypes;
}
