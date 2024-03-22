import { API } from "./utils";

export const signUpService = async (data) => {
  try {
    const response = await API.post("/api/auth/signup", data);
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error.response.data.message, data: null };
  }
};

export const signInService = async (data) => {
  try {
    const response = await API.post("/api/auth/signin", data);
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error.response.data.message, data: null };
  }
};
