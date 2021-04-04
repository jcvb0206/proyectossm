/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const BaseBodyText = ({ theme }) =>
  css`
    font-family: ${theme.font.body};
    color: ${theme.color.darkGray};
  `;

const Subtitle1 = styled.p`
  ${BaseBodyText}
  font-size: 16px;
  line-height: 24px;
`;

const Subtitle2 = styled.p`
  ${BaseBodyText}
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const Body1 = styled.p`
  ${BaseBodyText}
  font-size: 16px;
  line-height: 24px;
`;

const Body2 = styled.p`
  ${BaseBodyText}
  font-size: 14px;
  line-height: 20px;
`;

const BtnText = styled.span`
  ${BaseBodyText}
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
`;

const Caption = styled.span`
  ${BaseBodyText}
  font-size: 12px;
  line-height: 16px;
`;

const Overline = styled.span`
  ${BaseBodyText}
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
`;

export { Subtitle1, Subtitle2, Body1, Body2, BtnText, Caption, Overline };
