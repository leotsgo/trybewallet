import { SET_WALLET_VALUE } from '../actions';

const initialWalletValue = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialWalletValue, { type, payload }) {
  switch (type) {
  case SET_WALLET_VALUE:
    return { ...state, wallet: payload };
  default:
    return state;
  }
}
