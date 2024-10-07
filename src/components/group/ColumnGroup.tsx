import { BaseProps, ColumnOptions } from "@uiTypes";
import React, { ReactElement } from "react";

interface ColumnGroupProps extends BaseProps {
  wrap?: boolean;
  alignment?: "left" | "center" | "right";
  direction?: "column" | "row";
  spacing?: "normal" | "space-between";
  fullWidth?: boolean;
  columns?: ColumnOptions;
}

const ColumnGroup = ({
  children,
  direction = "column", // 'row' or 'column'
  alignment = "left",
  spacing = "normal",
  wrap = false,
  fullWidth = false,
  columns,
}: ColumnGroupProps) => {
  // Count the number of children
  const childCount = React.Children.count(children);
  // Calculate width per child based on columns or number of children
  const childWidth = columns
    ? `calc(${100 / columns}% - 16px)`
    : `calc(${100 / childCount}% - 16px)`;
  return (
    <div
      className={`column-group column-group--${direction} column-group--${alignment} column-group--spacing-${spacing} ${
        wrap ? "column-group--wrap" : ""
      }`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as ReactElement<{
              className?: string;
              style?: React.CSSProperties;
            }>,
            {
              className: `${
                child.props.className ? child.props.className + " " : ""
              }${
                fullWidth ? "column-group__item--full" : "column-group__item"
              }`,
              style: { ...child.props.style, flex: `0 0 ${childWidth}` }, // Flexibly set width for each child
            }
          );
        }
        return child;
      })}
    </div>
  );
};

export default ColumnGroup;
