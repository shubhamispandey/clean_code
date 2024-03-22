import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import Logo from "../assets/SocialEcho.png";
import ButtonLoadingSpinner from "../components/loader/ButtonLoadingSpinner";
import UseAuth from "../hooks/useAuth";

const SignUpNew = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const { signUp, clearMessage } = UseAuth();

  const [data, setData] = useState({
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  });

  const signUpError = useSelector((state) => state.auth?.signUpError);
  const signUpSuccess = useSelector((state) => state.auth?.successMessage);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingText("Signing up...");

    const timeout = setTimeout(() => {
      setLoadingText(
        "This is taking longer than usual. Please wait while backend services are getting started."
      );
    }, 5000);

    await signUp(data);
    setLoading(false);
    clearTimeout(timeout);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mx-auto flex justify-center">
            <img className="h-7 w-auto sm:h-8" src={Logo} alt="" />
          </div>
          {signUpError && (
            <div
              className="mt-6 flex items-center rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <span className="ml-2 block sm:inline">{signUpError}</span>
              <button
                className="ml-auto font-bold text-red-700"
                onClick={clearMessage}
              >
                <RxCross1 className="h-3 w-3" />
              </button>
            </div>
          )}

          {signUpSuccess && (
            <div
              className="mt-6 flex items-center rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
              role="alert"
            >
              <span className="ml-2 block sm:inline">{signUpSuccess}</span>
              <button
                className="ml-auto font-bold text-green-700"
                onClick={clearMessage}
              >
                <RxCross1 className="h-3 w-3" />
              </button>
            </div>
          )}

          <div className="mt-6 flex items-center justify-center">
            <Link
              to={"/signin"}
              className="w-1/3 border-b border-gray-400 pb-4 text-center font-medium text-gray-800"
            >
              Sign In
            </Link>
            <Link
              to={"/signup"}
              className="text-cente w-1/3 border-b-2 border-blue-500 pb-4 font-medium text-gray-800"
            >
              Sign Up
            </Link>
          </div>
          <div className="relative mt-8 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <input
              id="name"
              name="username"
              type="text"
              value={data.username}
              onChange={handleInputChange}
              className="block w-full rounded-lg border bg-white px-11 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Username"
              required
              autoComplete="off"
            />
          </div>

          <div className="relative mt-6 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              id="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              type="email"
              className="block w-full rounded-lg border bg-white px-11 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Email address"
              required
              autoComplete="off"
            />
          </div>
          <div className="relative mt-4 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              id="password"
              name="password"
              type="password"
              value={data.password}
              onChange={handleInputChange}
              className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Password"
              required
              autoComplete="off"
            />
          </div>
          <div className="mt-6">
            <button
              disabled={loading}
              type="submit"
              className={`w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? (
                <ButtonLoadingSpinner loadingText={loadingText} />
              ) : (
                <span>Sign Up</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpNew;
