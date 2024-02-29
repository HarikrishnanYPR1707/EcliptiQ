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
      <div className="flex flex-col items-center gap-5 border-[3px] border-rose-500">
        <div
          ref={sdeSlrComponentDownloadRef}
          className="font-geologica aspect-[1/1.4142] w-full max-w-[800px] border-[5px] border-purple-500 bg-white text-black"
        >
          {/* {Array(2)
          .fill(true)
          .map(() => (
            <div className="w-full text-wrap bg-red-200 py-2 font-bold uppercase text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus
              quae quas quia harum, deserunt sed quisquam cupiditate praesentium
              quo obcaecati, autem esse? Tempore magni quidem, dicta distinctio
              labore hic!
            </div>
          ))} */}
          <div className="border border-rose-500">
            <h1 className="font-timesNewRoman flex flex-col items-center justify-center pb-1 pt-10 text-center text-3xl font-black">
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
          <div className=""></div>
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
