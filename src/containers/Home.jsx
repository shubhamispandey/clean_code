import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth?.userData);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and User */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold mr-4">
              My App
            </Link>
            {userData && (
              <span className="text-lg">Welcome, {userData.username}!</span>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <Link
              to="/dashboard"
              className="text-white mr-4 hover:text-gray-300"
            >
              Dashboard
            </Link>
            <Link to="/profile" className="text-white mr-4 hover:text-gray-300">
              Profile
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Body Content */}
      <div className="container mx-auto flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ex
          ac eros luctus finibus. Vivamus convallis velit id nunc dictum
          convallis.
        </p>
      </div>
    </div>
  );
};

export default Home;
