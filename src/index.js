import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './context/Store';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#FF6600',
  hoverColor: "rgba(247, 248, 249,.4)",
  // warningColor: '#980909',
  warningColor: 'red',
  secondaryColor: '#FBAF7D',
  blackColor: '#000000',
  whiteColor: '#ffffff',
  grayColor: '#F7F8F9',
  liteprimaryColor: '#ff660061',
  liteBlackColor: '#00000026',
  litewhiteColor: '#ffffff9c',
}



ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('travel-generator')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
