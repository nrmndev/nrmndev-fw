import { IconType } from "react-icons";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface IProps {
  display?: "inline" | "block";
  icon?: IconType;
  iconSize?: number;
  iconColor?: "primary" | "secondary" | "accent";
  items: string[];
}

const List = ({
  display = "block",
  icon: Icon = IoCheckmarkCircleOutline,
  iconSize = 24,
  iconColor = "primary",
  items = ["please add items array"],
}: IProps) => {
  return (
    <ul className={`list list--` + display}>
      {items.map((i, idx) => (
        <li className={`list__item list__item--` + iconColor} key={idx}>
          <Icon size={iconSize} /> {i}
        </li>
      ))}
    </ul>
  );
};

export default List;
