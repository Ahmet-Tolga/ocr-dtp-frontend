import './src/assets/scss/custom.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './src/App.tsx';
import store from './src/store/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
  </React.Fragment>,
)
