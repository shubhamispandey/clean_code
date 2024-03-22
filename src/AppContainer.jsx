import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import createAppStore from "./redux/store";
import { checkServerStatus } from "./services/serverStatus";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import CommonLoading from "./components/loader/CommonLoading";
import App from "./App";

export const initializeStore = (setLoading, setError, setStore) => {
  try {
    const appStore = createAppStore();
    setStore(appStore);
  } catch (error) {
    setError("Error occurred while initializing store");
  } finally {
    setLoading(false);
  }
};

const AppContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(() => {
    checkServerStatus(setLoading, setError).then(() => {
      initializeStore(setLoading, setError, setStore);
    });
  }, []);

  if (loading || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        {loading ? <CommonLoading /> : <ErrorComponent errorMessage={error} />}
      </div>
    );
  }
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
