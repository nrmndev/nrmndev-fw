import "@testing-library/jest-dom";
import { MarginProps } from "@uiTypes";
import { isPropPresent } from "@utils";

//Should type of MarginProps, this is not allowed, discriminated. But for testing purposes we will pass it.
const marginProp = {
  margin: "sm",
  vMargin: { value: 5, unit: "px" },
};
describe(`isOfType Function`, () => {
  test(`check if wanted a prop with string value ie. sm, should be truthy`, () => {
    expect(isPropPresent<MarginProps>(marginProp, ["margin"])).toBe(true);
  });

  test(`check if passed first argument is undefined, expecting a return "false"`, () => {
    expect(isPropPresent<MarginProps>(undefined, ["margin"])).toBe(false);
  });

  test(`check if passed first argument is string, expecting a return "false"`, () => {
    expect(isPropPresent<MarginProps>("test", ["margin"])).toBe(false);
  });

  test(`check if passed first argument is string, expecting a return "false"`, () => {
    expect(isPropPresent<MarginProps>("test", undefined)).toBe(false);
  });
});
