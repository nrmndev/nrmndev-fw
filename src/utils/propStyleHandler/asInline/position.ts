import { PositionProps } from "@uiTypes";

export const position = ({ position }: PositionProps): string | undefined => {
  if (!position) return;
  const { top, right, bottom, left, unit = "px", position: pos } = position;

  console.log(pos, top, left);
  return `
    ${pos && `position: ${pos};`}
    ${left || left === 0 ? `left: ${left}${unit};` : ``}
    ${right || right === 0 ? `right: ${right}${unit};` : ``}
    ${bottom || bottom === 0 ? `bottom: ${bottom}${unit};` : ``}
    ${top || top === 0 ? `top: ${top}${unit};` : ""}
    `;
};
