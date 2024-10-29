import "@testing-library/jest-dom";
import { getPositionStyle } from "@utils";

//Uses PositionProps

describe(`getPositionStyle Function`, () => {
  test(`{Position} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getPositionStyle({ position: undefined })).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  test(`{absolute} defined, returning {classes:"", inline:{ position: "absolute" }} `, () => {
    expect(
      getPositionStyle({ position: { position: "absolute" } })
    ).toMatchObject({
      classes: "",
      inline: { position: "absolute" },
    });
  });

  test(`{absolute,top,right,bottom,left}  undefined, returning {classes:"", inline:{}} `, () => {
    expect(
      getPositionStyle({
        position: {
          position: "absolute",
          top: { value: 0 },
          right: { value: 10 },
          bottom: { value: 15 },
          left: { value: 0 },
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {
        position: "absolute",
        bottom: "15px",
        right: "10px",
      },
    });
  });
});
