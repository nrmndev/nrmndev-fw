import { SizeOptions } from "types/options";

type BorderRadiusProps = {
  borderRadius?:
    | {
        topLeft?: number;
        topRight?: number;
        bottomRight?: number;
        bottomLeft?: number;
        unit?: "px" | "%" | "rem";
      }
    | SizeOptions;
};

export default BorderRadiusProps;
