import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGE_SUPORTED, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Access user information from Redux store
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Dispatch action to remove user from Redux store
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  //handel GPTSearch
  const handelGptSearch = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };
  const handelLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex flex-col justify-between md:flex-row md:justify-between md:w-screen absolute z-20 bg-gradient-to-b from-black">
      <img className="w-48 py-5 ml-28" src={LOGO} alt="logo" />
      <div className="flex md:flex pr-20 gap-4 items-center">
        {user && user.photoURL && (
          <div className=" md:flex gap-10">
            {showGptSearch && (
              <select
                className="bg-gray-700 p-2 my-3 rounded-lg text-white"
                onChange={handelLanguageChange}
              >
                {LANGUAGE_SUPORTED.map((lang) => (
                  <option value={lang.identifire}>{lang.name}</option>
                ))}
              </select>
            )}
            <button
              onClick={handelGptSearch}
              className=" bg-purple-600 rounded-lg my-2 px-3 py-2 text-white text-lg font-normal"
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img
              className="hidden md:inline-block md:w-10 h-10 rounded-full cursor-pointer mt-2.5"
              src={user.photoURL}
              alt="user icon"
            />
          </div>
        )}
        {user && (
          <div>
            <button
              onClick={handleSignOut}
              className=" bg-red-600 rounded-lg p-2 my-3 text-white text-lg font-light"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
