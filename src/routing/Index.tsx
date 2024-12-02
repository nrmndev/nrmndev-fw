import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import SampleList from "./SampleComponents/SampleList";
import SampleButton from "./SampleComponents/SampleButton";
import SampleIcon from "./SampleComponents/SampleIcon";
import SampleSectionLabel from "./SampleComponents/SampleSectionLabel";
import SampleMedia from "./SampleComponents/SampleMedia";
import SampleContainer from "./SampleComponents/SampleContainer";
import SampleForm from "./SampleComponents/SampleForm";
import SampleHoverCard from "./SampleComponents/SampleHoverCard";
import SampleProgressBar from "./SampleComponents/SampleProgressBar";
import SampleCountdown from "./SampleSections/Countdown";
import SampleMainNavigation from "./SampleComponents/SampleMainNav";
import SampleHeroBanner from "./SampleComponents/SampleHero";
import SampleTypography from "./SampleComponents/SampleTypography";
import SampleCard from "./SampleComponents/SampleCard";
import SampleRow from "./SampleComponents/SampleRow";
import SampleImage from "./SampleComponents/SampleImage";
import SampleIntegration from "./SampleComponents/SampleIntegration";
import SampleColumn from "./SampleComponents/SampleColumn";
import { Homepage } from "./Caryatecton/page/homepage/Index";
import { SampleTemplatingTrial } from "./SampleComponents/SampleTemplatingTrial";
import SampleMUI from "./SampleComponents/SampleMUI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "button", element: <SampleButton /> },
      { path: "card", element: <SampleCard /> },
      { path: "container", element: <SampleContainer /> },
      { path: "countdown", element: <SampleCountdown /> },
      { path: "column", element: <SampleColumn /> },
      { path: "form", element: <SampleForm /> },
      { path: "hovercard", element: <SampleHoverCard /> },
      { path: "icon", element: <SampleIcon /> },
      { path: "image", element: <SampleImage /> },
      { path: "list", element: <SampleList /> },
      { path: "media", element: <SampleMedia /> },
      { path: "progressbar", element: <SampleProgressBar /> },
      { path: "row", element: <SampleRow /> },
      { path: "sectionlabel", element: <SampleSectionLabel /> },
      { path: "typography", element: <SampleTypography /> },
      { path: "integration", element: <SampleIntegration /> },
      { path: "ceh", element: <Homepage /> },
      { path: "trial", element: <SampleTemplatingTrial /> },
      { path: "mui", element: <SampleMUI /> },
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
