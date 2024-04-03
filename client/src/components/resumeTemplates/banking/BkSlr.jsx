import { fetchData, updateResumeTemplateRoute } from "@/utils/DataFunctions";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const BkSlr = () => {
  const bkElrComponentDownloadRef = useRef(null);

  const [resumeData, setResumeData] = useState({});

  const currentResumeId = Cookies.get("currentResumeId");
  console.log(currentResumeId);

  useEffect(() => {
    updateResumeTemplateRoute(currentResumeId, "/templates/bk/jlr");
    fetchData(currentResumeId, setResumeData);
  }, []);

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
          <div className="flex w-full">
            {/* --------------------- left section ---------------------*/}
            <div className="min-h-[1100px] w-[35%] bg-[#f1f2f2] p-7 text-gray-500">
              {/* header section */}
              <div className="">
                <h1 className="flex flex-col text-3xl text-[#58595b]">
                  <span className="">
                    {resumeData?.personalDetails?.firstName}
                  </span>
                  <span className="">
                    {resumeData?.personalDetails?.lastName}
                  </span>
                </h1>
                <div className="mt-4 flex flex-col items-start justify-between">
                  <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="">
                      {" "}
                      {resumeData?.personalDetails?.phone}
                    </span>
                  </p>
                  <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="">
                      {" "}
                      {resumeData?.personalDetails?.email}
                    </span>
                  </p>
                  <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2"
                    >
                      {resumeData?.personalDetails?.website}
                    </a>
                  </p>
                  <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                    <a
                      href={resumeData?.socialLink?.link1?.link}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-[#58595b]">
                        {" "}
                        {resumeData?.socialLink?.link1?.label}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              {/* objective section */}
              <div className="mt-5 text-xs">
                {resumeData?.professionalSummary}
              </div>
              {/* Skills section  */}
              <div className="mt-5">
                <h1 className="mb-1 text-xl font-normal text-[#58595b]">
                  Key Skills
                </h1>
                <ul className="">
                  {resumeData?.skills?.split("---")?.map((skill, i) => (
                    <li
                      key={i}
                      className="ml-5 list-disc text-sm text-gray-600"
                    >
                      {skill},
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* --------------------- right section ---------------------*/}
            <div className="min-h-[1131px] w-[75%] p-7 text-gray-500">
              {/* professional experience */}
              <div className="">
                <h1 className="mb-2 text-xl font-normal text-[#58595b]">
                  Professional Experience
                </h1>
                <div className="mb-3">
                  {/* -------------------- experiences - 1 -------------------- */}
                  <div className="">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="text-base font-normal text-[#58595b]">
                        {resumeData?.experience?.experience1?.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-sm italic text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData?.experience?.experience1?.employer}
                        </span>
                        {", "}
                        <span className="">
                          {resumeData?.experience?.experience1?.place}
                        </span>
                        {" | "}
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
                    <ul className="ml-10 list-disc">
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
                  <div className="mt-5">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="text-base font-normal text-[#58595b]">
                        {resumeData?.experience?.experience2?.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-sm italic text-gray-500">
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
                    <ul className="ml-10 list-disc">
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
              {/* education section  */}
              <div className="mt-5">
                <h1 className="mb-2 text-xl font-normal text-[#58595b]">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse text-[15px]">
                    <span className="">{resumeData?.education?.college}</span>
                    <span className="text-[#58595b]">
                      {resumeData?.education?.degree}
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex flex-col items-start justify-between text-sm text-gray-500">
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

export default BkSlr;
