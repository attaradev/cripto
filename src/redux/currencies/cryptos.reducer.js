import { CryptosTypes } from "./cryptos.actions";

const initialState = {
  isFetching: false,
  error: null,
  cryptos: []
};

export const cryptosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CryptosTypes.FETCH_CRYPTOS_REQUEST:
      return { ...state };
    case CryptosTypes.FETCH_CRYPTOS_SUCCESS:
      return { ...state };
    case CryptosTypes.FETCH_CRYPTOS_FAIL:
      return { ...state };
    default:
      return state;
  }
};
