import { MergePropsAsClassNames } from "@utils";

interface IProps extends React.HTMLProps<HTMLSpanElement> {
  position: "left" | "center" | "right";
  label: string;
}

const SectionLabel = ({ position, label, ...rest }: IProps) => {
  const classNames = MergePropsAsClassNames([
    ["section-label", position && position],
    [rest.className ? rest.className : ""],
  ]);
  return (
    <>
      <span className={classNames}>{label}</span>
    </>
  );
};

export default SectionLabel;
