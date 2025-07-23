import { NETFLIX_LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix-Logo" />
        {user && (
          <div className="flex p-2">
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
