import styled from '@emotion/styled';

const StyledLabel = styled.label`
  color: rgb(27, 61, 94);
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
`;

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;
