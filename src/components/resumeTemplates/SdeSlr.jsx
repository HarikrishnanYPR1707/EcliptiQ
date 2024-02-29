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
    <div className="h-[2000px] border-[3px] border-rose-500">
      <div
        ref={sdeSlrComponentDownloadRef}
        className="aspect-[1/1.4142] w-full max-w-[800px] border-[5px] border-purple-500 bg-white"
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
      </div>
      <button
        onClick={handlePrint}
        className="rounded-lg bg-purple-500 px-3 py-2 text-sm font-bold"
      >
        Download Template
      </button>
    </div>
  );
};

export default SdeSlr;
