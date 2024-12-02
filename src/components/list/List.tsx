import { ListComponentProps } from "components/component.barrel.types";
import classNames from "classnames";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { forwardRef } from "react";

const List = <T extends React.ElementType>(
  {
    display = "block",
    icon: Icon,
    iconSize = 24,
    iconColor = "primary",
    color = "primary",
    items = [
      {
        label: "use {label:string} for list data",
        children: [
          { label: "use {children: [{label:string}]} for nested list" },
        ],
      },
    ],
    listType = "ol",
    text,
    template,
    ...utilityProps
  }: ListComponentProps,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  const className = classNames(
    `list`,
    `list--${listType}`,
    `list--${display}`,
    `${Icon ? `list--icon` : ""}`,
    `${text?.align ? ` list--text-${text.align}` : ""}`
  );

  return (
    <UtilityStyledComponent
      as={listType}
      className={className}
      {...utilityProps}
      ref={ref}
    >
      {items.map((item, index) => (
        <li className={`list__item color-${color}`} key={index}>
          {Icon ? (
            <span className={`list__icon list__icon--${iconColor}`}>
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
    </UtilityStyledComponent>
  );
};

export default forwardRef(List);
