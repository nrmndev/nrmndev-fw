import "@testing-library/jest-dom";
import { SizeOptions, ValueAndUnitProps } from "_uiTypes";
import { getGapStyle } from "_utils";
describe(`Gap as SizeOptions | ValueAndUnitProps`, () => {
  //if (execute) {
  //gap: undefined --> {}
  test(`returns { classes: "", inline: {} } when gap is undefined`, () => {
    expect(getGapStyle({ gap: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //gap:"zero" --> .g-0
  test(`returns { classes: "g-0", inline: {} } when gap is of type SizeOption and has a "zero" value`, () => {
    expect(getGapStyle({ gap: "zero" as SizeOptions })).toStrictEqual({
      classes: "g-0",
      inline: {},
    });
  });
  //gap:"sm" --> .g-sm
  test(`returns { classes: "g-sm", inline: {} } when gap is of type SizeOption and has a "sm" value`, () => {
    expect(getGapStyle({ gap: "sm" as SizeOptions })).toStrictEqual({
      classes: "g-sm",
      inline: {},
    });
  });
  //gap: {value:undefined, unit:undefined} --> {}
  test(`returns { classes: "", inline: {} } when { value: undefined, unit: undefined }`, () => {
    expect(
      getGapStyle({
        gap: { value: undefined, unit: undefined } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //gap: {value:0} --> {gap: "0px"}
  test(`returns { classes: "", inline: {} } when value is number as unit is undefined`, () => {
    expect(
      getGapStyle({
        gap: { value: 0 } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: { gap: "0px" },
    });
  });
  //gap: {value:25} --> {gap: "25px"}
  test(`returns { classes: "", inline: {} } when value is number as unit is undefined`, () => {
    expect(
      getGapStyle({
        gap: { value: 25 } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: { gap: "25px" },
    });
  });
  //gap: {value:undefined, unit:"rem"} --> {}
  test(`returns { classes: "", inline: {} } when value is undefined as unit is "rem"`, () => {
    expect(
      getGapStyle({
        gap: { value: undefined, unit: "rem" } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //gap:{value:5,unit:"px"} --> {gap: 5px}
  test(`returns { classes: "", inline: {gap: "5px" } } when gap is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getGapStyle({
        gap: { value: 5, unit: "px" } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { gap: "5px" },
    });
  });
  //}
});
