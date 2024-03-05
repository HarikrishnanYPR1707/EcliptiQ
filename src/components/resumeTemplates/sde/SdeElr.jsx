import { useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
// import { InformationContext } from "@/Contexts/InformationContext";
import { userResumeData } from "@/Fetch/InformationFetch";

const SdeElr = () => {
  const sdeElrComponentDownloadRef = useRef(null);
  // const { userResumeData, setUserResumeData } = useContext(InformationContext);

  const data = userResumeData();
  const resumeData = JSON.parse(data);
  console.log(resumeData);

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
          className="min-h-[1131px] w-full max-w-[800px] bg-white p-5 font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="">
            <div className="">
              <h1 className="flex gap-2 pb-1 pt-6 text-3xl font-black capitalize">
                <span className="">{resumeData.personalDetails.firstName}</span>
                <span className="">{resumeData.personalDetails.lastName}</span>
              </h1>
              <h3 className="text-2xl font-bold text-[#ff0505]">
                {resumeData.personalDetails.jobTitle}
              </h3>
            </div>
            <div className="flex items-center justify-between">
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
                  www.sample.com
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
            </div>
          </div>
          {/* bottom section */}
          <div className="mt-5 flex items-start justify-between gap-5">
            {/* --------------------- left section --------------------- */}
            <div className="w-[60%]">
              {/* Work section */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-roboto text-2xl font-black uppercase">
                  Work Experience
                </h1>
                <div className="">
                  {/* experience-1 */}
                  <div className="">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                      <span className="-mt-1 font-bold text-[#ff0505]">
                        {resumeData.experience.employer}
                      </span>
                      <span className="text-[22px]">
                        {resumeData.experience.jobTitle}
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <p className="">
                        <span className="">
                          {resumeData.experience.startDate}
                        </span>
                        {" - "}
                        <span className="">
                          {resumeData.experience.endDate}
                        </span>
                      </p>
                      <p className="">India</p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc">
                      {resumeData.experience.description
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
            {/* --------------------- right section --------------------- */}
            <div className="flex w-[40%] flex-col items-start gap-5">
              {/* Career Objective section  */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-roboto text-2xl font-black uppercase">
                  Career Objective
                </h1>
                <div className="text-sm">{resumeData.professionalSummary}</div>
              </div>
              {/* Education Section */}
              <div className="mb-5">
                <h1 className="mb-2 border-b-[3px] border-black font-roboto text-2xl font-black uppercase">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className=" text-[15px]">
                    <span className="font-bold text-yellow-900">
                      {resumeData.education.college}
                    </span>{" "}
                    {" - "}
                    <span className="">{resumeData.education.degree}</span>
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
              {/* Relevant Courses section  */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-roboto text-2xl font-black uppercase">
                  Relevant Courses
                </h1>
                <div className="">
                  {[
                    "JavaScript Fundamentals",
                    "Advanced JavaScript",
                    "Front-End Web Development",
                    "Back-End Web Development",
                    "React.js Essentials",
                    "Node.js Basics",
                    "Express.js Fundamentals",
                    "MongoDB for Beginners",
                    "SQL Fundamentals",
                    "Full-Stack Web Development",
                    "Responsive Web Design",
                    "Web Development Bootcamp",
                  ].map((skill, i) => (
                    <span key={i} className="text-sm">
                      {skill + " "},
                    </span>
                  ))}
                </div>
              </div>
              {/* Skills section  */}
              <div className="">
                <h1 className="mb-2 border-b-[3px] border-black font-roboto text-2xl font-black uppercase">
                  Skills
                </h1>
                <div className="">
                  {resumeData.skills.split("---").map((skill, i) => (
                    <span key={i} className="text-sm capitalize">
                      {skill + " "},
                    </span>
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

export default SdeElr;
