import {
  GET_CURRENCIES,
  IS_FETCHING,
  FAILED_REQUEST,
  ADD_EXPENSE } from '../actions';

const initialWalletValue = {
  currencies: [],
  expenses: [],
  loading: true,
};

export default function wallet(state = initialWalletValue, { type, payload }) {
  switch (type) {
  case GET_CURRENCIES:
    return { ...state, currencies: payload, loading: false };
  case IS_FETCHING:
    return { ...state, loading: true };
  case FAILED_REQUEST:
    return { ...state, error: payload };
  case ADD_EXPENSE:
    payload = { id: state.expenses.length, ...payload };
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
}
