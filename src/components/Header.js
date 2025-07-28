import { NETFLIX_LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unSubcribe when unmount
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleSearchView());
  };
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0"
          src={NETFLIX_LOGO_URL}
          alt="Netflix-Logo"
        />
        {user && (
          <div className="flex p-2">
            <button
              onClick={handleGptSearchClick}
              className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg"
            >
              GPT Search
            </button>
            <img
              className="w-12 h-12"
              src={user?.photoURL}
              alt="netflixProfileImg"
            />

            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
