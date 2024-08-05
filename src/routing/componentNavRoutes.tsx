import { Link } from "react-router-dom";

const ComponentNavRoutes = () => {
  return (
    <div className="routeNav">
      <ul className="nav-list list--inline">
        <Link to="/list" className="list__item">
          List
        </Link>
        <Link to="/button" className="list__item">
          Button
        </Link>
        <Link to="/sectionlabel" className="list__item">
          Section Label
        </Link>{" "}
        <Link to="/leaf" className="list__item">
          Leaf
        </Link>{" "}
        <Link to="/icon" className="list__item">
          Icon
        </Link>{" "}
        <Link to="/container" className="list__item">
          Container
        </Link>{" "}
        <Link to="/heading" className="list__item">
          Heading
        </Link>
        <Link to="/media" className="list__item">
          Media
        </Link>
      </ul>
    </div>
  );
};

export default ComponentNavRoutes;
