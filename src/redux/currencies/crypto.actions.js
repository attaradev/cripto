export const CryptoTypes = {
  FETCH_CRYPTOS_REQUEST: "FETCH_CRYPTOS_REQUEST",
  FETCH_CRYPTOS_SUCCESS: "FETCH_CRYPTOS_SUCCESS",
  FETCH_CRYPTOS_FAIL: "FETCH_CRYPTOS_FAIL"
};

export const fetchCryptosRequest = (start = 1, limit = 20) => ({
  type: CryptoTypes.FETCH_CRYPTOS_REQUEST,
  payload: { start, limit }
});

export const fetchCryptosSuccess = data => ({
  type: CryptoTypes.FETCH_CRYPTOS_SUCCESS,
  payload: data
});

export const fetchCryptosFail = error => ({
  type: CryptoTypes.FETCH_CRYPTOS_FAIL,
  payload: error
});
