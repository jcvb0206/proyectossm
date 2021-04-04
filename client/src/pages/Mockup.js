import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import Library from '../components/library';

const StyledDiv = styled.div``;

function Home({ history }) {
  return (
    <StyledDiv>
      <main>
        <Library />
      </main>
    </StyledDiv>
  );
}

export default Home;
