import { mergePropsAsClassNames } from "@utils";

interface IProps extends React.HTMLProps<HTMLSpanElement> {
  position: "left" | "center" | "right";
  label: string;
}

const SectionLabel = ({ position, label, ...rest }: IProps) => {
  const classNames = mergePropsAsClassNames([
    ["section-label", position ?? ""],
    [rest.className ?? ""],
  ]);
  return (
    <>
      <span className={classNames}>{label}</span>
    </>
  );
};

export default SectionLabel;
