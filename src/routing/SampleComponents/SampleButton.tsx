import { useUtilityTheme } from "@uiContext";
import { Button, Container } from "components/component.barrel.index";
import { ButtonComponentProps } from "components/component.barrel.types";
import { useEffect, useRef } from "react";

const ButtonCommonProps = {
  size: "md",
  margin: "sm",
  font: { size: { value: 50 } },
  border: { width: 3, color: "primary" },
} as const;

// const BUTTONVARIANTS: ButtonComponentProps[] = [
//   { variant: "flat" },
//   { variant: "solid-primary" },
//   { variant: "solid-secondary" },
//   { variant: "solid-accent-1" },
//   { variant: "solid-accent-2" },
//   { variant: "solid-accent-3" },
//   { variant: "solid-dark" },
//   { variant: "solid-white" },
//   { variant: "solid-black" },
//   { variant: "solid-light" },
//   { variant: "outline-primary" },
//   { variant: "outline-secondary" },
//   { variant: "outline-accent-1" },
//   { variant: "outline-accent-2" },
//   { variant: "outline-accent-3" },
//   { variant: "outline-dark" },
//   { variant: "outline-white" },
//   { variant: "outline-black" },
//   { variant: "outline-light" },
// ];
const SampleButton = () => {
  const { dispatch } = useUtilityTheme();

  const switchToLight = () => {
    dispatch({ type: "Update_Theme", payload: "light" });
  };
  const switchToDark = () => {
    dispatch({ type: "Update_Theme", payload: "dark" });
  };

  const switchToCustom1 = () => {
    dispatch({ type: "Update_Theme", payload: "custom1" });
  };

  const switchToCustom2 = () => {
    dispatch({ type: "Update_Theme", payload: "custom2" });
  };

  const switchToCustom3 = () => {
    dispatch({ type: "Update_Theme", payload: "custom3" });
  };

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <>
      <Container usx={{ background: "light", fluid: true, padding: "lg" }}>
        <Button
          usx={{
            margin: "sm",
            font: { size: { value: 25 } },
            background: "white",
            color: "secondary",
            border: { width: 3, color: "secondary" },
            hover: {
              color: "black",
              background: "white",
              border: { width: 3, color: "dark" },
            },
          }}
          ref={ref}
          onClick={switchToLight}
        >
          Switch to Light Theme
        </Button>
        {/* <Button
          template={2}
          hover={{
            color: "black",
            background: "white",
            border: { width: 3, color: "dark" },
          }}
          onClick={switchToDark}
        >
          Switch to Dark Theme
        </Button>
        <Button
          template={2}
          hover={{
            color: "black",
            background: "white",
            border: { width: 3, color: "dark" },
          }}
          onClick={switchToCustom1}
        >
          Switch to Custom1 Theme
        </Button>
        <Button
          template={2}
          hover={{
            color: "black",
            background: "white",
            border: { width: 3, color: "dark" },
          }}
          onClick={switchToCustom2}
        >
          Switch to Custom2 Theme
        </Button>
        <Button
          template={2}
          hover={{
            color: "black",
            background: "white",
            border: { width: 3, color: "dark" },
          }}
          onClick={switchToCustom3}
        >
          Switch to Custom3 Theme
        </Button>
        {BUTTONVARIANTS.map((button, index) => {
          return (
            <Button
              {...ButtonCommonProps}
              variant={button.variant}
              key={index}
              hover={{
                color: "black",
                background: "white",
                border: { width: 3, color: "dark" },
              }}
            >
              {button.variant}
            </Button>
          );
        })}{" "} */}
      </Container>
    </>
  );
};

export default SampleButton;
