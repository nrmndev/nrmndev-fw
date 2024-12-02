//import ComponentNavRoutes from "@routing";
import ComponentNavRoutes from "./routing/componentNavRoutes";
import "./App.css";
import "./styles/main.scss";
import { Outlet } from "react-router-dom";
//import Homepage from "routing/SampleSections/Homepage";

function App() {
  return (
    <>
      <ComponentNavRoutes />
      {/* <Homepage /> */}
      <Outlet />
    </>
  );
}

export default App;
