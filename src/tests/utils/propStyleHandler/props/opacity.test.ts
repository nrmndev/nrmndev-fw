import "@testing-library/jest-dom";
import { IncrementOf5Options } from "_uiTypes";
import { getOpacityStyle } from "_utils";
describe(`getOpacityStyle Function`, () => {
  for (let x = 0; x <= 100; x += 5) {
    test(`returns {classes:"opacity-${x}", inline: {}}`, () => {
      expect(
        getOpacityStyle({ opacity: x as IncrementOf5Options })
      ).toStrictEqual({
        classes: `opacity-${x}`,
        inline: {},
      });
    });
  }
  test(`returns {classes:"", inline: {}}, as opacity is undefined `, () => {
    expect(getOpacityStyle({ opacity: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});
