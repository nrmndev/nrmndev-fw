import { DisplayOptions, GetStyleReturnProps } from "@uiTypes";

export const getDisplayStyle = (
  display?: DisplayOptions
): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  if (!display) return { classes, inline };

  //classes += `d-${display}`;
  inline = {
    display: `${display}`,
  };
  return { classes, inline };
};
