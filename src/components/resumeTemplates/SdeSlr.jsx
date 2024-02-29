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
          className="font-geologica aspect-[1/1.4142] w-full max-w-[800px] bg-white p-5 text-black"
        >
          {/* resume top part */}
          <div className="border border-rose-500">
            <h1 className="font-timesNewRoman flex flex-col items-center justify-center pb-1 pt-6 text-center text-3xl font-black">
              Harikrishnan Prasannakumar
            </h1>
            <p className="flex items-center justify-center gap-20 border-b border-blue-500">
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
          <div className="">
            <h1 className="font-timesNewRoman border-b-[3px] border-black text-xl font-black">
              Work Experience
            </h1>
            <div className="border border-rose-500">
              {/* experience-1 */}
              <div className="">
                {/* header section */}
                <h1 className="font-timesNewRoman text-[18px]">
                  <span className="font-bold">Company Name</span> {" - "}
                  <span className="">Position in Company</span>
                </h1>
                {/* Date and place section */}
                <div className="flex items-center justify-between text-gray-500">
                  <p className="">
                    <span className="">October 2016</span>
                    {" - "}
                    <span className="">current</span>
                  </p>
                  <p className="">Seattle, WA</p>
                </div>
                {/* description section - 1 */}
                <ul className="ml-12 list-disc">
                  {Array(5)
                    .fill(true)
                    .map((item, i) => (
                      <li key={i} className="">
                        asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                      </li>
                    ))}
                </ul>
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

export default SdeSlr;
