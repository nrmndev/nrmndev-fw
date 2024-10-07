import { ColorOptions, ColorProps, TextAlignProps } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";
//import { IoCheckmarkCircleOutline } from "react-icons/io5";

type ListOptions = "ordered-list" | "unordered-list";

type Items = {
  label: string | JSX.Element;
  children?: [{ label: string }];
};

export interface IProps extends TextAlignProps, ColorProps {
  display?:
    | "inline-flex"
    | "inline-flex-space-between"
    | "block"
    | "grid-2-columns"
    | "grid-3-columns"
    | "grid-4-columns";
  icon?: IconType;
  iconSize?: number;
  iconColor?: ColorOptions;
  items?: Items[];
  listType?: ListOptions;
}

const List = ({
  display = "block",
  icon: Icon,
  iconSize = 24,
  iconColor = "primary",
  color = "primary",
  items = [
    {
      label: "use {label:string} for list data",
      children: [{ label: "use {children: [{label:string}]} for nested list" }],
    },
  ],
  listType = "unordered-list",
  textAlign,
}: IProps) => {
  const ListTag = listType === "ordered-list" ? "ol" : "ul";

  const className = classNames(
    `list`,
    `list--${listType}`,
    `list--${display}`,
    `${Icon ? `list--icon` : ""}`,
    `${textAlign ? ` list--text-${textAlign}` : ""}`
  );

  return (
    <ListTag className={className}>
      {items.map((item, index) => (
        <li className={`list__item color-${color}`} key={index}>
          {Icon ? (
            <span className={`list__icon--${iconColor}`}>
              <Icon size={iconSize} />
            </span>
          ) : (
            ""
          )}{" "}
          {item.label}
          {item.children && item.children.length > 0 && (
            <ul>
              {item.children.map((child, index) => (
                <li key={index}> {child.label}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ListTag>
  );
};

export default List;
