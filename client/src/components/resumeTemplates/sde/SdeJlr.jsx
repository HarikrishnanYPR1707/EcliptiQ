import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Cookies from "js-cookie";
import { updateResumeTemplateRoute, fetchData } from "@/utils/DataFunctions";

const SdeJlr = () => {
  const sdeJlrComponentDownloadRef = useRef(null);

  const [resumeData, setResumeData] = useState({});

  const currentResumeId = Cookies.get("currentResumeId");
  console.log(currentResumeId);

  useEffect(() => {
    updateResumeTemplateRoute(currentResumeId, "/templates/bk/jlr");
    fetchData(currentResumeId, setResumeData);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => sdeJlrComponentDownloadRef.current,
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
          ref={sdeJlrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white p-8 font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="flex items-start justify-between">
            <div className="">
              <h1 className="flex items-center justify-center gap-2 pb-1 pt-6 text-center text-3xl font-black text-yellow-500">
                <span className="">
                  {resumeData?.personalDetails?.firstName}
                </span>
                <span className="">
                  {resumeData?.personalDetails?.lastName}
                </span>
              </h1>
              <h3 className="text-2xl font-bold">
                {resumeData?.personalDetails?.jobTitle}
              </h3>
            </div>
            <div className="flex flex-col items-end pt-10">
              <p className="w-fit text-sm">
                <span className="font-bold">Phone : </span>
                <span className="">{resumeData?.personalDetails?.phone}</span>
              </p>
              <p className="w-fit text-sm">
                <span className="font-bold">Email : </span>
                <span className="">{resumeData?.personalDetails?.email}</span>
              </p>
              <p className="w-fit text-sm">
                <span className="font-bold">Website : </span>
                <a href="#" className="">
                  {resumeData?.personalDetails?.website}
                </a>
              </p>
              <p className="w-fit text-sm">
                <span className="font-bold">
                  {resumeData?.socialLink?.link1?.label} :{" "}
                </span>
                <a href={resumeData?.socialLink?.link1?.link} className="">
                  <span>{resumeData?.socialLink?.link1?.label}</span>
                </a>
              </p>
            </div>
          </div>
          {/* Summary section  */}
          <div className="my-2">
            <h1 className="mb-2 bg-[#edeae1] text-2xl font-black uppercase text-[#414d56]">
              Summary
            </h1>
            <div className="">{resumeData?.professionalSummary}</div>
          </div>
          {/* Skills section  */}
          <div className="">
            <h1 className="mb-2 bg-[#edeae1] text-2xl font-black uppercase text-[#414d56]">
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
          {/* Work section */}
          <div className="my-5">
            <h1 className="mb-2 bg-[#edeae1] text-2xl font-black uppercase text-[#414d56]">
              Work Experience
            </h1>
            <div className="">
              {/* experience-1 */}
              <div className="">
                {/* header section */}
                <h1 className="text-[18px] font-bold text-yellow-900">
                  {resumeData?.experience?.experience1?.jobTitle}
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-start text-gray-500">
                  <p className="">
                    <span className="">
                      {resumeData?.experience?.experience1?.employer}
                    </span>
                    {", "}
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
              <div className="">
                {/* header section */}
                <h1 className="text-[18px] font-bold text-yellow-900">
                  {resumeData?.experience?.experience2?.jobTitle}
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-start text-gray-500">
                  <p className="">
                    <span className="">
                      {resumeData?.experience?.experience2?.employer}
                    </span>
                    {", "}
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
            </div>
          </div>
          {/* Education Section */}
          <div className="mb-5">
            <h1 className="mb-2 bg-[#edeae1] text-2xl font-black uppercase text-[#414d56]">
              Eduction
            </h1>
            <div className="">
              {/* header section */}
              <h1 className=" text-[18px]">
                <span className="font-bold text-yellow-900">
                  {resumeData?.education?.college}
                </span>{" "}
                {" - "}
                <span className="">{resumeData?.education?.degree}</span>
              </h1>
              {/* Date and place section */}
              <div className="flex items-center justify-between text-gray-500">
                <p className="">
                  <span className="">{resumeData?.education?.startDate}</span>
                  {" - "}
                  <span className="">{resumeData?.education?.endDate}</span>
                </p>
                <p className="">{resumeData?.education?.place}</p>
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

export default SdeJlr;
