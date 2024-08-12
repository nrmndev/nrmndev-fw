import { ContainerGridProps } from "@typekits";
import { MergePropsAsClassNames } from "@utils";

// import { GridBaseProps } from "types/Index";

type IProps = React.HTMLProps<HTMLDivElement> &
  ContainerGridProps & { fluid?: boolean };

const ContainerGrid = ({
  templateColumns = 2,
  children,
  gap,
  //fluid = false,
  ...rest
}: IProps) => {
  const classNames = MergePropsAsClassNames([
    //["container", fluid ? "fluid" : ""],
    ["container--grid"],
    ["", templateColumns ? "container--grid-column-" + templateColumns : ""],
    ["", gap ? "gap-" + gap : ""],
    [rest.className ? rest.className : ""],
  ]);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default ContainerGrid;
