import { BaseProps, ContainerGridProps } from "@uiTypes";
import classNames from "classnames";

// import { GridBaseProps } from "types/Index";

type IProps = BaseProps & ContainerGridProps & { fluid?: boolean };

const ContainerGrid = ({
  templateColumns = 2,
  children,
  gap,
  //fluid = false,
  ...rest
}: IProps) => {
  const className = classNames(
    "container--grid",
    templateColumns ? "container--grid-column-" + templateColumns : "",
    gap ? "gap-" + gap : ""
  );

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

export default ContainerGrid;
