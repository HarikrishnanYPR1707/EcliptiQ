import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/ModeToggle";

const Navbar = () => {
  const [user, setUser] = useState(false);

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

  console.log(user);

  return (
    <div className="flex h-[80px] items-center justify-center border px-6 py-2">
      <div className="relative flex h-full w-full max-w-[1550px] items-center justify-start lg:justify-center">
        <div className="flex h-full items-center justify-center font-honk text-3xl font-black uppercase lg:text-5xl">
          {/* <img src="" alt="" /> */}
          EcliptiQ
        </div>
        {user ? (
          <Button
            className="absolute right-16 bg-red-600 hover:bg-red-700"
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </Button>
        ) : (
          <Button
            className="absolute right-16"
            onClick={() => {
              handleSignIn();
            }}
          >
            SignUp
          </Button>
        )}
        <div className="absolute right-0">
          <ModeToggle className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
