import { GetStyleReturnProps, HoverProps } from "@uiTypes";
import { getBorderStyle } from "./border";
import { getBackgroundStyle } from "./background";

export const getHoverStyle = <T extends HoverProps>({
  hover,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};
  let hoverInline: React.CSSProperties = {};
  if (!hover || typeof hover !== "object")
    return { classes: classes.join(""), inline };

  const { background, color, border } = hover;

  //Background
  let inlineBackground = {};
  if (background) {
    const { inline, classes: bgClasses } = getBackgroundStyle({
      background: background,
    });
    inlineBackground = inline ? inline : inlineBackground;
    //inline && inlineBackground == inline;
    //inline && inlineBackground == inline;
    bgClasses && classes.push(`h:${bgClasses}`);
  }

  //Color
  // let inlineColor = {};
  // if (color) {
  //   const { inline } = getColorStyle({
  //     color: color,
  //   });
  //   //inlineBorder == inline ? `&:hover {${convertCSSPropToString(inline)}}` : ``;
  //   inlineColor = inline ? inline : {};
  // }

  //Classname approach
  color && classes.push(`h:c-${color}`);
  //background && classes.push(`h:bg-${background}`);

  //Border
  let inlineBorder = {};
  if (border) {
    const { inline } = getBorderStyle({ border: border });
    //inlineBorder == inline ? `&:hover {${convertCSSPropToString(inline)}}` : ``;
    inlineBorder = inline ? inline : inlineBorder;
  }

  // TODO
  // animation &&
  //   animation.length > 0 &&
  //   animation.map((a) => classes.push(`h:a-${a}`));

  hoverInline = {
    ...(inlineBorder ?? {}),
    ...(inlineBackground ?? {}),
    //...(inlineColor ?? {}),
  };

  return { classes: classes.join(" "), inline, hoverInline: hoverInline };
};
