import { Link } from "react-router-dom";

const ComponentNavRoutes = () => {
  return (
    <div className="routeNav">
      <ul className="list list--inline">
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
        </Link>
      </ul>
    </div>
  );
};

export default ComponentNavRoutes;
