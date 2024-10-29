import "@testing-library/jest-dom";
import { getTextStyle } from "@utils";

describe(`getBackgroundStyle Function`, () => {
  test(`text is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getTextStyle({ text: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`text props defined {align, decoration, transform} but with value undefined`, () => {
    expect(
      getTextStyle({
        text: {
          align: undefined,
          decoration: undefined,
          transform: undefined,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  test(`text props defined {align, decoration, transform}`, () => {
    expect(
      getTextStyle({
        text: {
          align: "center",
          decoration: "dashed",
          transform: "capitalize",
        },
      })
    ).toStrictEqual({
      classes: "text-center text-dashed text-capitalize",
      inline: {},
    });
  });
});
