import "@testing-library/jest-dom";
import { getPositionStyle } from "_utils";

//Uses PositionProps

describe(`getPositionStyle Function`, () => {
  test(`{Position} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getPositionStyle({ position: undefined })).toMatchObject({
      classes: "",
      inline: {},
    });
  });
  test(`the rest of the props are undefined, returning {classes:"", inline:{position: "absolute"}} `, () => {
    expect(
      getPositionStyle({
        position: {
          position: "absolute",
          bottom: undefined,
          top: undefined,
          right: undefined,
          left: undefined,
          zIndex: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: { position: "absolute" },
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
          zIndex: 5,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {
        position: "absolute",
        bottom: "15px",
        right: "10px",
        zIndex: 5,
      },
    });
  });
});
