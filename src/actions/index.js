export const SET_USER_VALUE = 'SET_USER_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const IS_FETCHING = 'IS_FETCHING';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const setUserValue = (payload) => (
  {
    type: SET_USER_VALUE,
    payload,
  }
);

export const getCurrencies = (payload) => (
  {
    type: GET_CURRENCIES,
    payload,
  }
);

export const isFetching = () => (
  {
    type: IS_FETCHING,
  }
);

export const failedRequest = (error) => (
  { type: FAILED_REQUEST, payload: error }
);

export const addExpense = (payload) => (
  {
    type: ADD_EXPENSE,
    payload,
  }
);

export const removeExpense = (payload) => (
  {
    type: REMOVE_EXPENSE,
    payload,
  }
);

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(isFetching());
    try {
      const data = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
      const currencies = Object.keys(data).filter((crr) => crr !== 'USDT');
      dispatch(getCurrencies(currencies));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
