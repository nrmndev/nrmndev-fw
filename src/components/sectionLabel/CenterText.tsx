type CenterTextProps = {
  label: string;
};

const CenterText = ({ label }: CenterTextProps) => {
  return <span className="sectionLabel__text">{label}</span>;
};

export default CenterText;
