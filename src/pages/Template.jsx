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

const Template = () => {
  return (
    <section className="h-full border border-red-500">
      <div className="border border-white text-white">
        <h1 className=""></h1>
        <div className="">
          {/* Entry Level  */}
          <Link to="/">
            <div className="relative w-[200px] overflow-hidden rounded-lg">
              <img src={BankingEntryLevel} alt="" />
              <div className="absolute bottom-0 h-[30%] w-full bg-black"></div>
            </div>
          </Link>
          {/* junior Level  */}
          <Link to=""></Link>
          {/* Senior Level  */}
          <Link to=""></Link>
        </div>
      </div>
    </section>
  );
};

export default Template;
