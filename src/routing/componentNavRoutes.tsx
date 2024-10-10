import { List } from "@uiComponents";
import { PiLineVertical } from "react-icons/pi";
import { Link } from "react-router-dom";

const listArray = [
  {
    label: (
      <Link to="/list" className="list__item">
        List
      </Link>
    ),
  },
  {
    label: (
      <Link to="/button" className="list__item">
        Button
      </Link>
    ),
  },
  {
    label: (
      <Link to="/card" className="list__item">
        Card
      </Link>
    ),
  },
  {
    label: (
      <Link to="/sectionlabel" className="list__item">
        Section Label
      </Link>
    ),
  },
  {
    label: (
      <Link to="/icon" className="list__item">
        Icon
      </Link>
    ),
  },
  {
    label: (
      <Link to="/container" className="list__item">
        Container
      </Link>
    ),
  },
  {
    label: (
      <Link to="/heading" className="list__item">
        Heading
      </Link>
    ),
  },
  {
    label: (
      <Link to="/media" className="list__item">
        Media
      </Link>
    ),
  },
  {
    label: (
      <Link to="/form" className="list__item">
        Form
      </Link>
    ),
  },
  {
    label: (
      <Link to="/text" className="list__item">
        Text
      </Link>
    ),
  },
  {
    label: (
      <Link to="/hovercard" className="list__item">
        Hover Card
      </Link>
    ),
  },
  {
    label: (
      <Link to="/typography" className="list__item">
        Typography
      </Link>
    ),
  },
  {
    label: (
      <Link to="/aboutus" className="list__item">
        About Us
      </Link>
    ),
  },
  {
    label: (
      <Link to="/progressbar" className="list__item">
        Progress Bar
      </Link>
    ),
  },
  {
    label: (
      <Link to="/row" className="list__item">
        Row
      </Link>
    ),
  },
  {
    label: (
      <Link to="/countdown" className="list__item">
        Countdown
      </Link>
    ),
  },
];

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
        items={listArray}
      />
    </div>
  );
};

export default ComponentNavRoutes;
