import "@testing-library/jest-dom";
import { getColorStyle } from "_utils";
describe(`getColorStyle Function`, () => {
  test(`color is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getColorStyle({ color: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`color is a string {colorOptions}, returning classes color-{primary} `, () => {
    expect(getColorStyle({ color: "primary" })).toStrictEqual({
      classes: "c-primary",
      inline: {},
    });
  });

  test(`color is a string with "gradient" values, returning classes bg-clip-{gradient}`, () => {
    expect(getColorStyle({ color: "gradient-1" })).toStrictEqual({
      classes: "bgclip-gradient-1",
      inline: {},
    });
  });
});
