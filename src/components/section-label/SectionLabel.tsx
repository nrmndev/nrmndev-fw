import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";

interface IProps {
  position: "left" | "center" | "right";
  label: string;
}

const SectionLabel = ({ position, label }: IProps) => {
  const className = SpreadClassNameAsProps([
    "section-label",
    position && position,
  ]);
  return (
    <>
      <span {...className}>{label}</span>
    </>
  );
};

export default SectionLabel;
