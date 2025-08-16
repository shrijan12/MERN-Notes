import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    }
    if (!password) {
      setError("Please enter a valid password");
      return;
    }

    setError("");
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-35">
        <div className="w-96 rounded bg-white px-7 py-10">
          <form action="" onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7 text-center font-semibold">Login</h4>
            <input
              type="text"
              name=""
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-600 text-xs pb-1 text-center font-bold">
                {error}
              </p>
            )}

            <button className="btn-primary" type="submit">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not Registered Yet ?{" "}
              <Link to="/signup" className="font-bold text-blue-800 underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
