import { BODY_BG_URL } from "../utils/constants";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);

  const password = useRef(null);

  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
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

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/174639944?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
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
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          className="h-screen object-cover"
          src={BODY_BG_URL}
          alt="BG-Image"
        />
      </div>

      <form className="w-3/12 left-0 right-0 text-white p-12 rounded-lg absolute bg-black my-36 opacity-90 mx-auto">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-800"
            type="Name"
            placeholder="Name"
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
