import { FluidProps, GetStyleReturnProps } from "@uiTypes";

export const getFluidStyle = ({ fluid }: FluidProps): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof fluid === "undefined" || !fluid) {
    return { classes: "", inline };
  }

  fluid === true && classes.push(`fluid`);

  return { classes: classes.join(" "), inline };
};
