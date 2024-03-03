import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const BkSlr = () => {
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
            <div className="min-h-[1131px] w-[35%] bg-[#f1f2f2] p-7 text-gray-500">
              {/* header section */}
              <div className="">
                <h1 className="flex flex-col text-3xl text-[#58595b]">
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
                      <span className="text-[#58595b]">linkedin</span>
                    </a>
                  </p>
                </div>
              </div>
              {/* objective section */}
              <div className="mt-5 text-xs">
                Highly skilled and results-oriented Front-End Engineer with X
                years of experience in designing, developing, and implementing
                user-centric web applications. Proven ability to deliver
                high-quality, responsive, and performant websites and
                applications across various platforms. Expertise in HTML, CSS,
                JavaScript frameworks (e.g., React, Angular, Vue.js), and a
                strong understanding of best practices for UI/UX design and
                development.
              </div>
              {/* Skills section  */}
              <div className="mt-5">
                <h1 className="mb-1 text-xl font-normal text-[#58595b]">
                  Key Skills
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
            {/* --------------------- right section ---------------------*/}
            <div className="min-h-[1131px] w-[75%] p-7 text-gray-500">
              {/* professional experience */}
              <div className="">
                <h1 className="mb-2 text-xl font-normal text-[#58595b]">
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
                          <span className="text-base font-normal text-[#58595b]">
                            Banking Associate
                          </span>
                        </h1>
                        {/* Date and place section */}
                        <div className="flex items-center justify-between text-sm italic text-gray-500">
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
                        {/* description section - 1 */}
                        <ul className="ml-10 list-disc">
                          {"Provided exceptional customer service: Assisted clients with a wide range of needs, including account opening, processing transactions, resolving inquiries, and offering personalized financial solutions.---Maintained accurate and secure financial records: Processed deposits, withdrawals, and other transactions with strict adherence to bank policies and procedures. Ensured data integrity and confidentiality at all times.---Cross-sold banking products and services: Identified client needs and proactively recommended appropriate products such as savings accounts, credit cards, and investment options. Achieved consistent sales targets.---Managed account relationships: Built rapport with clients, exceeding expectations by understanding their financial goals and providing ongoing support.---Adhered to all regulatory compliance requirements: Maintained awareness of and ensured adherence to KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations."
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
              {/* education section  */}
              <div className="mt-5">
                <h1 className="mb-2 text-xl font-normal text-[#58595b]">
                  Education
                </h1>
                <div className="">
                  {/* header section */}
                  <h1 className="flex flex-col-reverse text-[15px]">
                    <span className="">University of Mumbai</span>
                    <span className="text-[#58595b]">
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

export default BkSlr;
