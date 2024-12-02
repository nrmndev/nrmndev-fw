import { DecoratedLabelComponentProps } from "components/component.barrel.types";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { forwardRef } from "react";
import styled from "styled-components";
import { convertCSSPropToString } from "_utils";

const DecoratedLabel = (
  {
    leftDecor,
    rightDecor,
    typography,
    align = "start",
  }: DecoratedLabelComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  let wrapperProperties: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: align,
    alignItems: align,
  };

  const $css = convertCSSPropToString(wrapperProperties);
  return (
    <>
      <UtilityStyledComponent
        as={"div"}
        ref={ref}
        text={{ align: align }}
        display={"flex"}
        flex={{
          alignItems: align,
          direction: "col",
          justifyContent: align,
        }}
      >
        <StyledComponent $css={$css} ref={ref}>
          <div className="d-flex items-center">
            {leftDecor && leftDecor}
            {typography && typography}
            {rightDecor && rightDecor}
          </div>
        </StyledComponent>
      </UtilityStyledComponent>
    </>
  );
};

export default forwardRef(DecoratedLabel);

const StyledComponent = styled.div<{ $css?: string }>`
  /* Apply $ss as standard styles */
  ${({ $css }) => {
    return $css;
  }};
`;
// /* Apply $is as hover styles */
// &:hover {
//   ${({ $hcss }) => {
//     return $hcss;
//   }};
// }
{
  /* {decor?.top && (
            <div>
              <Icon
                {...componentTemplate?.decor?.top}
                {...decor.top}
                ref={null}
                className="d-block"
              />
            </div>
          )} */
}
{
  /* {decor?.bottom && (
            <div>
              <Icon
                {...componentTemplate?.decor?.bottom}
                {...decor.bottom}
                ref={null}
                className="d-block"
              />
            </div>
          )} */
}
