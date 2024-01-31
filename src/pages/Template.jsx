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
    <section className="h-full border border-red-500">
      {/* Banking  */}
      <div className="flex flex-col items-center justify-center border border-white text-white">
        <Link
          to="/template/banking"
          className="flex w-full items-center justify-start border border-white text-2xl font-black uppercase"
        >
          <span>Banking</span>
          <MdOutlineKeyboardDoubleArrowRight />
        </Link>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-start">
          {/* Entry Level  */}
          <Link to="/">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Entry Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* junior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Junior Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* Senior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Senior Level Resume</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Banking  */}
      <div className="flex flex-col items-center justify-center border border-white text-white">
        <Link
          to="/template/banking"
          className="flex w-full items-center justify-start border border-white text-2xl font-black uppercase"
        >
          <span>Banking</span>
          <MdOutlineKeyboardDoubleArrowRight />
        </Link>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-start">
          {/* Entry Level  */}
          <Link to="/">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Entry Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* junior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Junior Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* Senior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Senior Level Resume</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Banking  */}
      <div className="flex flex-col items-center justify-center border border-white text-white">
        <Link
          to="/template/banking"
          className="flex w-full items-center justify-start border border-white text-2xl font-black uppercase"
        >
          <span>Banking</span>
          <MdOutlineKeyboardDoubleArrowRight />
        </Link>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-start">
          {/* Entry Level  */}
          <Link to="/">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Entry Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* junior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Junior Level Resume</h2>
              </div>
            </div>
          </Link>
          {/* Senior Level  */}
          <Link to="">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute inset-0 grid place-content-center border border-green-400 bg-black bg-opacity-70">
                <h2 className="font-black">Senior Level Resume</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Template;
