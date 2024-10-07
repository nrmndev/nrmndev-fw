import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import SampleList from "./SampleComponents/SampleList";
import SampleButton from "./SampleComponents/SampleButton";
import SampleHeading from "./SampleComponents/SampleHeading";
import SampleIcon from "./SampleComponents/SampleIcon";
import SampleSectionLabel from "./SampleComponents/SampleSectionLabel";
import SampleMedia from "./SampleComponents/SampleMedia";
import SampleContainer from "./SampleComponents/SampleContainer";
import SampleForm from "./SampleComponents/SampleForm";
import SampleAboutUs from "./SampleComponents/SampleAboutUs";
import SampleText from "./SampleComponents/SampleText";
import SampleHoverCard from "./SampleComponents/SampleHoverCard";
import SampleProgressBar from "./SampleComponents/SampleProgressBar";
import SampleCountdown from "./SampleSections/Countdown";
import SampleMainNavigation from "./SampleComponents/SampleMainNav";
import SampleHeroBanner from "./SampleComponents/SampleHero";
import SampleTypography from "./SampleComponents/SampleTypography";
import SampleCard from "./SampleComponents/SampleCard";

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
        path: "card",
        element: <SampleCard />,
      },
      {
        path: "button",
        element: <SampleButton />,
      },
      { path: "sectionlabel", element: <SampleSectionLabel /> },
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
      {
        path: "countdown",
        element: <SampleCountdown />,
      },
      {
        path: "typography",
        element: <SampleTypography />,
      },
      {
        path: "mainnavigation",
        element: (
          <>
            <SampleMainNavigation />
            <SampleHeroBanner />
          </>
        ),
      },
    ],
  },
]);

export default router;
