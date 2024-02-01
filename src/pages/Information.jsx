import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Input } from "@/components/ui/input";
import React from "react";

const Information = () => {
  return (
    <div className="mx-auto flex h-heightWithoutNavbar max-w-[900px] items-start justify-center border border-white py-4">
      <div className="w-full border border-amber-500">
        <h1 className="border border-amber-500 text-center text-[22px] font-black uppercase text-[#6d28d9] lg:text-4xl">
          Enter your information
        </h1>
        {/* Basic Information  */}
        <div className="mt-4 grid grid-cols-2 place-content-center gap-4 border border-amber-500">
          <InputWithLabel
            label="First Name"
            type="text"
            placeholder="Enter your First Name..."
          />
          <InputWithLabel
            label="Last Name"
            type="text"
            placeholder="Enter your Last Name..."
          />
          <InputWithLabel
            label="Email"
            type="text"
            placeholder="Enter your Email..."
          />
          <InputWithLabel
            label="Email"
            type="text"
            placeholder="Enter your Email..."
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
