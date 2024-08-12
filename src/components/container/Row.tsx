import { MergePropsAsClassNames } from "@utils";

export interface IPropsRow extends React.HTMLProps<HTMLDivElement> {}

const Row = ({ ...rest }: IPropsRow) => {
  const classNames = MergePropsAsClassNames([
    ["row"],
    [rest.className ? rest.className : ""],
  ]);

  return <div {...rest} className={classNames}></div>;
};

export default Row;
