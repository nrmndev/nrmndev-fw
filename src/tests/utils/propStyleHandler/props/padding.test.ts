import "@testing-library/jest-dom";
import { SizeOptions, ValueAndUnitProps } from "_uiTypes";
import { getPaddingStyle } from "_utils";

//NOTE: The method is already typed, but typecasting for the testing clarity

// Describe block for grouping related tests about the getPaddingStyle function
describe(`Padding as SizeOptions | ValueAndUnitProps`, () => {
  //if (execute) {
  //padding: undefined --> {}
  test(`returns { classes: "", inline: {} } when padding is undefined`, () => {
    expect(getPaddingStyle({ padding: undefined })).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding:"zero" --> .m-0
  test(`returns { classes: "p-0", inline: {} } when padding is of type SizeOption and has a "zero" value`, () => {
    expect(getPaddingStyle({ padding: "zero" as SizeOptions })).toStrictEqual({
      classes: "p-0",
      inline: {},
    });
  });
  //padding:"sm" --> .m-sm
  test(`returns { classes: "p-sm", inline: {} } when padding is of type SizeOption and has a "sm" value`, () => {
    expect(getPaddingStyle({ padding: "sm" as SizeOptions })).toStrictEqual({
      classes: "p-sm",
      inline: {},
    });
  });
  //padding: {value:undefined, unit:undefined} --> {}
  test(`returns { classes: "", inline: {} } when { value: undefined, unit: undefined }`, () => {
    expect(
      getPaddingStyle({
        padding: { value: undefined, unit: undefined } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding: {value:undefined, unit:"rem"} --> {}
  test(`returns { classes: "", inline: {} } when value is undefined as unit is "rem"`, () => {
    expect(
      getPaddingStyle({
        padding: { value: undefined, unit: "rem" } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding:{value:5,unit:"px"} --> {padding: 5px}
  test(`returns { classes: "", inline: {padding: "5px" } } when padding is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getPaddingStyle({
        padding: { value: 5, unit: "px" } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { padding: "5px" },
    });
  });
  //}
});

describe(`Padding as PaddingAxisProps: hPadding`, () => {
  //padding: {hPadding: undefined} --> {}
  test(`returns { classes: "", inline: {} } when hPadding is undefined`, () => {
    expect(getPaddingStyle({ padding: { hPadding: undefined } })).toStrictEqual(
      {
        classes: "",
        inline: {},
      }
    );
  });
  //padding:{hPadding:"sm"} --> .mh-sm
  test(`returns { classes: "ph-sm", inline: {} } when padding is of type SizeOption and has a "sm" value`, () => {
    expect(
      getPaddingStyle({ padding: { hPadding: "sm" as SizeOptions } })
    ).toStrictEqual({
      classes: "ph-sm",
      inline: {},
    });
  });
  //padding:{hPadding:"zero"} --> .mh-0
  test(`returns { classes: "ph-0", inline: {} } when padding is of type SizeOption and has a "zero" value`, () => {
    expect(
      getPaddingStyle({ padding: { hPadding: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "ph-0",
      inline: {},
    });
  });
  //padding: {hPadding:{value:undefined, unit:undefined}} --> {}
  test(`returns { classes: "", inline: {} } when hPadding:{ value:undefined, unit:undefined }`, () => {
    expect(
      getPaddingStyle({
        padding: {
          hPadding: { value: undefined, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding: {hPadding:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {} } when hPadding:{ value:undefined, unit:rem }`, () => {
    expect(
      getPaddingStyle({
        padding: {
          hPadding: { value: undefined, unit: "rem" },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding: {hPadding:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {paddingLeft: "5px", paddingRight: "5px"} } when hPadding:{ value:5, unit:undefined }`, () => {
    expect(
      getPaddingStyle({
        padding: {
          hPadding: { value: 5, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: { paddingLeft: "5px", paddingRight: "5px" },
    });
  });
  //padding: {value:5,unit:"px"} --> {paddingLeft: 5px, paddingRight: 5px}
  test(`returns { classes: "", inline: {paddingTop: "5px", paddingBottom: "5px" } } when hPadding is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getPaddingStyle({
        padding: { hPadding: { value: 5, unit: "px" } } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { paddingLeft: "5px", paddingRight: "5px" },
    });
  });
});

describe(`Padding as PaddingAxisProps: vPadding`, () => {
  //if (execute) {
  //padding: {vPadding: undefined} --> {}
  test(`returns { classes: "", inline: {} } when vPadding is undefined`, () => {
    expect(getPaddingStyle({ padding: { vPadding: undefined } })).toStrictEqual(
      {
        classes: "",
        inline: {},
      }
    );
  });
  //padding:{vPadding:"sm"} --> .mh-sm
  test(`returns { classes: "pv-sm", inline: {} } when padding is of type SizeOption and has a "sm" value`, () => {
    expect(
      getPaddingStyle({ padding: { vPadding: "sm" as SizeOptions } })
    ).toStrictEqual({
      classes: "pv-sm",
      inline: {},
    });
  });
  //padding:{vPadding:"zero"} --> .mv-0
  test(`returns { classes: "pv-0", inline: {} } when padding is of type SizeOption and has a "zero" value`, () => {
    expect(
      getPaddingStyle({ padding: { vPadding: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "pv-0",
      inline: {},
    });
  });
  //padding: {vPadding:{value:undefined, unit:undefined}} --> {}
  test(`returns { classes: "", inline: {} } when vPadding:{ value:undefined, unit:undefined }`, () => {
    expect(
      getPaddingStyle({
        padding: {
          vPadding: { value: undefined, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding: {vPadding:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {} } when vPadding:{ value:undefined, unit:rem }`, () => {
    expect(
      getPaddingStyle({
        padding: {
          vPadding: { value: undefined, unit: "rem" },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
  //padding: {vPadding:{value:undefined, unit:"rem"}} --> {}
  test(`returns { classes: "", inline: {paddingTop: "5px", paddingBottom: "5px"} } when vPadding:{ value:5, unit:undefined }`, () => {
    expect(
      getPaddingStyle({
        padding: {
          vPadding: { value: 5, unit: undefined },
        } as ValueAndUnitProps,
      })
    ).toStrictEqual({
      classes: "",
      inline: { paddingTop: "5px", paddingBottom: "5px" },
    });
  });
  //padding: {value:5,unit:"px"} --> {paddingLeft: 5px, paddingRight: 5px}
  test(`returns { classes: "", inline: {paddingTop: "5px", paddingBottom: "5px" } } when vPadding is of type ValueAndUnitProps with specified unit`, () => {
    expect(
      getPaddingStyle({
        padding: { vPadding: { value: 5, unit: "px" } } as ValueAndUnitProps,
      })
    ).toMatchObject({
      classes: "",
      inline: { paddingTop: "5px", paddingBottom: "5px" },
    });
  });
  //}
});

describe(`Padding as PaddingEdgeProps: top`, () => {
  test(`returns { classes:", inline: {} } when {top} is undefined`, () => {
    expect(
      getPaddingStyle({
        padding: {
          top: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //padding:{top:"zero"} --> .mt-0
  test(`returns { classes: "pt-0", inline: {} } when top is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getPaddingStyle({ padding: { top: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "pt-0",
      inline: {},
    });
  });
  //padding:{top:"xxl"} --> .mt-0
  test(`returns { classes: "pt-xxl", inline: {} } when top is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getPaddingStyle({ padding: { top: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "pt-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {paddingTop: "5px"} } when top.value is a number and top.unit undefined but is "px" as default`, () => {
    expect(
      getPaddingStyle({
        padding: {
          top: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { paddingTop: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when top.value is undefined and top.unit is "rem"`, () => {
    expect(
      getPaddingStyle({
        padding: {
          top: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});

describe(`Padding as PaddingEdgeProps: right`, () => {
  test(`returns { classes:", inline: {} } when {right} is undefined`, () => {
    expect(
      getPaddingStyle({
        padding: {
          right: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //padding:{right:"zero"} --> .mt-0
  test(`returns { classes: "pr-0", inline: {} } when right is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getPaddingStyle({ padding: { right: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "pr-0",
      inline: {},
    });
  });
  //padding:{right:"xxl"} --> .mt-0
  test(`returns { classes: "pr-xxl", inline: {} } when right is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getPaddingStyle({ padding: { right: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "pr-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {paddingright: "5px"} } when right.value is a number and right.unit undefined but is "px" as default`, () => {
    expect(
      getPaddingStyle({
        padding: {
          right: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { paddingRight: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when right.value is undefined and right.unit is "rem"`, () => {
    expect(
      getPaddingStyle({
        padding: {
          right: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});

describe(`Padding as PaddingEdgeProps: bottom`, () => {
  test(`returns { classes:", inline: {} } when {bottom} is undefined`, () => {
    expect(
      getPaddingStyle({
        padding: {
          bottom: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //padding:{bottom:"zero"} --> .mt-0
  test(`returns { classes: "pb-0", inline: {} } when bottom is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getPaddingStyle({ padding: { bottom: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "pb-0",
      inline: {},
    });
  });
  //padding:{bottom:"xxl"} --> .mt-0
  test(`returns { classes: "pb-xxl", inline: {} } when bottom is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getPaddingStyle({ padding: { bottom: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "pb-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {paddingbottom: "5px"} } when bottom.value is a number and bottom.unit undefined but is "px" as default`, () => {
    expect(
      getPaddingStyle({
        padding: {
          bottom: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { paddingBottom: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when bottom.value is undefined and bottom.unit is "rem"`, () => {
    expect(
      getPaddingStyle({
        padding: {
          bottom: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});

describe(`Padding as PaddingEdgeProps: left`, () => {
  test(`returns { classes:", inline: {} } when {left} is undefined`, () => {
    expect(
      getPaddingStyle({
        padding: {
          left: undefined,
        },
      })
    ).toMatchObject({
      classes: "",
      inline: {},
    });
  });

  //padding:{left:"zero"} --> .mt-0
  test(`returns { classes: "pl-0", inline: {} } when left is of type SizeOption and has a value of "zero"`, () => {
    expect(
      getPaddingStyle({ padding: { left: "zero" as SizeOptions } })
    ).toStrictEqual({
      classes: "pl-0",
      inline: {},
    });
  });
  //padding:{left:"xxl"} --> .mt-0
  test(`returns { classes: "pl-xxl", inline: {} } when left is of type Sizeoption and has a value of "xxl"`, () => {
    expect(
      getPaddingStyle({ padding: { left: "xxl" as SizeOptions } })
    ).toStrictEqual({
      classes: "pl-xxl",
      inline: {},
    });
  });
  test(`returns { classes: "", inline: {paddingleft: "5px"} } when left.value is a number and left.unit undefined but is "px" as default`, () => {
    expect(
      getPaddingStyle({
        padding: {
          left: { value: 5 } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: { paddingLeft: "5px" },
    });
  });
  test(`returns { classes: "", inline: {} } when left.value is undefined and left.unit is "rem"`, () => {
    expect(
      getPaddingStyle({
        padding: {
          left: { unit: "rem" } as ValueAndUnitProps,
        },
      })
    ).toStrictEqual({
      classes: "",
      inline: {},
    });
  });
});
