import { CryptosTypes } from "./cryptos.actions";

const initialState = {
  isFetching: false,
  error: null,
  cryptos: []
};

export const cryptosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CryptosTypes.FETCH_CRYPTOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case CryptosTypes.FETCH_CRYPTOS_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        cryptos: action.payload
      };
    case CryptosTypes.FETCH_CRYPTOS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
