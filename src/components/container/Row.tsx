import { BaseProps } from "@typekits";
import { mergePropsAsClassNames } from "@utils";

export interface IPropsRow extends BaseProps {}

const Row = ({ ...rest }: IPropsRow) => {
  const classNames = mergePropsAsClassNames([["row"], [rest.className ?? ""]]);

  return <div {...rest} className={classNames}></div>;
};

export default Row;
