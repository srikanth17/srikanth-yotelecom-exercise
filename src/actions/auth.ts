import { SetTokenAction, SET_TOKEN } from '../types/types';

export const setToken = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  payload: token,
});
