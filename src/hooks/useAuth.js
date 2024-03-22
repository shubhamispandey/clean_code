import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isValidToken } from "../utils/authUtils.js";
import {
  clearMessageAction,
  setAccessToken,
  setUserData,
  signInFail,
  signInSuccess,
  signUpFail,
  signUpSuccess,
} from "../redux/actions/authActions";
import { signInService, signUpService } from "../services/auth";
import { useCallback } from "react";

const UseAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initializeAuth = useCallback(() => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        if (isValidToken(token)) {
          dispatch(setAccessToken(token));
          dispatch(setUserData(user));
          navigate("/");
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/signin");
        }
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }, [dispatch, navigate]);

  const signIn = useCallback(
    async (formData) => {
      try {
        const { error, data } = await signInService(formData);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", JSON.stringify(data?.user));
        if (error) {
          dispatch(signInFail("Failed to sign in!"));
        } else {
          dispatch(setAccessToken(data?.token));
          dispatch(setUserData(data?.user));
          dispatch(signInSuccess("Account successfully signed in!"));
          navigate("/");
        }
      } catch (error) {
        signInFail("Failed to sign in!");
      }
    },
    [dispatch, navigate]
  );

  const signUp = useCallback(
    async (formData) => {
      try {
        const { error } = await signUpService(formData);
        if (error) dispatch(signUpFail(error));
        else {
          dispatch(
            signUpSuccess("Account successfully created, please login!")
          );
          navigate("/signin");
        }
      } catch (error) {
        dispatch(signUpFail(error));
      }
    },
    [dispatch, navigate]
  );

  const clearMessage = useCallback(() => {
    dispatch(clearMessageAction());
  }, [dispatch]);

  return {
    initializeAuth,
    signIn,
    signUp,
    clearMessage,
  };
};

export default UseAuth;
