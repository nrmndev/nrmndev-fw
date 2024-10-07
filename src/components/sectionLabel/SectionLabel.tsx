import classNames from "classnames";

export interface IProps extends React.HTMLProps<HTMLSpanElement> {
  position: "left" | "center" | "right";
  label: string;
}

const SectionLabel = ({ position = "left", label, ...rest }: IProps) => {
  const className = classNames(
    "section-label",
    position ? "section-label--" + position : ""
  );
  return (
    <>
      <span {...rest} className={className}>
        {label}
      </span>
    </>
  );
};

export default SectionLabel;
