import { userResumeData } from "@/Fetch/InformationFetch";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { updateResumeTemplateRoute, fetchData } from "@/utils/DataFunctions";
import Cookies from "js-cookie";

const BkJlr = () => {
  const bkElrComponentDownloadRef = useRef(null);
  const [resumeData, setResumeData] = useState({});

  const currentResumeId = Cookies.get("currentResumeId");
  console.log(currentResumeId);

  useEffect(() => {
    updateResumeTemplateRoute(currentResumeId, "/templates/bk/jlr");
    fetchData(currentResumeId, setResumeData);
  });

  const handlePrint = useReactToPrint({
    content: () => bkElrComponentDownloadRef.current,
    documentTitle: "SDE-SLR-Resume",
    // pageStyle: "print",
  });

  return (
    <div className="flex flex-col gap-10">
      {/* ------------------ header section ------------------ */}
      <div className="relative flex h-[200px] w-full items-center justify-center bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-black uppercase">Banking</h1>
          <h3 className="rounded-xl bg-purple-500 bg-opacity-80 px-20 py-2 text-xl">
            Entry Level Resume
          </h3>
        </div>
      </div>
      {/* ------------------ template part with button ------------------ */}
      <div className="flex flex-col items-center gap-5">
        <div
          ref={bkElrComponentDownloadRef}
          className="min-h-[1100px] w-full max-w-[800px] bg-white font-geologica text-black"
        >
          {/* header section */}
          <div className="">
            <h1 className="flex h-[120px] items-center justify-center gap-3 bg-[#af416d] text-4xl uppercase text-white">
              <span className="">{resumeData?.personalDetails?.firstName}</span>
              <span className="">{resumeData?.personalDetails?.lastName}</span>
            </h1>
            {/* header bottom container */}
            <div className="flex items-start gap-10 px-5 pt-5">
              {/* career objective */}
              <div className="w-[70%] text-xs leading-6 text-gray-500">
                {resumeData?.professionalSummary}
              </div>
              {/* basic information section */}
              <div className="mt-1 flex w-[30%] flex-col items-start justify-start gap-1 text-xs">
                <p className="flex w-fit items-center justify-center gap-2 text-gray-500">
                  <span className="">{resumeData?.personalDetails?.phone}</span>
                </p>
                <p className="flex w-fit items-center justify-center gap-2 text-gray-500">
                  <span className="">{resumeData?.personalDetails?.email}</span>
                </p>
                <p className="flex w-fit items-center justify-center text-gray-500">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2"
                  >
                    {resumeData?.personalDetails?.website}
                  </a>
                </p>
                <p className="flex w-fit items-center justify-center text-gray-500">
                  <a
                    href={resumeData?.socialLink?.link1?.link}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-[#58595b]">
                      {resumeData?.socialLink?.link1?.label}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* professional experience section */}
          <div className="p-6">
            <h1 className="mb-3 text-center text-base font-semibold uppercase text-[#af416d]">
              Professional Experience
            </h1>
            <div className="mb-3">
              {/* -------------------- experiences - 1 -------------------- */}
              <div className="flex gap-8">
                <div className="w-[30%]">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                    <span className="text-base font-black text-black">
                      {resumeData?.experience?.experience1?.jobTitle}
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <p className="">
                      <span className="">
                        {resumeData.experience.experience1.employer}
                      </span>
                      {", "}
                      <span className="">
                        {resumeData?.experience?.experience1?.place}
                      </span>
                      {" | "}
                      <span className="">
                        {resumeData?.experience?.experience1?.startDate}
                      </span>
                      {" - "}
                      <span className="">
                        {resumeData?.experience?.experience1?.endDate}
                      </span>
                    </p>
                  </div>
                </div>
                {/* description section - 1 */}
                <ul className="ml-10 w-[70%] list-disc text-gray-500">
                  {resumeData?.experience?.experience1?.description
                    .split("---")
                    .map((item, i) => (
                      <li key={i} className="text-xs">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
              {/* -------------------- experiences - 2 -------------------- */}
              <div className="mt-5 flex gap-8">
                <div className="w-[30%]">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                    <span className="text-base font-black text-black">
                      {resumeData?.experience?.experience2?.jobTitle}
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <p className="">
                      <span className="">
                        {resumeData?.experience?.experience2?.employer}
                      </span>
                      {", "}
                      <span className="">
                        {resumeData?.experience?.experience2?.place}
                      </span>
                      {" | "}
                      <span className="">
                        {resumeData?.experience?.experience2?.startDate}
                      </span>
                      {" - "}
                      <span className="">
                        {resumeData?.experience?.experience2?.endDate}
                      </span>
                    </p>
                  </div>
                </div>
                {/* description section - 1 */}
                <ul className="ml-10 w-[70%] list-disc text-gray-500">
                  {resumeData?.experience?.experience2?.description
                    .split("---")
                    .map((item, i) => (
                      <li key={i} className="text-xs">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          {/* education, key skills and certification section */}
          <div className="flex gap-10  px-6">
            {/* education section  */}
            <div className="w-full">
              <h1 className="mb-2 font-semibold uppercase text-[#af416d]">
                Education
              </h1>
              <div className="mb-5 text-xs">
                {/* header section */}
                <h1 className="flex flex-col-reverse text-gray-500">
                  <span className="">{resumeData.education.college}</span>
                  <span className="text-[#58595b]">
                    {resumeData.education.degree}
                  </span>
                </h1>
                {/* Date and place section */}
                <div className="flex flex-col items-start justify-between text-gray-500">
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
              <h1 className="mb-2 font-semibold uppercase text-[#af416d]">
                Key Skills
              </h1>
              <ul className="text-gray-500">
                {resumeData.skills.split("---").map((skill, i) => (
                  <li key={i} className="ml-5 list-disc text-xs text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            {/* Certification section  */}
            <div className="w-full">
              <h1 className="mb-2 font-semibold uppercase text-[#af416d]">
                Certification
              </h1>
              <ul className="">
                {resumeData.certification.split("---").map((skill, i) => (
                  <li key={i} className="ml-5 list-disc text-xs text-gray-500">
                    {skill + " "},
                  </li>
                ))}
              </ul>
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

export default BkJlr;
