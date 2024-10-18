import { EdgeOptions } from "@uiTypes";

export const padding = <T extends EdgeOptions>(
  padding: T
): string | undefined => {
  if (!padding) return;
  const { top = 0, right = 0, bottom = 0, left = 0, unit = "px" } = padding;

  return `
    ${top || top === 0 ? `padding-top: ${top}${unit};` : ""}
    ${right || right === 0 ? `padding-right: ${right}${unit};` : ``}
    ${bottom || bottom === 0 ? `padding-bottom: ${bottom}${unit};` : ``}
    ${left || left === 0 ? `padding-left: ${left}${unit};` : ``}
  `;
};
