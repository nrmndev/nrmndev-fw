import "@testing-library/jest-dom";
import { ColorProps } from "@uiTypes";
import { isOfType } from "@utils";

// NEEDS REFINEMENT
describe(`isOfType Function`, () => {
  test(`check if passed argument is undefined expecting false `, () => {
    expect(isOfType<ColorProps>(undefined)).toBe(false);
  });
  test(`passing color, this is a valid prop from Colorprops, expecting true `, () => {
    expect(isOfType<ColorProps>({ color: "primary" })).toBe(true);
  });
  // test(`passing invalidProps, expecting false `, () => {
  //   expect(isOfType<ColorProps>({ invalidProp: "toBeFalse" })).toBe(false);
  // });
});
