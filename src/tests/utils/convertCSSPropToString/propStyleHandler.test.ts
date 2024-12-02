import "@testing-library/jest-dom";
import { convertCSSPropToString } from "_utils";

describe(`convertCSSPropToString Function`, () => {
  test(`{fontSize: "10px"} to "font-size: 10px;"`, () => {
    expect(convertCSSPropToString({ fontSize: "10px" })).toStrictEqual(
      `font-size: 10px;`
    );
  });

  test(`undefined to ""`, () => {
    expect(convertCSSPropToString(undefined)).toStrictEqual(undefined);
  });
});
// border: { width: 5 },
// font: { family: "Montserrat", size: "lg" },
// height: { value: 100, unit: "rem" },
// position: { position: "relative" },
// width: { unit: "vw", value: 100 }
