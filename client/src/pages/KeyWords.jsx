import React, { useState } from "react";
import {
  sdeKeywordData,
  gdKeywordData,
  mgnKeywordData,
  daKeywordData,
} from "@/Data/Keyword";

const KeyWords = () => {
  const [domain, setDomain] = useState();
  return (
    <div className="flex flex-col items-center justify-center border-white pb-5">
      {/* image container */}
      <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <p className="relative text-center text-3xl font-bold uppercase text-white">
          {/* Enter your information for resume */}
          keyword section
          {/* Build Your Career Canvas: Input Your Details */}
        </p>
      </div>
      {/* keyword section */}
      <div className="w-[850px]">
        <div className="flex items-center justify-center gap-5 border border-purple-500">
          <button className="rounded-xl border border-rose-500 bg-purple-500 px-5 py-2 font-bold">
            Software Engineer
          </button>
          <button className="rounded-xl border border-rose-500 bg-purple-500 px-5 py-2 font-bold">
            Graphic Designer
          </button>
          <button className="rounded-xl border border-rose-500 bg-purple-500 px-5 py-2 font-bold">
            Management
          </button>
          <button className="rounded-xl border border-rose-500 bg-purple-500 px-5 py-2 font-bold">
            Data Analyst
          </button>
        </div>
        {/* sde section */}
        <div className="border border-rose-500">
          <div className="relative my-5 flex h-[70px] items-center justify-center bg-banner bg-cover bg-center underline">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <h1 className="relative text-center text-2xl font-black sm:text-3xl lg:text-3xl">
              Software Development Engineer
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {sdeKeywordData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-xl border border-gray-700 px-5 py-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyWords;
