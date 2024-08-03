import List from "@components/list/Index";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Button from "@components/button/Index";
import SectionLabel from "@components/section-label/Index";
import Leaf from "@components/leaf/Index";
import Icon from "@components/icon/Index";
import Container from "@components/container/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "list",
        element: (
          <List
            items={[
              "Market Research",
              "Pre-construction services",
              "Industrial manufacturing",
              "Build and construction",
            ]}
          />
        ),
      },
      { path: "button", element: <Button /> },
      { path: "sectionlabel", element: <SectionLabel /> },
      { path: "leaf", element: <Leaf /> },
      { path: "icon", element: <Icon /> },
      { path: "container", element: <Container /> },
    ],
  },
]);

export default router;
