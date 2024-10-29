import "@testing-library/jest-dom";
import { PropStyleHandlerProps } from "@uiTypes";
import { propStyleHandler } from "@utils";

describe(`getBackgroundStyle Function`, () => {
  test(`Pass undefined values for all supported props, returns {className:"", inlineStyle:{}}`, () => {
    expect(
      propStyleHandler({
        border: undefined,
        color: undefined,
        background: undefined,
        borderRadius: undefined,
        boxShadow: undefined,
        className: undefined,
        flex: undefined,
        font: undefined,
        margin: undefined,
        display: undefined,
        height: undefined,
        columnItems: undefined,
        lg: undefined,
        md: undefined,
        padding: undefined,
        position: undefined,
        sm: undefined,
        text: undefined,
        width: undefined,
        xl: undefined,
        xs: undefined,
        xxl: undefined,
      })
    ).toStrictEqual({ className: "", inlineStyle: {} });
  });

  test(`Test string options`, () => {
    const propsAsClass: PropStyleHandlerProps = {
      color: "white",
      background: "dark",
      borderRadius: "md",
      boxShadow: "box-shadow-3",
      className: "user-defined-class",
      flex: {
        alignContent: "between",
        flexDirection: "col",
        alignItems: "baseline",
        flexWrap: "nowrap",
        justifyContent: "around",
      },
      margin: "lg",
      display: "flex",
      lg: 3,
      md: 3,
      columnItems: { lg: 5, md: 2, sm: 1, xl: 1, xs: 4, xxl: 2 },
      sm: 4,
      text: {
        align: "center",
        decoration: "dashed",
        transform: "capitalize",
      },
      xl: 6,
      xs: 6,
      xxl: 7,
      padding: "zero",
    };

    const result = propStyleHandler(propsAsClass).className;
    const expectedOutput =
      "user-defined-class bg-dark col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-6 col-xxl-7 color-white d-flex flex-xs-4 flex-sm-1 flex-md-2 flex-lg-5 flex-xl-1 flex-xxl-2 m-lg p-0 text-center text-dashed text-capitalize box-shadow-3";
    expect(result).toEqual(expectedOutput);
    //console.log(result);
    //PropStyleHandler will not return classes in order, so lets just check by array

    //expect(result.className).
  });
  // Test all props that has a key of ValueAndUnitProps and pass value as undefined
  test(`Pass undefined values for all supported props, returns {className:"", inlineStyle:{}}`, () => {
    expect(
      propStyleHandler({
        width: { value: undefined },
        height: { value: undefined },
        position: {
          position: "absolute",
          top: { value: undefined },
          right: { value: undefined },
          bottom: { value: undefined },
          left: { value: undefined },
        },
        padding: { value: undefined },
        margin: { value: undefined },
      })
    ).toStrictEqual({ className: "", inlineStyle: { position: "absolute" } });
  });
});

// border: { width: 5 },
// font: { family: "Montserrat", size: "lg" },
// height: { value: 100, unit: "rem" },
// position: { position: "relative" },
// width: { unit: "vw", value: 100 }
