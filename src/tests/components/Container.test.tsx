import "@testing-library/jest-dom";
import { Row } from "@uiComponents";
import { render, screen } from "@testing-library/react";

describe(`getBackgroundStyle Function`, () => {
  test(`text is undefined, returning {classes:"", inline:{}} `, () => {
    render(
      <Row
        background={"accent1"}
        borderRadius={"lg"}
        position={{ position: "absolute" }}
        data-testid="testid"
      />
    );

    // Assert that the image is in the document
    expect(screen.getByTestId("testid")).toBeInTheDocument();
  });
});
