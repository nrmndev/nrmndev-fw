type BorderRadius = {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
  unit?: "px" | "%" | "rem";
};
export const borderRadius = <T extends BorderRadius>(
  borderRadius: T
): string | undefined => {
  if (!borderRadius) return;
  const {
    topRight = 0,
    topLeft = 0,
    bottomRight = 0,
    bottomLeft = 0,
    unit = "px",
  } = borderRadius;
  return `
    ${topRight && `border-top-right-radius: ${topRight}${unit};`}
    ${topLeft && `border-top-left-radius: ${topLeft}${unit};`}
    ${bottomRight && `border-bottom-right-radius: ${bottomRight}${unit};`}
    ${bottomLeft && `border-bottom-left-radius: ${bottomLeft}${unit};`}
  `;
};

// export const borderRadius = <T extends BorderRadius>(
//   borderRadius: T
// ): React.CSSProperties | undefined => {
//   if (!borderRadius) return;
//   const {
//     topRight = 0,
//     topLeft = 0,
//     bottomRight = 0,
//     bottomLeft = 0,
//     unit = "px",
//   } = borderRadius;
//   return {
//     ...(topRight ? { borderTopRightRadius: `${topRight}${unit}` } : {}),
//     ...(topLeft ? { borderTopLeftRadius: `${topLeft}${unit}` } : {}),
//     ...(bottomRight
//       ? { borderBottomRightRadius: `${bottomRight}${unit}` }
//       : {}),
//     ...(bottomLeft ? { borderBottomLeftRadius: `${bottomLeft}${unit}` } : {}),
//   };
// };
