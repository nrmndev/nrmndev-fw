import { DisplayProps } from "@uiTypes";

export const displayClasses = ({
  display,
}: DisplayProps): string | undefined => {
  if (!display) return;
  return `d-${display}`;
};
