import { BaseProps } from "@uiTypes";
import classNames from "classnames";

type IProps = BaseProps & { fluid?: boolean };

const ContainerFlex = ({ children, ...rest }: IProps) => {
  const className = classNames("container--flex");
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

interface IPropsChild {
  children: React.ReactNode;
  flexGrow?: 0 | 1 | 2;
}
ContainerFlex.Child = ({ children, flexGrow }: IPropsChild) => {
  const className = classNames([
    "container--flex__child",
    `${flexGrow ? "grow-" + flexGrow : ""}`,
  ]);
  return <div className={className}>{children}</div>;
};

export default ContainerFlex;
