import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/storeRedux';
import { Provider } from 'react-redux';
import { ThemeProvider, Global, css } from '@emotion/react';
import reportWebVitals from './reportWebVitals';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  font: {
    headline: 'Bebas Neue',
    body: 'Montserrat',
  },
  color: {
    blue: 'rgb(27, 61, 94)',
    gray: '#616161',
    lightGray: '#8E8E8E',
    darkGray: '#373737',
    shallowGray: 'rgba(97, 97, 97, 0.15)',
    white: '#FFFFFF',
    bg: '#F5F5F6',
    bgLight: '#E1E2E1',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
