import "@testing-library/jest-dom";
import { checkValue } from "_utils";

describe(`checkValue Function`, () => {
  test(`checkValue is undefined, returning "" `, () => {
    expect(checkValue(undefined, undefined)).toStrictEqual("");
  });
  test(`value is 0, returning "0px" `, () => {
    expect(checkValue(0, "px")).toStrictEqual("0");
  });
});
