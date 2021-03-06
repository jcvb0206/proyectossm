import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Icon from '../components/UI/Icon';
import Button from '../components/UI/Button';

const StyledDiv = styled.div``;

function Home({ history }) {
  return (
    <StyledDiv>
      <Icon type="home" size="30" />
      <Icon type="profile" size="30" />
      <Icon type="back" size="30" />
      <Icon type="forward" size="30" />
      <Icon type="email" size="30" />
      <Icon type="emailOpen" size="30" />
      <Icon type="facebookSquare" size="30" />
      <Icon type="facebook" size="30" />
      <Icon type="messenger" size="30" />
      <Icon type="instagram" size="30" />
      <Icon type="linkedin" size="30" />
      <Button size="small">Hola mundo</Button>
      <Button size="small" type="ghost">
        Hola mundo
      </Button>
      <Button>Hola mundo</Button>
      <Button type="ghost">Hola mundo</Button>
      <Button size="big">Hola mundo</Button>
      <Button size="big" type="ghost">
        Hola mundo
      </Button>
    </StyledDiv>
  );
}

export default Home;
