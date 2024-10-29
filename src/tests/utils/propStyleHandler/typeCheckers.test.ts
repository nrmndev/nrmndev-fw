import "@testing-library/jest-dom";
import { PropStyleHandlerProps, ValueAndUnitProps } from "@uiTypes";
import { propStyleHandler, typeCheckers } from "@utils";

describe(`typeCheckers Function`, () => {
  test(`to return true because value is defined, hence infer the passed variable as type of ValueAndUnitProps`, () => {
    const mockValue: ValueAndUnitProps = {
      value: 1,
      unit: "px",
    };
    expect(typeCheckers.valueAndUnitProps(mockValue)).toBeTruthy;
  });

  test(`to return false because value is undefined, hence the passed variable is not of type ValueAndUnitProps`, () => {
    const mockValue: ValueAndUnitProps = {
      value: undefined,
      unit: "px",
    };
    expect(typeCheckers.valueAndUnitProps(mockValue)).toBeFalsy;
  });

  test(`to return false because value is undefined, hence the passed variable is not of type ValueAndUnitProps`, () => {
    const mockValue: ValueAndUnitProps = {
      value: undefined,
      unit: undefined,
    };
    expect(typeCheckers.valueAndUnitProps(mockValue)).toBeFalsy;
  });
});

// border: { width: 5 },
// font: { family: "Montserrat", size: "lg" },
// height: { value: 100, unit: "rem" },
// position: { position: "relative" },
// width: { unit: "vw", value: 100 }
