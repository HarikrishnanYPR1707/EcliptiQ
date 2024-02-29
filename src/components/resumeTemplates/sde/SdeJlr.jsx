import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const SdeJlr = () => {
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
          {/* resume header section  */}
          <div className="flex items-start justify-between">
            <div className="">
              <h1 className="flex flex-col items-center justify-center pb-1 pt-6 text-center text-3xl font-black text-yellow-500">
                Harikrishnan Prasannakumar
              </h1>
              <h3 className="text-2xl font-bold">Junior Software Developer</h3>
            </div>
            <div className="flex flex-col items-end pt-10">
              <p className="w-fit text-sm">
                <span className="font-bold">Phone :</span>
                <span className="">1234567890</span>
              </p>
              <p className="w-fit text-sm">
                <span className="font-bold">Email :</span>
                <span className="">sample@gmail.com</span>
              </p>
              <p className="w-fit text-sm">
                <span className="font-bold">Website :</span>
                <a href="#" className="">
                  www.sample.com
                </a>
              </p>
              <p className="w-fit text-sm">
                <span className="font-bold">Linkedin :</span>
                <a href="" className="">
                  <span>linkedin/</span>
                  <span>authorName</span>
                </a>
              </p>
            </div>
          </div>
          {/* Summary section  */}
          <div className="my-2">
            <h1 className="mb-2 bg-[#edeae1] text-2xl font-black uppercase text-[#414d56]">
              Summary
            </h1>
            <div className="">
              Dynamic and results-driven professional with [X years] of
              experience in [industry/field], demonstrating a strong track
              record of [specific achievements or skills]. Skilled in [relevant
              skills or technologies], with a passion for [specific aspect of
              the industry]. Proven ability to [mention any notable
              accomplishments or contributions].
            </div>
          </div>
          {/* Skills section  */}
          <div className="">
            <h1 className="mb-2 bg-[#edeae1] text-2xl font-black uppercase text-[#414d56]">
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
                <span key={i} className="">
                  {skill + " "},
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
                  Junior Software Developer
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-start text-gray-500">
                  <p className="">
                    <span className="">Coding Adda</span>
                    {", "}
                    <span className="">June 2021</span>
                    {" - "}
                    <span className="">current</span>
                  </p>
                </div>
                {/* description section - 1 */}
                <ul className="ml-12 list-disc">
                  {"Develop high-quality software solutions in a fast-paced environment, focusing on scalability, reliability, and performance.---Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet business needs.---Write clean, efficient, and maintainable code using best practices and industry standards.---Conduct code reviews, provide constructive feedback, and mentor junior team members to foster a culture of continuous learning and improvement.---Troubleshoot and debug issues, identifying root causes and implementing timely resolutions to ensure smooth operation of software systems.---Stay up-to-date with emerging technologies, trends, and best practices in software development, and proactively contribute ideas for process improvements and innovation.---Participate in agile ceremonies such as sprint planning, daily stand-ups, and retrospectives to ensure alignment and transparency across teams."
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
                <span className="font-bold">University of Mumbai</span> {" - "}
                <span className="">B.Tech in Computer Engineering</span>
              </h1>
              {/* Date and place section */}
              <div className="flex items-center justify-between text-gray-500">
                <p className="">
                  <span className="">January 2021</span>
                  {" - "}
                  <span className="">May 2024</span>
                </p>
                <p className="">Vasia, Kaman</p>
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
