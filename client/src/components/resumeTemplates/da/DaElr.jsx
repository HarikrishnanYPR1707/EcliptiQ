import { useEffect, useRef, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import Cookies from "js-cookie";
import { updateResumeTemplateRoute, fetchData } from "@/utils/DataFunctions";

const DaElr = () => {
  const daElrComponentDownloadRef = useRef(null);

  const [resumeData, setResumeData] = useState({});

  const currentResumeId = Cookies.get("currentResumeId");
  console.log(currentResumeId);

  useEffect(() => {
    updateResumeTemplateRoute(currentResumeId, "/templates/da/slr");
    fetchData(currentResumeId, setResumeData);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => daElrComponentDownloadRef.current,
    documentTitle: "SDE-SLR-Resume",
    // pageStyle: "print",
  });
  return (
    <div className="flex flex-col gap-10">
      {/* ------------------ header section ------------------ */}
      <div className="relative flex h-[200px] w-full items-center justify-center bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-black  uppercase">Data Analyst</h1>
          <h3 className="rounded-xl bg-purple-500 bg-opacity-80 px-20 py-2 text-xl">
            Entry Level Resume
          </h3>
        </div>
      </div>
      {/* ------------------ template part with button ------------------ */}
      <div className="flex flex-col items-center gap-5">
        <div
          ref={daElrComponentDownloadRef}
          className="mt-5 flex min-h-[1100px] w-full max-w-[800px] items-start justify-between bg-white font-geologica text-black"
        >
          {/* --------------------- left section --------------------- */}
          <div className="flex h-[2px] min-h-[1272px] w-[40%] flex-col">
            {/* resume header section  */}
            <div className="bg-[#4287f5] p-7 text-white">
              <div className="">
                <h1 className="flex flex-col pb-1 pt-6  font-timesNewRoman text-3xl font-black">
                  <span className="">
                    {resumeData?.personalDetails?.firstName}
                  </span>
                  <span className="">
                    {resumeData?.personalDetails?.lastName}
                  </span>
                </h1>
                <h3 className="font-timesNewRoman text-2xl italic">
                  {resumeData?.personalDetails?.jobTitle}
                </h3>
              </div>
              <div className="mt-5 flex flex-col items-start text-[15px]">
                <p className="flex w-fit items-center justify-center gap-2">
                  <MdEmail className="text-gray-300" />
                  <span className="">{resumeData?.personalDetails?.email}</span>
                </p>
                <p className="flex w-fit items-center justify-center gap-2">
                  <FaPhone className="text-gray-300" />
                  <span className="">{resumeData?.personalDetails?.phone}</span>
                </p>
                <p className="flex w-fit items-center justify-center">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2"
                  >
                    <CgWebsite className="text-gray-300" />
                    {resumeData?.personalDetails?.website}
                  </a>
                </p>
                <p className="flex w-fit items-center justify-center">
                  <a
                    href={resumeData?.socialLink?.link1?.link}
                    className="flex items-center justify-center gap-2"
                  >
                    <FaLinkedin className="text-gray-300" />
                    <span className="underline">
                      {resumeData?.socialLink?.link1?.link}
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="h-full bg-[#f8f8f8] p-7">
              {/* Education Section */}
              <div className="mb-5">
                <h1 className="mb-1 font-timesNewRoman text-2xl font-black uppercase">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse text-base">
                    <span className="text-xl text-[#4287f5]">
                      {resumeData?.education?.college}
                    </span>
                    <span className="">{resumeData?.education?.degree}</span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex flex-col items-start text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                      <SlCalender />
                      <span className="">
                        {resumeData?.education?.startDate.substr(0, 10)}
                      </span>
                      {" - "}
                      <span className="">
                        {resumeData?.education?.endDate.substr(0, 10)}
                      </span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <FaLocationDot />
                      <span className="">{resumeData?.education?.place}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <FaGraduationCap />
                      <span className="">GPA: 8.9</span>
                    </p>
                  </div>
                  {/* relavent section */}
                  <div className="mt-2 flex flex-col items-start text-sm">
                    <h3 className="font-bold">Relevant Courses</h3>
                    <ul>
                      {resumeData?.relevantCourses
                        ?.split("---")
                        .map((rlvtCourse, index) => (
                          <li
                            key={index}
                            className="ml-5 list-disc text-gray-600"
                          >
                            {rlvtCourse}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Skills section  */}
              <div className="">
                <h1 className="mb-1 font-timesNewRoman text-2xl font-black uppercase">
                  Skills
                </h1>
                <ul className="">
                  {resumeData?.skills?.split("---")?.map((skill, i) => (
                    <li
                      key={i}
                      className="ml-5 list-disc text-sm text-gray-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* --------------------- right section --------------------- */}
          <div className="flex w-[60%] flex-col items-start gap-5 p-7">
            {/* Career Objective section  */}
            <div className="">
              <h1 className="mb-1 font-timesNewRoman text-2xl font-black uppercase">
                Career Objective
              </h1>
              <div className="text-sm">{resumeData?.professionalSummary}</div>
            </div>
            {/* Work section */}
            <div className="">
              <h1 className="mb-1 font-timesNewRoman text-2xl font-black uppercase">
                Work Experience
              </h1>
              <div className="">
                {/* experience-1 */}
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                    <span className="-mt-1 font-bold text-[#4287f5]">
                      {resumeData?.experience?.experience1?.employer}
                    </span>
                    <span className="text-[22px]">
                      {resumeData?.experience?.experience1?.jobTitle}
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex w-[300px] items-center justify-between text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                      <SlCalender />
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
                    <p className="flex items-center justify-center gap-2">
                      <FaLocationDot />
                      <span className="">
                        {resumeData?.experience?.experience1?.place}
                      </span>
                    </p>
                  </div>
                  {/* description section - 1 */}
                  <ul className="ml-12 list-disc">
                    {resumeData?.experience?.experience1?.description
                      .split("---")
                      .map((desc, i) => (
                        <li key={i} className="text-sm">
                          {desc}
                        </li>
                      ))}
                  </ul>
                </div>
                {/* experience-2 */}
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                    <span className="-mt-1 font-bold text-[#4287f5]">
                      {resumeData?.experience?.experience2?.employer}
                    </span>
                    <span className="text-[22px]">
                      {resumeData?.experience?.experience2?.jobTitle}
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex w-[300px] items-center justify-between text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                      <SlCalender />
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
                    <p className="flex items-center justify-center gap-2">
                      <FaLocationDot />
                      <span className="">
                        {resumeData?.experience?.experience2?.place}
                      </span>
                    </p>
                  </div>
                  {/* description section - 1 */}
                  <ul className="ml-12 list-disc">
                    {resumeData?.experience?.experience2?.description
                      .split("---")
                      .map((desc, i) => (
                        <li key={i} className="text-sm">
                          {desc}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Projects section  */}
            <div className="">
              <h1 className="mb-1 font-timesNewRoman text-2xl font-black uppercase">
                Projects
              </h1>
              <div className="">
                <div className="mb-1">
                  <h3 className="">{resumeData?.project?.project1?.title}</h3>
                  <ul className="text-gray-600">
                    {resumeData?.project?.project1?.description
                      .split("---")
                      .map((desc, index) => (
                        <li key={index} className="ml-5 list-disc">
                          {desc}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="mb-1">
                  <h3 className="">{resumeData?.project?.project2?.title}</h3>
                  <ul className="text-gray-600">
                    {resumeData?.project?.project2?.description
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

export default DaElr;
