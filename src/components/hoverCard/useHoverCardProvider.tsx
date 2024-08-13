import { useContext } from "react";
import { HoverCardContext } from "./HoverCardContext";

const useHoverCardProvider = () => {
  const context = useContext(HoverCardContext);
  if (!context) {
    throw new Error(
      "Component HoverCard.Heading must be used within HoverCard"
    );
  }
  return;
};

export default useHoverCardProvider;
