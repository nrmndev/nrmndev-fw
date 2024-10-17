type FontSize = { value: number; unit?: "px" | "%" | "rem" };
export const fontSize = <T extends FontSize>(
  fontSize: T
): string | undefined => {
  if (!fontSize) return;
  const { value, unit = "px" } = fontSize;

  return `${value && `fontSize: ${value}${unit};`}`;
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
