import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Cookies from "js-cookie";
import { updateResumeTemplateRoute, fetchData } from "@/utils/DataFunctions";
import { Link } from "react-router-dom";

const SdeSlr = () => {
  const sdeSlrComponentDownloadRef = useRef(null);

  const [resumeData, setResumeData] = useState({});

  const currentResumeId = Cookies.get("currentResumeId");
  console.log(currentResumeId);

  useEffect(() => {
    updateResumeTemplateRoute(currentResumeId, "/templates/sde/slr");
    fetchData(currentResumeId, setResumeData);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => sdeSlrComponentDownloadRef.current,
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
          ref={sdeSlrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white p-8 font-geologica text-black"
        >
          {/* resume top part */}
          <div className="">
            <h1 className="flex items-center justify-center gap-2 pb-1 pt-6 text-center font-timesNewRoman text-4xl font-black">
              <span className="">{resumeData?.personalDetails?.firstName}</span>
              <span className="">{resumeData?.personalDetails?.lastName}</span>
            </h1>
            <p className="flex items-center justify-center gap-20">
              <span className="">{resumeData?.personalDetails?.email}</span>
              <span className="">{resumeData?.personalDetails?.phone}</span>
              <a
                href={resumeData?.socialLink?.link1?.link}
                target="_blank"
                className="text-blue-500"
              >
                {resumeData?.socialLink?.link1?.label}
              </a>
            </p>
          </div>
          {/* resume work section */}
          <div className="my-5">
            <h1 className="mb-2 border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
              Work Experience
            </h1>
            <div className="">
              {/* experience-1 */}
              <div className="">
                {/* header section */}
                <h1 className="font-timesNewRoman text-[18px]">
                  <span className="font-bold">
                    {resumeData?.experience?.experience1?.employer}
                  </span>{" "}
                  {" - "}
                  <span className="">
                    {resumeData?.experience?.experience1?.jobTitle}
                  </span>
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-between text-gray-500">
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
                  </p>
                  <p className="">
                    {resumeData?.experience?.experience1?.place}
                  </p>
                </div>
                {/* description section - 1 */}
                <ul className="ml-12 list-disc">
                  {resumeData?.experience?.experience1?.description
                    .split("---")
                    .map((item, i) => (
                      <li key={i} className="">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
              {/* experience-2 */}
              <div className="mt-2">
                {/* header section */}
                <h1 className="font-timesNewRoman text-[18px]">
                  <span className="font-bold">
                    {resumeData?.experience?.experience2?.employer}
                  </span>{" "}
                  {" - "}
                  <span className="">
                    {resumeData?.experience?.experience2?.jobTitle}
                  </span>
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-between text-gray-500">
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
                  </p>
                  <p className="">
                    {resumeData?.experience?.experience2?.place}
                  </p>
                </div>
                {/* description section - 1 */}
                <ul className="ml-12 list-disc">
                  {resumeData?.experience?.experience2?.description
                    .split("---")
                    .map((item, i) => (
                      <li key={i} className="">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
              {/* experience-3 */}
              <div className="mt-2">
                {/* header section */}
                <h1 className="font-timesNewRoman text-[18px]">
                  <span className="font-bold">
                    {resumeData?.experience?.experience3?.employer}
                  </span>{" "}
                  {" - "}
                  <span className="">
                    {resumeData?.experience?.experience3?.jobTitle}
                  </span>
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-between text-gray-500">
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
                  </p>
                  <p className="">
                    {resumeData?.experience?.experience3?.place}
                  </p>
                </div>
                {/* description section - 1 */}
                <ul className="ml-12 list-disc">
                  {resumeData?.experience?.experience3?.description
                    .split("---")
                    .map((item, i) => (
                      <li key={i} className="">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="mb-5">
            <h1 className="border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
              Education
            </h1>
            <div className="">
              {/* header section */}
              <h1 className="font-timesNewRoman text-[18px]">
                <span className="font-bold">
                  {resumeData?.education?.college}
                </span>{" "}
                {" - "}
                <span className="">{resumeData?.education?.degree}</span>
              </h1>
              {/* Date and place section */}
              <div className="flex items-center justify-between text-gray-500">
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
            <h1 className="border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
              Skills
            </h1>
            <div className="">
              {resumeData?.skills?.split("---")?.map((skill, i) => (
                <span key={i} className="">
                  {skill},{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-5 flex w-[800px] items-center justify-around">
          <button
            onClick={handlePrint}
            className="w-[200px] rounded-lg bg-purple-500 px-3 py-2 text-sm font-bold"
          >
            Download Template
          </button>
          <Link
            to={`/information/${currentResumeId}`}
            className="w-[200px] rounded-lg bg-purple-500 px-3 py-2 text-center text-sm font-bold"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SdeSlr;
