import {
  GET_CURRENCIES,
  IS_FETCHING,
  FAILED_REQUEST,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EDITION } from '../actions';

const initialWalletValue = {
  currencies: [],
  expenses: [],
  loading: true,
  editing: false,
  expenseToEdit: '',
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
  case REMOVE_EXPENSE:
    state.expenses = state.expenses.filter((expense) => expense.id !== payload);
    state.expenses = state.expenses
      .map((expense) => ({ id: state.expenses.indexOf(expense), ...expense }));
    return { ...state };
  case EDIT_EXPENSE:
    return {
      ...state,
      editing: true,
      expenseToEdit: state.expenses.find((expense) => expense.id === payload) };
  case SAVE_EDITION:
    state.expenses[payload.id] = payload;
    state.editing = false;
    return { ...state };
  default:
    return state;
  }
}
