import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const SdeElr = () => {
  const sdeSlrComponentDownloadRef = useRef(null);

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
            Entry Level Resume
          </h3>
        </div>
      </div>
      {/* ------------------ template part with button ------------------ */}
      <div className="flex flex-col items-center gap-5">
        <div
          ref={sdeSlrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white p-5 font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="">
            <div className="">
              <h1 className="pb-1 pt-6 text-3xl font-black">
                Harikrishnan Prasannakumar
              </h1>
              <h3 className="text-2xl font-bold text-[#ff0505]">
                Software Engineer
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                <FaPhone className="text-gray-500" />
                <span className="">1234567890</span>
              </p>
              <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                <MdEmail className="text-gray-500" />
                <span className="">sample@gmail.com</span>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a href="#" className="flex items-center justify-center gap-2">
                  <CgWebsite className="text-gray-500" />
                  www.sample.com
                </a>
              </p>
              <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                <a href="" className="flex items-center justify-center gap-2">
                  <FaLinkedin className="" />
                  <span className="text-blue-500">linkedin</span>
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
                <h1 className="font-roboto mb-2 border-b-[3px] border-black text-2xl font-black uppercase">
                  Work Experience
                </h1>
                <div className="">
                  {/* experience-1 */}
                  <div className="">
                    {/* header section */}
                    <h1 className="font-roboto flex flex-col-reverse justify-start text-[18px]">
                      <span className="-mt-1 font-bold text-[#ff0505]">
                        Coding Adda
                      </span>
                      <span className="text-[22px]">
                        Senior Software Developer
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <p className="">
                        <span className="">June 2021</span>
                        {" - "}
                        <span className="">current</span>
                      </p>
                      <p className="">India</p>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-12 list-disc">
                      {"Develop high-quality software solutions in a fast-paced environment, focusing on scalability, reliability, and performance.---Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet business needs.---Write clean, efficient, and maintainable code using best practices and industry standards.---Conduct code reviews, provide constructive feedback, and mentor junior team members to foster a culture of continuous learning and improvement.---Troubleshoot and debug issues, identifying root causes and implementing timely resolutions to ensure smooth operation of software systems.---Stay up-to-date with emerging technologies, trends, and best practices in software development, and proactively contribute ideas for process improvements and innovation.---Participate in agile ceremonies such as sprint planning, daily stand-ups, and retrospectives to ensure alignment and transparency across teams.---Communicate effectively with stakeholders to gather requirements, provide updates on project progress, and address any concerns or questions.---Adhere to software development methodologies, coding standards, and version control practices to maintain code quality and project consistency.---Contribute to the overall success of the engineering team by sharing knowledge, collaborating on projects, and supporting a positive and inclusive work environment."
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
                <h1 className="font-roboto mb-2 border-b-[3px] border-black text-2xl font-black uppercase">
                  Career Objective
                </h1>
                <div className="text-sm">
                  Dynamic and results-driven professional with [X years] of
                  experience in [industry/field], demonstrating a strong track
                  record of [specific achievements or skills]. Skilled in
                  [relevant skills or technologies], with a passion for
                  [specific aspect of the industry]. Proven ability to [mention
                  any notable accomplishments or contributions].
                </div>
              </div>
              {/* Education Section */}
              <div className="mb-5">
                <h1 className="font-roboto mb-2 border-b-[3px] border-black text-2xl font-black uppercase">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className=" text-[15px]">
                    <span className="font-bold text-yellow-900">
                      University of Mumbai
                    </span>{" "}
                    {" - "}
                    <span className="">B.Tech in Computer Engineering</span>
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
                <h1 className="font-roboto mb-2 border-b-[3px] border-black text-2xl font-black uppercase">
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
                <h1 className="font-roboto mb-2 border-b-[3px] border-black text-2xl font-black uppercase">
                  Skills
                </h1>
                <div className="">
                  {[
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "SQL",
                    "Git",
                    "Webpack",
                    "Babel",
                    "RESTful APIs",
                    "Responsive Web Design",
                    "Testing (Jest, Mocha, Chai)",
                    "Debugging",
                    "Agile Methodologies",
                    "Problem Solving",
                    "Critical Thinking",
                    "Communication",
                    "Teamwork",
                  ].map((skill, i) => (
                    <span key={i} className="text-sm">
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
