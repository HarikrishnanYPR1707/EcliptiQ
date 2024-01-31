import React from "react";
import { Link } from "react-router-dom";
import BankingEntryLevel from "../assets/Banking/Banking-Entry-Level.jpeg";
import BankingMidLevel from "../assets/Banking/Banking-Mid-Career.jpeg";
import BankingSeniorLevel from "../assets/Banking/Banking-Senior-Level.jpeg";
import DAEntryLevel from "../assets/DataAnalyst/Data-Analyst-Entry-Level.png";
import DAMidLevel from "../assets/DataAnalyst/Data-Analyst-Junior-Level.png";
import DASeniorLevel from "../assets/DataAnalyst/Data-Analyst-Senior-Level.png";
import SDEEntryLevel from "../assets/SDE/SDE-Entry-Level.png";
import SDEMidLevel from "../assets/SDE/SDE-Junior-Level.png";
import SDESeniorLevel from "../assets/SDE/SDE-Senior-Level.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Template = () => {
  return (
    <section className="h-full">
      {/* Banking  */}
      <div className="justify-cente flex flex-col items-center text-white">
        {/* header  */}
        <Link
          to="/template/banking"
          className="justify-star flex w-full items-center text-2xl font-black uppercase lg:text-4xl"
        >
          <span>Banking</span>
          <MdOutlineKeyboardDoubleArrowRight />
          <MdOutlineKeyboardDoubleArrowRight className="-ml-[10px]" />
        </Link>
        {/* bottom section */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-7">
          {/* Entry Level  */}
          <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
            <Link to="/">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Entry Level Resume</h2>
              </div>
            </Link>
          </div>
          {/* junior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
              <img src={BankingMidLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Junior Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* Senior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
              <img src={BankingSeniorLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Senior Level Resume</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Software Development Engineer  */}
      <div className="justify-cente mt-6 flex flex-col items-center text-white">
        {/* header  */}
        <Link
          to="/template/banking"
          className="justify-star flex w-full items-center text-2xl font-black uppercase lg:text-4xl"
        >
          <span>Software Development Engineer</span>
          <MdOutlineKeyboardDoubleArrowRight />
          <MdOutlineKeyboardDoubleArrowRight className="-ml-[10px]" />
        </Link>
        {/* bottom section */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-7">
          {/* Entry Level  */}
          <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
            <Link to="/">
              <img src={SDEEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Entry Level Resume</h2>
              </div>
            </Link>
          </div>
          {/* junior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
              <img src={SDEMidLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Junior Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* Senior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
              <img src={SDESeniorLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Senior Level Resume</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Software Development Engineer  */}
      <div className="justify-cente mt-6 flex flex-col items-center text-white">
        {/* header  */}
        <Link
          to="/template/banking"
          className="justify-star flex w-full items-center text-2xl font-black uppercase lg:text-4xl"
        >
          <span>Data Analyst</span>
          <MdOutlineKeyboardDoubleArrowRight />
          <MdOutlineKeyboardDoubleArrowRight className="-ml-[10px]" />
        </Link>
        {/* bottom section */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-7">
          {/* Entry Level  */}
          <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
            <Link to="/">
              <img src={DAEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Entry Level Resume</h2>
              </div>
            </Link>
          </div>
          {/* junior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
              <img src={DAMidLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Junior Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* Senior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
              <img src={DASeniorLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                <h2 className="font-black lg:text-2xl">Senior Level Resume</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Template;
