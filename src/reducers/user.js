import { SET_USER_VALUE } from '../actions';

const initialUserState = {
  user: {
    email: '',
  },
};

export default function user(state = initialUserState, { type, payload }) {
  switch (type) {
  case SET_USER_VALUE:
    return { ...state, email: payload };
  default:
    return state;
  }
}
