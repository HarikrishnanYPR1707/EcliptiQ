import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const SdeSlr = () => {
  const sdeSlrComponentDownloadRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => sdeSlrComponentDownloadRef.current,
    documentTitle: "SDE-SLR-Resume",
    // pageStyle: "print",
  });

  return (
    <div className="flex flex-col gap-10 border-[3px] border-rose-500">
      {/* ------------------ header section ------------------ */}
      <div className="relative flex h-[200px] w-full items-center justify-center border border-amber-500 bg-banner bg-cover bg-center">
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
          className="aspect-[1/1.4142] w-full max-w-[800px] bg-white p-5 font-geologica text-black"
        >
          {/* resume top part */}
          <div className="">
            <h1 className="flex flex-col items-center justify-center pb-1 pt-6 text-center font-timesNewRoman text-4xl font-black">
              Harikrishnan Prasannakumar
            </h1>
            <p className="flex items-center justify-center gap-20">
              <span className="">sample@gmail.com</span>
              <span className="">7776861386</span>
              <a
                href="https://www.google.com"
                target="_blank"
                className="text-blue-500"
              >
                Linkedin
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
                  <span className="font-bold">Coding Adda</span> {" - "}
                  <span className="">Senior Software Developer</span>
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
          {/* skills section  */}
          <div className="">
            <h1 className="border-b-[3px] border-black font-timesNewRoman text-2xl font-black uppercase">
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
                <span className="">{skill + " "},</span>
              ))}
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

export default SdeSlr;
