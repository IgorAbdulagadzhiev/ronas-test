import Body from 'containers/Body';
import Container from 'containers/Container';
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import React from 'react'

const MainPage = () => {
  return <Container padding="75px 100px 122px 100px">
    <Header />
    <Body />
    <Footer />
  </Container>
}

export default MainPage;
