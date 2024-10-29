import "@testing-library/jest-dom";
import { getDisplayStyle } from "@utils";

describe(`getBackgroundStyle Function`, () => {
  test(`display is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getDisplayStyle(undefined)).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`display is "block", expecting {classes: "d-block"}`, () => {
    expect(getDisplayStyle("flex")).toStrictEqual({
      classes: "d-flex",
      inline: {},
    });
  });

  test(`display is "grid", expecting {classes: "d-grid"}`, () => {
    expect(getDisplayStyle("grid")).toStrictEqual({
      classes: "d-grid",
      inline: {},
    });
  });

  test(`display is "inline-block", expecting {classes: "d-inline-block"}`, () => {
    expect(getDisplayStyle("inline-block")).toStrictEqual({
      classes: "d-inline-block",
      inline: {},
    });
  });

  test(`display is "table", expecting {classes: "d-table"}`, () => {
    expect(getDisplayStyle("table")).toStrictEqual({
      classes: "d-table",
      inline: {},
    });
  });
});
