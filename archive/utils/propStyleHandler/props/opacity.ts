import { GetStyleReturnProps, OpacityProps } from "@uiTypes";

export const getOpacityStyle = <T extends OpacityProps>({
  opacity,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof opacity === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  (opacity || opacity === 0) && classes.push(`opacity-${opacity}`);

  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};
