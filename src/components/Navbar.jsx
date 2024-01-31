import React, { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex h-[80px] items-center justify-center border px-6 py-2">
      <div className="relative flex h-full w-full max-w-[1550px] items-center  justify-start border border-red-500 lg:justify-center">
        <div className="flex h-full items-center justify-center font-honk text-3xl font-black uppercase lg:text-5xl">
          {/* <img src="" alt="" /> */}
          EcliptiQ
        </div>
        {/* <button className="absolute right-0 rounded-xl bg-green-600 px-5 py-2 font-bold active:bg-green-700">
          SignUp
        </button> */}
        <Button className="absolute right-0">SignUp</Button>
      </div>
    </div>
  );
};

export default Navbar;
