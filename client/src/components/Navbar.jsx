import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
// import { ModeToggle } from "./ui/ModeToggle";
import { useContext } from "react";
import {
  userEmailContext,
  isUserLoginContext,
} from "@/Contexts/userDataContext";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState(null);

  // User Data context
  const data = useContext(userEmailContext);
  const { isLogin, setIsLogin } = useContext(isUserLoginContext);

  console.log(userData);

  onAuthStateChanged(auth, (currentUser) => {
    setUserData(currentUser);

    if (userData == null) {
      setUser(false);
      setIsLogin(false);
    } else {
      setUser(true);
      setIsLogin(true);
    }

    data.setUser(currentUser?.email);
    console.log({ isLogin, setIsLogin });
    // console.log(auth);
    // console.log(currentUser);
  });

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setUser(true);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(false);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(user);
  // console.log(auth?.currentUser?.photoURL);

  return (
    <div className="flex h-[80px] items-center justify-center border-b px-6 py-2">
      <div className="relative flex h-full w-full max-w-[1550px] items-center justify-start lg:justify-center">
        <Link
          to="/"
          className="flex h-full items-center justify-center font-honk text-3xl font-black uppercase lg:text-5xl"
        >
          EcliptiQ
        </Link>
        {user ? (
          <div className="absolute right-0 flex items-center justify-center gap-5">
            <div className="w-[50px] overflow-hidden rounded-full border-2 border-purple-500">
              <img src={auth?.currentUser?.photoURL} alt="" />
            </div>
            <Button
              className=" bg-red-600 hover:bg-red-700"
              onClick={() => {
                logout();
              }}
            >
              LogOut
            </Button>
          </div>
        ) : (
          <Button
            className="absolute right-0"
            onClick={() => {
              handleSignIn();
            }}
          >
            SignUp
          </Button>
        )}
        {/* <div className="absolute right-0">
          <ModeToggle className="" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
