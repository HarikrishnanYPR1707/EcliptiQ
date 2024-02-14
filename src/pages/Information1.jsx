import { FaInfoCircle } from "react-icons/fa";

const Information1 = () => {
  return (
    <div className="flex flex-col items-center justify-center border-white">
      {/* image container */}
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <p className="relative text-center text-3xl font-bold uppercase text-white">
          Enter your information for resume
        </p>
      </div>
      {/* Main Input Container */}
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-5 border border-purple-500 px-5 py-10">
        {/* Basic Information Container */}
        {/* border border-[#07102d] */}
        <div className="w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="font-bold">
            <h1 className="group flex w-fit items-center justify-center gap-2 text-xl">
              <FaInfoCircle className="text-purple-500" />
              <span className="before:ease-inOutQuint relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 group-hover:before:w-full">
                Basic Information
              </span>
            </h1>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Job Title
              </label>
              <input
                type="text"
                placeholder="eg. FrontEnd Developer"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#4d4d4d] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#4d4d4d] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#4d4d4d] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                type="email"
                placeholder="e.g. john.doe@example.com"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#4d4d4d] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Phone
              </label>
              <input
                type="number"
                placeholder="e.g. +123 1234567890"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#4d4d4d] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Professional Summary Container */}
        <div className="w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="py-2 font-bold">
            <h1 className="group flex w-fit items-center justify-center gap-2 text-xl">
              <FaInfoCircle className="text-purple-500" />
              <span className="before:ease-inOutQuint relative  before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 group-hover:before:w-full">
                Professional Summary
              </span>
            </h1>
          </div>
          {/* input section */}
          <div className="mt-5">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <textarea
                placeholder="Enter your summary"
                className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#4d4d4d] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information1;
