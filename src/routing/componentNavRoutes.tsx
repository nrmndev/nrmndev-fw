import { List } from "@uiComponents";
import { PiLineVertical } from "react-icons/pi";
import { Link } from "react-router-dom";

const LinksArray = [
  { label: "Button", to: "/button" },
  { label: "Card", to: "/card" },
  { label: "Container", to: "/container" },
  // { label: "Countdown", to: "/countdown" },
  { label: "Form", to: "/form" },
  { label: "Hover Card", to: "/hovercard" },
  { label: "Icon", to: "/icon" },
  { label: "Image", to: "/image" },
  { label: "List", to: "/list" },
  { label: "Media", to: "/media" },
  { label: "Progress Bar", to: "/progressbar" },
  { label: "Row", to: "/row" },
  { label: "Section Label", to: "/sectionlabel" },
  { label: "Typography", to: "/typography" },
];

const ListItem = LinksArray.map((link, i) => {
  return {
    label: (
      <Link to={link.to} className="list__item" key={i}>
        {link.label}
      </Link>
    ),
  };
});

const ComponentNavRoutes = () => {
  return (
    <div className="routeNav">
      <List
        textAlign="center"
        listType="unordered-list"
        icon={PiLineVertical}
        iconColor="white"
        color="white"
        display="inline-flex"
        items={ListItem}
      />
    </div>
  );
};

export default ComponentNavRoutes;
