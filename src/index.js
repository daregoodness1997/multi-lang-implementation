import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </I18nextProvider>,
  document.getElementById('root')
);
