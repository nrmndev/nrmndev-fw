import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Image } from "@uiComponents";
import img from "justMockImage.png";

describe(`Image Component`, () => {
  test("renders mock image and test {src}, {alt}, and some utilityProp", () => {
    render(
      <Image
        src={img}
        alt="Sample Image"
        display="block"
        border={{ top: { width: 5 } }}
        style={{ display: "block" }}
      />
    );

    // Query the image by its role
    const imgElement = screen.getByRole("img");

    // Assert that the image is in the document
    expect(imgElement).toBeInTheDocument();

    // Optional: Check the src and alt attributes
    expect(imgElement).toHaveAttribute("src", "image-1.png");
    expect(imgElement).toHaveAttribute("alt", "Sample Image");
    expect(imgElement).toHaveClass("d-block");
  });

  test("renders mock image without {alt} `image` as default value", () => {
    render(<Image src={img} />);

    // Query the image by its role
    const imgElement = screen.getByRole("img");

    // Assert that the image is in the document
    expect(imgElement).toBeInTheDocument();

    expect(imgElement).toHaveAttribute("alt", "Image");
  });
});
