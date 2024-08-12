import { MergePropsAsClassNames } from "@utils";
import Column from "./Column";
import Row from "./Row";
import { LayoutProps } from "@typekits";

type IProps = React.HTMLProps<HTMLDivElement> &
  LayoutProps & { fluid?: boolean };

const Container = ({
  children,
  fluid = false,
  alignItems = "",
  justifyContent = "",
  ...rest
}: IProps) => {
  const classNames = MergePropsAsClassNames([
    [rest.className ? rest.className : ""],
    ["", fluid ? "container--fluid" : "container"],
    ["", justifyContent ? "justify-" + justifyContent : ""],
    ["", alignItems ? "items-" + alignItems : ""],
  ]);
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

Container.Column = Column;
Container.Row = Row;
export default Container;
