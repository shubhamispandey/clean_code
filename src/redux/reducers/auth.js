import * as types from "../constants/authConstants";
const initialState = {
  userData: null,
  accessToken: null,
  signInError: null,
  signUpError: null,
  successMessage: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload,
      };
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: payload ? payload : null,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signInError: null,
        signUpError: null,
        successMessage: payload ? payload : null,
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        successMessage: null,
        signInError: null,
        signUpError: payload ? payload : null,
      };

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        userData: payload ? payload.user : null,
        accessToken: payload ? payload.accessToken : null,
        signInError: null,
        successMessage: payload ? payload : null,
      };

    case types.SIGNIN_FAIL:
      return {
        ...state,
        successMessage: null,
        signUpError: null,
        signInError: payload ? payload : null,
      };

    case types.LOGOUT:
      return {
        ...state,
        userData: null,
        accessToken: null,
        signInError: null,
        signUpError: null,
        successMessage: null,
      };
    case types.CLEAR_MESSAGE:
      return {
        ...state,
        successMessage: null,
        signInError: null,
        signUpError: null,
      };

    default:
      return state;
  }
};

export default authReducer;
