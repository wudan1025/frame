import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ReduxApp from './ReduxApp';
// import ReduxReactApp from './ReduxReactApp'
import ReduxReactHookApp from './ReduxReactHookApp'

import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ReduxApp /> */}
      {/* <ReduxReactApp></ReduxReactApp> */}
      <ReduxReactHookApp></ReduxReactHookApp>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
