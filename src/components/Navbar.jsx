import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[80px] items-center justify-center border p-2">
      <div className="relative flex h-full w-full max-w-[1550px] items-center  justify-center border border-red-500">
        <div className="grid h-full w-[80px] place-content-center border border-purple-500 font-black uppercase">
          {/* <img src="" alt="" /> */}
          logo
        </div>
        <button className="absolute right-6 rounded-xl bg-green-600 px-5 py-2 font-extrabold active:bg-green-700">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
