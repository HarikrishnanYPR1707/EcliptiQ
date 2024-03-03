import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const DaSlr = () => {
  const daSlrComponentDownloadRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => daSlrComponentDownloadRef.current,
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
            Senior Level Resume
          </h3>
        </div>
      </div>
      {/* ------------------ template part with button ------------------ */}
      <div className="flex flex-col items-center gap-5">
        <div
          ref={daSlrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <h1 className="relative flex w-fit gap-3 border-2 border-[#ffaf1e] bg-white px-10 py-3 text-3xl font-medium uppercase">
              <span className="">Harikrishnan</span>
              <span className="text-[#ffaf1e]">Prasannakumar</span>
            </h1>
            <h2 className="-mt-7 flex h-[80px] w-full items-end justify-center bg-[#f2f2f2] pb-2 text-2xl font-extralight">
              Senior Data Analyst
            </h2>
          </div>
          {/* bottom section */}
          <div className="flex gap-5 border border-black p-7">
            {/* ----------- left section -----------*/}
            <div className="w-[40%] border border-red-500"></div>
            {/* ----------- divider ----------- */}
            <div className="min-h-[1131px] w-[3px] bg-[#ffaf1e]" />
            {/* ----------- right section ----------- */}
            <div className="w-[60%] border border-blue-500">
              {/* work section  */}
              <div className="">
                <h1 className="text-xl font-semibold uppercase">
                  Work Experience
                </h1>
                <div className="">
                  {/* experiences */}
                  {Array(3)
                    .fill(true)
                    .map((_, i) => (
                      <div key={i} className="mb-6">
                        {/* header section */}
                        <h1 className="text-lg font-normal">
                          Junior Software Developer
                        </h1>
                        <p className="text-base text-gray-600">Coding Adda</p>
                        {/* Date and place section */}
                        <div className="flex items-center justify-start text-gray-500">
                          <p className="">
                            <span className="">June 2021</span>
                            {" - "}
                            <span className="">current</span>
                            {" / "}
                            <span className="">India</span>
                          </p>
                        </div>
                        {/* description section - 1 */}
                        <ul className="ml-12 list-disc text-sm">
                          {"Develop high-quality software solutions in a fast-paced environment, focusing on scalability, reliability, and performance.---Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet business needs.---Write clean, efficient, and maintainable code using best practices and industry standards.---Conduct code reviews, provide constructive feedback, and mentor junior team members to foster a culture of continuous learning and improvement."
                            .split("---")
                            .map((item, i) => (
                              <li key={i} className="">
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                </div>
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
