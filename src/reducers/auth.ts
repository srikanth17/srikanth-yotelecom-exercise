import { SET_TOKEN, SetTokenAction } from '../types/types';

const authReducerDefaultState = {
  token: '',
};

export default function auth(
  state = authReducerDefaultState,
  action: SetTokenAction
) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
