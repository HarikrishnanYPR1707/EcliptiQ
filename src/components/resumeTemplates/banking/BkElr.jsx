import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const BkElr = () => {
  const bkElrComponentDownloadRef = useRef(null);

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
          className="min-h-[1131px] w-full max-w-[800px] bg-white font-geologica text-black"
        >
          <div className="flex w-full">
            {/* --------------------- left section ---------------------*/}
            <div className="min-h-[1131px] w-[35%] bg-[#f5f1ee] p-7 text-gray-500">
              {/* header section */}
              <div className="">
                <h1 className="flex flex-col text-3xl text-[#a71b23]">
                  <span className="">Harikrishnan</span>
                  <span className="">Prasannakumar</span>
                </h1>
                <div className="mt-4 flex flex-col items-start justify-between">
                  <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="">1234567890</span>
                  </p>
                  <p className="flex w-fit items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="">sample@gmail.com</span>
                  </p>
                  <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2"
                    >
                      www.sample.com
                    </a>
                  </p>
                  <p className="flex w-fit items-center justify-center text-sm text-gray-500">
                    <a
                      href=""
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-[#a71b23]">linkedin</span>
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
                    <span className="">University of Mumbai</span>
                    <span className="font-bold text-[#a71b23]">
                      B.Tech in Computer Engineering
                    </span>
                  </h1>
                  {/* Date and place section */}
                  <div className="flex flex-col items-start justify-between text-sm text-gray-500">
                    <p className="">
                      <span className="">January 2021</span>
                      {" - "}
                      <span className="">May 2024</span>
                    </p>
                    <p className="">Vasai, Kaman</p>
                  </div>
                </div>
              </div>
              {/* Skills section  */}
              <div className="mt-5">
                <h1 className="mb-1 text-xl font-semibold uppercase text-[#a71b23]">
                  key Skills
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
              {/* Certification section  */}
              <div className="mt-5">
                <h1 className="mb-1 text-xl font-semibold uppercase text-[#a71b23]">
                  Certifications
                </h1>
                <ul className="">
                  {[
                    "Google Data Analytics Professional Certificate",
                    "Microsoft Certified: Azure Data Analyst Associate",
                  ].map((skill, i) => (
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
              <div className="text-sm">
                Highly skilled and results-oriented Front-End Engineer with X
                years of experience in designing, developing, and implementing
                user-centric web applications. Proven ability to deliver
                high-quality, responsive, and performant websites and
                applications across various platforms. Expertise in HTML, CSS,
                JavaScript frameworks (e.g., React, Angular, Vue.js), and a
                strong understanding of best practices for UI/UX design and
                development.
              </div>
              {/* professional experience */}
              <div className="mt-5">
                <h1 className="mb-2 text-xl font-semibold uppercase text-[#a71b23]">
                  Professional Experience
                </h1>
                {Array(2)
                  .fill(true)
                  .map((item, i) => (
                    <div className="mb-3">
                      {/* -------------------- experiences -------------------- */}
                      <div className="">
                        {/* header section */}
                        <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                          <span className="text-base font-bold text-[#a71b23]">
                            Senior Software Developer
                          </span>
                        </h1>
                        {/* Date and place section */}
                        <div className="flex items-center justify-between text-gray-500">
                          <p className="">
                            <span className="">Coding Adda</span>
                            {", "}
                            <span className="">India</span>
                            {" | "}
                            <span className="">June 2021</span>
                            {" - "}
                            <span className="">current</span>
                          </p>
                        </div>
                        {/* description section - 1 */}
                        <ul className="ml-12 list-disc">
                          {"Develop high-quality software solutions in a fast-paced environment, focusing on scalability, reliability, and performance.---Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet business needs.---Write clean, efficient, and maintainable code using best practices and industry standards.---Conduct code reviews, provide constructive feedback, and mentor junior team members to foster a culture of continuous learning and improvement."
                            .split("---")
                            .map((item, i) => (
                              <li key={i} className="text-sm">
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
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

export default BkElr;
