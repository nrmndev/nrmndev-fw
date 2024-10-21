import { ColorOptions, BackgroundAsImageProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";
import { BackgroundProps } from "types/props/backgroundProps";

export const getBackgroundStyle = <T extends BackgroundProps>({
  background,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof background === "undefined") {
    return { classes, inline };
  }

  if (typeof background === "string") {
    classes += `bg-${background}`;
  }

  if (typeof background === "object") {
    const {
      image,
      attachment = "fixed",
      position = "center",
      size = "cover",
      repeat = "no-repeat",
    } = background;
    console.log(image, attachment, position, size);
    const positionStyle =
      typeof position === "object"
        ? `${position.value}/${position.unit}`
        : position;
    inline = {
      background: `url(${image}) ${repeat} ${positionStyle}/${size} ${attachment}`,
    };
  }

  return { classes, inline };
};
