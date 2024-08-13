import { createContext } from "react";

export const HoverCardContext = createContext(false);

interface IProps {
  children: React.ReactNode;
}

const HoverCardContextProvider = ({ children }: IProps) => {
  return (
    <HoverCardContext.Provider value={true}>
      {children}
    </HoverCardContext.Provider>
  );
};

export default HoverCardContextProvider;
