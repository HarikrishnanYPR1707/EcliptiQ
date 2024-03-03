import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const DaSlr = () => {
  const daSlrComponentDownloadRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => daSlrComponentDownloadRef.current,
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
          ref={daSlrComponentDownloadRef}
          className="min-h-[1131px] w-full max-w-[800px] bg-white font-geologica text-black"
        >
          {/* resume header section  */}
          <div className="flex flex-col items-center justify-center border border-black">
            <h1 className="relative flex w-fit gap-3 border border-[#ffaf1e] bg-white px-7 py-4 text-3xl font-black uppercase">
              <span className="">Harikrishnan</span>
              <span className="text-[#ffaf1e]">Prasannakumar</span>
            </h1>
            <h2 className="-mt-7 flex h-[80px] w-full items-end justify-center border border-green-500 bg-[#f2f2f2] pb-4 text-2xl font-light">
              Senior Data Analyst
            </h2>
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

export default DaSlr;
