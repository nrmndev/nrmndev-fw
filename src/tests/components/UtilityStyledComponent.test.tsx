import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UtilityStyledComponent } from "@uiComponents";
import React from "react";

describe(`UtilityStyledComponent`, () => {
  test(`renders with default element type (div)`, () => {
    render(<UtilityStyledComponent data-testid="Utility" />);

    // Query the element by its test ID
    const el = screen.getByTestId("Utility");

    // Assert that the element is in the document and is a div
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("DIV"); // Ensure the tag is indeed a div
  });

  test(`renders as 'section'`, () => {
    render(<UtilityStyledComponent data-testid="Utility" as="section" />);

    // Query the image by its role
    const el = screen.getByTestId("Utility");
    const section = document.querySelector("section");
    // Assert that the image is in the document
    expect(el).toBeInTheDocument();
    expect(section).toBeInTheDocument();
  });

  test(`applies generated 'styled-component' unique classNames for computed props`, () => {
    render(
      <UtilityStyledComponent
        as="section"
        data-testid="Utility"
        padding={{ value: 10, unit: "px" }}
      >
        test
      </UtilityStyledComponent>
    );

    // Query the image by its role
    const el = screen.getByTestId("Utility");
    const section = document.querySelector("section");
    // Assert that the image is in the document
    expect(el).toBeInTheDocument();
    expect(section).toBeInTheDocument();
  });

  test("renders with specified 'as' prop element type", () => {
    render(
      <UtilityStyledComponent as="span">Test Content</UtilityStyledComponent>
    );
    const element = screen.getByText("Test Content");
    expect(element.tagName).toBe("SPAN");
  });

  test("applies inline style correctly", () => {
    render(
      <UtilityStyledComponent style={{ color: "red" }}>
        Test Content
      </UtilityStyledComponent>
    );
    const element = screen.getByText("Test Content");
    expect(element).toHaveStyle("color: red");
  });
  test("applies className from componentProps", () => {
    render(
      <UtilityStyledComponent as="div" className="test-class">
        Test Content
      </UtilityStyledComponent>
    );
    const element = screen.getByText("Test Content");
    expect(element).toHaveClass("test-class");
  });

  test(`handles ref correctly`, () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <UtilityStyledComponent ref={ref}>Test Content</UtilityStyledComponent>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  test("renders children correctly", () => {
    render(<UtilityStyledComponent>Test Content</UtilityStyledComponent>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
