import { GridBaseProps } from "@typekits";
import { MergePropsAsClassNames } from "@utils";

// import { GridBaseProps } from "types/Index";

type IProps = React.HTMLProps<HTMLDivElement> & GridBaseProps;

const ContainerGrid = ({
  templateColumns = 2,
  children,
  gap,
  ...rest
}: IProps) => {
  const classNames = MergePropsAsClassNames([
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
