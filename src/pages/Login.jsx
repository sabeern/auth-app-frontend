import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CirclesWithBar } from "react-loader-spinner";
import axios from "../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";
  const handleLogin = async (req, res) => {
    try {
      setLoading(true);
      const result = await axios.post("/user/login", userDetails, {
        withCredentials: true,
      });
      setAuth({ accessToken: result?.data?.accessToken });
      navigate("/profile");
      toast.success("Login successfull", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "colored",
      });
    } catch (err) {
      toast.error(err?.response?.data?.errorMessage, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center min-h-screen items-center">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 py-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen">
          <div></div>
          <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center border-2 p-5 border-[#737373] bg-[#3b82f6]">
            <h1 className="text-xl font-bold text-white mb-10">Login</h1>
            <div>
              <div className="flex items-center justify-between mt-5">
                <label className="mr-4 text-[#334155] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="w-fit px-2 py-1 rounded"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  value={userDetails.email}
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <label className="mr-4 text-[#334155] font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="w-fit px-2 py-1 rounded"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  value={userDetails.password}
                />
              </div>
              <div className="flex justify-end mt-5">
                <button
                  className="text-white px-4 py-2 rounded bg-gradient-to-r from-green-400 to-[#9333ea] hover:from-pink-500 hover:to-yellow-500"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
            <p className="mt-5">
              Are you new here?{" "}
              <Link to="/signup" className="text-white">
                Signup
              </Link>
            </p>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default Login;
