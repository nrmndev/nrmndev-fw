import "@testing-library/jest-dom";
import { getFontStyle } from "@utils";
describe(`getColorStyle Function`, () => {
  test(`Font is undefined`, () => {
    expect(getFontStyle({ font: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`{font} is {SizeOptions} return classname ie. font-lg`, () => {
    expect(getFontStyle({ font: "lg" })).toStrictEqual({
      classes: "font-lg",
      inline: {},
    });
  });
  test(`{font} is {SizeOptions} return classname ie. font-lg`, () => {
    expect(getFontStyle({ font: "lg" })).toStrictEqual({
      classes: "font-lg",
      inline: {},
    });
  });
  // test(`{font} is {FontProps}, {family} {size as SizeOption} defined, return inline`, () => {
  //   expect(
  //     getFontStyle({ font: { family: "Montserrat", size: "lg" } })
  //   ).toStrictEqual({
  //     classes: "",
  //     inline: { font: "var(--font-lg) Montserrat" },
  //   });
  // });
  // test(`{font} is {FontProps}, {family} and {size as ValueAndUnitProps} defined, return inline`, () => {
  //   expect(
  //     getFontStyle({
  //       font: { family: "Montserrat", size: { value: 120, unit: "px" } },
  //     })
  //   ).toStrictEqual({
  //     classes: "",
  //     inline: { font: "120px Montserrat" },
  //   });
  // });

  test(`{font} is {FontProps}, {family} {size as ValueAndUnitProps} {lineHeight} {style} {weight} defined, return inline`, () => {
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
      inline: { font: "italic 900 120px/1.5 Montserrat" },
    });
  });

  //Family by default is required, testing coverage to check if it prints right default values
  test(`{family} {size} {lineHeight} {style} {weight} of undefined, expecting inline: {font: "var(--font-md) Montserrat"}`, () => {
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
      inline: { font: "var(--font-md) Montserrat" },
    });
  });
});
