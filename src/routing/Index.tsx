import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import SampleList from "./SampleComponents/SampleList";
import SampleButton from "./SampleComponents/SampleButton";
import SampleHeading from "./SampleComponents/SampleHeading";
import SampleIcon from "./SampleComponents/SampleIcon";
import SampleSectionLabel from "./SampleComponents/SampleSectionLabel";
import SampleMedia from "./SampleComponents/SampleMedia";
import SampleContainer from "./SampleComponents/SampleContainer";
import SampleLeaf from "./SampleComponents/SampleLeaf";
import SampleForm from "./SampleComponents/SampleForm";
import SampleAboutUs from "./SampleComponents/SampleAboutUs";
import SampleText from "./SampleComponents/SampleText";
import SampleHoverCard from "./SampleComponents/SampleHoverCard";
import SampleProgressBar from "./SampleComponents/SampleProgressBar";

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
      { path: "leaf", element: <SampleLeaf /> },
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
      {
        path: "form",
        element: <SampleForm />,
      },
      {
        path: "aboutus",
        element: <SampleAboutUs />,
      },
      {
        path: "text",
        element: <SampleText />,
      },
      {
        path: "hovercard",
        element: <SampleHoverCard />,
      },
      {
        path: "progressbar",
        element: <SampleProgressBar />,
      },
    ],
  },
]);

export default router;
