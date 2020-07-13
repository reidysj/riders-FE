import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// issues with persistence? here's the instructions you followed
// https://github.com/rt2zz/redux-persist/issues/58
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './store'

const {persistor, store} = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
