/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const base = ({ theme }) => css`
  color: ${theme.color.blue};
  font-family: ${theme.font.headline};
`;

const StyledH1 = styled.h1`
  ${base}
  font-size: 32px;
  line-height: 40px;
`;

const StyledH2 = styled.h2`
  ${base}
  font-size: 28px;
  line-height: 35px;
`;

const StyledH3 = styled.h3`
  ${base}
  font-size: 24px;
  line-height: 30px;
`;

const StyledH4 = styled.h4`
  ${base}
  font-size: 20px;
  line-height: 25px;
`;

const StyledH5 = styled.h5`
  ${base}
  font-size: 16px;
  line-height: 20px;
`;

const setHeading = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
};

export default function Heading({ children, type, style }) {
  const HeadingToRender = setHeading[type];
  return (
    <HeadingToRender
      css={css`
        ${style}
      `}
    >
      {children}
    </HeadingToRender>
  );
}
