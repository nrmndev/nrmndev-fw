import "@testing-library/jest-dom";
import { getBorderStyle } from "_utils";

describe(`getBorderRadiusStyle Function`, () => {
  test(`{BorderProps} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getBorderStyle({ border: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`{BorderProps} is {BorderOptions}, "{width, dotted, color}"`, () => {
    expect(
      getBorderStyle({ border: { width: 5, style: "dotted", color: "dark" } })
    ).toStrictEqual({
      classes: "",
      inline: {
        borderColor: "var(--dark)",
        borderStyle: "dotted",
        borderWidth: "5px",
      },
    });
  });

  test(`{BorderProps} is {BorderOptions}, {width}, style as default "solid", color as default "primary"`, () => {
    expect(getBorderStyle({ border: { width: 5 } })).toStrictEqual({
      classes: "",
      inline: {
        borderColor: "var(--primary)",
        borderStyle: "solid",
        borderWidth: "5px",
      },
    });
  });

  test(`{BorderProps} is {BorderEdgeOptions}, "{top,right,bottom,left}", style as default "solid", color as default "primary"`, () => {
    expect(
      getBorderStyle({
        border: {
          top: { width: 1 },
          right: { width: 2 },
          bottom: { width: 3 },
          left: { width: 4 },
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        borderBottom: "3px solid var(--primary)",
        borderLeft: "4px solid var(--primary)",
        borderRight: "2px solid var(--primary)",
        borderTop: "1px solid var(--primary)",
      },
    });
  });

  test(`{BorderProps} is {BorderEdgeOptions}, "{right}", {top,bottom,left were undefined}`, () => {
    expect(
      getBorderStyle({
        border: {
          right: { width: 1 },
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {
        borderRight: "1px solid var(--primary)",
      },
    });
  });
});
