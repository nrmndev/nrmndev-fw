import ComponentNavRoutes from "@routing/componentNavRoutes";
import "./App.css";
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
