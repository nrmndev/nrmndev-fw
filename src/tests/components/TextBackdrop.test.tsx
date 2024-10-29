import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextBackdrop } from "@uiComponents";

describe(`Typography Component`, () => {
  test(`with label and opacity`, () => {
    render(<TextBackdrop label="Hello World!" opacity={5} />);

    // Query the image by its role
    const el = screen.getByText("Hello World!");

    // Assert that the image is in the document
    expect(el).toBeInTheDocument();
  });

  test(`with just label`, () => {
    render(<TextBackdrop label="Hello World!" />);

    // Query the image by its role
    const el = screen.getByText("Hello World!");

    // Assert that the image is in the document
    expect(el).toBeInTheDocument();
  });
});
