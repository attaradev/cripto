export const CryptosTypes = {
  FETCH_CRYPTOS_REQUEST: "FETCH_CRYPTOS_REQUEST",
  FETCH_CRYPTOS_SUCCESS: "FETCH_CRYPTOS_SUCCESS",
  FETCH_CRYPTOS_FAIL: "FETCH_CRYPTOS_FAIL"
};

export const fetchCryptosRequest = (start = 1, limit = 20) => ({
  type: CryptosTypes.FETCH_CRYPTOS_REQUEST,
  payload: { start, limit }
});

export const fetchCryptosSuccess = data => ({
  type: CryptosTypes.FETCH_CRYPTOS_SUCCESS,
  payload: data
});

export const fetchCryptosFail = error => ({
  type: CryptosTypes.FETCH_CRYPTOS_FAIL,
  payload: error
});
