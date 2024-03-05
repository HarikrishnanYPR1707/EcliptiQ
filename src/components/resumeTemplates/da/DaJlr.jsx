import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { userResumeData } from "@/Fetch/InformationFetch";

const DaJlr = () => {
  const daJlrComponentDownloadRef = useRef(null);

  const data = userResumeData();
  const resumeData = JSON.parse(data);
  // console.log(resumeData);

  const handlePrint = useReactToPrint({
    content: () => daJlrComponentDownloadRef.current,
    documentTitle: "SDE-SLR-Resume",
    // pageStyle: "print",
  });

  return (
    <div className="flex flex-col gap-10">
      {/* ------------------ header section ------------------ */}
      <div className="relative flex h-[200px] w-full items-center justify-center bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-black  uppercase">
            Software Development Engineer
          </h1>
          <h3 className="rounded-xl bg-purple-500 bg-opacity-80 px-20 py-2 text-xl">
            Junior Level Resume
          </h3>
        </div>
      </div>
      {/* ------------------ template part with button ------------------ */}
      <div className="flex flex-col items-center gap-5">
        <div
          ref={daJlrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white p-7 font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="">
            <div className="">
              <h1 className="flex gap-3 pb-1 font-timesNewRoman text-5xl font-black">
                <span className="">{resumeData.personalDetails.firstName}</span>
                <span className="">{resumeData.personalDetails.lastName}</span>
              </h1>
              <h3 className="font-timesNewRoman text-3xl font-bold text-[#7e7e05]">
                {resumeData.personalDetails.jobTitle}
              </h3>
            </div>
            <div className="mt-2 flex w-[500px] flex-wrap gap-x-10 gap-y-2">
              <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                <FaPhone className="text-gray-500" />
                <span className="">{resumeData.personalDetails.phone}</span>
              </p>
              <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                <MdEmail className="text-gray-500" />
                <span className="">{resumeData.personalDetails.email}</span>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a href="#" className="flex items-center justify-center gap-2">
                  <CgWebsite className="text-gray-500" />
                  {resumeData.personalDetails.website}
                </a>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a
                  href={resumeData.socialLink.link1.link}
                  className="flex items-center justify-center gap-2"
                >
                  <FaLinkedin className="" />
                  <span className="text-blue-500">
                    {resumeData.socialLink.link1.label}
                  </span>
                </a>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a
                  href={resumeData.socialLink.link2.link}
                  className="flex items-center justify-center gap-2"
                >
                  <FaLinkedin className="" />
                  <span className="text-blue-500">
                    {resumeData.socialLink.link2.label}
                  </span>
                </a>
              </p>
            </div>
          </div>
          {/* bottom section */}
          <div className="mt-5 flex items-start justify-between gap-5">
            {/* --------------------- left section --------------------- */}
            <div className="w-[60%]">
              {/* Work section */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Work Experience
                </h1>

                {/* -------------------- experiences -------------------- */}
                <div className="">
                  {/* -------------------- experiences 1 -------------------- */}
                  <div className="">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="-mt-1 font-bold text-[#7e7e05]">
                        {resumeData.experience.experience1.employer}
                      </span>
                      <span className="text-[22px]">
                        {resumeData.experience.experience1.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData.experience.experience1.startDate}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData.experience.experience1.endDate}
                        </span>
                      </p>
                      <p className="">
                        {resumeData.experience.experience1.place}
                      </p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc">
                      {resumeData.experience.experience1.description
                        .split("---")
                        .map((item, i) => (
                          <li key={i} className="text-sm">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* -------------------- experiences 2 -------------------- */}
                  <div className="">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="-mt-1 font-bold text-[#7e7e05]">
                        {resumeData.experience.experience2.employer}
                      </span>
                      <span className="text-[22px]">
                        {resumeData.experience.experience2.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData.experience.experience2.startDate}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData.experience.experience2.endDate}
                        </span>
                      </p>
                      <p className="">
                        {resumeData.experience.experience2.place}
                      </p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc">
                      {resumeData.experience.experience2.description
                        .split("---")
                        .map((item, i) => (
                          <li key={i} className="text-sm">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Projects section */}
              <div className="mt-5">
                <h1 className="mb-1 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Projects
                </h1>
                <div className="">
                  <div className="mb-1">
                    <h3 className="flex flex-col items-start">
                      <span className="">
                        {resumeData.project.project1.title}
                      </span>
                      <span className="font-bold text-[#7e7e05]">
                        {resumeData.project.project1.position}
                      </span>
                    </h3>
                    <ul className="text-gray-600">
                      {resumeData.project.project1.description
                        .split("---")
                        .map((desc, index) => (
                          <li key={index} className="ml-5 list-disc">
                            {desc}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------- right section --------------------- */}
            <div className="flex w-[40%] flex-col items-start gap-5">
              {/* Career Objective section  */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Career Objective
                </h1>
                <div className="text-sm">{resumeData.professionalSummary}</div>
              </div>
              {/* Education Section */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className=" text-[15px]">
                    <span className="font-bold text-[#7e7e05]">
                      {resumeData.education.college}
                    </span>{" "}
                    {" - "}
                    <span className="">{resumeData.education.degree}</span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <p className="">
                      <span className="">{resumeData.education.startDate}</span>
                      {" - "}
                      <span className="">{resumeData.education.endDate}</span>
                    </p>
                    <p className="">{resumeData.education.place}</p>
                  </div>
                </div>
              </div>
              {/* Skills section  */}
              <div className="w-full">
                <h1 className="mb-1 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Skills
                </h1>
                <ul className="">
                  {resumeData.skills.split("---").map((skill, i) => (
                    <li
                      key={i}
                      className="ml-5 list-disc text-sm text-gray-600"
                    >
                      {skill},
                    </li>
                  ))}
                </ul>
              </div>
              {/* Certification section  */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Certification
                </h1>
                <ul className="">
                  {resumeData.certification.split("---").map((skill, i) => (
                    <li key={i} className="ml-5 list-disc text-sm">
                      {skill + " "},
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="rounded-lg bg-purple-500 px-3 py-2 text-sm font-bold"
        >
          Download Template
        </button>
      </div>
    </div>
  );
};

export default DaJlr;
