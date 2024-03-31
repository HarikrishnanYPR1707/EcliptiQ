import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import Cookies from "js-cookie";
import { updateResumeTemplateRoute, fetchData } from "@/utils/DataFunctions";

const DaSlr = () => {
  const daSlrComponentDownloadRef = useRef(null);

  const [resumeData, setResumeData] = useState({});

  const currentResumeId = Cookies.get("currentResumeId");
  console.log(currentResumeId);

  useEffect(() => {
    updateResumeTemplateRoute(currentResumeId, "/templates/da/slr");
    fetchData(currentResumeId, setResumeData);
  }, []);

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
              <span className="">{resumeData?.personalDetails?.firstName}</span>
              <span className="text-[#ffaf1e]">
                {resumeData?.personalDetails?.lastName}
              </span>
            </h1>
            <h2 className="-mt-7 flex h-[80px] w-full items-end justify-center bg-[#f2f2f2] pb-2 text-2xl font-extralight">
              {resumeData?.personalDetails?.jobTitle}
            </h2>
          </div>
          {/* bottom section */}
          <div className="flex gap-5 p-7">
            {/* ----------- left section -----------*/}
            <div className="w-[40%]">
              {/* contact section  */}
              <div className="mb-10">
                <h1 className="mb-1 text-end text-xl font-bold uppercase">
                  Contact
                </h1>
                <div className="flex flex-col items-end justify-between">
                  <p className="flex w-fit flex-row-reverse items-center justify-center gap-2 text-sm text-gray-500">
                    <FaPhone className="text-gray-400" />
                    <span className="">
                      {resumeData?.personalDetails?.phone}
                    </span>
                  </p>
                  <p className="flex w-fit flex-row-reverse items-center justify-center gap-2 text-sm text-gray-500">
                    <MdEmail className="text-gray-400" />
                    <span className="">
                      {resumeData?.personalDetails?.email}
                    </span>
                  </p>
                  <p className="flex w-fit flex-row-reverse items-center justify-center text-sm text-gray-500">
                    <a
                      href="#"
                      className="flex flex-row-reverse items-center justify-center gap-2"
                    >
                      <CgWebsite className="text-gray-400" />
                      {resumeData?.personalDetails?.website}
                    </a>
                  </p>
                  <p className="flex w-fit flex-row-reverse items-center justify-center text-sm text-gray-500">
                    <a
                      href={resumeData?.socialLink?.link1?.link}
                      className="flex flex-row-reverse items-center  justify-center gap-2"
                    >
                      <FaLinkedin className="text-gray-400" />
                      <span className="text-blue-500">
                        {resumeData?.socialLink?.link1?.label}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              {/* education section  */}
              <div className="mb-5 text-end">
                <h1 className="mb-2 text-end text-xl font-bold uppercase">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse text-[15px]">
                    <span className="">{resumeData?.education?.college}</span>
                    <span className="">{resumeData?.education?.degree}</span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex flex-col items-end justify-between text-sm text-gray-500">
                    <p className="">
                      <span className="">
                        {resumeData?.education?.startDate.substr(0, 10)}
                      </span>
                      {" - "}
                      <span className="">
                        {resumeData?.education?.endDate.substr(0, 10)}
                      </span>
                    </p>
                    <p className="">{resumeData?.education?.place}</p>
                  </div>
                </div>
              </div>
              {/* skills section  */}
              <div className="">
                <h1 className="text-end text-xl font-bold uppercase">Skills</h1>
                <div className="flex flex-col items-end text-sm text-gray-900">
                  {resumeData?.skills?.split("---")?.map((skill, i) => (
                    <span key={i} className="">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* ----------- divider ----------- */}
            <div className=" w-[3px] bg-[#ffaf1e]" />
            {/* ----------- right section ----------- */}
            <div className="w-[60%]">
              {/* work section  */}
              <div className="">
                <h1 className="text-xl font-bold uppercase">Work Experience</h1>
                <div className="">
                  {/* experiences-1 */}
                  <div className="mb-4">
                    {/* header section */}
                    <h1 className="text-lg font-normal">
                      {resumeData?.experience?.experience1?.jobTitle}
                    </h1>
                    <p className="-my-1 text-base text-gray-600">
                      {resumeData?.experience?.experience1?.employer}
                    </p>
                    {/* Date and place section */}
                    <div className="flex items-center justify-start text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData?.experience?.experience1?.startDate.substr(
                            0,
                            10,
                          )}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData?.experience?.experience1?.endDate.substr(
                            0,
                            10,
                          )}
                        </span>
                        {" / "}
                        <span className="">
                          {resumeData?.experience?.experience1?.place}
                        </span>
                      </p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc text-sm">
                      {resumeData?.experience?.experience1?.description
                        ?.split("---")
                        .map((item, i) => (
                          <li key={i} className="">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* experiences-2 */}
                  <div className="mb-4">
                    {/* header section */}
                    <h1 className="text-lg font-normal">
                      {resumeData?.experience?.experience2?.jobTitle}
                    </h1>
                    <p className="-my-1 text-base text-gray-600">
                      {resumeData?.experience?.experience2?.employer}
                    </p>
                    {/* Date and place section */}
                    <div className="flex items-center justify-start text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData?.experience?.experience2?.startDate.substr(
                            0,
                            10,
                          )}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData?.experience?.experience2?.endDate.substr(
                            0,
                            10,
                          )}
                        </span>
                        {" / "}
                        <span className="">
                          {resumeData?.experience?.experience2?.place}
                        </span>
                      </p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc text-sm">
                      {resumeData?.experience?.experience2?.description
                        ?.split("---")
                        .map((item, i) => (
                          <li key={i} className="">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* experiences-3 */}
                  <div className="">
                    {/* header section */}
                    <h1 className="text-lg font-normal">
                      {resumeData?.experience?.experience3?.jobTitle}
                    </h1>
                    <p className="-my-1 text-base text-gray-600">
                      {resumeData?.experience?.experience3?.employer}
                    </p>
                    {/* Date and place section */}
                    <div className="flex items-center justify-start text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData?.experience?.experience3?.startDate.substr(
                            0,
                            10,
                          )}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData?.experience?.experience3?.endDate.substr(
                            0,
                            10,
                          )}
                        </span>
                        {" / "}
                        <span className="">
                          {resumeData?.experience?.experience3?.place}
                        </span>
                      </p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc text-sm">
                      {resumeData?.experience?.experience3?.description
                        ?.split("---")
                        .map((item, i) => (
                          <li key={i} className="">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
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
