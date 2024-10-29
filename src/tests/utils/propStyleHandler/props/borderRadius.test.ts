import "@testing-library/jest-dom";
import { getBorderRadiusStyle } from "@utils";

describe(`getBorderRadiusStyle Function`, () => {
  test(`borderRadius is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getBorderRadiusStyle(undefined)).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`borderRadius is string as {sizeOptions}, returning {classes:"br-{size}", inline:{}} `, () => {
    expect(getBorderRadiusStyle("lg")).toStrictEqual({
      classes: "br-lg",
      inline: {},
    });
  });

  test(`borderRadiusProps is object as {bottomLeft, bottomRight, topLeft, topRight} but values of undefined`, () => {
    expect(
      getBorderRadiusStyle({
        bottomLeft: undefined,
        bottomRight: undefined,
        topLeft: undefined,
        topRight: undefined,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`borderRadiusProps defined {bottomLeft, bottomRight, topLeft, topRight}. Unit as default "px"`, () => {
    expect(
      getBorderRadiusStyle({
        bottomLeft: 5,
        bottomRight: 10,
        topLeft: 15,
        topRight: 20,
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "20px",
      },
    });
  });

  test(`borderRadiusProps defined {bottomLeft, bottomRight, topLeft, topRight}. Unit as default "%"`, () => {
    expect(
      getBorderRadiusStyle({
        bottomLeft: 15,
        bottomRight: 20,
        topLeft: 25,
        topRight: 30,
        unit: "%",
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        borderBottomLeftRadius: "15%",
        borderBottomRightRadius: "20%",
        borderTopLeftRadius: "25%",
        borderTopRightRadius: "30%",
      },
    });
  });
});
