import { SizeOptions } from "@uiTypes";

type FontProps = {
  font?: {
    size?: SizeOptions;
    family?: "openSans" | "custom-1" | "custom-2";
    style?: "italic" | "normal" | "inherit" | "oblique" | "unset" | "inital";
  };
};

export default FontProps;
