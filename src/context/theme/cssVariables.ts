//Light Variables
const lightVariables = {
  light: {
    primary: "#CCC",
  },
};
//Dark Variables
const darkVariables = {
  dark: {
    primary: "#333",
  },
};
//Custom1 Variables
const custom1Variables = {
  custom1: {
    primary: "yellow",
  },
};
//Custom2 Variables
const custom2Variables = {
  custom2: {
    primary: "red",
  },
};
//Custom3 Variables
const custom3Variables = {
  custom3: {
    primary: "teal",
  },
};
export const cssVariables = {
  ...lightVariables,
  ...darkVariables,
  ...custom1Variables,
  ...custom2Variables,
  ...custom3Variables,
};
