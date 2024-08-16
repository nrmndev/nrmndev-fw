import { mergePropsAsClassNames, propToClass } from "@utils";
import Column from "./Column";
import Row from "./Row";
import { BaseProps, LayoutProps, SpacingProps } from "@typekits";

type IProps = BaseProps & LayoutProps & SpacingProps & { fluid?: boolean };

const Container = ({
  children,
  fluid,
  alignItems,
  justifyContent,
  gap,
  padding,
  margin,
  ...rest
}: IProps) => {
  //const { padding, margin } = rest;
  //console.log(padding);
  const classNames = mergePropsAsClassNames([
    [rest.className ?? ""],
    ["", fluid ? "container--fluid" : "container"],
    ["", justifyContent ? "justify-" + justifyContent : ""],
    ["", alignItems ? "items-" + alignItems : ""],
    ["", gap ? "gap-" + gap : ""],
    ["", propToClass("padding", padding) ?? ""],
    ["", propToClass("margin", margin) ?? ""],
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
