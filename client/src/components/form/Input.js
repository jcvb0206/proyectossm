import styled from '@emotion/styled';

const StyledInput = styled.input`
  padding: 4px 8px;
  background: #ffffff;
  border-radius: 4px;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  transition: border 200ms;
  &:focus {
    outline: none;
    border: 1px solid #2d9cdb;
  }
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
