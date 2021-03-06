import styled from '@emotion/styled';
import { css } from '@emotion/react';

const base = css`
  color: rgb(27, 61, 94);
  font-family: Bebas Neue;
`;

const StyledH1 = styled.h1`
  ${base}
  font-size: 32px;
  line-height: 40px;
  ${(props) => props.style};
`;

const StyledH2 = styled.h2`
  ${base}
  font-size: 28px;
  line-height: 35px;
  ${(props) => props.style};
`;

const StyledH3 = styled.h3`
  ${base}
  font-size: 24px;
  line-height: 30px;
  ${(props) => props.style};
`;

const StyledH4 = styled.h4`
  ${base}
  font-size: 20px;
  line-height: 25px;
  ${(props) => props.style};
`;

const setHeading = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
};

export default function Heading({ children, type, style }) {
  const HeadingToRender = setHeading[type];
  return (
    <HeadingToRender type={type} style={style}>
      {children}
    </HeadingToRender>
  );
}
