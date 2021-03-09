import styled from '@emotion/styled';

const sizes = {
  default: { width: '450px' },
  small: { width: '320px' },
};

const StyledForm = styled.div`
  width: ${(props) =>
    sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  background: #ffffff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px;
`;

function Form({ children, size }) {
  return <StyledForm size={size}>{children}</StyledForm>;
}

export default Form;
