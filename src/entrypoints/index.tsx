import React from 'react'
import ReactDOM from 'react-dom/client'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import { App } from '@/app';

ReactDOM.createRoot(document.getElementById('MainContent') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>,
  </React.StrictMode>
)
