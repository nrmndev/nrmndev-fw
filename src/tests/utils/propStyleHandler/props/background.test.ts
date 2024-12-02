import "@testing-library/jest-dom";
import { getBackgroundStyle } from "_utils";
import img from "mockImage.jpg";
describe(`getBackgroundStyle Function`, () => {
  test(`background is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getBackgroundStyle({ background: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`background is dark, returning {classes:"bg-dark", inline:{}} `, () => {
    expect(getBackgroundStyle({ background: "dark" })).toStrictEqual({
      classes: "bg-dark",
      inline: {},
    });
  });

  test(`background is image, {attachment, position, repeat, size} as default values, } `, () => {
    expect(getBackgroundStyle({ background: { image: img } })).toStrictEqual({
      classes: "",
      inline: { background: "url(image-1.png) no-repeat center/cover fixed" },
    });
  });

  test(`background is image, with the rest of {BackgroundAsImgProps}} `, () => {
    expect(
      getBackgroundStyle({
        background: {
          image: img,
          attachment: "scroll",
          position: "bottom",
          repeat: "no-repeat",
          size: "contain",
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        background: "url(image-1.png) no-repeat bottom/contain scroll",
      },
    });
  });

  test(`background is image, type of {position} as object {value,unit} `, () => {
    expect(
      getBackgroundStyle({
        background: {
          image: img,
          position: { unit: "px", value: 100 },
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        background: "url(image-1.png) no-repeat 100px/cover fixed",
      },
    });
  });
});
