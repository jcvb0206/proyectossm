import styled from '@emotion/styled';
import { Body1 } from '../text/Content';

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.blue};
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
`;

function Label({ children }) {
  return (
    <StyledLabel>
      <Body1>{children}</Body1>
    </StyledLabel>
  );
}

export default Label;
