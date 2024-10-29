import { ListComponentProps } from "@uiComponentTypes";
import classNames from "classnames";

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
  text,
}: ListComponentProps) => {
  const ListTag = listType === "ordered-list" ? "ol" : "ul";

  const className = classNames(
    `list`,
    `list--${listType}`,
    `list--${display}`,
    `${Icon ? `list--icon` : ""}`,
    `${text?.align ? ` list--text-${text.align}` : ""}`
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
