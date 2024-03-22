import * as types from "../constants/authConstants";

// AUTH ACTIONS

export const setInitialAuthState = () => ({
  type: types.LOGOUT,
});

export const setAccessToken = (payload) => ({
  type: types.SET_ACCESS_TOKEN,
  payload,
});

export const setUserData = (payload) => ({
  type: types.SET_USER_DATA,
  payload,
});

export const clearMessageAction = () => ({ type: types.CLEAR_MESSAGE });

// SIGNUP ACTIONS

export const signUpFail = (payload) => ({
  type: types.SIGNUP_FAIL,
  payload,
});

export const signUpSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

// Sign In

export const signInFail = (payload) => ({
  type: types.SIGNIN_FAIL,
  payload,
});

export const signInSuccess = (payload) => ({
  type: types.SIGNIN_SUCCESS,
  payload,
});
