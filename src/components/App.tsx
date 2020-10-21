import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import header from 'images/header-s.png';

import GlobalStyle from '../styles/global';

import { Welcome } from './pages';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-image: url(${header});
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Switch>
          <Route path="/" component={Welcome} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
