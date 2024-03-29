import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {setLang} from './common/data';

// Query url parameters
const urlParams = new URLSearchParams(window.location.search);

// Lang param
const langParam = urlParams.get('lang');
if (langParam === 'fr' || langParam === 'en') {
  setLang(langParam);
}

let renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'));

window.addEventListener("beforeprint", (e) => {
  App.printMode = true;

  renderApp();
});

window.addEventListener("afterprint", (e) => {
  App.printMode = false;

  renderApp();
});

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
