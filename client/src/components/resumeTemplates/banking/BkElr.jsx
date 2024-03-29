import { userResumeData } from "@/Fetch/InformationFetch";
import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { userEmailContext } from "@/Contexts/userDataContext";

const BkElr = () => {
  // using context
  const email = useContext(userEmailContext);

  const bkElrComponentDownloadRef = useRef(null);

  const data = userResumeData();
  const resumeData = JSON.parse(data);
  // console.log(resumeData);

  const fetchData = () => {
    try {
      const response = axios.get(`${BASEURL}/api/getData`, {
        userEmail: userEmailContext,
      });
      console.log(response);
    } catch (error) {
      // console.log(error.toJSON());
      console.log(error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => bkElrComponentDownloadRef.current,
    documentTitle: "SDE-SLR-Resume",
    // pageStyle: "print",
  });

  useEffect(() => {
    fetchData();
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
          className="min-h-[1131px] w-full max-w-[800px] bg-white font-geologica text-black"
        >
          <div className="flex w-full">
            {/* --------------------- left section ---------------------*/}
            <div className="min-h-[1131px] w-[35%] bg-[#f5f1ee] p-7 text-gray-500">
              {/* header section */}
              <div className="">
                <h1 className="flex flex-col text-3xl text-[#a71b23]">
                  <span className="">
                    {resumeData.personalDetails.firstName}
                  </span>
                  <span className="">
                    {resumeData.personalDetails.lastName}
                  </span>
                </h1>
                <div className="mt-4 flex flex-col items-start justify-between">
                  <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="">{resumeData.personalDetails.phone}</span>
                  </p>
                  <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="">{resumeData.personalDetails.email}</span>
                  </p>
                  <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2"
                    >
                      {resumeData.personalDetails.website}
                    </a>
                  </p>
                  <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                    <a
                      href={resumeData.socialLink.link1.link}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-[#a71b23]">
                        {resumeData.socialLink.link1.label}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              {/* education section  */}
              <div className="mt-5">
                <h1 className="mb-2 text-xl font-semibold uppercase text-[#a71b23]">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse text-[15px]">
                    <span className="">{resumeData.education.college}</span>
                    <span className="font-bold text-[#a71b23]">
                      {resumeData.education.degree}
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex flex-col items-start justify-between text-sm text-gray-500">
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
              <div className="mt-5">
                <h1 className="mb-1 text-xl font-semibold uppercase text-[#a71b23]">
                  key Skills
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
              <div className="mt-5">
                <h1 className="mb-1 text-xl font-semibold uppercase text-[#a71b23]">
                  Certifications
                </h1>
                <ul className="">
                  {resumeData.certification.split("---").map((skill, i) => (
                    <li key={i} className="ml-5 list-disc text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* --------------------- right section ---------------------*/}
            <div className="min-h-[1131px] w-[75%] p-7 text-gray-500">
              {/* objective section */}
              <div className="text-sm">{resumeData.professionalSummary}</div>
              {/* professional experience */}
              <div className="mt-5">
                <h1 className="mb-2 text-xl font-semibold uppercase text-[#a71b23]">
                  Professional Experience
                </h1>
                <div className="mb-3">
                  {/* -------------------- experiences - 1 -------------------- */}
                  <div className="">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="text-base font-bold text-[#a71b23]">
                        {resumeData.experience.experience1.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData.experience.experience1.employer}
                        </span>
                        {", "}
                        <span className="">
                          {resumeData.experience.experience1.place}
                        </span>
                        {" | "}
                        <span className="">
                          {resumeData.experience.experience1.startDate}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData.experience.experience1.endDate}
                        </span>
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
                  {/* -------------------- experiences - 2 -------------------- */}
                  <div className="">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="text-base font-bold text-[#a71b23]">
                        {resumeData.experience.experience2.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData.experience.experience2.employer}
                        </span>
                        {", "}
                        <span className="">
                          {resumeData.experience.experience2.place}
                        </span>
                        {" | "}
                        <span className="">
                          {resumeData.experience.experience2.startDate}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData.experience.experience2.endDate}
                        </span>
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

export default BkElr;
