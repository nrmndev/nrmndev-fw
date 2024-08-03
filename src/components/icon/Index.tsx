import { IconType } from "react-icons";
import { ImCogs } from "react-icons/im";

interface IProps {
  icon: IconType;
  variant: "primary-rounded" | "secondary-rounded" | "primary" | "secondary";
}

const Icon = ({ icon: Icon = ImCogs, variant = "primary" }: IProps) => {
  const classNames: string[] = ["icon"];
  classNames.push(`icon--` + variant);
  variant && classNames.push(`icon--` + variant);
  // size && classNames.push(`icon--` + size);
  const props = {
    ...(classNames.length > 0 && { className: classNames.join(" ") }),
  };

  return (
    <>
      <span {...props}>
        <Icon />
      </span>
    </>
  );
};

export default Icon;
