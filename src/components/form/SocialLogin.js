import styled from '@emotion/styled';
import Icon from '../UI/Icon';

const StyledSocialLogin = styled.button`
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #697477;
  background-color: #f9f9f9;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c1c1d3;
  }
`;

const setIcon = {
  facebook: { icon: 'facebookSquare', text: 'Facebook' },
  twitter: { icon: 'twitter', text: 'Twitter' },
  google: { icon: 'google', text: 'Google' },
};

function SocialLogin({ type, size, onClick }) {
  return (
    <StyledSocialLogin size={size}>
      <Icon type={setIcon[type].icon} size="30" />
      <span>{setIcon[type].text}</span>
    </StyledSocialLogin>
  );
}

export default SocialLogin;
