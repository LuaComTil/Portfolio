import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import en from "./translate/languages/en.json";
import pt from "./translate/languages/pt.json";
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('userLanguage') || 'pt',
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
