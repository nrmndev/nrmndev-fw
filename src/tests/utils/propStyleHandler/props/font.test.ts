import "@testing-library/jest-dom";
import { getFontStyle } from "_utils";
describe(`getFontStyle Function`, () => {
  test(`returns empty classes and inline styles when font is undefined"`, () => {
    expect(getFontStyle({ font: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`returns class 'font-lg' when font is a single SizeOptions value`, () => {
    expect(getFontStyle({ font: "lg" })).toStrictEqual({
      classes: "font-lg",
      inline: {},
    });
  });

  test("returns class 'font-xxl' when only font size is provided in FontProps", () => {
    expect(getFontStyle({ font: { size: "xxl" } })).toStrictEqual({
      classes: "font-xxl",
      inline: {},
    });
  });

  test(`returns inline styles when font has family, custom size, style, and weight`, () => {
    expect(
      getFontStyle({
        font: {
          family: "Montserrat",
          size: { value: 120, unit: "px" },
          lineHeight: undefined,
          style: "italic",
          weight: "900",
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        fontFamily: "Montserrat",
        fontSize: "120px",
        fontStyle: "italic",
        fontWeight: "900",
      },
    });
  });
  test(`returns inline styles when font has family, size, lineHeight, and weight`, () => {
    expect(
      getFontStyle({
        font: {
          family: "Montserrat",
          size: { value: 120, unit: "px" },
          lineHeight: 1.5,
          style: undefined,
          weight: "900",
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        fontFamily: "Montserrat",
        fontSize: "120px",
        fontWeight: "900",
        lineHeight: 1.5,
      },
    });
  });

  test("returns inline styles when font has family, size, lineHeight, and normal style", () => {
    expect(
      getFontStyle({
        font: {
          family: "Montserrat",
          size: { value: 120, unit: "px" },
          lineHeight: 1.5,
          style: "normal",
          weight: undefined,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        fontFamily: "Montserrat",
        fontSize: "120px",
        fontStyle: "normal",
        lineHeight: 1.5,
      },
    });
  });

  test("returns inline styles when font lacks family but has size, lineHeight, style, and weight", () => {
    expect(
      getFontStyle({
        font: {
          family: undefined,
          size: { value: 120, unit: "px" },
          lineHeight: 1.5,
          style: "italic",
          weight: "900",
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        fontSize: "120px",
        fontStyle: "italic",
        fontWeight: "900",
        lineHeight: 1.5,
      },
    });
  });
  test("returns all inline styles when font has fully defined properties", () => {
    expect(
      getFontStyle({
        font: {
          family: "Montserrat",
          size: { value: 120, unit: "px" },
          lineHeight: 1.5,
          style: "italic",
          weight: "900",
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        fontFamily: "Montserrat",
        fontSize: "120px",
        fontStyle: "italic",
        fontWeight: "900",
        lineHeight: 1.5,
      },
    });
  });

  //Family by default is required, testing coverage to check if it prints right default values
  test("returns empty classes and inline styles when all font properties are undefined", () => {
    expect(
      getFontStyle({
        font: {
          family: undefined,
          size: undefined,
          lineHeight: undefined,
          style: undefined,
          weight: undefined,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});
