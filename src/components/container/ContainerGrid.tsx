import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";
import { ContainerGridProps } from "types/Index";

// import { GridBaseProps } from "types/Index";

type IProps = React.HTMLProps<HTMLDivElement> & ContainerGridProps;

const ContainerGrid = ({
  templateColumns = 2,
  children,
  gap,
  ...props
}: IProps) => {
  const classNames = SpreadClassNameAsProps([
    ["container--grid"],
    ["container", templateColumns ? "grid-column-" + templateColumns : ""],
    ["", gap ? "gap-" + gap : ""],
  ]);
  return (
    <div {...classNames} {...props}>
      {children}
    </div>
  );
};

export default ContainerGrid;
