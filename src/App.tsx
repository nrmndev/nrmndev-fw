//import ComponentNavRoutes from "@routing";
import ComponentNavRoutes from "routing/componentNavRoutes";
import "./App.css";
import "./styles/main.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ComponentNavRoutes />
      <Outlet />
    </>
  );
}

export default App;
