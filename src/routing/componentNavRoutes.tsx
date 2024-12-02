import { List } from "components/component.barrel.index";
import { PiLineVertical } from "react-icons/pi";
import { Link } from "react-router-dom";

const LinksArray = [
  { label: "Button", to: "/button" },
  { label: "Card", to: "/card" },
  { label: "Container", to: "/container" },
  { label: "Column", to: "/column" },
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
  { label: "Utility Integration", to: "/integration" },
  { label: "Ceh", to: "/ceh" },
  { label: "Trial Template", to: "/trial" },
  { label: "MUI ", to: "/mui" },
  { label: "Revised ", to: "/revised" },
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
        text={{ align: "center" }}
        listType="ul"
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
