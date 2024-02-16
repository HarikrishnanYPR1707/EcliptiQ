import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Information1 = () => {
  // const [testData, setTestData] = useState("");
  const [userResumeData, setUserResumeData] = useState({
    personalDetails: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    professionalSummary: "",
    education: {
      college: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    experience: {
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    socialLink: {
      link1: {
        label: "",
        link: "",
      },
      link2: {
        label: "",
        link: "",
      },
      link3: {
        label: "",
        link: "",
      },
      link4: {
        label: "",
        link: "",
      },
    },
    skills: [],
    language: [],
  });
  // printing userResumeData ---
  console.log(userResumeData);
  // ---------------------------

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col items-center justify-center border-white">
      {/* image container */}
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <p className="relative text-center text-3xl font-bold uppercase text-white">
          {/* Enter your information for resume */}
          Drop your deets in the data zone
          {/* Build Your Career Canvas: Input Your Details */}
        </p>
      </div>
      {/* Main Input Container */}
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-5 px-5 py-10">
        {/* Basic Information Container */}
        {/* border border-[#07102d] */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="font-bold">
            <h1 className="flex w-fit items-center justify-center gap-2 text-xl">
              <FaInfoCircle className="text-purple-500" />
              <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                Personal Details
                {/* Basic Information */}
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
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      jobTitle: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      firstName: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      lastName: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                type="email"
                placeholder="e.g. john.doe@example.com"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      email: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Phone
              </label>
              <input
                type="number"
                placeholder="e.g. +123 1234567890"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      phone: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Professional Summary Container */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="py-2">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute  before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Professional Summary
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Include summary of your skills and experience in 3-5 sentences
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <textarea
                placeholder="Enter your summary"
                className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                // onChange={(e) => setTestData(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Education
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                List your most recent education.
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                College
              </label>
              <input
                type="text"
                placeholder="eg. Universal College of Engineering"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Degree
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="w-[285px] rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500 sm:w-[347px]"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                End Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="w-[285px] rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500 sm:w-[347px]"
              />
            </div>
            <div className="mt-5 sm:col-span-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Description
                </label>
                <textarea
                  placeholder="Enter your summary"
                  className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  // onChange={(e) => setTestData(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Experience
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Include 2-3 work responsibility for each experience
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Job Title
              </label>
              <input
                type="text"
                placeholder="eg. SDE-3"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Employer
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="w-[285px] rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500 sm:w-[347px]"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                End Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="w-[285px] rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500 sm:w-[347px]"
              />
            </div>
            <div className="mt-5 sm:col-span-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Description
                </label>
                <textarea
                  placeholder="Enter your summary"
                  className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  // onChange={(e) => setTestData(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Link Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Social Link
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                You can include your social profiles such as LinkedIn, Facebook,
                Twitter or personal website.
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid gap-4">
            {/* label-1 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-1
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-1
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
            </div>
            {/* label-2 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-2
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-2
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
            </div>
            {/* label-3 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-3
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-3
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
            </div>
            {/* label-4 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-4
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-4
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Skills
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Only list relevant skills related to you domain
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-1
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-2
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-3
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-4
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-5
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-6
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Language
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                List your most relevant language on top.
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Language-1
              </label>
              <input
                type="text"
                placeholder="eg. English"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Language-2
              </label>
              <input
                type="text"
                placeholder="eg. English"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Language-3
              </label>
              <input
                type="text"
                placeholder="eg. English"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information1;
