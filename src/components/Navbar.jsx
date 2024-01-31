import React, { useState } from "react";

const Navbar = () => {
  const [data, setdata] = useState();
  return (
    <div className="flex h-[80px] items-center justify-center border px-6 py-2">
      <div className="relative flex h-full w-full max-w-[1550px] items-center  justify-center border border-red-500">
        <div className="font-honk grid h-full place-content-center border border-purple-500 text-5xl font-black uppercase">
          {/* <img src="" alt="" /> */}
          EcliptiQ
        </div>
        <button className="absolute right-0 rounded-xl bg-green-600 px-5 py-2 font-bold active:bg-green-700">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
