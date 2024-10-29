import "@testing-library/jest-dom";
import { getColorStyle } from "@utils";
describe(`getColorStyle Function`, () => {
  test(`color is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getColorStyle({ color: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`color is a string {colorOptions}, returning classes color-{primary} `, () => {
    expect(getColorStyle({ color: "primary" })).toStrictEqual({
      classes: "color-primary",
      inline: {},
    });
  });

  test(`color is a string with "gradient" values, returning classes bg-clip-{gradient}`, () => {
    expect(getColorStyle({ color: "gradient-1" })).toStrictEqual({
      classes: "bg-clip-gradient-1",
      inline: {},
    });
  });
});
