import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Typography } from "@uiComponents";

describe(`Typography Component`, () => {
  test(`default as="p" `, () => {
    render(<Typography>Hello World!</Typography>);

    // Query the image by its role
    const el = screen.getByRole("paragraph");

    // Assert that the image is in the document
    expect(el).toBeInTheDocument();

    // Optional: Check the src and alt attributes
    expect(el).toHaveTextContent("Hello World!");
  });

  test(`default as="p" `, () => {
    render(
      <Typography as="h1" color="primary">
        Hello World!
      </Typography>
    );

    // Query the image by its role
    const el = screen.getByRole("heading", { level: 1 });

    // Assert that the image is in the document
    expect(el).toBeInTheDocument();

    expect(el).toHaveClass("color-primary");
  });
});
