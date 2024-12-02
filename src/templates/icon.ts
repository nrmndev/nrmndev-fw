import { TemplateFor } from "@uiTypes";
import { BsFillHouseGearFill } from "react-icons/bs";

export const iconTemplate: TemplateFor<"icon"> = {
  IconA: {
    icon: BsFillHouseGearFill,
    rounded: true,
    variant: "outline",
    background: "gradient-1",
    color: "white",
  },
  IconB: {
    icon: BsFillHouseGearFill,
    rounded: true,
    variant: "outline",
    background: "primary",
    color: "white",
  },
} as const;

// export const icon: IconComponentProps[] = [
//   {
//     icon: BsFillHouseGearFill,
//     rounded: true,
//     variant: "outline",
//     background: "primary",
//     color: "white",
//   },
// ] as const;
