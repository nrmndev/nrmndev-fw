import "@testing-library/jest-dom";
import { SizeOptions, ValueAndUnitProps } from "@uiTypes";
import { getMarginStyle } from "@utils";

//NOTE: The method is already typed, but typecasting for the testing clarity

// Describe block for grouping related tests about the getMarginStyle function
describe(`Margin as SizeOptions | ValueAndUnitProps`, () => {
  //if (execute) {
  //margin: undefined --> {}
  test(`returns { classes: "", inline: {} } when margin is undefined`, () => {
    expect(getMarginStyle({ margin: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin:"zero" --> .m-0
  test(`returns { classes: "m-0", inline: {} } when margin is of type SizeOption and has a "zero" value`, () => {
    expect(getMarginStyle({ margin: "zero" as SizeOptions })).toStrictEqual({
      classes: "m-0",
      inline: {},
    });
  });
  //margin:"sm" --> .m-sm
  test(`returns { classes: "m-sm", inline: {} } when margin is of type SizeOption and has a "sm" value`, () => {
    expect(getMarginStyle({ margin: "sm" as SizeOptions })).toStrictEqual({
      classes: "m-sm",
      inline: {},
    });
  });
  //margin: {value:undefined, unit:undefined} --> {}
  test(`returns { classes: "", inline: {} } when { value: undefined, unit: undefined }`, () => {
    expect(
      getMarginStyle({
        margin: { value: undefined, unit: undefined } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin: {value:undefined, unit:"rem"} --> {}
  test(`returns { classes: "", inline: {} } when value is undefined as unit is "rem"`, () => {
    expect(
      getMarginStyle({
        margin: { value: undefined, unit: "rem" } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin:{value:5,unit:"px"} --> {margin: 5px}
  test(`returns { classes: "", inline: {margin: "5px" } } when margin is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getMarginStyle({
        margin: { value: 5, unit: "px" } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { margin: "5px" },
    });
  });
  //}
});

describe(`Margin as MarginAxisProps: hMargin`, () => {
  //margin: {hMargin: undefined} --> {}
  test(`returns { classes: "", inline: {} } when hMargin is undefined`, () => {
    expect(getMarginStyle({ margin: { hMargin: undefined } })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin:{hMargin:"sm"} --> .mh-sm
  test(`returns { classes: "mh-sm", inline: {} } when margin is of type SizeOption and has a "sm" value`, () => {
    expect(
      getMarginStyle({ margin: { hMargin: "sm" as SizeOptions } })
    ).toStrictEqual({
      classes: "mh-sm",
      inline: {},
    });
  });
  //margin:{hMargin:"zero"} --> .mh-0
  test(`returns { classes: "mh-0", inline: {} } when margin is of type SizeOption and has a "zero" value`, () => {
    expect(
      getMarginStyle({ margin: { hMargin: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "mh-0",
      inline: {},
    });
  });
  //margin: {hMargin:{value:undefined, unit:undefined}} --> {}
  test(`returns { classes: "", inline: {} } when hMargin:{ value:undefined, unit:undefined }`, () => {
    expect(
      getMarginStyle({
        margin: {
          hMargin: { value: undefined, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin: {hMargin:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {} } when hMargin:{ value:undefined, unit:rem }`, () => {
    expect(
      getMarginStyle({
        margin: {
          hMargin: { value: undefined, unit: "rem" },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin: {hMargin:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {marginLeft: "5px", marginRight: "5px"} } when hMargin:{ value:5, unit:undefined }`, () => {
    expect(
      getMarginStyle({
        margin: {
          hMargin: { value: 5, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: { marginLeft: "5px", marginRight: "5px" },
    });
  });
  //margin: {value:5,unit:"px"} --> {marginLeft: 5px, marginRight: 5px}
  test(`returns { classes: "", inline: {marginTop: "5px", marginBottom: "5px" } } when hMargin is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getMarginStyle({
        margin: { hMargin: { value: 5, unit: "px" } } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { marginLeft: "5px", marginRight: "5px" },
    });
  });
});

describe(`Margin as MarginAxisProps: vMargin`, () => {
  //if (execute) {
  //margin: {vMargin: undefined} --> {}
  test(`returns { classes: "", inline: {} } when vMargin is undefined`, () => {
    expect(getMarginStyle({ margin: { vMargin: undefined } })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin:{vMargin:"sm"} --> .mh-sm
  test(`returns { classes: "mv-sm", inline: {} } when margin is of type SizeOption and has a "sm" value`, () => {
    expect(
      getMarginStyle({ margin: { vMargin: "sm" as SizeOptions } })
    ).toStrictEqual({
      classes: "mv-sm",
      inline: {},
    });
  });
  //margin:{vMargin:"zero"} --> .mv-0
  test(`returns { classes: "mv-0", inline: {} } when margin is of type SizeOption and has a "zero" value`, () => {
    expect(
      getMarginStyle({ margin: { vMargin: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "mv-0",
      inline: {},
    });
  });
  //margin: {vMargin:{value:undefined, unit:undefined}} --> {}
  test(`returns { classes: "", inline: {} } when vMargin:{ value:undefined, unit:undefined }`, () => {
    expect(
      getMarginStyle({
        margin: {
          vMargin: { value: undefined, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin: {vMargin:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {} } when vMargin:{ value:undefined, unit:rem }`, () => {
    expect(
      getMarginStyle({
        margin: {
          vMargin: { value: undefined, unit: "rem" },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //margin: {vMargin:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {marginTop: "5px", marginBottom: "5px"} } when vMargin:{ value:5, unit:undefined }`, () => {
    expect(
      getMarginStyle({
        margin: {
          vMargin: { value: 5, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: { marginTop: "5px", marginBottom: "5px" },
    });
  });
  //margin: {value:5,unit:"px"} --> {marginLeft: 5px, marginRight: 5px}
  test(`returns { classes: "", inline: {marginTop: "5px", marginBottom: "5px" } } when vMargin is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getMarginStyle({
        margin: { vMargin: { value: 5, unit: "px" } } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { marginTop: "5px", marginBottom: "5px" },
    });
  });
  //}
});

describe(`Margin as MarginEdgeProps: top`, () => {
  test(`returns { classes:", inline: {} } when {top} is undefined`, () => {
    expect(
      getMarginStyle({
        margin: {
          top: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //margin:{top:"zero"} --> .mt-0
  test(`returns { classes: "mt-0", inline: {} } when top is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getMarginStyle({ margin: { top: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "mt-0",
      inline: {},
    });
  });
  //margin:{top:"xxl"} --> .mt-0
  test(`returns { classes: "mt-xxl", inline: {} } when top is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getMarginStyle({ margin: { top: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "mt-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {marginTop: "5px"} } when top.value is a number and top.unit undefined but is "px" as default`, () => {
    expect(
      getMarginStyle({
        margin: {
          top: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { marginTop: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when top.value is undefined and top.unit is "rem"`, () => {
    expect(
      getMarginStyle({
        margin: {
          top: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});

describe(`Margin as MarginEdgeProps: right`, () => {
  test(`returns { classes:", inline: {} } when {right} is undefined`, () => {
    expect(
      getMarginStyle({
        margin: {
          right: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //margin:{right:"zero"} --> .mt-0
  test(`returns { classes: "mr-0", inline: {} } when right is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getMarginStyle({ margin: { right: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "mr-0",
      inline: {},
    });
  });
  //margin:{right:"xxl"} --> .mt-0
  test(`returns { classes: "mr-xxl", inline: {} } when right is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getMarginStyle({ margin: { right: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "mr-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {marginright: "5px"} } when right.value is a number and right.unit undefined but is "px" as default`, () => {
    expect(
      getMarginStyle({
        margin: {
          right: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { marginRight: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when right.value is undefined and right.unit is "rem"`, () => {
    expect(
      getMarginStyle({
        margin: {
          right: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});

describe(`Margin as MarginEdgeProps: bottom`, () => {
  test(`returns { classes:", inline: {} } when {bottom} is undefined`, () => {
    expect(
      getMarginStyle({
        margin: {
          bottom: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //margin:{bottom:"zero"} --> .mt-0
  test(`returns { classes: "mb-0", inline: {} } when bottom is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getMarginStyle({ margin: { bottom: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "mb-0",
      inline: {},
    });
  });
  //margin:{bottom:"xxl"} --> .mt-0
  test(`returns { classes: "mb-xxl", inline: {} } when bottom is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getMarginStyle({ margin: { bottom: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "mb-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {marginbottom: "5px"} } when bottom.value is a number and bottom.unit undefined but is "px" as default`, () => {
    expect(
      getMarginStyle({
        margin: {
          bottom: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { marginBottom: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when bottom.value is undefined and bottom.unit is "rem"`, () => {
    expect(
      getMarginStyle({
        margin: {
          bottom: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});

describe(`Margin as MarginEdgeProps: left`, () => {
  test(`returns { classes:", inline: {} } when {left} is undefined`, () => {
    expect(
      getMarginStyle({
        margin: {
          left: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //margin:{left:"zero"} --> .mt-0
  test(`returns { classes: "ml-0", inline: {} } when left is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getMarginStyle({ margin: { left: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "ml-0",
      inline: {},
    });
  });
  //margin:{left:"xxl"} --> .mt-0
  test(`returns { classes: "ml-xxl", inline: {} } when left is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getMarginStyle({ margin: { left: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "ml-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {marginleft: "5px"} } when left.value is a number and left.unit undefined but is "px" as default`, () => {
    expect(
      getMarginStyle({
        margin: {
          left: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { marginLeft: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when left.value is undefined and left.unit is "rem"`, () => {
    expect(
      getMarginStyle({
        margin: {
          left: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});
