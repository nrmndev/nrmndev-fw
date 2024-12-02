import {
  GetStyleReturnProps,
  Position3DOptions,
  TranslateProps,
} from "@uiTypes";

export const getTranslateStyle = ({
  translate,
}: TranslateProps): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  if (translate === undefined) return { classes, inline };

  //classes += `d-${display}`;
  let transformStringLiteral: string[] = [];
  const { x, y, z } = translate as Position3DOptions;

  if (x || x === 0) {
    const { unit = "px", value } = x;
    transformStringLiteral.push(`translateX(${value}${unit})`);
  }
  if (y || y === 0) {
    const { unit = "px", value } = y;
    transformStringLiteral.push(`translateX(${value}${unit})`);
  }
  if (z || z === 0) {
    const { unit = "px", value } = z;
    transformStringLiteral.push(`translateX(${value}${unit})`);
  }
  inline = {
    transform: transformStringLiteral.join(" "),
  };
  return { classes, inline };
};
