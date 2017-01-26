import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './app';
import * as reducers from './reducers';
import rootSaga from './sagas';

const reducer = combineReducers({ ...reducers });
const sagaMiddleware = createSagaMiddleware();
const middleWare = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middleWare);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
