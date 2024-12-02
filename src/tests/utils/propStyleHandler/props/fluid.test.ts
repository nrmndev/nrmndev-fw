import "@testing-library/jest-dom";
import { getFluidStyle } from "_utils";

describe(`getFluid Function`, () => {
  test(`to return false, fluid is undefined. expecting {classes: "", inline: {}} `, () => {
    expect(getFluidStyle({ fluid: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`to return true, fluid is true. expecting {classes: "fluid"}`, () => {
    expect(getFluidStyle({ fluid: true })).toStrictEqual({
      classes: "fluid",
      inline: {},
    });
  });
  test(`to return false, fluid is false expecting {classes: "", inline: {}} `, () => {
    expect(getFluidStyle({ fluid: false })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});
