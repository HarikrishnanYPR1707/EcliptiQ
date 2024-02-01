import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Input } from "@/components/ui/input";
import React from "react";

const Information = () => {
  return (
    <div className="flex h-heightWithoutNavbar items-start justify-center border border-white py-4">
      <div className="">
        <h1 className="text-[22px] font-black uppercase text-[#6d28d9]">
          Enter your information
        </h1>
        {/* Basic Information  */}
        <div className="">
          <InputWithLabel />
        </div>
      </div>
    </div>
  );
};

export default Information;
