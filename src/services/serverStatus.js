import { API } from "./utils";

export const checkServerStatus = async (setLoading, setError) => {
  try {
    await API.get("/api/server-status");
  } catch (error) {
    setError("Server is down. Please try again later.");
  } finally {
    setLoading(false);
  }
};
