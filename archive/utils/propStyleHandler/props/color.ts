import { ColorProps, GetStyleReturnProps } from "@uiTypes";

export const getColorStyle = <T extends ColorProps>({
  color,
}: T): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof color === "undefined") {
    return { classes, inline };
  }

  //console.log(color);
  switch (typeof color) {
    case "string":
      switch (color) {
        case "gradient-1":
        case "gradient-2":
        case "gradient-3":
          classes += `bgclip-${color}`;
          break;
        default:
          classes += `c-${color}`;
          break;
      }
      break;
    // case "object":
    //   inline = {};
    //   break;
  }

  return { classes, inline };
};
