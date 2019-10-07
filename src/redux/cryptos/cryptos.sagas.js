import { all, call, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";

import {
  CryptosTypes,
  fetchCryptosFail,
  fetchCryptosSuccess
} from "./cryptos.actions";

const axios = Axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1",
  headers: {
    "Content-Type": "application/json",
    "X-CMC_PRO_API_KEY": "0d8aa8df-6add-488e-9721-230649c9bc23"
  }
});

function* fetchCryptosAsync({ payload }) {
  const { start, limit } = payload;
  try {
    const { data } = yield axios.get(
      `/cryptocurrency/listings/latest?start=${start}&limit=${limit}`
    );
    const formatedData = yield data.data.map(coin => {
      const {
        id,
        name,
        symbol,
        quote: { USD }
      } = coin;

      return {
        id,
        name,
        symbol,
        ...USD
      };
    });

    const total = start + limit;
    const next = total >= 100 ? null : total;
    const temp = start - limit;
    const previous = temp > 1 ? temp : null;

    yield put(fetchCryptosSuccess({ previous, next, cryptos: formatedData }));
  } catch (error) {
    yield put(fetchCryptosFail(error.message));
  }
}

function* watchFetchCryptosRequest() {
  yield takeLatest(CryptosTypes.FETCH_CRYPTOS_REQUEST, fetchCryptosAsync);
}

export function* cryptosSagas() {
  yield all([call(watchFetchCryptosRequest)]);
}
