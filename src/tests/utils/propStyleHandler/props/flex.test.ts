import "@testing-library/jest-dom";
import { getFlexStyle } from "_utils";

//Uses FlexProps

describe(`getPositionStyle Function`, () => {
  test(`{FlexProps} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getFlexStyle({ flex: undefined })).toMatchObject({
      classes: "",
      inline: {},
    });
  });
  test(`{FlexProps} defined, returning {classes:"flex-nowrap flex-col content-around items-baseline justify-center", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flex: {
          flexDirection: "col",
          flexWrap: "nowrap",
          alignContent: "around",
          alignItems: "baseline",
          justifyContent: "center",
        },
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
        flex: {
          flexDirection: "col",
        },
      })
    ).toStrictEqual({
      classes: "flex-col",
      inline: {},
    });
  });

  test(`{alignContent} defined, returning {classes:"content-center", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flex: {
          alignContent: "center",
        },
      })
    ).toStrictEqual({
      classes: "content-center",
      inline: {},
    });
  });

  test(`{alignItems} defined, returning {classes:"items-end", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flex: {
          alignItems: "end",
        },
      })
    ).toStrictEqual({
      classes: "items-end",
      inline: {},
    });
  });

  test(`{justifyContent} defined, returning {classes:"justify-evenly", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flex: {
          justifyContent: "evenly",
        },
      })
    ).toStrictEqual({
      classes: "justify-evenly",
      inline: {},
    });
  });

  test(`{flexDirection} defined, returning {classes:"flex-col-reverse", inline:{}} `, () => {
    expect(
      getFlexStyle({
        flex: {
          flexDirection: "col-reverse",
        },
      })
    ).toStrictEqual({
      classes: "flex-col-reverse",
      inline: {},
    });
  });
});
