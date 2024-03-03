import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const DaSlr = () => {
  const sdeElrComponentDownloadRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => sdeElrComponentDownloadRef.current,
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
            Entry Level Resume
          </h3>
        </div>
      </div>
      {/* ------------------ template part with button ------------------ */}
      <div className="flex flex-col items-center gap-5">
        <div
          ref={sdeElrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white p-7 font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="">
            <div className="">
              <h1 className="pb-1 font-timesNewRoman text-5xl font-black">
                Harikrishnan Prasannakumar
              </h1>
              <h3 className="font-timesNewRoman text-3xl font-bold text-[#7e7e05]">
                Junior Data Analyst
              </h3>
            </div>
            <div className="mt-2 flex w-[500px] flex-wrap gap-x-10 gap-y-2">
              <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                <FaPhone className="text-gray-500" />
                <span className="">1234567890</span>
              </p>
              <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                <MdEmail className="text-gray-500" />
                <span className="">sample@gmail.com</span>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a href="#" className="flex items-center justify-center gap-2">
                  <CgWebsite className="text-gray-500" />
                  www.sample.com
                </a>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a href="" className="flex items-center justify-center gap-2">
                  <FaLinkedin className="" />
                  <span className="text-blue-500">linkedin</span>
                </a>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a href="" className="flex items-center justify-center gap-2">
                  <FaLinkedin className="" />
                  <span className="text-blue-500">twitter</span>
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
                {Array(2)
                  .fill(true)
                  .map((item, i) => (
                    <div className="">
                      {/* -------------------- experiences -------------------- */}
                      <div className="">
                        {/* header section */}
                        <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                          <span className="-mt-1 font-bold text-[#7e7e05]">
                            Coding Adda
                          </span>
                          <span className="text-[22px]">
                            Senior Software Developer
                          </span>
                        </h1>
                        {/* Date and place section */}
                        <div className="flex items-center justify-between text-gray-500">
                          <p className="">
                            <span className="">June 2021</span>
                            {" - "}
                            <span className="">current</span>
                          </p>
                          <p className="">India</p>
                        </div>
                        {/* description section - 1 */}
                        <ul className="ml-12 list-disc">
                          {"Develop high-quality software solutions in a fast-paced environment, focusing on scalability, reliability, and performance.---Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet business needs.---Write clean, efficient, and maintainable code using best practices and industry standards.---Conduct code reviews, provide constructive feedback, and mentor junior team members to foster a culture of continuous learning and improvement."
                            .split("---")
                            .map((item, i) => (
                              <li key={i} className="text-sm">
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
              {/* Projects section */}
              <div className="mt-5">
                <h1 className="mb-1 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Projects
                </h1>
                <div className="">
                  {Array(1)
                    .fill(true)
                    .map((_, i) => (
                      <div key={i} className="mb-1">
                        <h3 className="flex flex-col items-start">
                          <span className="">
                            RESTful API for a Social Networking Platform
                          </span>
                          <span className="font-bold text-[#7e7e05]">
                            Project Lead
                          </span>
                        </h3>
                        <ul className="text-gray-600">
                          <li className="ml-5 list-disc">
                            Design endpoints for user management, profile
                            creation, and content sharing.
                          </li>
                          <li className="ml-5 list-disc">
                            Implement authentication and authorization
                            mechanisms to ensure data security and privacy.
                          </li>
                        </ul>
                      </div>
                    ))}
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
                <div className="text-sm">
                  Dynamic and results-driven professional with [X years] of
                  experience in [industry/field], demonstrating a strong track
                  record of [specific achievements or skills]. Skilled in
                  [relevant skills or technologies], with a passion for
                  [specific aspect of the industry]. Proven ability to [mention
                  any notable accomplishments or contributions].
                </div>
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
                      University of Mumbai
                    </span>{" "}
                    {" - "}
                    <span className="">B.Tech in Computer Engineering</span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <p className="">
                      <span className="">January 2021</span>
                      {" - "}
                      <span className="">May 2024</span>
                    </p>
                    <p className="">Vasia, Kaman</p>
                  </div>
                </div>
              </div>
              {/* Skills section  */}
              <div className="">
                <h1 className="mb-1 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
                  Skills
                </h1>
                <ul className="">
                  {[
                    "SQL",
                    "Python",
                    "R",
                    "JavaScript",
                    "Excel",
                    "Data Cleaning & Wrangling",
                    "Data Visualization (e.g., Tableau, Power BI)",
                    "Statistical Analysis",
                  ].map((skill, i) => (
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
                  {[
                    "Google Data Analytics Professional Certificate",
                    "Microsoft Certified: Azure Data Analyst Associate",
                  ].map((skill, i) => (
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

export default DaSlr;
