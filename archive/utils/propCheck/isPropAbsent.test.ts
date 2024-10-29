import "@testing-library/jest-dom";
import { BorderOptions, MarginProps } from "@uiTypes";
import { isPropAbsent } from "@utils";

//Should type of MarginProps, this is not allowed, discriminated. But for testing purposes we will pass it.
const marginProp = {
  margin: "sm",
  vMargin: { value: 5, unit: "px" },
};

const border = {
  style: "solid",
  width: 5,
  color: "primary",
};

describe(`isOfType Function`, () => {
  test(`Wanting to narrow down for vMargin discriminating prop, so check if margin is absent, expecting "false"`, () => {
    expect(isPropAbsent<MarginProps>(marginProp, ["margin"])).toBe(false);
  });

  test(`Wanting to narrow down for border to be of type BorderOptions, so check if BorderEdgeOptions props are absent, expecting "true"`, () => {
    expect(
      isPropAbsent<BorderOptions>(border, ["top", "right", "bottom", "left"])
    ).toBe(true);
  });

  test(`Wanting to narrow down for border to be of type BorderOptions, so check if BorderEdgeOptions props are absent, expecting "true"`, () => {
    expect(isPropAbsent<BorderOptions>(border, undefined)).toBe(true);
  });
});
