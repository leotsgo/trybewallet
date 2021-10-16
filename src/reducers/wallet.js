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
  total: 0,
};

function sum(expenses) {
  return expenses.reduce((acc, crr) => {
    const convertedValue = Math.round(Number(crr.value)
      * Number(crr.exchangeRates[crr.currency].ask) * 100) / 100;

    acc += convertedValue;
    return acc;
  }, 0);
}

export default function wallet(state = initialWalletValue, { type, payload }) {
  switch (type) {
  case GET_CURRENCIES:
    return { ...state, currencies: payload, loading: false };
  case IS_FETCHING:
    return { ...state, loading: true };
  case FAILED_REQUEST:
    return { ...state, error: payload };
  case ADD_EXPENSE:
    payload = { id: state.expenses.length, ...payload }; // adiciona o id da expense
    state.expenses = [...state.expenses, payload];
    return { ...state, total: sum(state.expenses) };
  case REMOVE_EXPENSE:
    state.expenses = state.expenses.filter((expense) => expense.id !== payload); // faz um novo array sem a despesa a ser removida
    state.expenses = state.expenses
      .map((expense) => ({ id: state.expenses.indexOf(expense), ...expense })); // distribui novamente os ids para evitar ids repetidos
    return { ...state, total: sum(state.expenses) };
  case EDIT_EXPENSE:
    return {
      ...state,
      editing: true,
      expenseToEdit: state.expenses.find((expense) => expense.id === payload) }; // salva na chave a despesa que deve ser editada
  case SAVE_EDITION:
    state.expenses[payload.id] = payload; // salva a despesa depois de editada
    return { ...state, editing: false, total: sum(state.expenses) };
  default:
    return state;
  }
}
