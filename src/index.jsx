import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// For developement
// import './css/tailwind.dev.css'

// For final build
import './css/tailwind.min.css'

import { Provider } from 'react-redux'
import store, { rrfProps } from './firebase/store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();