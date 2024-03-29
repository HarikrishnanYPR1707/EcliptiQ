import React, { useState } from "react";
import {
  sdeKeywordData,
  gdKeywordData,
  mgnKeywordData,
  daKeywordData,
} from "@/Data/Keyword";

const KeyWords = () => {
  const [domain, setDomain] = useState(sdeKeywordData);

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
        <div className="my-5 flex items-center justify-center gap-5">
          <button
            onClick={() => setDomain(sdeKeywordData)}
            className="rounded-lg bg-purple-500 px-5 py-2 font-bold hover:bg-purple-600"
          >
            Software Development Engineer
          </button>
          <button
            onClick={() => setDomain(gdKeywordData)}
            className="rounded-xl bg-purple-500 px-5 py-2 font-bold hover:bg-purple-600"
          >
            Graphic Designer
          </button>
          <button
            onClick={() => setDomain(mgnKeywordData)}
            className="rounded-xl bg-purple-500 px-5 py-2 font-bold hover:bg-purple-600"
          >
            Management
          </button>
          <button
            onClick={() => setDomain(daKeywordData)}
            className="rounded-xl bg-purple-500 px-5 py-2 font-bold hover:bg-purple-600"
          >
            Data Analyst
          </button>
        </div>
        {/* sde section */}
        <Component domain={domain} />
      </div>
    </div>
  );
};

const Component = ({ domain }) => {
  return (
    <div className="">
      <div className="relative my-5 flex h-[70px] items-center justify-center bg-banner bg-cover bg-center underline">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative text-center text-2xl font-black sm:text-3xl lg:text-3xl">
          {domain.title}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {domain.keywords.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl border border-gray-700 px-5 py-2"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyWords;
