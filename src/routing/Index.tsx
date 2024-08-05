import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { Leaf } from "@components";
import SampleList from "./SampleComponents/SampleList";
import SampleButton from "./SampleComponents/SampleButton";
import SampleHeading from "./SampleComponents/SampleHeading";
import SampleIcon from "./SampleComponents/SampleIcon";
import SampleSectionLabel from "./SampleComponents/SampleSectionLabel";
import SampleMedia from "./SampleComponents/SampleMedia";
import SampleContainer from "./SampleComponents/SampleContainer";

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
      { path: "container", element: <SampleContainer /> },
      {
        path: "heading",
        element: <SampleHeading />,
      },
      {
        path: "media",
        element: <SampleMedia />,
      },
    ],
  },
]);

export default router;
