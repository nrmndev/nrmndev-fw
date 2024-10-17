import { WidthProps } from "@uiTypes";

export const width = <T extends WidthProps>({
  width,
}: T): string | undefined => {
  if (!width) return;
  const { value, unit = "px" } = width;

  return `${value && `width: ${value}${unit};`}`;
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
