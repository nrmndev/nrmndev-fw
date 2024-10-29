import "@testing-library/jest-dom";
import { getHeightStyle } from "@utils";

describe(`getBackgroundStyle Function`, () => {
  test(`height is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getHeightStyle({ height: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`height props defined {value}, unit as default "px"`, () => {
    expect(getHeightStyle({ height: { value: 150 } })).toStrictEqual({
      classes: "",
      inline: { height: "150px" },
    });
  });
  test(`height props defined {value}, unit as default "px"`, () => {
    expect(getHeightStyle({ height: { value: undefined } })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  test(`height props defined {value}, unit as default "px"`, () => {
    expect(getHeightStyle({ height: { value: 10, unit: "px" } })).toStrictEqual(
      {
        classes: "",
        inline: { height: "10px" },
      }
    );
  });
  test(`height props defined {unit, value}`, () => {
    expect(getHeightStyle({ height: { unit: "%", value: 50 } })).toStrictEqual({
      classes: "",
      inline: { height: "50%" },
    });
  });
  test(`height props defined {unit, value}`, () => {
    expect(
      getHeightStyle({ height: { unit: "%", value: undefined } })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`height props defined {unit, value}`, () => {
    expect(
      getHeightStyle({ height: { unit: undefined, value: undefined } })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`height props defined {unit, value}`, () => {
    expect(getHeightStyle({ height: { value: 0 } })).toStrictEqual({
      classes: "",
      inline: { height: "0px" },
    });
  });
});
