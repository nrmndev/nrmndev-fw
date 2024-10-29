import "@testing-library/jest-dom";
import { getColumnItemsStyle } from "@utils";

//Uses FlexProps

describe(`getColumnItemsStyle Function`, () => {
  test(`{ColumnItemProps} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getColumnItemsStyle(undefined)).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  test(`{ColumnItemProps} is undefined, returning {classes:"flex-lg-2", inline:{}} `, () => {
    expect(getColumnItemsStyle({ lg: 2 })).toMatchObject({
      classes: "flex-lg-2",
      inline: {},
    });
  });
  test(`{ColumnItemProps} is undefined, returning {classes:"flex-xs-1 flex-sm-2 flex-md-3 flex-xl-5 flex-xxl-6", inline:{}} `, () => {
    expect(
      getColumnItemsStyle({ xs: 1, sm: 2, md: 3, xl: 5, xxl: 6 })
    ).toMatchObject({
      classes: "flex-xs-1 flex-sm-2 flex-md-3 flex-xl-5 flex-xxl-6",
      inline: {},
    });
  });
});
