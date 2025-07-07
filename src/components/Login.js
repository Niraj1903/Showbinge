import { BODY_BG_URL } from "../utils/constants";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);

  const password = useRef(null);

  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email.current.value,
      password.current.value
      // fullName.current.value
    );
    setErrorMsg(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
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
            ref={fullName}
            className="p-4 my-4 w-full bg-gray-800"
            type="Name"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        />

        <p className="text-red-500 font-lg py-2 ">{errorMsg}</p>
        <button
          onClick={handleLogin}
          className="rounded-lg p-4 my-6 bg-red-700 w-full"
        >
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
