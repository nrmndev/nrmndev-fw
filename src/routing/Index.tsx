import List from "@components/list/Index";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Button from "@components/button/Index";
import SectionLabel from "@components/section-title/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "list", element: <List /> },
      { path: "button", element: <Button /> },
      { path: "sectionlabel", element: <SectionLabel /> },
    ],
  },
]);

export default router;
