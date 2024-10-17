import { HeightProps } from "@uiTypes";

export const height = <T extends HeightProps>({
  height,
}: T): string | undefined => {
  if (!height) return;
  const { value, unit = "px" } = height;

  return `${value && `height: ${value}${unit};`}`;
};

// export const fontSize = <T extends FontSize>(
//   fontSize: T
// ): React.CSSProperties | undefined => {
//   if (!fontSize) return;
//   const { value, unit = "px" } = fontSize;

//   return {
//     fontSize: `${value}${unit}`,
//   };
// };
