import "@testing-library/jest-dom";
import { getFlexStyle } from "@utils";

//Uses FlexProps

describe(`getPositionStyle Function`, () => {
  test(`{FlexProps} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getFlexStyle(undefined)).toMatchObject({
      classes: "",
      inline: {},
    });
  });
  test(`{FlexProps} defined, returning {classes:"flex-nowrap flex-col content-around items-baseline justify-center", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flexDirection: "col",
        flexWrap: "nowrap",
        alignContent: "around",
        alignItems: "baseline",
        justifyContent: "center",
      })
    ).toStrictEqual({
      classes:
        "flex-nowrap flex-col content-around items-baseline justify-center",
      inline: {},
    });
  });

  test(`{flexDirection} defined, returning {classes:"flex-col", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flexDirection: "col",
      })
    ).toStrictEqual({
      classes: "flex-col",
      inline: {},
    });
  });

  test(`{alignContent} defined, returning {classes:"content-center", inline:{}} `, () => {
    expect(
      getFlexStyle({
        alignContent: "center",
      })
    ).toStrictEqual({
      classes: "content-center",
      inline: {},
    });
  });

  test(`{alignItems} defined, returning {classes:"items-end", inline:{}} `, () => {
    expect(
      getFlexStyle({
        alignItems: "end",
      })
    ).toStrictEqual({
      classes: "items-end",
      inline: {},
    });
  });

  test(`{justifyContent} defined, returning {classes:"justify-evenly", inline:{}} `, () => {
    expect(
      getFlexStyle({
        justifyContent: "evenly",
      })
    ).toStrictEqual({
      classes: "justify-evenly",
      inline: {},
    });
  });

  test(`{flexDirection} defined, returning {classes:"flex-col-reverse", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flexDirection: "col-reverse",
      })
    ).toStrictEqual({
      classes: "flex-col-reverse",
      inline: {},
    });
  });
});
