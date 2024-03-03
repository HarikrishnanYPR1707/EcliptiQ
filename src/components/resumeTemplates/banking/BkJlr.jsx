import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const BkJlr = () => {
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
          {/* header section */}
          <div className="">
            <h1 className="grid h-[120px] place-content-center bg-[#af416d] text-4xl uppercase text-white">
              Harikrishnan Prasannakumar
            </h1>
            {/* header bottom container */}
            <div className="flex items-start gap-10 px-5 pt-5">
              {/* career objective */}
              <div className="w-[70%] text-xs leading-6 text-gray-500">
                Highly skilled and results-oriented Front-End Engineer with X
                years of experience in designing, developing, and implementing
                user-centric web applications. Proven ability to deliver
                high-quality, responsive, and performant websites and
                applications across various platforms. Expertise in HTML, CSS,
                JavaScript frameworks (e.g., React, Angular, Vue.js), and a
                strong understanding of best practices for UI/UX design and
                development.
              </div>
              {/* basic information section */}
              <div className="mt-1 flex w-[30%] flex-col items-start justify-start gap-1 text-xs">
                <p className="flex w-fit items-center justify-center gap-2 text-gray-500">
                  <span className="">1234567890</span>
                </p>
                <p className="flex w-fit items-center justify-center gap-2 text-gray-500">
                  <span className="">sample@gmail.com</span>
                </p>
                <p className="flex w-fit items-center justify-center text-gray-500">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2"
                  >
                    www.sample.com
                  </a>
                </p>
                <p className="flex w-fit items-center justify-center text-gray-500">
                  <a href="" className="flex items-center justify-center gap-2">
                    <span className="text-[#58595b]">linkedin</span>
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
            {Array(2)
              .fill(true)
              .map((item, i) => (
                <div className="mb-3">
                  {/* -------------------- experiences -------------------- */}
                  <div className="flex gap-8">
                    <div className="w-[30%]">
                      {/* header section */}
                      <h1 className="flex flex-col-reverse justify-start font-roboto text-[18px]">
                        <span className="text-base font-black text-black">
                          Banking Associate
                        </span>
                      </h1>
                      {/* Date and place section */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <p className="">
                          <span className="">Bank of America</span>
                          {", "}
                          <span className="">San Francisco, CA</span>
                          {" | "}
                          <span className="">June 2021</span>
                          {" - "}
                          <span className="">current</span>
                        </p>
                      </div>
                    </div>
                    {/* description section - 1 */}
                    <ul className="ml-10 w-[70%] list-disc text-gray-500">
                      {"Provided exceptional customer service: Assisted clients with a wide range of needs, including account opening, processing transactions, resolving inquiries, and offering personalized financial solutions.---Maintained accurate and secure financial records: Processed deposits, withdrawals, and other transactions with strict adherence to bank policies and procedures. Ensured data integrity and confidentiality at all times."
                        .split("---")
                        .map((item, i) => (
                          <li key={i} className="text-xs">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
          {/* education, key skills and certification section */}
          <div className="flex gap-10  px-6">
            {/* education section  */}
            <div className="w-full">
              <h1 className="mb-2 font-semibold uppercase text-[#af416d]">
                Education
              </h1>
              {Array(2)
                .fill(true)
                .map((_, i) => (
                  <div className="mb-5 text-xs">
                    {/* header section */}
                    <h1 className="flex flex-col-reverse text-gray-500">
                      <span className="">University of Mumbai</span>
                      <span className="text-[#58595b]">
                        B.Tech in Computer Engineering
                      </span>
                    </h1>
                    {/* Date and place section */}
                    <div className="flex flex-col items-start justify-between text-gray-500">
                      <p className="">
                        <span className="">January 2021</span>
                        {" - "}
                        <span className="">May 2024</span>
                      </p>
                      <p className="">Vasai, Kaman</p>
                    </div>
                  </div>
                ))}
            </div>
            {/* Skills section  */}
            <div className="w-full">
              <h1 className="mb-2 font-semibold uppercase text-[#af416d]">
                Key Skills
              </h1>
              <ul className="text-gray-500">
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
                {[
                  "Google Data Analytics Professional Certificate",
                  "Microsoft Certified: Azure Data Analyst Associate",
                ].map((skill, i) => (
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
