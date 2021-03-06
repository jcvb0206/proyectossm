import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import Heading from '../components/text/Heading';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import Library from '../components/library';

const StyledDiv = styled.div``;

function Home({ history }) {
  return (
    <StyledDiv>
      <Header />
      <main>
        <Heading type="h1">Nosotros</Heading>
        <Library />
      </main>
      <Footer />
    </StyledDiv>
  );
}

export default Home;
