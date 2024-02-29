import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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
    <section className="h-full border border-rose-500">
      {/* Old Resume Card styles  */}
      <div className="hidden">
        {/* Banking  */}
        <div className="flex flex-col items-center justify-center border border-purple-500 text-white">
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
                  <h2 className="font-black lg:text-2xl">
                    Junior Level Resume
                  </h2>
                </div>
              </div>
            </Link>
            {/* Senior Level  */}
            <Link to="">
              <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
                <img src={BankingSeniorLevel} alt="" />
                <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                  <h2 className="font-black lg:text-2xl">
                    Senior Level Resume
                  </h2>
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
                  <h2 className="font-black lg:text-2xl">
                    Junior Level Resume
                  </h2>
                </div>
              </div>
            </Link>
            {/* Senior Level  */}
            <Link to="">
              <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
                <img src={SDESeniorLevel} alt="" />
                <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                  <h2 className="font-black lg:text-2xl">
                    Senior Level Resume
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Data Analyst Engineer  */}
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
                  <h2 className="font-black lg:text-2xl">
                    Junior Level Resume
                  </h2>
                </div>
              </div>
            </Link>
            {/* Senior Level  */}
            <Link to="">
              <div className="relative w-[200px] overflow-hidden rounded-lg lg:w-[300px]">
                <img src={DASeniorLevel} alt="" />
                <div className="absolute inset-0 grid place-content-center bg-black bg-opacity-70">
                  <h2 className="font-black lg:text-2xl">
                    Senior Level Resume
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------------- NEW DESIGN ---------------------------- */}
      {/* header section */}
      <div className="relative border border-blue-500 bg-banner bg-cover bg-center py-14">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-[650px] flex-col items-center justify-center">
          <h1 className="mb-2 text-4xl font-black lg:text-5xl">
            Resume Template
          </h1>
          <p className="text-balance text-center text-xs text-gray-400 lg:text-base">
            Discover our diverse resume templates tailored for every career
            stage, from sleek modern layouts to classic designs. Choose with
            confidence, whether you're starting your journey or a seasoned pro,
            and elevate your application with professionally crafted resumes.
          </p>
        </div>
      </div>

      {/* ---------------------- TEMPLATE SELECTION SECTION ---------------------- */}
      <div className="mx-auto mt-3 w-full max-w-[1000px] border-2 border-amber-500">
        {/* ---------------- Software Development Engineer Section ---------------- */}
        <div className="">
          {/* header section */}
          <div className="mb-3 border border-red-500">
            <h1 className="text-center text-2xl font-black">
              Software Development Engineer
            </h1>
          </div>
          {/* template section */}
          <div className="flex flex-none flex-wrap justify-center gap-8 border border-blue-500">
            {/* template-1 */}
            <div className="w-[300px] border-[3px] border-rose-500">
              <div className="overflow-hidden rounded-2xl">
                <Link to="">
                  <img src={SDEEntryLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold">
                  Entry level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Presenting a sleek and professional entry-level banking resume
                  template, designed to catch the eye of employers with its
                  modern layout and polished appearance.
                </p>
              </div>
            </div>
            {/* template-2 */}
            <div className="w-[300px] border-[3px] border-rose-500">
              <div className="overflow-hidden rounded-2xl">
                <Link to="">
                  <img src={SDEMidLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold">
                  Entry level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Presenting a sleek and professional entry-level banking resume
                  template, designed to catch the eye of employers with its
                  modern layout and polished appearance.
                </p>
              </div>
            </div>
            {/* template-3 */}
            <div className="w-[300px] border-[3px] border-rose-500">
              <div className="overflow-hidden rounded-2xl">
                <Link to="">
                  <img src={SDEEntryLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold">
                  Entry level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Presenting a sleek and professional entry-level banking resume
                  template, designed to catch the eye of employers with its
                  modern layout and polished appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Data Analyst Section */}
        <div className=""></div>
        {/* Banking Section */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default Template;
