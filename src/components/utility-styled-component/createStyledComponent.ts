import styled from "styled-components";

type CustomStylesProps = {
  displayName: string;
  $css?: string;
  $hcss?: string;
  $inView?: string;
};

export const createStyledComponent = <T extends keyof JSX.IntrinsicElements>(
  element: T,
  displayName: string
) => styled(element).withConfig({
  displayName,
})<CustomStylesProps>`
  /* Standard styles */
  ${({ $css }) => $css || ""};

  /* In-view styles */
  ${({ $inView }) => $inView || ""};

  /* Hover styles */
  &:hover {
    ${({ $hcss }) => $hcss || ""};
  }
`;
