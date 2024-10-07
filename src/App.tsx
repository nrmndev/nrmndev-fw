//import ComponentNavRoutes from "@routing";
import ComponentNavRoutes from "./routing/ComponentNavRoutes";
import "./App.css";
import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import { CssVariableProvider } from "context/CssProvider";
import Homepage from "routing/SampleSections/Homepage";

function App() {
  return (
    <>
      {/* <CssVariableProvider value={{ "--color-primary": "#4CB944" }}> */}
      <ComponentNavRoutes />
      {/* <Homepage /> */}
      <Outlet />
      {/* </CssVariableProvider> */}
    </>
  );
}

export default App;
