import { MergePropsAsClassNames } from "@utils";

type IProps = React.HTMLProps<HTMLDivElement> & { fluid?: boolean };

const ContainerFlex = ({ children, ...rest }: IProps) => {
  const classNames = MergePropsAsClassNames([
    [rest.className ? rest.className : ""],
    ["", "container--flex"],
  ]);
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

interface IPropsChild {
  children: React.ReactNode;
  flexGrow?: 0 | 1 | 2;
}
ContainerFlex.Child = ({ children, flexGrow }: IPropsChild) => {
  const classNames = MergePropsAsClassNames([
    ["", "container--flex__child"],
    ["", flexGrow ? "grow-" + flexGrow : ""],
  ]);
  return <div className={classNames}>{children}</div>;
};

export default ContainerFlex;
