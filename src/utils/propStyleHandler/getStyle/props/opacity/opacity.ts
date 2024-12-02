import { GetStyleReturnProps, OpacityProps } from "_uiTypes";

export const getOpacityStyle = <T extends OpacityProps>({
  opacity,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof opacity === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  inline =
    opacity || opacity === 0
      ? {
          opacity: `calc(${opacity}/100)`,
        }
      : {};
  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};
