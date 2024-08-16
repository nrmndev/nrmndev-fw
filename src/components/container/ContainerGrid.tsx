import { BaseProps, ContainerGridProps } from "@typekits";
import { mergePropsAsClassNames } from "@utils";

// import { GridBaseProps } from "types/Index";

type IProps = BaseProps & ContainerGridProps & { fluid?: boolean };

const ContainerGrid = ({
  templateColumns = 2,
  children,
  gap,
  //fluid = false,
  ...rest
}: IProps) => {
  const classNames = mergePropsAsClassNames([
    //["container", fluid ? "fluid" : ""],
    ["container--grid"],
    ["", templateColumns ? "container--grid-column-" + templateColumns : ""],
    ["", gap ? "gap-" + gap : ""],
    [rest.className ?? ""],
  ]);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default ContainerGrid;
