import { ColorOptions, BackgroundAsImageProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getBackgroundStyle = <
  T extends BackgroundAsImageProps | ColorOptions
>(
  background: T
): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof background === "undefined") {
    return { classes, inline };
  }

  switch (typeof background) {
    case "string":
      classes += `bg-${background}`;
      break;
    case "object":
      const {
        attachment = "fixed",
        image,
        position = "center",
        repeat = "no-repeat",
        size = "cover",
      } = background;

      const positionStyle =
        typeof position === "object"
          ? `${position.value}/${position.unit}`
          : position;
      inline = {
        ...(background
          ? {
              background: `url(${image}) ${repeat} ${positionStyle}/${size} ${attachment}`,
            }
          : {}),
      };
      break;
  }

  return { classes, inline };
};
