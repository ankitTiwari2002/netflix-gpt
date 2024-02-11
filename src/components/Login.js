import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_URL, USER_PHOTO } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // If no error
    if (message) return;

    // Sign In/Sign Up logic
    if (!isSignInForm) {
      // Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_PHOTO,
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
                setErrorMessage(error.message);
              });
          } else {
            setErrorMessage("User sign-up failed");
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src={BACKGROUND_URL}
          alt="BackgroundImage"
        />
        <div className="z-10 text-white bg-gray-900 p-8 rounded-lg shadow-lg w-80 bg-opacity-80">
          <h2 className=" text-2xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          <div>
            {!isSignInForm && (
              <div className="mb-4">
                <input
                  ref={name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
                />
              </div>
            )}
            <div className="mb-4">
              <input
                ref={email}
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              />
            </div>
            <div className="mb-6">
              <input
                ref={password}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              />
            </div>
            <p className="text-red-600 font-bold pb-4">{errorMessage}</p>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 focus:outline-none"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p
            className="mt-8 font-light cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
