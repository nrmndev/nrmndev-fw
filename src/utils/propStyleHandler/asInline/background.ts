import { BackgroundAsImageProps } from "@uiTypes";

export const background = <T extends BackgroundAsImageProps>(
  background: T
): React.CSSProperties | undefined => {
  if (!background) return;

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
  return {
    background: `url(${image}) ${repeat} ${positionStyle}/${size} ${attachment}`,
  };
};
