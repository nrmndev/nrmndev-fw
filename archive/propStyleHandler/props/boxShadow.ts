import { BoxShadowProps, GetStyleReturnProps } from "@uiTypes";

export const getBoxShadowStyle = ({
  boxShadow,
}: BoxShadowProps): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  if (!boxShadow) return { classes, inline };

  //classes += `d-${display}`;
  inline = {
    boxShadow: `var(--${boxShadow})`,
  };
  return { classes, inline };
};
