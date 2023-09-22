import { useState, useContext } from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../context/LoaderContext";

const Loginform = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const { setLoading } = useContext(LoaderContext);

  const handleLogin = () => {
    // setLoading(true);
    auth.login(user);
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="grid grid-cols-2 show-box">
        <div>
          <img src="/src/assets/4fc998276ad1c29e69ef83d88243f5c6.jpg" alt="" />
          <div className="p-4 bg-gray-800">
            <h1 className="w-8/12 ml-24 text-white text-center p-5 pb-0 text-4xl">
              Take control of <strong>Your money</strong>
            </h1>
            <p className="w-8/12 ml-24 text-white text-center font-medium p-5 pt-0 text-lg blink">
              Personal budgeting is the secret to financial freedom. Start your
              journey today!
            </p>
          </div>
        </div>

        <div className="relative bg-gray-800 flex flex-col justify-center min-h-screen overflow-hidden show-box">
          <h1 className="w-10/12 ml-16 mt-2 text-white text-center p-8 text-5xl border rounded-full">
            EXPENSE TRACKER APP
          </h1>
          <div className="w-full p-6 m-auto mt-7 bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-gray-800 underline">
              LOGIN
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setUser(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md"
                />
              </div>
              <a href="#" className="text-xs text-gray-800 hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button
                  onClick={handleLogin}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-800"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <a href="#" className="font-medium text-gray-800 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginform;
