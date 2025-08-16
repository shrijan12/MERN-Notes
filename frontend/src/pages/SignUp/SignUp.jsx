import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-35">
        <div className="w-96 rounded bg-white px-7 py-10">
          <form action="" onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7 text-center font-semibold">Sign Up</h4>
            <input
              type="text"
              name=""
              placeholder="Full Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account ?{" "}
              <Link to="/login" className="font-bold text-blue-800 underline">
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
