import "@testing-library/jest-dom";
import { getWidthStyle } from "_utils";

describe(`getBackgroundStyle Function`, () => {
  test(`width is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getWidthStyle({ width: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`width props defined {value}, unit as default "px"`, () => {
    expect(getWidthStyle({ width: { value: undefined } })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`width props defined {value}, unit as default "px"`, () => {
    expect(getWidthStyle({ width: { value: 150 } })).toStrictEqual({
      classes: "",
      inline: { width: "150px" },
    });
  });

  test(`width props defined {unit, value}`, () => {
    expect(getWidthStyle({ width: { unit: "%", value: 50 } })).toStrictEqual({
      classes: "",
      inline: { width: "50%" },
    });
  });

  test(`height props defined {value}, unit as default "px"`, () => {
    expect(getWidthStyle({ width: { value: 10, unit: "px" } })).toStrictEqual({
      classes: "",
      inline: { width: "10px" },
    });
  });
  test(`width props defined {unit, value}`, () => {
    expect(getWidthStyle({ width: { unit: "%", value: 50 } })).toStrictEqual({
      classes: "",
      inline: { width: "50%" },
    });
  });
  test(`width props defined {unit, value}`, () => {
    expect(
      getWidthStyle({ width: { unit: "%", value: undefined } })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`width props defined {unit, value}`, () => {
    expect(
      getWidthStyle({ width: { unit: undefined, value: undefined } })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`width props defined {unit, value}`, () => {
    expect(getWidthStyle({ width: { value: 0 } })).toStrictEqual({
      classes: "",
      inline: { width: "0px" },
    });
  });
});
