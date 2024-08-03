import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Leaf from "@components/leaf/Index";
import Container from "@components/container/Index";
import SampleList from "./SampleComponents/SampleList";
import SampleButton from "./SampleComponents/SampleButton";
import SampleHeading from "./SampleComponents/SampleHeading";
import SampleIcon from "./SampleComponents/SampleIcon";
import SampleSectionLabel from "./SampleComponents/SampleSectionLabel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "list",
        element: <SampleList />,
      },
      {
        path: "button",
        element: <SampleButton />,
      },
      { path: "sectionlabel", element: <SampleSectionLabel /> },
      { path: "leaf", element: <Leaf /> },
      { path: "icon", element: <SampleIcon /> },
      { path: "container", element: <Container /> },
      {
        path: "heading",
        element: <SampleHeading />,
      },
    ],
  },
]);

export default router;
