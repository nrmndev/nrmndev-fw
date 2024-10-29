import { render, screen } from "@testing-library/react";
import { UtilityStyledComponent } from "@uiComponents";

describe("Padding classes", () => {
  test("user-defined padding classes", () => {
    render(
      <UtilityStyledComponent as="div" data-testid="testid" className={`p-0`} />
    );
    expect(screen.getByTestId("testid")).toBeInTheDocument();
    expect(screen.getByTestId("testid")).toHaveClass(`p-0`);
  });

  // {padding: SizeOptions ie. sm}
  test("via Prop {padding} as {sizeOptions}", () => {
    const { getByTestId } = render(
      <UtilityStyledComponent as="div" data-testid="testid" padding={"sm"} />
    );
    const element = getByTestId("testid");
    expect(element).toHaveClass(`p-sm`);
  });

  //{padding: ValueAndUnitProps ie. {value: 12, unit:"rem"}
  test("via Prop {padding} as {ValueAndUnitProps}", () => {
    const { getByTestId } = render(
      <UtilityStyledComponent
        as="div"
        data-testid="testid"
        padding={{ value: 12, unit: "rem" }}
      />
    );
    const element = getByTestId("testid");
    const styles = window.getComputedStyle(element);
    expect(styles.padding).toBe("12rem");
  });

  //{padding: PaddingEdgeProps ie. {top:"lg"}  top:SizeOptions
  test("via Prop {padding} as {PaddingEdgeProps} -  {top as SizeOptions}", () => {
    const { getByTestId } = render(
      <UtilityStyledComponent
        as="div"
        data-testid="testid"
        padding={{ top: "lg" }}
      />
    );
    const element = getByTestId("testid");
    expect(element).toHaveClass(`pt-lg`);
  });

  //{padding: PaddingEdgeProps ie. {right:{value:120, unit:"px"}}  top:ValueAndUnitProps
  test("via Prop {padding} as {PaddingEdgeProps} -  {right as ValueAndUnitProps}", () => {
    const { getByTestId } = render(
      <UtilityStyledComponent
        as="div"
        data-testid="testid"
        padding={{ right: { value: 120, unit: "px" } }}
      />
    );
    const element = getByTestId("testid");
    const styles = window.getComputedStyle(element);
    expect(styles.paddingRight).toBe("120px");
  });

  // Tests that the UtilityStyledComponent applies the correct vertical padding class
  // when the `padding` prop is passed as a `PaddingEdgeProps` object (e.g., `{ vPadding: "lg" }`).
  test("applies vertical padding class based on PaddingEdgeProps prop", () => {
    const { getByTestId } = render(
      <UtilityStyledComponent
        as="div"
        data-testid="testid"
        padding={{ vPadding: "lg" }}
      />
    );
    const element = getByTestId("testid");
    expect(element).toHaveClass(`pv-lg`);
  });

  // Tests that the UtilityStyledComponent applies the correct horizontal padding class
  // when the `padding` prop is passed as a `PaddingEdgeProps` object (e.g., `{ hPadding: {value:20, unit:"px"} }`).
  test("via Prop {padding} as {PaddingEdgeProps} -  {right as ValueAndUnitProps}", () => {
    const { getByTestId } = render(
      <UtilityStyledComponent
        as="div"
        data-testid="testid"
        padding={{ hPadding: { value: 20, unit: "px" } }}
      />
    );
    const element = getByTestId("testid");
    const styles = window.getComputedStyle(element);
    expect(styles.paddingLeft).toBe("20px");
    expect(styles.paddingRight).toBe("20px");
  });
});
