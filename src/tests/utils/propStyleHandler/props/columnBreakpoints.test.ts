import "@testing-library/jest-dom";
import { getColumnBreakPointStyle } from "@utils";

describe(`getColumnBreakPointStyle Function`, () => {
  test(`{ColumnBreakPointProps} passed but with undefined values, returning {classes:"", inline:{}} `, () => {
    expect(
      getColumnBreakPointStyle({
        lg: undefined,
        sm: undefined,
        xs: undefined,
        md: undefined,
        xl: undefined,
        xxl: undefined,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`{ColumnBreakPointProps} passed with just xs `, () => {
    expect(
      getColumnBreakPointStyle({
        lg: undefined,
        sm: undefined,
        xs: 3,
        md: undefined,
        xl: undefined,
        xxl: undefined,
      })
    ).toStrictEqual({
      classes: "col-xs-3",
      inline: {},
    });
  });

  test(`{ColumnBreakPointProps} passed, returning {classes:"col-sm-{size}", inline:{}} `, () => {
    expect(
      getColumnBreakPointStyle({ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 })
    ).toStrictEqual({
      classes: "col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-5 col-xxl-6",
      inline: {},
    });
  });

  test(`{ColumnBreakPointProps} passed, returning {classes:"col-sm-{size}", inline:{}} `, () => {
    expect(
      getColumnBreakPointStyle({ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 })
    ).toStrictEqual({
      classes: "col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-5 col-xxl-6",
      inline: {},
    });
  });
});
