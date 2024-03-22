import { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoute from "./PrivateRoute";
import FallbackLoading from "./components/loader/FallbackLoading";
import SignIn from "./containers/SignIn";
import UseAuth from "./hooks/useAuth";

const App = () => {
  const userData = useSelector((state) => state.auth?.userData);
  const { initializeAuth } = UseAuth();

  useEffect(() => initializeAuth(), [initializeAuth]);
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<PrivateRoute userData={userData} />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route
          path="/signin"
          element={userData ? <Navigate to="/" /> : <SignIn />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
