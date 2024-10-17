import { EdgeOptions } from "@uiTypes";

export const padding = <T extends EdgeOptions>(
  padding: T
): string | undefined => {
  if (!padding) return;
  const { top = 0, right = 0, bottom = 0, left = 0, unit = "px" } = padding;

  return `
    ${top && `padding-top: ${top}${unit};`}
    ${bottom && `padding-bottom: ${bottom}${unit};`}
    ${right && `padding-right: ${right}${unit};`}
    ${left && `padding-left: ${left}${unit};`}
  `;
};

// export const padding = <T extends EdgeOptions>(
//   padding: T
// ): React.CSSProperties | undefined => {
//   if (!padding) return;
//   const { top = 0, right = 0, bottom = 0, left = 0, unit = "px" } = padding;
//   return {
//     ...(top ? { paddingTop: `${top}${unit}` } : {}),
//     ...(right ? { paddingRight: `${right}${unit}` } : {}),
//     ...(bottom ? { paddingBottom: `${bottom}${unit}` } : {}),
//     ...(left ? { paddingLeft: `${left}${unit}` } : {}),
//   };
// };
