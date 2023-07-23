import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

i18n.init({
  interpolation: { escapeValue: false }, 
  lng: 'en', 
  resources: {
    en: {
      translation: require('../src/locales/en.json')
    },
    tr: {
      translation: require('../src/locales/tr.json')
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
