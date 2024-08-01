import React from "react";
import { Link } from "react-router-dom";

const ComponentNavRoutes = () => {
  return (
    <div className="routeNav">
      <ul className="list">
        <Link to="/list" className="list-inline">
          List
        </Link>
        <Link to="/button" className="list-inline">
          Button
        </Link>
        <Link to="/sectionlabel" className="list-inline">
          Section Label
        </Link>
      </ul>
    </div>
  );
};

export default ComponentNavRoutes;
