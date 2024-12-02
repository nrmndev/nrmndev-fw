import "@testing-library/jest-dom";
import { getHoverStyle } from "_utils";

describe(`getHoverStyle Function`, () => {
  test(`{HoverProps} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getHoverStyle({ hover: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { border: { width: 5, style: "dotted", color: "dark" } },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
      hoverInline: {
        borderColor: "var(--dark)",
        borderStyle: "dotted",
        borderWidth: "5px",
      },
    });
  });

  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { background: "accent1" },
      })
    ).toStrictEqual({
      classes: "h:bg-accent1",
      hoverInline: {},
      inline: {},
    });
  });
  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { background: undefined },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {},
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { color: undefined },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {},
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { color: "black" },
      })
    ).toStrictEqual({
      classes: "h:c-black",
      hoverInline: {},
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { border: { width: 1, style: "dashed", color: "accent1" } },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {
        borderColor: "var(--accent1)",
        borderStyle: "dashed",
        borderWidth: "1px",
      },
      inline: {},
    });
  });
  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { background: undefined },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {},
      inline: {},
    });
  });
});

describe(`getHoverRadiusStyle Function`, () => {
  test(`{HoverProps} is undefined, returning {classes:"", inline:{}} `, () => {
    expect(getHoverStyle({ hover: { border: undefined } })).toStrictEqual({
      classes: "",
      hoverInline: {},
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverOptions}, "{width, dotted, color}"`, () => {
    expect(
      getHoverStyle({
        hover: { border: { width: 5, style: "dotted", color: "dark" } },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {
        borderColor: "var(--dark)",
        borderStyle: "dotted",
        borderWidth: "5px",
      },
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverOptions}, {width}, style as default "solid", color as default "primary"`, () => {
    expect(getHoverStyle({ hover: { border: { width: 5 } } })).toStrictEqual({
      classes: "",
      hoverInline: {
        borderColor: "var(--primary)",
        borderStyle: "solid",
        borderWidth: "5px",
      },
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverEdgeOptions}, "{top,right,bottom,left}", style as default "solid", color as default "primary"`, () => {
    expect(
      getHoverStyle({
        hover: {
          border: {
            top: { width: 1 },
            right: { width: 2 },
            bottom: { width: 3 },
            left: { width: 4 },
          },
        },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {
        borderBottom: "3px solid var(--primary)",
        borderLeft: "4px solid var(--primary)",
        borderRight: "2px solid var(--primary)",
        borderTop: "1px solid var(--primary)",
      },
      inline: {},
    });
  });

  test(`{HoverProps} is {HoverEdgeOptions}, "{right}", {top,bottom,left were undefined}`, () => {
    expect(
      getHoverStyle({
        hover: {
          border: {
            right: { width: 1 },
          },
        },
      })
    ).toStrictEqual({
      classes: "",
      hoverInline: {
        borderRight: "1px solid var(--primary)",
      },
      inline: {},
    });
  });
});
