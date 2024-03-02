import { useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const DaElr = () => {
  const daElrComponentDownloadRef = useRef(null);

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
          className="mt-5 flex h-[1131px] w-full max-w-[800px] items-start justify-between bg-white font-geologica text-black"
        >
          {/* --------------------- left section --------------------- */}
          <div className="flex h-full w-[40%] flex-col">
            {/* resume header section  */}
            <div className="bg-[#4287f5] p-7 text-white">
              <div className="">
                <h1 className="pb-1 pt-6 font-timesNewRoman text-3xl font-black">
                  Harikrishnan Prasannakumar
                </h1>
                <h3 className="font-timesNewRoman text-2xl italic">
                  Data Analyst
                </h3>
              </div>
              <div className="mt-5 flex flex-col items-start text-[15px]">
                <p className="flex w-fit items-center justify-center gap-2">
                  <MdEmail className="text-gray-300" />
                  <span className="">sample@gmail.com</span>
                </p>
                <p className="flex w-fit items-center justify-center gap-2">
                  <FaPhone className="text-gray-300" />
                  <span className="">1234567890</span>
                </p>
                <p className="flex w-fit items-center justify-center">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2"
                  >
                    <CgWebsite className="text-gray-300" />
                    www.sample.com
                  </a>
                </p>
                <p className="flex w-fit items-center justify-center">
                  <a href="" className="flex items-center justify-center gap-2">
                    <FaLinkedin className="text-gray-300" />
                    <span className="underline">Linkedin</span>
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
                      University of Mumbai
                    </span>
                    <span className="">B.Tech in Computer Engineering</span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex flex-col items-start text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                      <SlCalender />
                      <span className="">January 2021</span>
                      {" - "}
                      <span className="">May 2024</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <FaLocationDot />
                      <span className="">Vasia, Kaman</span>
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
                      {[
                        "Introduction to data wrangling and analysis in JavaScript",
                        "Free JavaScript Tutorial - Javascript Array Methods",
                        "Data Visualization with D3.js",
                        "Interactive Data Visualization for the Web",
                        "JavaScript for Data Science",
                      ].map((rlvtCourse, index) => (
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
                  {[
                    "SQL",
                    "Python",
                    "R",
                    "JavaScript",
                    "Excel",
                    "Data Cleaning & Wrangling",
                    "Data Visualization (e.g., Tableau, Power BI)",
                    "Statistical Analysis",
                    "Machine Learning Fundamentals",
                    "Communication",
                    "Critical Thinking & Problem-Solving",
                    "Storytelling",
                    "Data Curiosity & Attention to Detail",
                    "Collaboration & Teamwork",
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
            </div>
          </div>
          {/* --------------------- right section --------------------- */}
          <div className="flex w-[60%] flex-col items-start gap-5 p-7">
            {/* Career Objective section  */}
            <div className="">
              <h1 className="mb-2 font-timesNewRoman text-2xl font-black uppercase">
                Career Objective
              </h1>
              <div className="text-sm">
                Dynamic and results-driven professional with [X years] of
                experience in [industry/field], demonstrating a strong track
                record of [specific achievements or skills]. Skilled in
                [relevant skills or technologies], with a passion for [specific
                aspect of the industry]. Proven ability to [mention any notable
                accomplishments or contributions].
              </div>
            </div>
            {/* Work section */}
            <div className="">
              <h1 className="mb-2 font-timesNewRoman text-2xl font-black uppercase">
                Work Experience
              </h1>
              <div className="">
                {/* experience-1 */}
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                    <span className="-mt-1 font-bold text-[#4287f5]">
                      Coding Adda
                    </span>
                    <span className="text-[22px]">
                      Senior Software Developer
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex w-[300px] items-center justify-between text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                      <SlCalender />
                      <span className="">June 2021</span>
                      {" - "}
                      <span className="">current</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <FaLocationDot />
                      <span className="">India</span>
                    </p>
                  </div>
                  {/* description section - 1 */}
                  <ul className="ml-12 list-disc">
                    {"Develop high-quality software solutions in a fast-paced environment, focusing on scalability, reliability, and performance.---Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet business needs.---Write clean, efficient, and maintainable code using best practices and industry standards.---Conduct code reviews, provide constructive feedback, and mentor junior team members to foster a culture of continuous learning and improvement.---Troubleshoot and debug issues, identifying root causes and implementing timely resolutions to ensure smooth operation of software systems.---Stay up-to-date with emerging technologies, trends, and best practices in software development, and proactively contribute ideas for process improvements and innovation.---Participate in agile ceremonies such as sprint planning, daily stand-ups, and retrospectives to ensure alignment and transparency across teams.---Communicate effectively with stakeholders to gather requirements, provide updates on project progress, and address any concerns or questions."
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
