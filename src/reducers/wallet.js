import {
  SET_WALLET_VALUE,
  GET_CURRENCIES,
  IS_FETCHING,
  FAILED_REQUEST } from '../actions';

const initialWalletValue = {
  currencies: [],
  expenses: [],
  loading: true,
};

export default function wallet(state = initialWalletValue, { type, payload }) {
  switch (type) {
  case SET_WALLET_VALUE:
    return { ...state, wallet: payload };
  case GET_CURRENCIES:
    return { ...state, currencies: payload, loading: false };
  case IS_FETCHING:
    return { ...state, loading: true };
  case FAILED_REQUEST:
    return { ...state, error: payload };
  default:
    return state;
  }
}
