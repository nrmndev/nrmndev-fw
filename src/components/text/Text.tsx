import { BaseProps } from "@uiTypes";
import React from "react";
import styled from "styled-components";

const StyledP = styled.p<{ $maxChars: number | undefined }>`
  ${({ $maxChars }) =>
    $maxChars
      ? `
        max-width: ${$maxChars + "ch"};
        display: block;
        overflow: hidden; /* Hide overflowed text */
        text-overflow: ellipsis; /* Add ellipsis for overflowed text */
        white-space: nowrap; /* Prevent text from wrapping */
    `
      : "max-width:auto"};
`;

// const StyledSpan = styled.span<{ maxChars: number }>`
//   width: ${(maxCharss) =>
//     maxCharss ? maxCharss.toString() + "ch" : "auto"};
// `;

export interface ITextProps extends BaseProps {
  maxChars?: number;
  children?: React.ReactNode;
  as?: "span" | "p";
}

const Text = ({ maxChars = undefined, as = "p", children }: ITextProps) => {
  return (
    <StyledP as={as} $maxChars={maxChars}>
      {children}
    </StyledP>
  );
};

export default Text;
