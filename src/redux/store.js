import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { cryptosReducer, cryptosSagas } from "./cryptos";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  cryptosReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(cryptosSagas);
