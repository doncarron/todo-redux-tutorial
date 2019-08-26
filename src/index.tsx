import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore } from 'redux-starter-kit'
import { rootSaga } from './sagas'
import createSagaMiddleware from '@redux-saga/core';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const preloadedState = {}

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: [sagaMiddleware],
})

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// then run the saga
sagaMiddleware.run(rootSaga)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
