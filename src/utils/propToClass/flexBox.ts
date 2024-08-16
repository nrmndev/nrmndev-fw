import { mergePropsAsClassNames } from "@utils";
import { FlexBoxProps } from "@typekits";

export const flexBoxClasses = (value: FlexBoxProps | undefined) => {
  if (value === undefined || value === null) return undefined;
  const { alignSelf, justifySelf } = value;
  return mergePropsAsClassNames([
    ["", alignSelf ? "align-self" + alignSelf : ""],
    ["", justifySelf ? "justify-self" + justifySelf : ""],
  ]);
};
