import styled from '@emotion/styled';
// import { css } from '@emotion/react';
// import Heading from '../components/text/Heading';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';

const StyledDiv = styled.div``;

function Main({ history }) {
  return (
    <StyledDiv>
      <Header />
      <main></main>
      <Footer />
    </StyledDiv>
  );
}

export default Main;
