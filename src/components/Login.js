import { BODY_BG_URL } from "../utils/constants";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSighInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSighInForm(!isSignInForm);
  };
  return (
    <>
      <div className="absolute">
        <Header />
        <img src={BODY_BG_URL} alt="BG-Image" />
      </div>

      <form className="w-3/12 left-0 right-0 text-white p-12 rounded-lg absolute bg-black my-36 opacity-90 mx-auto">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-800"
            type="Name"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-800"
          type="email "
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-800"
          type="password "
          placeholder="Password"
        />
        <button className="rounded-lg p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Not on Netflix? Sign Up Now"
            : "Already have Netflix account? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
